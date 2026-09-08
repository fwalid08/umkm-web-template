import React, { useMemo, useState } from 'react';
import { BusinessConfig, HeroConfig, NavigationConfig } from '../types/business';
import { templateList } from '../config/templates';
import { heroLayoutOptions, heroVariantPresets } from '../config/hero';
import {
  Settings2, X, Check, Download, Copy, Store, Palette, LayoutTemplate,
  Menu, Layers3, FileText, Plus, Trash2, MapPin, Sparkles, ExternalLink,
} from 'lucide-react';
import './dev-panel.css';

type Tab = 'start' | 'content' | 'design' | 'sections' | 'settings';
interface DevPanelProps { currentBusiness: BusinessConfig; onSelectBusiness: (business: BusinessConfig) => void; }

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'start', label: 'Mulai', icon: Store },
  { id: 'content', label: 'Konten', icon: FileText },
  { id: 'design', label: 'Tampilan', icon: Palette },
  { id: 'sections', label: 'Bagian', icon: Layers3 },
  { id: 'settings', label: 'Pengaturan', icon: Settings2 },
];

const palettes = [
  ['Ember', '#DC2626', '#F59E0B', '#F8FAFC', '#0F172A'],
  ['Ocean', '#0284C7', '#06B6D4', '#F0F9FF', '#0F172A'],
  ['Emerald', '#059669', '#34D399', '#F0FDF4', '#064E3B'],
  ['Violet', '#7C3AED', '#A78BFA', '#F5F3FF', '#18181B'],
  ['Rose', '#E11D48', '#FB7185', '#FFF1F2', '#1F2937'],
  ['Slate', '#475569', '#94A3B8', '#F8FAFC', '#0F172A'],
] as const;

const sectionLabels: Record<string, string> = {
  stats: 'Statistik', about: 'Tentang', services: 'Layanan', pricing: 'Harga',
  whyChooseUs: 'Keunggulan', gallery: 'Galeri', testimonials: 'Testimoni',
  process: 'Cara Kerja', faq: 'FAQ', location: 'Lokasi', cta: 'CTA',
};

const collectionConfig = {
  services: { label: 'Layanan', key: 'services', fields: ['name', 'description', 'startingPrice', 'priceNote'] },
  pricingPackages: { label: 'Paket Harga', key: 'pricingPackages', fields: ['name', 'tagline', 'price', 'period'] },
  testimonials: { label: 'Testimoni', key: 'testimonials', fields: ['name', 'roleOrVehicle', 'rating', 'comment'] },
  gallery: { label: 'Galeri', key: 'gallery', fields: ['title', 'category', 'imageUrl', 'description'] },
  process: { label: 'Cara Kerja', key: 'process', fields: ['step', 'title', 'description'] },
  faqs: { label: 'FAQ', key: 'faqs', fields: ['question', 'answer'] },
} as const;

type CollectionKey = keyof typeof collectionConfig;

function clone<T>(value: T): T { return JSON.parse(JSON.stringify(value)); }
function updateAt<T>(list: T[], index: number, patch: Partial<T>): T[] {
  return list.map((item, i) => i === index ? { ...item, ...patch } : item);
}
function fieldLabel(key: string) {
  return ({ name: 'Nama', description: 'Deskripsi', startingPrice: 'Harga mulai', priceNote: 'Catatan harga', tagline: 'Tagline', price: 'Harga', period: 'Periode', roleOrVehicle: 'Keterangan', rating: 'Rating', comment: 'Komentar', title: 'Judul', category: 'Kategori', imageUrl: 'URL gambar', step: 'Langkah', question: 'Pertanyaan', answer: 'Jawaban' } as Record<string, string>)[key] || key;
}

function TextField({ label, value, onChange, multiline = false, type = 'text' }: { label: string; value: string | number; onChange: (value: string | number) => void; multiline?: boolean; type?: string }) {
  const props = { value: value ?? '', onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(type === 'number' ? Number(e.target.value) : e.target.value) };
  return <label className="dev-simple-field"><span>{label}</span>{multiline ? <textarea {...props} rows={4} /> : <input {...props} type={type} />}</label>;
}

