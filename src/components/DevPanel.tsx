import React, { useMemo, useState } from 'react';
import { BusinessConfig } from '../types/business';
import { templateList } from '../config/templates';
import { fontOptions } from '../config/fonts';
import { DynamicIcon } from '../lib/icons';
import {
  Settings2,
  X,
  Check,
  Download,
  Copy,
  Sparkles,
  Palette,
  Type,
  FileText,
  Menu,
  Search,
  BriefcaseBusiness,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  HelpCircle,
  LayoutTemplate,
  ChevronRight,
  Plus,
  Trash2,
  RotateCcw,
} from 'lucide-react';

interface DevPanelProps {
  currentBusiness: BusinessConfig;
  onSelectBusiness: (business: BusinessConfig) => void;
}

type ConfigTabId =
  | 'business'
  | 'theme'
  | 'navigation'
  | 'hero'
  | 'seo'
  | 'services'
  | 'testimonials'
  | 'gallery'
  | 'faq'
  | 'location'
  | 'cta'
  | 'footer';

type AnyRecord = Record<string, any>;

const tabGroups: Array<{
  title: string;
  items: Array<{ id: ConfigTabId; label: string; icon: React.ElementType }>;
}> = [
  {
    title: 'Website & Brand',
    items: [
      { id: 'business', label: 'Business & Content', icon: BriefcaseBusiness },
      { id: 'theme', label: 'Theme & Style', icon: Palette },
      { id: 'navigation', label: 'Navigation', icon: Menu },
      { id: 'hero', label: 'Hero', icon: LayoutTemplate },
      { id: 'seo', label: 'SEO', icon: Search },
    ],
  },
  {
    title: 'Sections & Content',
    items: [
      { id: 'services', label: 'Services & Pricing', icon: BriefcaseBusiness },
      { id: 'testimonials', label: 'Testimonials', icon: MessageCircle },
      { id: 'gallery', label: 'Gallery', icon: ImageIcon },
      { id: 'faq', label: 'FAQ', icon: HelpCircle },
      { id: 'location', label: 'Location', icon: MapPin },
      { id: 'cta', label: 'CTA', icon: MessageCircle },
      { id: 'footer', label: 'Footer', icon: FileText },
    ],
  },
];

const tabLabels: Record<ConfigTabId, string> = {
  business: 'Business & Content',
  theme: 'Theme & Style',
  navigation: 'Navigation',
  hero: 'Hero',
  seo: 'SEO',
  services: 'Services & Pricing',
  testimonials: 'Testimonials',
  gallery: 'Gallery',
  faq: 'FAQ',
  location: 'Location',
  cta: 'CTA',
  footer: 'Footer',
};

const configKeys: Record<ConfigTabId, keyof BusinessConfig | null> = {
  business: null,
  theme: 'theme',
  navigation: 'navigation',
  hero: 'hero',
  seo: 'seo',
  services: 'services',
  testimonials: 'testimonials',
  gallery: 'gallery',
  faq: 'faqs',
  location: 'locationSection',
  cta: 'ctaSection',
  footer: 'footerSection',
};

const businessFields = [
  'id',
  'name',
  'industry',
  'tagline',
  'heroHeadline',
  'heroDescription',
  'primaryCtaText',
  'secondaryCtaText',
  'heroImageUrl',
  'aboutImageUrl',
  'ctaBannerImageUrl',
  'contact',
  'aboutText',
  'statistics',
  'whyChooseUs',
  'process',
  'openingHours',
  'socialLinks',
  'sections',
];

const hiddenKeys = new Set(['id']);

