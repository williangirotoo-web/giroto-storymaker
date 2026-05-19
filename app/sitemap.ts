import { paginas } from '@/data/paginas'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.eternamoments.com.br'
  
  const paginasServico = paginas.map(p => ({
    url: `${base}/servicos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/servicos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...paginasServico,
  ]
}
