import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, blogPosts } from '@/data/blog_posts'

const WA = 'https://wa.me/5544984383013'
const SITE = 'https://www.eternamoments.com.br'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  const isSM = post.categoria === 'story-maker'
  const desc = isSM
    ? `${post.title} — Saiba tudo sobre Story Maker para casamentos e eventos em Umuarama PR. Vânia Giroto, especialista em cobertura digital para redes sociais.`
    : `${post.title} — Studio Foto Danielle, Cícero Manoel Domingos, fotógrafo profissional com 40 anos de experiência em Umuarama PR.`
  return {
    title: `${post.title} | ${isSM ? 'Giroto Story Maker' : 'Studio Foto Danielle'}`,
    description: desc,
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
    openGraph: { title: post.title, description: desc, images: [{ url: `${SITE}/fotos/${isSM ? 'foto5' : 'casal'}.jpg` }] },
  }
}

function getConteudo(post: { title: string; categoria: string; autor: string }) {
  const isSM = post.categoria === 'story-maker'
  const nome = isSM ? 'Vânia Giroto' : 'Cícero Manoel Domingos'
  const empresa = isSM ? 'Giroto Story Maker' : 'Studio Foto Danielle'
  const servico = isSM ? 'Story Maker' : 'fotografia profissional'
  
  return {
    intro: `${post.title} é um tema cada vez mais buscado por quem planeja eventos em Umuarama PR e região. Neste artigo, ${nome} da ${empresa} explica tudo que você precisa saber para tomar a melhor decisão para o seu evento especial.`,
    p1: `Umuarama PR é uma das cidades que mais cresce no Noroeste do Paraná, e com isso a demanda por ${servico} de qualidade também aumentou. A ${empresa} atua há anos neste mercado, oferecendo serviços de alta qualidade para casamentos, formaturas, festas de 15 anos e todo tipo de evento especial.`,
    p2: isSM
      ? `O Story Maker é o profissional responsável por criar conteúdo para Instagram, TikTok e WhatsApp em tempo real durante o evento. Enquanto a festa acontece, os convidados já podem ver e compartilhar os stories e reels nas redes sociais. Este serviço se tornou indispensável para quem quer que seu casamento virilize nas redes.`
      : `A fotografia profissional é o registro eterno do seu evento. Com 40 anos de experiência, Cícero Manoel Domingos domina todas as técnicas para garantir fotos nítidas, bem iluminadas e com composições artísticas que contam a história do seu evento com emoção e beleza duradoura.`,
    p3: `Para contratar ${servico} em Umuarama PR, o ideal é entrar em contato com antecedência de pelo menos 30 dias. Em épocas de alta demanda, como dezembro e janeiro, recomendamos reservar com 60 a 90 dias de antecedência para garantir a data do seu evento.`,
    p4: isSM
      ? `A Giroto Story Maker trabalha com iPhone profissional, iluminação de LED portátil e iPad para edição ágil. Cada story e reel é editado com músicas tendência, transições modernas e textos personalizados — tudo entregue ainda durante o evento para você publicar na hora.`
      : `O Studio Foto Danielle utiliza equipamentos profissionais de última geração, garantindo fotos perfeitas em qualquer condição de iluminação. O álbum impresso de alta qualidade e a entrega digital de todas as fotos são parte do pacote completo.`,
    p5: `Para saber mais sobre ${post.title} ou solicitar um orçamento personalizado, entre em contato pelo WhatsApp. ${nome} responde rapidamente e oferece condições especiais para eventos em Umuarama PR e região Noroeste do Paraná.`,
  }
}

const relacionados_sm = [
  { title: 'Story Maker para Casamento em Umuarama PR', slug: 'story-maker-para-casamento-em-umuarama-pr' },
  { title: 'Reels ao Vivo no Casamento Umuarama', slug: 'reels-ao-vivo-no-casamento-umuarama' },
  { title: 'Quanto Custa Story Maker para Casamento em Umuarama', slug: 'quanto-custa-story-maker-para-casamento-em-umuarama' },
]
const relacionados_foto = [
  { title: 'Fotógrafo de Casamento em Umuarama PR', slug: 'fotografo-de-casamento-em-umuarama-pr' },
  { title: 'Studio Foto Danielle Umuarama PR', slug: 'studio-foto-danielle-umuarama-pr' },
  { title: 'Melhor Fotógrafo de Casamento em Umuarama PR', slug: 'melhor-fotografo-de-casamento-em-umuarama-pr' },
]

