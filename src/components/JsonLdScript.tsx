import React, { useEffect } from 'react';
import { BusinessConfig } from '../types/business';
import { generateLocalBusinessJsonLd } from '../lib/jsonLd';

interface JsonLdScriptProps {
  business: BusinessConfig;
}

export const JsonLdScript: React.FC<JsonLdScriptProps> = ({ business }) => {
  useEffect(() => {
    const jsonLdData = generateLocalBusinessJsonLd(business);
    const scriptId = 'local-business-jsonld';
    
    // Check if script already exists
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(jsonLdData);
    
    // Update document title and description as well
    document.title = business.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', business.seo.description);
    }

    return () => {
      // clean up if unmounted
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [business]);

  return null;
};
