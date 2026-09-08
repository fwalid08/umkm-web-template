import React, { useEffect, useMemo, useState } from 'react';
import { Download, Eye, FileJson, Monitor, Save, Smartphone, Sparkles, Tablet, WandSparkles, RotateCcw } from 'lucide-react';
import { businessConfig as initialBusiness } from '../config/business';
import { industryPresets, websiteTemplates } from '../config/presets';
import { generateBusinessConfig } from '../engine/config-generator';
import { validateBusinessConfig } from '../engine/config-validation';
import { normalizeBusinessConfig } from '../lib/config-runtime';
import { normalizeBusinessInput } from '../engine/config-schema';
import { getFontById } from '../config/fonts';
import type { BusinessConfig, IndustryPresetId, WebsiteTemplateId } from '../types/business';
import { Hero } from './Hero';
import { WebsiteSections } from '../engine/WebsiteSections';
import './studio.css';

const STORAGE_KEY = 'umkm_simple_studio_config_v2';
type Device = 'desktop' | 'tablet' | 'mobile';
const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

function readSaved(): BusinessConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : clone(initialBusiness);
  } catch {
    return clone(initialBusiness);
  }
}

const templateOptions = Object.values(websiteTemplates);
const industryOptions = Object.values(industryPresets);

export function WebsiteStudio() {
  const [business, setBusiness] = useState<BusinessConfig>(() => readSaved());
  const [device, setDevice] = useState<Device>('desktop');
  const [saved, setSaved] = useState(true);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState(() => ({
    name: business.name,
    industry: business.industry,
    tagline: business.tagline,
    templateId: (business.templateId || 'modern-local-business') as WebsiteTemplateId,
    industryPresetId: (business.industryPresetId || 'professional') as IndustryPresetId,
  }));
  const preview = useMemo(() => normalizeBusinessConfig(business), [business]);
  const validation = useMemo(() => validateBusinessConfig(preview), [preview]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', preview.theme.primaryColor);
    root.style.setProperty('--color-primary-hover', preview.theme.primaryHover);
    root.style.setProperty('--color-secondary', preview.theme.secondaryColor);
    root.style.setProperty('--color-accent', preview.theme.accentColor);
    root.style.setProperty('--color-background', preview.theme.backgroundColor);
    root.style.setProperty('--color-surface', preview.theme.surfaceColor);
    root.style.setProperty('--color-text', preview.theme.textColor);
    root.style.setProperty('--color-text-muted', preview.theme.mutedTextColor);
    root.style.setProperty('--border-radius', preview.theme.borderRadius);
    root.style.setProperty('--font-family', preview.theme.fontFamily || getFontById(preview.theme.fontOptionId).family);
    root.style.setProperty('--hero-base-color', preview.hero?.backgroundColor || preview.theme.backgroundColor);
    document.title = `Studio · ${preview.name}`;
  }, [preview]);

  const update = (next: BusinessConfig) => {
    setBusiness(clone(next));
    setSaved(false);
  };

  const notify = (text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(''), 2200);
  };

  // Apply every generator field directly to the current config so the canvas
  // is a true live preview instead of waiting for the submit button.
  const updateForm = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    const nextForm = { ...form, [key]: value };
    setForm(nextForm);

    const nextInput = normalizeBusinessInput(nextForm);
    const nextBusiness = generateBusinessConfig(nextInput, business);
    update(nextBusiness);
  };

  const generate = () => {
    const next = generateBusinessConfig(normalizeBusinessInput(form), business);
    update(next);
    notify('Website berhasil diperbarui.');
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(business));
    setSaved(true);
    notify('Perubahan tersimpan di browser.');
  };

  const exportConfig = () => {
    const blob = new Blob([JSON.stringify(business, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${business.id || 'website'}-config.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    const next = clone(initialBusiness);
    setBusiness(next);
    setForm({
      name: next.name,
      industry: next.industry,
      tagline: next.tagline,
      templateId: next.templateId || 'modern-local-business',
      industryPresetId: next.industryPresetId || 'professional',
    });
    setSaved(true);
    notify('Kembali ke website demo.');
  };

  return (
    <div className="studio-shell">
      <header className="studio-topbar">
        <div className="studio-brand">
          <div className="studio-brand-mark"><WandSparkles size={18}/></div>
          <div><strong>UMKM Studio</strong><span>Website builder sederhana</span></div>
        </div>
        <div className="studio-actions">
          <span className={`studio-save-state ${saved ? '' : 'is-dirty'}`}>{saved ? 'Tersimpan' : 'Perubahan belum disimpan'}</span>
          <button className="studio-button studio-button-secondary" onClick={exportConfig}><Download size={15}/> Export</button>
          <button className="studio-button studio-button-primary" onClick={save}><Save size={15}/> Simpan</button>
        </div>
      </header>

      <div className="studio-body">
        <aside className="studio-sidebar">
          <section className="studio-panel-section studio-generator">
            <div className="studio-heading">
              <div className="studio-heading-icon"><Sparkles size={17}/></div>
              <div><h2>Buat website</h2><p>Ubah informasi dasar dan lihat hasilnya langsung di preview.</p></div>
            </div>

            <div className="studio-form-group">
              <label>Nama bisnis<input value={form.name} placeholder="Contoh: Bengkel Maju Jaya" onChange={e => updateForm('name', e.target.value)}/></label>
              <label>Industri<input value={form.industry} placeholder="Contoh: Automotive" onChange={e => updateForm('industry', e.target.value)}/></label>
              <label>Tagline<input value={form.tagline} placeholder="Tagline bisnis Anda" onChange={e => updateForm('tagline', e.target.value)}/></label>
            </div>

            <div className="studio-select-grid">
              <label>Template<select value={form.templateId} onChange={e => updateForm('templateId', e.target.value as WebsiteTemplateId)}>{templateOptions.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
              <label>Preset<select value={form.industryPresetId} onChange={e => updateForm('industryPresetId', e.target.value as IndustryPresetId)}>{industryOptions.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
            </div>

            <button className="studio-generate" onClick={generate}><WandSparkles size={16}/> Terapkan konfigurasi</button>
            <button className="studio-reset" onClick={reset}><RotateCcw size={14}/> Mulai dari demo</button>
          </section>

          <section className="studio-panel-section studio-current">
            <div className="studio-section-label"><FileJson size={14}/> Config aktif</div>
            <div className="studio-current-name">{business.name}</div>
            <div className="studio-current-meta">{business.industry} · {business.templateId || 'default'}</div>
            {!validation.valid && <div className="studio-warning">Ada {validation.issues.length} konfigurasi yang perlu diperiksa.</div>}
          </section>

          <div className="studio-tip"><Sparkles size={14}/><span><b>Live preview:</b> setiap perubahan pada form langsung diterapkan ke website di sebelah kanan.</span></div>
        </aside>

        <main className="studio-canvas">
          <div className="studio-canvas-toolbar">
            <div><strong><Eye size={15}/> Live Preview</strong><span>{business.name}</span></div>
            <div className="studio-devices">
              <button aria-label="Desktop" title="Desktop" className={device === 'desktop' ? 'active' : ''} onClick={() => setDevice('desktop')}><Monitor size={15}/></button>
              <button aria-label="Tablet" title="Tablet" className={device === 'tablet' ? 'active' : ''} onClick={() => setDevice('tablet')}><Tablet size={15}/></button>
              <button aria-label="Mobile" title="Mobile" className={device === 'mobile' ? 'active' : ''} onClick={() => setDevice('mobile')}><Smartphone size={15}/></button>
            </div>
          </div>
          <div className={`studio-preview-frame studio-preview-${device}`}>
            <div className="studio-preview-page"><Hero business={preview}/><WebsiteSections business={preview}/></div>
          </div>
        </main>
      </div>

      {message && <div className="studio-toast">{message}</div>}
    </div>
  );
}
