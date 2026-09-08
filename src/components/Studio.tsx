import React, { useMemo, useState } from 'react';
import { ArrowLeft, Download, Eye, FileJson, Monitor, Palette, RotateCcw, Save, Smartphone, Sparkles, Tablet, WandSparkles } from 'lucide-react';
import { businessConfig } from '../config/business';
import { industryPresets, websiteTemplates } from '../config/presets';
import { generateBusinessConfig } from '../engine/config-generator';
import { normalizeBusinessConfig } from '../lib/config-runtime';
import type { BusinessConfig, IndustryPresetId, WebsiteTemplateId } from '../types/business';
import { Hero } from './Hero';
import { WebsiteSections } from '../engine/WebsiteSections';
import './studio.css';

const STORAGE_KEY = 'umkm-simple-studio-config';

type PreviewDevice = 'desktop' | 'tablet' | 'mobile';

type StartForm = {
  name: string;
  industry: string;
  tagline: string;
  templateId: WebsiteTemplateId;
  industryPresetId: IndustryPresetId;
};

const initialForm: StartForm = {
  name: businessConfig.name,
  industry: businessConfig.industry,
  tagline: businessConfig.tagline,
  templateId: businessConfig.templateId || 'modern-local-business',
  industryPresetId: businessConfig.industryPresetId || 'professional',
};

function loadConfig(): BusinessConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : businessConfig;
  } catch {
    return businessConfig;
  }
}

function Preview({ business, device }: { business: BusinessConfig; device: PreviewDevice }) {
  const config = normalizeBusinessConfig(business);
  return (
    <div className={`studio-preview-frame studio-preview-${device}`}>
      <div className="studio-preview-page" style={{ background: config.theme.backgroundColor }}>
        <Hero business={config} />
        <WebsiteSections business={config} />
      </div>
    </div>
  );
}