function Toggle({ label, value, onChange, hint }: { label: string; value: boolean; onChange: (value: boolean) => void; hint?: string }) {
  return <div className="dev-simple-toggle"><div><b>{label}</b>{hint && <small>{hint}</small>}</div><button type="button" aria-pressed={value} onClick={() => onChange(!value)} className={value ? 'is-on' : ''}><span /></button></div>;
}

function CollectionEditor({ business, onChange, collection }: { business: BusinessConfig; onChange: (next: BusinessConfig) => void; collection: CollectionKey }) {
  const config = collectionConfig[collection];
  const list = ((business as any)[config.key] || []) as any[];
  const add = () => {
    const item: Record<string, any> = {};
    config.fields.forEach(field => { item[field] = field === 'rating' ? 5 : field === 'startingPrice' || field === 'price' || field === 'step' ? 0 : ''; });
    if (collection === 'services') Object.assign(item, { id: `service-${Date.now()}`, iconName: 'Sparkles' });
    if (collection === 'pricingPackages') Object.assign(item, { id: `pricing-${Date.now()}`, features: [] });
    if (collection === 'testimonials') Object.assign(item, { id: `testimonial-${Date.now()}`, avatarUrl: '' });
    if (collection === 'gallery') Object.assign(item, { id: `gallery-${Date.now()}` });
    if (collection === 'faqs') Object.assign(item, { id: `faq-${Date.now()}` });
    onChange({ ...business, [config.key]: [...list, item] });
  };
  return <section className="dev-simple-section">
    <div className="dev-simple-section-head"><div><h3>{config.label}</h3><p>Edit bagian yang benar-benar digunakan component.</p></div><button className="dev-simple-button" type="button" onClick={add}><Plus size={15} />Tambah</button></div>
    <div className="dev-simple-list">{list.map((item, index) => <article className="dev-simple-card" key={item.id || index}>
      <div className="dev-simple-card-head"><b>{item.name || item.title || item.question || `Item ${index + 1}`}</b><button className="dev-simple-danger" type="button" onClick={() => onChange({ ...business, [config.key]: list.filter((_, i) => i !== index) })}><Trash2 size={14} /></button></div>
      <div className="dev-simple-grid">{config.fields.map(field => <TextField key={field} label={fieldLabel(field)} value={item[field] ?? ''} type={['price', 'startingPrice', 'rating', 'step'].includes(field) ? 'number' : 'text'} multiline={['description', 'comment', 'answer'].includes(field)} onChange={value => onChange({ ...business, [config.key]: updateAt(list, index, { [field]: value } as any) })} />)}</div>
    </article>)}</div>
  </section>;
}

function ContentEditor({ business, onChange }: { business: BusinessConfig; onChange: (next: BusinessConfig) => void }) {
  const patch = (p: Partial<BusinessConfig>) => onChange({ ...business, ...p });
  return <div className="dev-simple-stack">
    <section className="dev-simple-section"><div className="dev-simple-section-head"><div><h3>Identitas bisnis</h3><p>Isi informasi yang tampil di website.</p></div></div><div className="dev-simple-grid">
      <TextField label="Nama bisnis" value={business.name} onChange={v => patch({ name: String(v) })} />
      <TextField label="Industri" value={business.industry} onChange={v => patch({ industry: String(v) })} />
      <TextField label="Tagline" value={business.tagline} onChange={v => patch({ tagline: String(v) })} />
      <TextField label="Nomor WhatsApp" value={business.contact.whatsappNumber} onChange={v => patch({ contact: { ...business.contact, whatsappNumber: String(v) } })} />
    </div></section>
    <section className="dev-simple-section"><h3>Hero</h3><p>Pesan utama website dan tombol aksi.</p><div className="dev-simple-grid">
      <TextField label="Headline" value={business.hero?.headline || business.heroHeadline} multiline onChange={v => patch({ hero: { ...(business.hero || { layoutVariant: 'split' }), headline: String(v) } as HeroConfig })} />
      <TextField label="Deskripsi" value={business.hero?.description || business.heroDescription} multiline onChange={v => patch({ hero: { ...(business.hero || { layoutVariant: 'split' }), description: String(v) } as HeroConfig })} />
      <TextField label="Tombol utama" value={business.hero?.primaryCtaText || business.primaryCtaText} onChange={v => patch({ hero: { ...(business.hero || { layoutVariant: 'split' }), primaryCtaText: String(v) } as HeroConfig })} />
      <TextField label="Tombol kedua" value={business.hero?.secondaryCtaText || business.secondaryCtaText} onChange={v => patch({ hero: { ...(business.hero || { layoutVariant: 'split' }), secondaryCtaText: String(v) } as HeroConfig })} />
    </div></section>
    <section className="dev-simple-section"><h3>Tentang</h3><div className="dev-simple-grid">
      <TextField label="Paragraf 1" value={business.aboutText.p1} multiline onChange={v => patch({ aboutText: { ...business.aboutText, p1: String(v) } })} />
      <TextField label="Paragraf 2" value={business.aboutText.p2} multiline onChange={v => patch({ aboutText: { ...business.aboutText, p2: String(v) } })} />
    </div></section>
    <CollectionEditor business={business} onChange={onChange} collection="services" />
    <CollectionEditor business={business} onChange={onChange} collection="pricingPackages" />
    <CollectionEditor business={business} onChange={onChange} collection="testimonials" />
    <CollectionEditor business={business} onChange={onChange} collection="gallery" />
    <CollectionEditor business={business} onChange={onChange} collection="process" />
    <CollectionEditor business={business} onChange={onChange} collection="faqs" />
  </div>;
}

