import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Download, Eye, FileJson, Monitor, Palette, Save, Smartphone, Sparkles, Tablet, WandSparkles } from 'lucide-react';
import { businessConfig as initialBusiness } from '../config/business';
import { industryPresets, websiteTemplates } from '../config/presets';
import { generateBusinessConfig } from '../engine/config-generator';
import { validateBusinessConfig } from '../engine/config-validation';
import { normalizeBusinessConfig } from '../lib/config-runtime';
import { getFontById } from '../config/fonts';
import type { BusinessConfig, IndustryPresetId, WebsiteTemplateId } from '../types/business';
import { DevPanel } from './DevPanel';
import { Hero } from './Hero';
import { WebsiteSections } from '../engine/WebsiteSections';
import './studio.css';

const STORAGE_KEY = 'umkm_simple_studio_config_v2';
type Device = 'desktop' | 'tablet' | 'mobile';
type Tab = 'generate' | 'preview';
const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

function readSaved(): BusinessConfig {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : clone(initialBusiness); } catch { return clone(initialBusiness); }
}

export function WebsiteStudio({ onClose }: { onClose?: () => void }) {
  const [business, setBusiness] = useState<BusinessConfig>(() => readSaved());
  const [tab, setTab] = useState<Tab>('generate');
  const [device, setDevice] = useState<Device>('desktop');
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(true);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState(() => ({ name: business.name, industry: business.industry, tagline: business.tagline, templateId: (business.templateId || 'modern-local-business') as WebsiteTemplateId, industryPresetId: (business.industryPresetId || 'professional') as IndustryPresetId }));
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
    document.title = preview.seo?.title || `${preview.name} - ${preview.tagline}`;
  }, [preview]);

  const update = (next: BusinessConfig) => { setBusiness(clone(next)); setSaved(false); };
  const notify = (text: string) => { setMessage(text); window.setTimeout(() => setMessage(''), 2200); };
  const generate = () => { update(generateBusinessConfig(form, initialBusiness)); setTab('preview'); notify('Website config berhasil dibuat.'); };
  const save = () => { localStorage.setItem(STORAGE_KEY, JSON.stringify(business)); setSaved(true); notify('Config tersimpan di browser.'); };
  const exportConfig = () => { const blob = new Blob([JSON.stringify(business, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `${business.id || 'website'}-config.json`; link.click(); URL.revokeObjectURL(url); };
  const reset = () => { localStorage.removeItem(STORAGE_KEY); const next = clone(initialBusiness); setBusiness(next); setForm({ name: next.name, industry: next.industry, tagline: next.tagline, templateId: next.templateId || 'modern-local-business', industryPresetId: next.industryPresetId || 'professional' }); setSaved(true); notify('Kembali ke config demo.'); };

  return <div className="studio-shell">
    <header className="studio-topbar"><div className="studio-brand"><button onClick={() => onClose ? onClose() : (window.location.href = '/')} aria-label="Kembali"><ArrowLeft size={17}/></button><div><strong>UMKM Studio</strong><span>Simple website builder</span></div></div><div className="studio-actions"><span className={`studio-save-state ${saved ? '' : 'is-dirty'}`}>{saved ? 'Tersimpan' : 'Belum disimpan'}</span><button className="studio-button studio-button-secondary" onClick={exportConfig}><Download size={15}/> Export</button><button className="studio-button studio-button-primary" onClick={save}><Save size={15}/> Simpan</button></div></header>
    <div className="studio-body">
      <aside className="studio-sidebar">
        <div className="studio-tabs"><button className={tab === 'generate' ? 'active' : ''} onClick={() => setTab('generate')}><WandSparkles size={15}/> Buat</button><button className={tab === 'preview' ? 'active' : ''} onClick={() => setTab('preview')}><Eye size={15}/> Preview</button></div>
        {tab === 'generate' && <section className="studio-panel-section"><div className="studio-heading"><Sparkles size={18}/><div><h2>Buat website baru</h2><p>Isi data dasar. Generator memakai template dan preset yang sudah ada.</p></div></div><label>Nama bisnis<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/></label><label>Industri<input value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })}/></label><label>Tagline<input value={form.tagline} onChange={e => setForm({ ...form, tagline: e.target.value })}/></label><label>Template<select value={form.templateId} onChange={e => setForm({ ...form, templateId: e.target.value as WebsiteTemplateId })}>{websiteTemplates.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label><label>Preset bisnis<select value={form.industryPresetId} onChange={e => setForm({ ...form, industryPresetId: e.target.value as IndustryPresetId })}>{industryPresets.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label><button className="studio-generate" onClick={generate}><WandSparkles size={16}/> Generate website</button><button className="studio-reset" onClick={reset}>Reset ke demo</button></section>}
        {tab === 'preview' && <section className="studio-panel-section"><div className="studio-heading"><FileJson size={18}/><div><h2>{business.name}</h2><p>Website memakai Hero dan section existing, bukan renderer baru.</p></div></div><div className="studio-summary"><div><span>Template</span><b>{business.templateId || 'default'}</b></div><div><span>Preset</span><b>{business.industryPresetId || 'default'}</b></div><div><span>Section</span><b>{Object.values(business.sections || {}).filter(Boolean).length || 'default'}</b></div></div><button className="studio-edit" onClick={() => setEditing(true)}><Palette size={16}/> Edit website</button><button className="studio-export-mobile" onClick={exportConfig}><Download size={15}/> Export config JSON</button>{!validation.valid && <div className="studio-warning">Ada {validation.issues.length} konfigurasi yang perlu diperiksa.</div>}</section>}
        <div className="studio-tip"><Sparkles size={14}/><span><b>Sederhana:</b> satu BusinessConfig adalah sumber data website. Studio hanya membantu membuat, preview, edit, simpan, dan export.</span></div>
      </aside>
      <main className="studio-canvas"><div className="studio-canvas-toolbar"><div><strong>Live Preview</strong><span>{business.name}</span></div><div className="studio-devices"><button className={device === 'desktop' ? 'active' : ''} onClick={() => setDevice('desktop')}><Monitor size={15}/></button><button className={device === 'tablet' ? 'active' : ''} onClick={() => setDevice('tablet')}><Tablet size={15}/></button><button className={device === 'mobile' ? 'active' : ''} onClick={() => setDevice('mobile')}><Smartphone size={15}/></button></div></div><div className={`studio-preview-frame studio-preview-${device}`}><div className="studio-preview-page"><Hero business={preview}/><WebsiteSections business={preview}/></div></div></main>
    </div>
    {editing && <DevPanel currentBusiness={business} onSelectBusiness={update}/>} {message && <div className="studio-toast">{message}</div>}
  </div>;
}
