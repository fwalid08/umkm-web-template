import type { BusinessConfig } from '../types/business';
export interface PlatformWebsite { id:string; workspaceId:string; name:string; slug:string; status:'draft'|'ready'|'published'; createdAt:string; updatedAt:string; }
export interface PlatformWorkspace { id:string; ownerUserId:string; name:string; slug:string; createdAt:string; }
export interface PlatformSessionUser { id:string; email:string; name:string; }
export interface PlatformWebsiteDetail { website:PlatformWebsite; config:BusinessConfig|null; versions:Array<{id:string;version:number;label:string;config:BusinessConfig;createdAt:string}>; theme:unknown; domains:unknown[]; }
const baseUrl=()=> (import.meta.env.VITE_PLATFORM_API_URL||'').replace(/\/$/,'');
const token=()=> localStorage.getItem('umkm_platform_token');
async function request<T>(path:string,init:RequestInit={}):Promise<T>{const response=await fetch(`${baseUrl()}${path}`,{...init,headers:{'Content-Type':'application/json',...(token()?{Authorization:`Bearer ${token()}`}:{}) ,...(init.headers||{})}});if(!response.ok)throw new Error((await response.json().catch(()=>null))?.error||`Platform API ${response.status}`);return response.status===204?(undefined as T):response.json();}
export const platformApi={
 enabled:()=>Boolean(baseUrl()),
 register:async(name:string,email:string,password:string)=>{const result=await request<{token?:string;user:PlatformSessionUser;workspace:PlatformWorkspace}>('/api/auth/register',{method:'POST',body:JSON.stringify({name,email,password})});if(result.token)localStorage.setItem('umkm_platform_token',result.token);return result;},
 login:async(email:string,password:string)=>{const result=await request<{token:string;user:PlatformSessionUser}>('/api/auth/login',{method:'POST',body:JSON.stringify({email,password})});localStorage.setItem('umkm_platform_token',result.token);return result;},
 logout:async()=>{try{await request<void>('/api/auth/logout',{method:'POST'});}finally{localStorage.removeItem('umkm_platform_token');}},
 workspaces:()=>request<PlatformWorkspace[]>('/api/workspaces'),
 websites:()=>request<PlatformWebsite[]>('/api/websites'),
 createWebsite:(workspaceId:string,name:string,config?:BusinessConfig)=>request<PlatformWebsite>('/api/websites',{method:'POST',body:JSON.stringify({workspaceId,name,config})}),
 website:(id:string)=>request<PlatformWebsiteDetail>(`/api/websites/${id}`),
 updateWebsite:(id:string,patch:Partial<Pick<PlatformWebsite,'name'|'slug'>>)=>request<PlatformWebsite>(`/api/websites/${id}`,{method:'PATCH',body:JSON.stringify(patch)}),
 saveVersion:(id:string,config:BusinessConfig,label='Editor save')=>request(`/api/websites/${id}/versions`,{method:'POST',body:JSON.stringify({config,label})}),
 restoreVersion:(id:string,version:number)=>request(`/api/websites/${id}/versions/${version}/restore`,{method:'POST'}),
 publish:(id:string)=>request<{status:'published';version:number;url:string;publishedAt:string}>(`/api/websites/${id}/publish`,{method:'POST'}),
 publishes:(id:string)=>request(`/api/websites/${id}/publishes`),
 assets:(id:string)=>request(`/api/websites/${id}/assets`),
 addAsset:(id:string,asset:{kind:string;name:string;url:string;alt?:string})=>request(`/api/websites/${id}/assets`,{method:'POST',body:JSON.stringify(asset)}),
 removeAsset:(id:string,assetId:string)=>request<void>(`/api/websites/${id}/assets/${assetId}`,{method:'DELETE'}),
 addDomain:(id:string,hostname:string)=>request(`/api/websites/${id}/domains`,{method:'POST',body:JSON.stringify({hostname})}),
 verifyDomain:(id:string,domainId:string)=>request(`/api/websites/${id}/domains/${domainId}/verify`,{method:'POST'}),
};
