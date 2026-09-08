import React, { useState } from 'react';
import { BusinessConfig, HeroConfig, HeroGradientStyle, HeroLayoutVariant, HeroTextureType, FontOptionId, HeroBackgroundType } from '../types/business';
import { templateList } from '../config/templates';
import { fontOptions, getFontById } from '../config/fonts';
import { heroLayoutOptions, heroBackgroundOptions, heroGradientOptions, heroBackgroundPresets, heroTextureOptions } from '../config/hero';
import { DynamicIcon } from '../lib/icons';
import { Settings2, ChevronUp, ChevronDown, Check, Download, Copy, Sparkles, Layout, Palette, Image as ImageIcon, Type, SlidersHorizontal } from 'lucide-react';

interface DevPanelProps { currentBusiness: BusinessConfig; onSelectBusiness: (business: BusinessConfig) => void; }

const heroDefaults: HeroConfig = {
  layoutVariant: 'split', backgroundType: 'image-overlay', backgroundColor: '#0B0F19', backgroundMode: 'dark', gradientStyle: 'dark-slate',
  ambientOrbs: { enabled: true, opacity: 0.16, blur: 'xl' }, texture: 'none', textureOpacity: 0.03,
  showBackgroundImageOverlay: true, backgroundImageUrl: '', backgroundImageOpacity: 0.34, backgroundImageBlur: 'sm', backgroundImagePosition: 'center',
  overlayColor: '#0B0F19', overlayOpacity: 0.68, overlayGradient: true, minHeight: 'large', contentAlign: 'left', showFloatingStats: true, showRatingPill: true,
};

function getHero(business: BusinessConfig): HeroConfig { return { ...heroDefaults, ...(business.hero || {}) }; }