function DesignEditor({ business, onChange }: { business: BusinessConfig; onChange: (next: BusinessConfig) => void }) {
  const hero = business.hero || ({ layoutVariant: 'split' } as HeroConfig);
  const patchHero = (p: Partial<HeroConfig>) => onChange({ ...business, hero: { ...hero, ...p } });
  return <div className="dev-simple-stack">
    <section className="dev-simple-section"><h3>Gaya warna</h3><p>Pilih satu preset. Tidak perlu mengatur banyak warna manual.</p><div className="dev-simple-palette">{palettes.map(([name, primary, accent, bg, text]) => <button key={name} type="button" onClick={() => onChange({ ...business, theme: { ...business.theme, primaryColor: primary, primaryHover: primary, accentColor: accent, backgroundColor: bg, secondaryColor: text, surfaceColor: '#FFFFFF', textColor: text, mutedTextColor: '#64748B' } })}><span style={{ background: `linear-gradient(135deg, ${primary} 0 50%, ${accent} 50%)` }} /><b>{name}</b></button>)}</div></section>
    <section className="dev-simple-section"><h3>Layout Hero</h3><div className="dev-simple-choice-grid">{heroLayoutOptions.map(option => <button key={option.id} type="button" className={hero.layoutVariant === option.id ? 'is-active' : ''} onClick={() => patchHero({ ...heroVariantPresets[option.id], layoutVariant: option.id })}><LayoutTemplate size={17} /><b>{option.name}</b><small>{option.description}</small></button>)}</div></section>
    <section className="dev-simple-section"><h3>Hero visual</h3><div className="dev-simple-grid">
      <TextField label="URL gambar Hero" value={hero.backgroundImageUrl || business.heroImageUrl} onChange={v => patchHero({ backgroundImageUrl: String(v), showBackgroundImageOverlay: true })} />
      <TextField label="Warna background" value={hero.backgroundColor || business.theme.backgroundColor} onChange={v => patchHero({ backgroundColor: String(v), gradientStyle: 'solid' })} />
    </div><div className="dev-simple-stack gap-2 mt-3">
      <Toggle label="Tampilkan trust points" value={hero.showTrustPoints !== false} onChange={value => patchHero({ showTrustPoints: value })} hint="Poin kepercayaan di bawah CTA." />
      <Toggle label="Tampilkan rating" value={hero.showRatingPill !== false} onChange={value => patchHero({ showRatingPill: value })} hint="Rating pelanggan pada Hero jika layout mendukung." />
      <Toggle label="Tampilkan gambar background" value={hero.showBackgroundImageOverlay !== false} onChange={value => patchHero({ showBackgroundImageOverlay: value })} />
      <Toggle label="Tampilkan floating stats" value={hero.showFloatingStats === true} onChange={value => patchHero({ showFloatingStats: value })} />
    </div></section>
  </div>;
}

