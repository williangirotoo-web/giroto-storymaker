import { paginas } from '@/data/paginas'
import { paginasFoto } from '@/data/paginas_foto'
import { blogPosts } from '@/data/blog_posts'
import { paginasVideo } from '@/data/paginas_video'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.eternamoments.com.br'
  
  const paginasServico = paginas.map(p => ({
    url: `${base}/servicos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const paginasFotografo = paginasFoto.map(p => ({
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

  return [
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...blog,
    { url: `${base}/videomaker`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    ...paginasVideo.map(p => ({ url: `${base}/videomaker/${p.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${base}/fotografo`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...paginasFotografo,
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/servicos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...paginasServico,
  ]
}