export function Studio() {
  const [business, setBusiness] = useState<BusinessConfig>(loadConfig);
  const [form, setForm] = useState<StartForm>(() => ({
    ...initialForm,
    name: loadConfig().name,
    industry: loadConfig().industry,
    tagline: loadConfig().tagline,
    templateId: loadConfig().templateId || initialForm.templateId,
    industryPresetId: loadConfig().industryPresetId || initialForm.industryPresetId,
  }));
  const [device, setDevice] = useState<PreviewDevice>('desktop');
  const [saved, setSaved] = useState(true);
  const [activeTab, setActiveTab] = useState<'start' | 'content' | 'design'>('start');

  const previewBusiness = useMemo(() => normalizeBusinessConfig(business), [business]);

  const update = (next: BusinessConfig) => {
    setBusiness(next);
    setSaved(false);
  };

  const generate = () => {
    const next = generateBusinessConfig({ ...form }, businessConfig);
    update(next);
    setSaved(false);
    setActiveTab('content');
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(business));
    setSaved(true);
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setBusiness(businessConfig);
    setForm(initialForm);
    setSaved(true);
  };

  const exportConfig = () => {
    const blob = new Blob([JSON.stringify(business, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${business.id || 'website'}-config.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const patch = (partial: Partial<BusinessConfig>) => update({ ...business, ...partial });
  const patchTheme = (partial: Partial<BusinessConfig['theme']>) => patch({ theme: { ...business.theme, ...partial } });
  const patchHero = (partial: NonNullable<BusinessConfig['hero']>) => patch({ hero: { ...(business.hero || {}), ...partial } as BusinessConfig['hero'] });

  return (
    <div className="studio-shell">
      <header className="studio-topbar">
        <div className="studio-brand"><button onClick={() => { window.location.href = '/'; }} title="Kembali"><ArrowLeft size={18} /></button><div><strong>UMKM Studio</strong><span>Simple website builder</span></div></div>
        <div className="studio-actions">
          <span className={saved ? 'studio-save-state' : 'studio-save-state is-dirty'}>{saved ? 'Tersimpan' : 'Ada perubahan'}</span>
          <button className="studio-button studio-button-secondary" onClick={exportConfig}><Download size={16} /> Export</button>
          <button className="studio-button studio-button-primary" onClick={save}><Save size={16} /> Simpan</button>
        </div>
      </header>

      <div className="studio-body">
        <aside className="studio-sidebar">
          <div className="studio-tabs">
            <button className={activeTab === 'start' ? 'active' : ''} onClick={() => setActiveTab('start')}><WandSparkles size={16} /> Mulai</button>
            <button className={activeTab === 'content' ? 'active' : ''} onClick={() => setActiveTab('content')}><FileJson size={16} /> Konten</button>
            <button className={activeTab === 'design' ? 'active' : ''} onClick={() => setActiveTab('design')}><Palette size={16} /> Tampilan</button>
          </div>

          {activeTab === 'start' && <section className="studio-panel-section">
            <div className="studio-heading"><Sparkles size={18} /><div><h2>Buat website</h2><p>Isi beberapa data. Config generator akan menyiapkan struktur awal menggunakan section yang sudah ada.</p></div></div>
            <label>Nama bisnis<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
            <label>Industri<input value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })} /></label>
            <label>Tagline<input value={form.tagline} onChange={e => setForm({ ...form, tagline: e.target.value })} /></label>
            <label>Template<select value={form.templateId} onChange={e => setForm({ ...form, templateId: e.target.value as WebsiteTemplateId })}>{websiteTemplates.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
            <label>Jenis bisnis<select value={form.industryPresetId} onChange={e => setForm({ ...form, industryPresetId: e.target.value as IndustryPresetId })}>{industryPresets.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
            <button className="studio-generate" onClick={generate}><WandSparkles size={17} /> Generate config</button>
            <button className="studio-reset" onClick={reset}><RotateCcw size={14} /> Reset ke demo</button>
          </section>}

          {activeTab === 'content' && <section className="studio-panel-section">
            <div className="studio-heading"><FileJson size={18} /><div><h2>Konten utama</h2><p>Edit bagian yang paling sering diubah. Section lainnya tetap memakai sistem yang sudah ada.</p></div></div>
            <label>Nama bisnis<input value={business.name} onChange={e => patch({ name: e.target.value })} /></label>
            <label>Tagline<input value={business.tagline} onChange={e => patch({ tagline: e.target.value })} /></label>
            <label>Headline hero<textarea value={business.hero?.headline || business.heroHeadline} onChange={e => patchHero({ headline: e.target.value })} /></label>
            <label>Deskripsi hero<textarea value={business.hero?.description || business.heroDescription} onChange={e => patchHero({ description: e.target.value })} /></label>
            <label>Tombol utama<input value={business.hero?.primaryCtaText || business.primaryCtaText} onChange={e => patchHero({ primaryCtaText: e.target.value })} /></label>
            <label>WhatsApp<input value={business.contact.whatsappNumber} onChange={e => patch({ contact: { ...business.contact, whatsappNumber: e.target.value } })} /></label>
            <label>Alamat<textarea value={business.contact.address} onChange={e => patch({ contact: { ...business.contact, address: e.target.value } })} /></label>
          </section>}

          {activeTab === 'design' && <section className="studio-panel-section">
            <div className="studio-heading"><Palette size={18} /><div><h2>Tampilan</h2><p>Untuk sekarang gunakan theme dan hero yang sudah tersedia.</p></div></div>
            <label>Warna utama<input type="color" value={business.theme.primaryColor} onChange={e => patchTheme({ primaryColor: e.target.value })} /></label>
            <label>Warna aksen<input type="color" value={business.theme.accentColor} onChange={e => patchTheme({ accentColor: e.target.value })} /></label>
            <label>Background hero<input type="color" value={business.hero?.backgroundColor || business.theme.backgroundColor} onChange={e => patchHero({ backgroundColor: e.target.value, gradientStyle: 'solid' })} /></label>
            <label>Gambar hero<input value={business.hero?.backgroundImageUrl || business.heroImageUrl} onChange={e => patchHero({ backgroundImageUrl: e.target.value })} placeholder="https://..." /></label>
          </section>}
        </aside>

        <main className="studio-canvas">
          <div className="studio-canvas-toolbar"><div><strong>Preview</strong><span>{previewBusiness.name}</span></div><div className="studio-devices"><button className={device === 'desktop' ? 'active' : ''} onClick={() => setDevice('desktop')}><Monitor size={16} /></button><button className={device === 'tablet' ? 'active' : ''} onClick={() => setDevice('tablet')}><Tablet size={16} /></button><button className={device === 'mobile' ? 'active' : ''} onClick={() => setDevice('mobile')}><Smartphone size={16} /></button><button onClick={() => window.open('/', '_blank')} title="Preview penuh"><Eye size={16} /></button></div></div>
          <Preview business={previewBusiness} device={device} />
        </main>
      </div>
    </div>
  );
}