function SectionsEditor({ business, onChange }: { business: BusinessConfig; onChange: (next: BusinessConfig) => void }) {
  const sections = business.sections || {};
  return <section className="dev-simple-section"><div className="dev-simple-section-head"><div><h3>Bagian website</h3><p>Aktifkan hanya bagian yang dibutuhkan. Component yang tersedia tetap menjadi batasan builder.</p></div></div><div className="dev-simple-stack gap-2">{Object.keys(sectionLabels).map(key => <Toggle key={key} label={sectionLabels[key]} value={sections[key as keyof typeof sections] !== false} onChange={value => onChange({ ...business, sections: { ...sections, [key]: value } })} />)}</div></section>;
}

function SettingsEditor({ business, onChange }: { business: BusinessConfig; onChange: (next: BusinessConfig) => void }) {
  const navigation = business.navigation || ({ links: [] } as NavigationConfig);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const patchNav = (p: Partial<NavigationConfig>) => onChange({ ...business, navigation: { ...navigation, ...p } });
  return <div className="dev-simple-stack">
    <section className="dev-simple-section"><h3>Navigasi</h3><div className="dev-simple-grid">
      <TextField label="Nama brand" value={navigation.brandName || business.name} onChange={v => patchNav({ brandName: String(v) })} />
      <TextField label="Teks tombol" value={navigation.ctaButtonText || business.primaryCtaText} onChange={v => patchNav({ ctaButtonText: String(v) })} />
    </div><div className="dev-simple-stack gap-2 mt-3"><Toggle label="Top micro bar" value={navigation.showTopMicroBar !== false} onChange={value => patchNav({ showTopMicroBar: value })} /><Toggle label="Bottom navigation mobile" value={navigation.showMobileBottomNav !== false} onChange={value => patchNav({ showMobileBottomNav: value })} /></div></section>
    <section className="dev-simple-section"><div className="dev-simple-section-head"><div><h3>Menu</h3><p>Pilih menu yang muncul di desktop dan mobile.</p></div><button className="dev-simple-button" type="button" onClick={() => patchNav({ links: [...navigation.links, { name: 'Menu Baru', href: '#', showInTopNav: true, showInBottomNav: false }] })}><Plus size={15} />Tambah</button></div><div className="dev-simple-list">{navigation.links.map((link, index) => <article className="dev-simple-card" key={`${link.name}-${index}`}><div className="dev-simple-card-head"><b>{link.name}</b><button className="dev-simple-danger" type="button" onClick={() => patchNav({ links: navigation.links.filter((_, i) => i !== index) })}><Trash2 size={14} /></button></div>{menuIndex === index ? <div className="dev-simple-grid"><TextField label="Nama" value={link.name} onChange={v => patchNav({ links: updateAt(navigation.links, index, { name: String(v) }) })} /><TextField label="Link" value={link.href} onChange={v => patchNav({ links: updateAt(navigation.links, index, { href: String(v) }) })} /><Toggle label="Desktop" value={link.showInTopNav !== false} onChange={v => patchNav({ links: updateAt(navigation.links, index, { showInTopNav: v }) })} /><Toggle label="Mobile" value={link.showInBottomNav === true} onChange={v => patchNav({ links: updateAt(navigation.links, index, { showInBottomNav: v }) })} /></div> : <button type="button" className="dev-simple-edit" onClick={() => setMenuIndex(index)}>Edit menu <ExternalLink size={13} /></button>}</article>)}</div></section>
    <section className="dev-simple-section"><h3>Kontak & Lokasi</h3><div className="dev-simple-grid">
      <TextField label="Telepon" value={business.contact.phone} onChange={v => onChange({ ...business, contact: { ...business.contact, phone: String(v) } })} />
      <TextField label="Email" value={business.contact.email} onChange={v => onChange({ ...business, contact: { ...business.contact, email: String(v) } })} />
      <TextField label="Alamat" value={business.contact.address} multiline onChange={v => onChange({ ...business, contact: { ...business.contact, address: String(v) } })} />
      <TextField label="Google Maps URL" value={business.contact.googleMapsUrl} onChange={v => onChange({ ...business, contact: { ...business.contact, googleMapsUrl: String(v) } })} />
    </div></section>
    <section className="dev-simple-section"><h3>SEO dasar</h3><div className="dev-simple-grid"><TextField label="Judul halaman" value={business.seo.title} onChange={v => onChange({ ...business, seo: { ...business.seo, title: String(v) } })} /><TextField label="Deskripsi" value={business.seo.description} multiline onChange={v => onChange({ ...business, seo: { ...business.seo, description: String(v) } })} /></div></section>
  </div>;
}