export const DevPanel: React.FC<DevPanelProps> = ({ currentBusiness, onSelectBusiness }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'presets' | 'hero' | 'fonts' | 'config'>('presets');
  const [message, setMessage] = useState('');
  const hero = getHero(currentBusiness);
  const currentFont = getFontById(currentBusiness.theme.fontOptionId);

  const updateHero = (patch: Partial<HeroConfig>) => onSelectBusiness({ ...currentBusiness, hero: { ...hero, ...patch } });
  const flash = (text: string) => { setMessage(text); window.setTimeout(() => setMessage(''), 1800); };

  const downloadFile = (filename: string, content: string, type = 'text/plain') => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
  };

  const generateHeroConfig = () => {
    const config = `import { HeroConfig } from '../types/business';\n\nexport const heroConfig: HeroConfig = ${JSON.stringify(hero, null, 2)};\n`;
    downloadFile(`${currentBusiness.id}-hero.config.ts`, config, 'text/typescript');
    flash('Hero config berhasil dibuat');
  };

  const generateClientConfig = () => {
    const config = `import { BusinessConfig } from '../types/business';\n\nexport const clientConfig: Partial<BusinessConfig> = ${JSON.stringify({ id: currentBusiness.id, name: currentBusiness.name, industry: currentBusiness.industry, tagline: currentBusiness.tagline, heroHeadline: currentBusiness.heroHeadline, heroDescription: currentBusiness.heroDescription, primaryCtaText: currentBusiness.primaryCtaText, secondaryCtaText: currentBusiness.secondaryCtaText, hero }, null, 2)};\n`;
    downloadFile(`${currentBusiness.id}.config.ts`, config, 'text/typescript');
    flash('Client config berhasil dibuat');
  };

  const copyJson = async () => { await navigator.clipboard.writeText(JSON.stringify(hero, null, 2)); flash('Hero JSON tersalin'); };
  const setBackgroundType = (type: HeroBackgroundType) => updateHero({ backgroundType: type, showBackgroundImageOverlay: type !== 'color' });

  return <div className="fixed top-20 right-4 z-50 flex flex-col items-end">
    <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/95 px-3.5 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur-md">
      <Settings2 className="h-3.5 w-3.5 text-amber-400" /><span className="hidden sm:inline">Template:</span><span className="font-bold text-amber-300">{currentBusiness.industry.split(' ')[0]}</span><span className="hidden sm:inline text-slate-500">|</span><span className="hidden sm:inline text-emerald-300">{currentFont.name.split(' ')[0]}</span>{isOpen ? <ChevronUp className="h-3.5 w-3.5"/> : <ChevronDown className="h-3.5 w-3.5"/>}
    </button>

    {isOpen && <div className="mt-2 w-[22rem] sm:w-[27rem] overflow-hidden rounded-2xl border border-slate-200 bg-white/98 text-left shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between bg-slate-900 p-3.5 text-white">
        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-400"/><div><h4 className="text-sm font-bold">UMKM Template Engine</h4><p className="text-[10px] text-slate-400">Live configuration & client generator</p></div></div>
        <div className="flex gap-1 rounded-lg bg-slate-800 p-0.5">
          {([['presets','Preset'],['hero','Hero'],['fonts','Font'],['config','Config']] as const).map(([id,label]) => <button key={id} type="button" onClick={() => setActiveTab(id)} className={`rounded px-2 py-1 text-[10px] font-bold ${activeTab===id?'bg-amber-400 text-slate-900':'text-slate-300'}`}>{label}</button>)}
        </div>
      </div>

      {activeTab === 'presets' && <div className="max-h-[430px] space-y-2 overflow-y-auto p-3.5">
        <p className="text-xs text-slate-500">Pilih template UMKM untuk mengisi data contoh.</p>
        {templateList.map(item => <button key={item.id} type="button" onClick={() => onSelectBusiness(item.template)} className={`flex w-full items-center justify-between rounded-xl border p-2.5 text-left ${currentBusiness.id===item.template.id?'border-slate-900 bg-slate-50 ring-1 ring-slate-900':'border-slate-200 hover:bg-slate-50'}`}>
          <div className="flex min-w-0 items-center gap-2.5"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white" style={{backgroundColor:item.accentColor}}><DynamicIcon name={item.icon} className="h-4 w-4"/></div><div className="min-w-0"><p className="truncate text-xs font-bold">{item.name}</p><p className="truncate text-[10px] text-slate-500">{item.category}</p></div></div>{currentBusiness.id===item.template.id&&<Check className="h-4 w-4 text-emerald-600"/>}
        </button>)}
      </div>}

      {activeTab === 'hero' && <div className="max-h-[600px] space-y-4 overflow-y-auto p-3.5">
        <section><div className="mb-2 flex items-center gap-2 text-xs font-bold"><Layout className="h-4 w-4 text-sky-600"/>Layout Hero</div><div className="grid gap-2">
          {heroLayoutOptions.map(opt => <button key={opt.id} type="button" onClick={() => updateHero({layoutVariant:opt.id})} className={`rounded-xl border p-2.5 text-left ${hero.layoutVariant===opt.id?'border-sky-600 bg-sky-50 ring-1 ring-sky-600':'border-slate-200 hover:border-slate-300'}`}><div className="flex justify-between"><span className="text-xs font-bold">{opt.name}</span>{hero.layoutVariant===opt.id&&<Check className="h-3.5 w-3.5 text-sky-600"/>}</div><p className="mt-0.5 text-[10px] text-slate-500">{opt.subtitle} · {opt.bestFor}</p></button>)}
        </div></section>

        <section className="border-t pt-3"><div className="mb-2 flex items-center gap-2 text-xs font-bold"><ImageIcon className="h-4 w-4 text-violet-600"/>Background</div><div className="grid grid-cols-3 gap-1.5">{heroBackgroundOptions.map(opt=><button key={opt.id} type="button" onClick={()=>setBackgroundType(opt.id)} className={`rounded-lg border p-2 text-[10px] font-bold ${hero.backgroundType===opt.id?'border-violet-600 bg-violet-50 text-violet-800':'border-slate-200'}`}>{opt.name}</button>)}</div>
          <label className="mt-2 block text-[10px] font-semibold text-slate-600">URL gambar background<input value={hero.backgroundImageUrl || ''} onChange={e=>updateHero({backgroundImageUrl:e.target.value})} placeholder="https://..." className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-2 text-xs outline-none focus:border-violet-500"/></label>
          <div className="mt-2 grid grid-cols-2 gap-2"><label className="text-[10px] font-semibold">Warna overlay<input type="color" value={hero.overlayColor || '#0B0F19'} onChange={e=>updateHero({overlayColor:e.target.value})} className="mt-1 h-9 w-full cursor-pointer rounded border"/></label><label className="text-[10px] font-semibold">Warna canvas<input type="color" value={hero.backgroundColor || '#0B0F19'} onChange={e=>updateHero({backgroundColor:e.target.value})} className="mt-1 h-9 w-full cursor-pointer rounded border"/></label></div>
          <label className="mt-2 block text-[10px] font-semibold">Opacity foto: <b>{Math.round((hero.backgroundImageOpacity ?? .34)*100)}%</b><input type="range" min="0" max="1" step=".01" value={hero.backgroundImageOpacity ?? .34} onChange={e=>updateHero({backgroundImageOpacity:Number(e.target.value)})} className="w-full"/></label>
          <label className="mt-2 block text-[10px] font-semibold">Opacity overlay: <b>{Math.round((hero.overlayOpacity ?? .68)*100)}%</b><input type="range" min="0" max="1" step=".01" value={hero.overlayOpacity ?? .68} onChange={e=>updateHero({overlayOpacity:Number(e.target.value)})} className="w-full"/></label>
          <label className="mt-2 block text-[10px] font-semibold">Blur gambar<select value={hero.backgroundImageBlur || 'sm'} onChange={e=>updateHero({backgroundImageBlur:e.target.value as HeroConfig['backgroundImageBlur']})} className="mt-1 w-full rounded-lg border border-slate-200 p-2 text-xs"><option value="none">None</option><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option></select></label>
        </section>

        <section className="border-t pt-3"><div className="mb-2 flex items-center gap-2 text-xs font-bold"><Palette className="h-4 w-4 text-amber-500"/>Gradient & texture</div><div className="grid grid-cols-2 gap-1.5">{heroGradientOptions.map(opt=><button key={opt.id} type="button" onClick={()=>updateHero({gradientStyle:opt.id})} className={`rounded-lg border p-2 text-left text-[10px] font-bold ${hero.gradientStyle===opt.id?'border-amber-500 bg-amber-50 text-amber-900':'border-slate-200'}`}><span className="mb-1 block h-2 rounded" style={{background:`linear-gradient(90deg,${opt.previewColors.join(',')})`}}/>{opt.name}</button>)}</div>
          <div className="mt-2 grid grid-cols-2 gap-2"><label className="rounded-lg bg-slate-50 p-2 text-[10px] font-bold">Mode<select value={hero.backgroundMode||'dark'} onChange={e=>updateHero({backgroundMode:e.target.value as HeroConfig['backgroundMode']})} className="mt-1 w-full rounded border p-1.5"><option value="dark">Dark</option><option value="light">Light</option><option value="auto">Auto</option></select></label><label className="rounded-lg bg-slate-50 p-2 text-[10px] font-bold">Texture<select value={hero.texture||'none'} onChange={e=>updateHero({texture:e.target.value as HeroTextureType})} className="mt-1 w-full rounded border p-1.5">{heroTextureOptions.map(t=><option key={t.id} value={t.id}>{t.name}</option>)}</select></label></div>
        </section>

        <section className="border-t pt-3"><div className="mb-2 flex items-center gap-2 text-xs font-bold"><SlidersHorizontal className="h-4 w-4 text-emerald-600"/>Preset warna cepat</div><div className="grid grid-cols-2 gap-1.5">{heroBackgroundPresets.map(p=><button key={p.name} type="button" onClick={()=>updateHero({backgroundColor:p.color,backgroundMode:p.isDark?'dark':'light',overlayColor:p.isDark?p.color:'#FFFFFF'})} className="flex items-center gap-2 rounded-lg border border-slate-200 p-2 text-left text-[10px] font-semibold"><span className="h-4 w-4 rounded-full border" style={{backgroundColor:p.color}}/>{p.name}</button>)}</div></section>
      </div>}

      {activeTab === 'fonts' && <div className="max-h-[430px] space-y-2 overflow-y-auto p-3.5">{fontOptions.map(font=><button key={font.id} type="button" onClick={()=>onSelectBusiness({...currentBusiness,theme:{...currentBusiness.theme,fontOptionId:font.id as FontOptionId,fontFamily:font.family}})} className={`w-full rounded-xl border p-3 text-left ${currentBusiness.theme.fontOptionId===font.id?'border-sky-600 bg-sky-50':'border-slate-200'}`}><p className="text-xs font-bold">{font.name}</p><p className="text-[10px] text-slate-500">{font.description}</p></button>)}</div>}

      {activeTab === 'config' && <div className="space-y-3 p-3.5">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3"><p className="text-xs font-bold text-emerald-900">Config saat ini siap diekspor</p><p className="mt-1 text-[10px] text-emerald-700">File yang dihasilkan sudah mengikuti setting Hero yang sedang aktif.</p></div>
        <button type="button" onClick={generateHeroConfig} className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-bold text-white hover:bg-slate-800"><Download className="h-4 w-4"/>Generate Hero Config (.ts)</button>
        <button type="button" onClick={generateClientConfig} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-2.5 text-xs font-bold text-white hover:bg-emerald-700"><Download className="h-4 w-4"/>Generate Client Config (.ts)</button>
        <button type="button" onClick={copyJson} className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-700"><Copy className="h-4 w-4"/>Copy Hero JSON</button>
        {message && <div className="rounded-lg bg-slate-900 px-3 py-2 text-center text-[10px] font-semibold text-white">{message}</div>}
      </div>}
    </div>}
  </div>;
};
