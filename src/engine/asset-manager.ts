export type AssetKind = 'logo' | 'hero' | 'about' | 'gallery' | 'cta' | 'favicon';
export interface AssetItem { id: string; kind: AssetKind; name: string; url: string; alt?: string; }
export interface AssetManager { list(): Promise<AssetItem[]>; add(asset: AssetItem): Promise<AssetItem>; remove(id: string): Promise<void>; }

export function createMemoryAssetManager(initial: AssetItem[] = []): AssetManager {
  let assets = [...initial];
  return {
    async list() { return [...assets]; },
    async add(asset) { assets = [...assets.filter(item => item.id !== asset.id), asset]; return asset; },
    async remove(id) { assets = assets.filter(item => item.id !== id); },
  };
}