export const DevPanel: React.FC<DevPanelProps> = ({ currentBusiness, onSelectBusiness }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>('start');
  const [message, setMessage] = useState('');
  const templates = useMemo(() => templateList, []);
  const flash = (text: string) => { setMessage(text); window.setTimeout(() => setMessage(''), 1800); };
  const selectTemplate = (id: string) => {
    const preset = templates.find(item => item.id === id);
    if (!preset) return;
    const next = clone(preset.template);
    next.hero = { ...(next.hero || {}), ...heroVariantPresets[preset.heroVariant], layoutVariant: preset.heroVariant, headline: next.hero?.headline || next.heroHeadline, description: next.hero?.description || next.heroDescription, primaryCtaText: next.hero?.primaryCtaText || next.primaryCtaText, secondaryCtaText: next.hero?.secondaryCtaText || next.secondaryCtaText };
    onSelectBusiness(next);
    flash(`${preset.name} dipilih`);
  };
  const exportConfig = () => {
    const source = `import { BusinessConfig } from '../types/business';\n\nexport const businessConfig: BusinessConfig = ${JSON.stringify(currentBusiness, null, 2)};\n\nexport default businessConfig;\n`;
    const url = URL.createObjectURL(new Blob([source], { type: 'text/typescript' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = `${currentBusiness.id}.config.ts`; anchor.click(); URL.revokeObjectURL(url); flash('Config berhasil dibuat');
  };
  return <>
    <button type="button" onClick={() => setOpen(true)} className="fixed right-4 top-4 z-[100] flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-xl"><Settings2 size={15} />Edit Website</button>
    {open && <div className="dev-panel-overlay">
      <button aria-label="Tutup" onClick={() => setOpen(false)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" />
      <aside className="dev-simple-shell">
        <header className="dev-simple-header"><div><div className="flex items-center gap-2 font-black"><Sparkles size={16} />UMKM Website Builder</div><p>Edit config, lihat preview, lalu export.</p></div><button type="button" onClick={() => setOpen(false)}><X size={18} /></button></header>
        <div className="dev-simple-body">
          <nav className="dev-simple-nav">{tabs.map(item => <button key={item.id} type="button" onClick={() => setTab(item.id)} className={tab === item.id ? 'is-active' : ''}><item.icon size={17} /><span>{item.label}</span></button>)}</nav>
          <main className="dev-simple-main">
            {tab === 'start' && <div className="dev-simple-stack"><section className="dev-simple-hero"><span>1. Pilih preset</span><h2>Mulai dari bisnis yang paling mirip.</h2><p>Preset hanya mengisi config. Website tetap memakai component yang sudah ditentukan.</p></section><div className="dev-simple-template-grid">{templates.map(template => <button type="button" key={template.id} className={currentBusiness.id === template.id ? 'is-active' : ''} onClick={() => selectTemplate(template.id)}><div className="dev-simple-template-image"><img src={template.template.heroImageUrl} alt="" /></div><div><div className="flex items-center justify-between"><b>{template.name}</b>{currentBusiness.id === template.id && <Check size={15} />}</div><small>{template.category}</small><p>{template.description}</p></div></button>)}</div></section></div>}
            {tab === 'content' && <ContentEditor business={currentBusiness} onChange={onSelectBusiness} />}
            {tab === 'design' && <DesignEditor business={currentBusiness} onChange={onSelectBusiness} />}
            {tab === 'sections' && <SectionsEditor business={currentBusiness} onChange={onSelectBusiness} />}
            {tab === 'settings' && <SettingsEditor business={currentBusiness} onChange={onSelectBusiness} />}
          </main>
        </div>
        <footer className="dev-simple-footer"><button type="button" className="dev-simple-primary" onClick={exportConfig}><Download size={15} />Export config</button><button type="button" className="dev-simple-secondary" onClick={() => { navigator.clipboard.writeText(JSON.stringify(currentBusiness, null, 2)); flash('JSON disalin'); }}><Copy size={15} />Copy JSON</button>{message && <span>{message}</span>}</footer>
      </aside>
    </div>}
  </>;
};
