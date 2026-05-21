import { paginas } from '@/data/paginas'
import { paginasFoto } from '@/data/paginas_foto'
import { blogPosts } from '@/data/blog_posts'
import { paginasVideo } from '@/data/paginas_video'
import { paginasDrone } from '@/data/paginas_drone'
import { paginasCidades } from '@/data/paginas_cidades'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.eternamoments.com.br'

  const servicosSM = paginas.map(p => ({
    url: `${base}/servicos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const servicosFoto = paginasFoto.map(p => ({
    url: `${base}/fotografo/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blog = blogPosts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const video = paginasVideo.map(p => ({
    url: `${base}/videomaker/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/servicos`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/fotografo`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/videomaker`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    ...servicosSM,
    ...servicosFoto,
    ...blog,
    ...video,
    { url: `${base}/cidades`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    ...paginasDrone.map(p=>({url:`${base}/drone/${p.slug}`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:0.8})),
    ...paginasCidades.map(p => ({ url: `${base}/cidades/${p.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 })),
  ]
}