export default function BlogPost({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()
  const isSM = post.categoria === 'story-maker'
  const conteudo = getConteudo(post)
  const relacionados = isSM ? relacionados_sm : relacionados_foto
  const foto = isSM ? '/fotos/foto5.jpg' : '/fotos/casal.jpg'
  const empresa = isSM ? 'Giroto Story Maker' : 'Studio Foto Danielle'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    author: { '@type': 'Person', name: post.autor },
    publisher: { '@type': 'Organization', name: empresa, url: SITE },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString(),
    image: `${SITE}${foto}`,
    url: `${SITE}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh' }}>
        
        <nav style={{ background: 'rgba(10,8,6,0.95)', borderBottom: '1px solid rgba(212,168,67,0.2)', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#f0d080,#d4a843)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#0a0806', fontSize: 16 }}>G</div>
            <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>{empresa}</div><div style={{ color: '#d4a843', fontSize: 9, letterSpacing: 2 }}>UMUARAMA PR</div></div>
          </a>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="/blog" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, border: '1px solid rgba(212,168,67,0.3)', padding: '5px 12px', borderRadius: 20 }}>← Blog</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '6px 14px', borderRadius: 20, textDecoration: 'none', fontSize: 12, fontWeight: 700 }}>WhatsApp</a>
          </div>
        </nav>

        <article style={{ maxWidth: 800, margin: '0 auto', padding: '50px 24px' }}>
          
          <div style={{ marginBottom: 16 }}>
            <span style={{ background: isSM ? 'rgba(212,168,67,0.15)' : 'rgba(100,150,255,0.15)', color: isSM ? '#d4a843' : '#88aaff', fontSize: 11, fontWeight: 600, letterSpacing: 2, padding: '4px 12px', borderRadius: 20, textTransform: 'uppercase' }}>
              {isSM ? 'Story Maker' : 'Fotografia'}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: 20 }}>{post.title}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid rgba(212,168,67,0.1)' }}>
            <img src={foto} alt={post.autor} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid #d4a843' }} />
            <div>
              <div style={{ color: '#d4a843', fontWeight: 700, fontSize: 14 }}>{post.autor}</div>
              <div style={{ color: '#666', fontSize: 12 }}>{empresa} · Umuarama PR</div>
            </div>
          </div>

          <img src={foto} alt={post.title} style={{ width: '100%', borderRadius: 16, objectFit: 'cover', height: 320, marginBottom: 32, border: '1px solid rgba(212,168,67,0.15)' }} />

          <div style={{ lineHeight: 1.9, fontSize: 16 }}>
            <p style={{ color: '#e0e0e0', marginBottom: 20, fontSize: 17, fontWeight: 500 }}>{conteudo.intro}</p>
            <p style={{ color: '#bbb', marginBottom: 20 }}>{conteudo.p1}</p>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', margin: '32px 0 16px', borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>
              {isSM ? 'O Que Faz um Story Maker?' : 'A Arte da Fotografia Profissional'}
            </h2>
            <p style={{ color: '#bbb', marginBottom: 20 }}>{conteudo.p2}</p>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', margin: '32px 0 16px', borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>
              Quando Contratar?
            </h2>
            <p style={{ color: '#bbb', marginBottom: 20 }}>{conteudo.p3}</p>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', margin: '32px 0 16px', borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>
              {isSM ? 'Equipamentos e Tecnologia' : 'Equipamentos Profissionais'}
            </h2>
            <p style={{ color: '#bbb', marginBottom: 20 }}>{conteudo.p4}</p>
            <p style={{ color: '#bbb', marginBottom: 32 }}>{conteudo.p5}</p>
          </div>

          <div style={{ background: 'rgba(212,168,67,0.08)', border: '2px solid rgba(212,168,67,0.3)', borderRadius: 20, padding: 28, textAlign: 'center', margin: '40px 0' }}>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Solicite seu Orçamento!</h3>
            <p style={{ color: '#999', fontSize: 14, marginBottom: 20 }}>Entre em contato e garanta a data do seu evento em Umuarama PR</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '14px 32px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>💬 Falar no WhatsApp</a>
          </div>

          <div style={{ borderTop: '1px solid rgba(212,168,67,0.1)', paddingTop: 32 }}>
            <h3 style={{ color: '#d4a843', fontWeight: 700, marginBottom: 16 }}>Leia Também</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {relacionados.map(r => (
                <a key={r.slug} href={`/blog/${r.slug}`} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 10, padding: '12px 16px', textDecoration: 'none', color: '#ccc', fontSize: 14 }}>
                  → {r.title}
                </a>
              ))}
            </div>
          </div>

        </article>

        <footer style={{ background: '#050403', borderTop: '1px solid rgba(212,168,67,0.1)', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: '#444', fontSize: 12 }}>© 2025 {empresa} · Umuarama PR</p>
          <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, display: 'inline-block', marginTop: 6 }}>← Voltar ao Início</a>
        </footer>

        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 24, right: 24, background: '#25d366', color: '#fff', width: 52, height: 52, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 100 }}>💬</a>
      </div>
    </>
  )
}