function labelize(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isColor(value: unknown) {
  return typeof value === 'string' && (/^#[0-9a-f]{6}$/i.test(value) || /^#[0-9a-f]{3}$/i.test(value));
}

function isUrlKey(key: string) {
  return /url|image|logo|favicon/i.test(key);
}

function isLongText(key: string, value: string) {
  return value.length > 90 || /description|text|content|message|bio|address/i.test(key);
}

function pathLabel(path: string[]) {
  return path.map(labelize).join(' / ');
}

function updateAtPath(root: any, path: string[], value: any) {
  if (path.length === 0) return value;
  const clone = Array.isArray(root) ? [...root] : { ...(root || {}) };
  const [head, ...rest] = path;
  clone[head] = rest.length ? updateAtPath(clone[head], rest, value) : value;
  return clone;
}

function deleteAtPath(root: any, path: string[]) {
  if (!path.length) return root;
  const clone = Array.isArray(root) ? [...root] : { ...(root || {}) };
  const [head, ...rest] = path;
  if (!rest.length) {
    if (Array.isArray(clone)) clone.splice(Number(head), 1);
    else delete clone[head];
    return clone;
  }
  clone[head] = deleteAtPath(clone[head], rest);
  return clone;
}

function defaultArrayItem(value: any) {
  if (typeof value === 'string') return '';
  if (typeof value === 'number') return 0;
  if (typeof value === 'boolean') return false;
  if (Array.isArray(value)) return [];
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, defaultArrayItem(item)]));
  }
  return '';
}

function ConfigField({
  label,
  value,
  path,
  onChange,
  onDelete,
  depth = 0,
}: {
  label: string;
  value: any;
  path: string[];
  onChange: (path: string[], value: any) => void;
  onDelete?: (path: string[]) => void;
  depth?: number;
}) {
  const fieldKey = path[path.length - 1] || label;

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return (
      <div className={`${depth > 0 ? 'ml-1 border-l border-slate-200 pl-3' : ''} space-y-2`}>
        <div className="flex items-center justify-between pt-1">
          <div>
            <p className="text-[11px] font-bold text-slate-800">{labelize(label)}</p>
            {depth === 0 && <p className="text-[9px] text-slate-400">Nested configuration</p>}
          </div>
        </div>
        <div className="space-y-2">
          {Object.entries(value).map(([key, child]) => (
            <ConfigField
              key={key}
              label={key}
              value={child}
              path={[...path, key]}
              onChange={onChange}
              onDelete={onDelete}
              depth={depth + 1}
            />
          ))}
        </div>
      </div>
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className={`${depth > 0 ? 'ml-1 border-l border-slate-200 pl-3' : ''} rounded-xl border border-slate-200 bg-slate-50/70 p-2.5`}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-800">{labelize(label)}</p>
            <p className="text-[9px] text-slate-400">{value.length} item</p>
          </div>
          <button
            type="button"
            onClick={() => onChange([...path], [...value, defaultArrayItem(value[0])])}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[9px] font-bold text-slate-600 hover:bg-slate-100"
          >
            <Plus className="h-3 w-3" /> Tambah
          </button>
        </div>
        <div className="space-y-2">
          {value.map((item, index) => (
            <div key={`${path.join('.')}-${index}`} className="rounded-lg border border-slate-200 bg-white p-2">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wide text-slate-400">Item {index + 1}</span>
                <button
                  type="button"
                  onClick={() => onDelete?.([...path, String(index)])}
                  className="rounded-md p-1 text-slate-400 hover:bg-red-50 hover:text-red-600"
                  aria-label={`Hapus ${label} item ${index + 1}`}
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
              <ConfigField
                label={typeof item === 'object' && item !== null ? label : `${label} ${index + 1}`}
                value={item}
                path={[...path, String(index)]}
                onChange={onChange}
                onDelete={onDelete}
                depth={depth + 1}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const stringValue = value == null ? '' : String(value);

  if (typeof value === 'boolean') {
    return (
      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-2.5 py-2">
        <span className="text-[10px] font-semibold text-slate-700">{labelize(label)}</span>
        <button
          type="button"
          onClick={() => onChange(path, !value)}
          className={`relative h-5 w-9 rounded-full transition ${value ? 'bg-slate-900' : 'bg-slate-200'}`}
          aria-pressed={value}
        >
          <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition ${value ? 'left-[18px]' : 'left-0.5'}`} />
        </button>
      </label>
    );
  }

  if (isColor(value)) {
    return (
      <label className="block rounded-lg border border-slate-200 bg-white p-2">
        <span className="mb-1 block text-[9px] font-bold text-slate-500">{labelize(label)}</span>
        <div className="flex items-center gap-2">
          <input type="color" value={stringValue} onChange={(event) => onChange(path, event.target.value)} className="h-8 w-10 cursor-pointer rounded border-0 p-0" />
          <input value={stringValue} onChange={(event) => onChange(path, event.target.value)} className="min-w-0 flex-1 rounded-md border border-slate-200 px-2 py-1.5 font-mono text-[10px] outline-none focus:border-slate-500" />
        </div>
      </label>
    );
  }

  if (typeof value === 'number') {
    return (
      <label className="block">
        <span className="mb-1 block text-[9px] font-bold text-slate-500">{labelize(label)}</span>
        <input type="number" value={value} onChange={(event) => onChange(path, Number(event.target.value))} className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[10px] outline-none focus:border-slate-500" />
      </label>
    );
  }

  if (typeof value === 'string' && isUrlKey(fieldKey)) {
    return (
      <label className="block">
        <span className="mb-1 block text-[9px] font-bold text-slate-500">{labelize(label)}</span>
        <input type="url" value={stringValue} onChange={(event) => onChange(path, event.target.value)} placeholder="https://..." className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[10px] outline-none focus:border-slate-500" />
      </label>
    );
  }

  if (typeof value === 'string' && isLongText(fieldKey, stringValue)) {
    return (
      <label className="block">
        <span className="mb-1 block text-[9px] font-bold text-slate-500">{labelize(label)}</span>
        <textarea value={stringValue} onChange={(event) => onChange(path, event.target.value)} rows={3} className="w-full resize-y rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[10px] leading-relaxed outline-none focus:border-slate-500" />
      </label>
    );
  }

  return (
    <label className="block">
      <span className="mb-1 block text-[9px] font-bold text-slate-500">{labelize(label)}</span>
      <input value={stringValue} onChange={(event) => onChange(path, event.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[10px] outline-none focus:border-slate-500" />
    </label>
  );
}

export const DevPanel: React.FC<DevPanelProps> = ({ currentBusiness, onSelectBusiness }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ConfigTabId>('business');
  const [message, setMessage] = useState('');
  const [activeGroup, setActiveGroup] = useState('Website & Brand');

  const flash = (text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(''), 1800);
  };

  const downloadFile = (filename: string, content: string, type = 'text/plain') => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleChange = (path: string[], value: any) => {
    if (path[0] === 'business') {
      onSelectBusiness(updateAtPath(currentBusiness, path.slice(1), value));
      return;
    }
    const key = configKeys[activeTab];
    if (!key) return;
    onSelectBusiness({ ...currentBusiness, [key]: updateAtPath((currentBusiness as AnyRecord)[key], path, value) });
  };

  const handleDelete = (path: string[]) => {
    if (path[0] === 'business') {
      onSelectBusiness(deleteAtPath(currentBusiness, path.slice(1)));
      return;
    }
    const key = configKeys[activeTab];
    if (!key) return;
    onSelectBusiness({ ...currentBusiness, [key]: deleteAtPath((currentBusiness as AnyRecord)[key], path) });
  };

  const activeConfig = useMemo(() => {
    if (activeTab === 'business') {
      return Object.fromEntries(businessFields.filter((field) => field in currentBusiness).map((field) => [field, (currentBusiness as AnyRecord)[field]]));
    }
    const key = configKeys[activeTab];
    return key ? (currentBusiness as AnyRecord)[key] : {};
  }, [activeTab, currentBusiness]);

  const generateAllConfig = () => {
    const excluded = new Set(['services', 'pricingPackages', 'faqs', 'locationSection', 'ctaSection', 'footerSection']);
    const serializable = Object.fromEntries(Object.entries(currentBusiness).filter(([key]) => !excluded.has(key)));
    const file = `import { BusinessConfig } from '../types/business';\n\nexport const clientConfig: Partial<BusinessConfig> = ${JSON.stringify(serializable, null, 2)};\n`;
    downloadFile(`${currentBusiness.id}-config.ts`, file, 'text/typescript');
    flash('Full config berhasil dibuat');
  };

  const generateSectionConfig = () => {
    const key = configKeys[activeTab];
    const value = key ? (currentBusiness as AnyRecord)[key] : activeConfig;
    const file = `export const ${activeTab}Config = ${JSON.stringify(value, null, 2)};\n`;
    downloadFile(`${activeTab}.config.ts`, file, 'text/typescript');
    flash(`${tabLabels[activeTab]} berhasil diekspor`);
  };

  const copyCurrentJson = async () => {
    await navigator.clipboard.writeText(JSON.stringify(activeConfig, null, 2));
    flash('JSON config tersalin');
  };

  const resetCurrent = () => {
    const template = templateList.find((item) => item.template.id === currentBusiness.id)?.template;
    if (template) {
      onSelectBusiness(template);
      flash('Template dikembalikan ke default');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-20 z-40 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/95 px-3.5 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur-md"
      >
        <Settings2 className="h-3.5 w-3.5 text-amber-400" />
        <span className="hidden sm:inline">Config Generator</span>
        <span className="font-bold text-amber-300">{currentBusiness.name}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button type="button" aria-label="Tutup config generator" onClick={() => setIsOpen(false)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />

          <aside className="absolute right-0 top-0 flex h-full w-full max-w-[760px] flex-col overflow-hidden bg-white shadow-2xl">
            <header className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-slate-950 px-4 py-3 text-white">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950"><Sparkles className="h-4 w-4" /></div>
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-bold">UMKM Config Generator</h2>
                  <p className="truncate text-[10px] text-slate-400">Edit seluruh config theme, style & content tanpa menyentuh component</p>
                </div>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white"><X className="h-4 w-4" /></button>
            </header>

            <div className="flex min-h-0 flex-1">
              <nav className="w-[190px] shrink-0 overflow-y-auto border-r border-slate-200 bg-slate-50 p-2.5">
                {tabGroups.map((group) => (
                  <div key={group.title} className="mb-4">
                    <button type="button" onClick={() => setActiveGroup(activeGroup === group.title ? '' : group.title)} className="mb-1 flex w-full items-center justify-between px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      {group.title}
                      <ChevronRight className={`h-3 w-3 transition ${activeGroup === group.title ? 'rotate-90' : ''}`} />
                    </button>
                    {activeGroup === group.title && (
                      <div className="space-y-0.5">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button key={item.id} type="button" onClick={() => setActiveTab(item.id)} className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[10px] font-semibold transition ${activeTab === item.id ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-white hover:text-slate-900'}`}>
                              <Icon className="h-3.5 w-3.5 shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                <div className="border-t border-slate-200 pt-3">
                  <p className="px-2 pb-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">Templates</p>
                  <div className="space-y-1">
                    {templateList.map((item) => (
                      <button key={item.id} type="button" onClick={() => { onSelectBusiness(item.template); flash(`${item.name} dipilih`); }} className={`flex w-full items-center gap-2 rounded-lg border p-1.5 text-left ${currentBusiness.id === item.template.id ? 'border-slate-900 bg-white' : 'border-transparent hover:bg-white'}`}>
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white" style={{ backgroundColor: item.accentColor }}><DynamicIcon name={item.icon} className="h-3 w-3" /></span>
                        <span className="truncate text-[9px] font-semibold text-slate-600">{item.name}</span>
                        {currentBusiness.id === item.template.id && <Check className="ml-auto h-3 w-3 text-emerald-600" />}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>

              <main className="min-w-0 flex-1 overflow-y-auto bg-white">
                <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Config category</p>
                      <h3 className="text-sm font-bold text-slate-900">{tabLabels[activeTab]}</h3>
                    </div>
                    <button type="button" onClick={copyCurrentJson} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[9px] font-bold text-slate-600 hover:bg-slate-50"><Copy className="h-3 w-3" /> Copy JSON</button>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  {activeTab === 'business' ? (
                    <div className="space-y-3">
                      <div className="rounded-xl border border-sky-100 bg-sky-50 p-3"><p className="text-[10px] font-bold text-sky-900">Business & Content</p><p className="mt-1 text-[9px] leading-relaxed text-sky-700">Semua field utama dari <code>business.ts</code>, termasuk contact, about, statistics, process, social links dan visibility section.</p></div>
                      {Object.entries(activeConfig).map(([key, value]) => hiddenKeys.has(key) ? null : <ConfigField key={key} label={key} value={value} path={['business', key]} onChange={handleChange} onDelete={handleDelete} />)}
                    </div>
                  ) : activeTab === 'theme' ? (
                    <div className="space-y-3">
                      <div className="rounded-xl border border-violet-100 bg-violet-50 p-3"><p className="text-[10px] font-bold text-violet-900">Theme & Style</p><p className="mt-1 text-[9px] text-violet-700">Palette, typography, radius, WhatsApp color dan theme-level hero variant.</p></div>
                      {Object.entries(activeConfig || {}).map(([key, value]) => key === 'fontOptionId' ? (
                        <label key={key} className="block"><span className="mb-1 block text-[9px] font-bold text-slate-500">Font Option</span><select value={value} onChange={(event) => { const font = fontOptions.find((item) => item.id === event.target.value); handleChange([key], event.target.value); if (font) handleChange(['fontFamily'], font.family); }} className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[10px] outline-none"><option value="">Pilih font</option>{fontOptions.map((font) => <option key={font.id} value={font.id}>{font.name}</option>)}</select></label>
                      ) : <ConfigField key={key} label={key} value={value} path={[key]} onChange={handleChange} onDelete={handleDelete} />)}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {activeTab === 'hero' && <div className="rounded-xl border border-amber-100 bg-amber-50 p-3"><p className="text-[10px] font-bold text-amber-900">Hero Config</p><p className="mt-1 text-[9px] leading-relaxed text-amber-700">Atur layout, background, image, overlay, gradient, texture, alignment, CTA presentation dan seluruh field yang tersedia di <code>hero.ts</code>.</p></div>}
                      {activeConfig && typeof activeConfig === 'object' && Object.entries(activeConfig).map(([key, value]) => <ConfigField key={key} label={key} value={value} path={[key]} onChange={handleChange} onDelete={handleDelete} />)}
                    </div>
                  )}

                  {(!activeConfig || (typeof activeConfig === 'object' && Object.keys(activeConfig).length === 0)) && <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center"><p className="text-xs font-semibold text-slate-500">Belum ada data config</p><p className="mt-1 text-[9px] text-slate-400">Tambahkan data pada file config terkait terlebih dahulu.</p></div>}
                </div>
              </main>
            </div>

            <footer className="flex shrink-0 flex-wrap items-center gap-2 border-t border-slate-200 bg-white p-3">
              <button type="button" onClick={generateSectionConfig} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-[9px] font-bold text-white hover:bg-slate-800"><Download className="h-3.5 w-3.5" /> Export {tabLabels[activeTab]}</button>
              <button type="button" onClick={generateAllConfig} className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-[9px] font-bold text-white hover:bg-emerald-700"><Download className="h-3.5 w-3.5" /> Generate Full Config</button>
              <button type="button" onClick={resetCurrent} className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-[9px] font-bold text-slate-600 hover:bg-slate-50"><RotateCcw className="h-3.5 w-3.5" /> Reset Template</button>
              {message && <span className="text-[9px] font-bold text-emerald-600">{message}</span>}
            </footer>
          </aside>
        </div>
      )}
    </>
  );
};
