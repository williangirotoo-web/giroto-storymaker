import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPaginaBySlug, paginas } from '@/data/paginas'

const WA = 'https://wa.me/5544984383013'
const IG = 'https://instagram.com/giroto_storymaker'
const SITE = 'https://www.eternamoments.com.br'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return paginas.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pagina = getPaginaBySlug(params.slug)
  if (!pagina) return {}
  const desc = `Contrate o melhor ${pagina.servico} para ${pagina.evento} em ${pagina.local}. A Giroto Story Maker cria conteúdo profissional em tempo real. Solicite orçamento!`
  const paginasIndexadas = [
    'story-maker-para-casamento-em-umuarama-pr',
    'story-maker-para-formatura-em-umuarama-pr', 
    'story-maker-para-festa-de-15-anos-em-umuarama-pr',
    'story-maker-para-aniversario-em-umuarama-pr',
    'story-maker-para-cha-de-bebe-em-umuarama-pr',
    'story-maker-para-casamento-em-umuarama',
    'story-maker-para-casamento-em-umuarama-parana',
    'reels-ao-vivo-para-casamento-em-umuarama-pr',
    'making-of-do-casamento-em-umuarama-pr',
    'cobertura-digital-de-casamento-em-umuarama-pr',
  ]
  const deveIndexar = paginasIndexadas.includes(params.slug)
  return {
    robots: deveIndexar ? { index: true, follow: true } : { index: false, follow: true },
    title: `${pagina.title} | Giroto Story Maker`,
    description: desc,
    alternates: { canonical: `${SITE}/servicos/${pagina.slug}` },
    openGraph: { title: `${pagina.title} | Giroto Story Maker`, description: desc, images: [{ url: `${SITE}/fotos/foto5.jpg` }] },
  }
}

function getArtigo(p: { evento: string; servico: string; local: string }) {
  const loc = p.local
  const ev = p.evento
  const artigos: Record<string, string[]> = {
    Casamento: [
      'Imagine chegar na lua de mel e ver centenas de curtidas no video do seu casamento postado ainda durante a festa. Isso e o que a Vania Giroto faz em cada casamento que cobre em ' + loc + '.',
      'Com mais de 300 eventos cobertos no Noroeste do Parana, desenvolvemos um metodo proprio: chegamos antes da cerimonia, acompanhamos o making-of, capturamos a entrada, os votos, o beijo — tudo editado e pronto antes do jantar.',
      'Equipamento profissional: iPhone estabilizado, LED portatil, microfone direcional. Mas o que faz diferenca e o olhar humano — saber o momento exato de capturar a lagrima da mae da noiva, o sorriso surpreso do noivo.',
      'Para casamentos em ' + loc + ' oferecemos pacotes completos com entrega em tempo real. Trabalhamos em parceria com o Studio Foto Danielle para foto + story maker + drone — a familia que vive de eternizar momentos.',
    ],
    Formatura: [
      'A formatura e o resultado de anos de dedicacao. Merece ser celebrada e compartilhada em tempo real, enquanto a emocao ainda esta fresca, com todo mundo que torceu por voce.',
      'A Vania cobre formaturas em ' + loc + ' com cuidado especial: cada turma tem sua propria identidade e o conteudo reflete isso. Nao e template — e a SUA conquista contada do seu jeito.',
      'Capturamos o beijo da familia, o arremesso do chapeu, as lagrimas de alegria. No jantar e na balada, criamos reels com a energia do grupo que fazem todo mundo querer assistir de novo.',
      'Atendemos todas as formatura em ' + loc + ' e regiao Noroeste do Parana. Entre em contato com antecedencia — as datas sao disputadas!',
    ],
  }
  const paragrafos = artigos[ev] || [
    'A Vania Giroto atende ' + ev + ' em ' + loc + ' com cuidado e atencao dedicados a cada evento que cobre.',
    'Com equipamentos profissionais e anos de experiencia, garantimos que os melhores momentos do seu ' + ev + ' sejam preservados e compartilhados profissionalmente.',
    'Entrega em tempo real — seu conteudo fica pronto enquanto a festa acontece. Entre em contato pelo WhatsApp.',
  ]
  return paragrafos.join('

')
}

function getFaqs(p: { evento: string; servico: string; local: string }) {
  return [
    { q: `O que é ${p.servico} para ${p.evento}?`, a: `É um serviço de cobertura digital que captura os melhores momentos e cria stories, reels e vídeos curtos para Instagram e TikTok em tempo real, enquanto a festa ainda está acontecendo.` },
    { q: `A Giroto Story Maker atende em ${p.local}?`, a: `Sim! Atendemos ${p.local} e toda a região Noroeste do Paraná, incluindo Alto Paraná, Cianorte, Paranavaí e municípios vizinhos.` },
    { q: `Quanto tempo antes devo contratar?`, a: `Recomendamos contratar com pelo menos 30 dias de antecedência. Em dezembro e janeiro, o ideal é reservar com 60 a 90 dias.` },
    { q: `Os vídeos ficam prontos na hora?`, a: `Sim! Durante o seu ${p.evento}, os stories e reels já são editados e entregues para você publicar enquanto a festa acontece.` },
    { q: `Qual equipamento é usado?`, a: `iPhone profissional, iluminação de LED portátil, microfone direcional e iPad para edição ágil. Qualidade garantida mesmo em ambientes com pouca luz.` },
    { q: `Como solicitar orçamento?`, a: `Entre em contato pelo WhatsApp ou pelo Instagram @giroto_storymaker. Respondemos rapidamente com orçamento personalizado para o seu ${p.evento}.` },
  ]
}

const depoimentos = [
  { nome: 'Ana Paula M.', evento: 'Casamento', texto: 'A Giroto Story Maker fez um trabalho incrível! Os stories ficaram prontos na hora e todo mundo ficou impressionado. Super recomendo!' },
  { nome: 'Fernanda R.', evento: 'Formatura', texto: 'Contratei para minha formatura e foi a melhor decisão! Os reels viralizaram no Instagram. Profissional demais!' },
  { nome: 'Marcos e Júlia', evento: 'Casamento', texto: 'Nossa festa ficou registrada de um jeito incrível. Os vídeos têm qualidade de produtora grande. Muito obrigado!' },
  { nome: 'Patrícia L.', evento: 'Chá de Bebê', texto: 'Perfeita! Atenciosa e muito profissional. Os stories ficaram lindos e saíram na mesma hora. Amei!' },
]

const hashtags = ['#StoryMaker','#StoryMakerUmuarama','#UmuaramaPR','#CasamentoUmuarama','#FormaturaUmuarama','#EventosUmuarama','#ReelsUmuarama','#TikTokUmuarama','#CoberturaDeEventos','#ConteudoViral','#GirotoStoryMaker','#NoroesteParana','#EventosPR','#StoriesProfissionais','#MakingOf','#VideosProfissionais','#EternasMomentos','#BastidoresDoEvento','#UmuaramaParana','#InstagramUmuarama']

export default function PaginaServico({ params }: Props) {
  const pagina = getPaginaBySlug(params.slug)
  if (!pagina) notFound()
  const faqs = getFaqs(pagina)
  const artigo = getArtigo(pagina)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: pagina.title, provider: { '@type': 'LocalBusiness', name: 'Giroto Story Maker', telephone: '+55-44-98438-3013', address: { '@type': 'PostalAddress', addressLocality: 'Umuarama', addressRegion: 'PR', addressCountry: 'BR' }, geo: { '@type': 'GeoCoordinates', latitude: -23.7667, longitude: -53.3167 }, url: SITE } },
      { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh' }}>
        <nav style={{ background: 'rgba(10,8,6,0.95)', borderBottom: '1px solid rgba(212,168,67,0.2)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #d4a843', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843', fontWeight: 700 }}>G</div>
            <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Giroto</div><div style={{ color: '#d4a843', fontSize: 10, letterSpacing: 2 }}>STORY MAKER</div></div>
          </a>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13, border: '1px solid #d4a843', padding: '6px 14px', borderRadius: 20 }}>← Início</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '8px 16px', borderRadius: 20, textDecoration: 'none', fontSize: 13, fontWeight: 700 }}>WhatsApp</a>
          </div>
        </nav>
        <section style={{ background: 'linear-gradient(135deg,#1c1610 0%,#0a0806 60%)', padding: '60px 24px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ color: '#d4a843', fontSize: 12, fontWeight: 600, letterSpacing: 2 }}>STORY MAKER EM UMUARAMA PR</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem,5vw,3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>{pagina.title}</h1>
            <p style={{ color: '#aaa', fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 30px' }}>Cobertura digital profissional para o seu {pagina.evento} em {pagina.local}. Stories e Reels prontos em tempo real.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#d4a843', color: '#0a0806', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>💬 Solicitar Orçamento</a>
              <a href={IG} target="_blank" rel="noopener noreferrer" style={{ border: '2px solid #d4a843', color: '#d4a843', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>📸 Ver no Instagram</a>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)', aspectRatio: '4/5' }}>
            <img src="/fotos/foto5.jpg" alt={`Giroto Story Maker - ${pagina.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Por que escolher a Giroto Story Maker?</h2>
            {([['📱','Entrega em Tempo Real',`Stories do seu ${pagina.evento} prontos enquanto a festa acontece`],['✨','Qualidade Profissional','iPhone profissional, LED portátil e edição com músicas tendência'],['⚡','Conteúdo Viral','Vídeos criados para engajar no Instagram e TikTok'],['🗺️','Atende Toda a Região',`${pagina.local} e municípios do Noroeste do Paraná`],['💎','Experiência Comprovada','Mais de 300 eventos cobertos com 5 estrelas']] as [string,string,string][]).map(([icon,title,desc]) => (
              <div key={title} style={{ display: 'flex', gap: 14, marginBottom: 16, background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.1)', borderRadius: 12, padding: 16 }}>
                <span style={{ fontSize: 24 }}>{icon}</span>
                <div><div style={{ color: '#d4a843', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{title}</div><div style={{ color: '#999', fontSize: 13 }}>{desc}</div></div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: '#111', padding: '50px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 24, borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>{pagina.title}: Tudo que Você Precisa Saber</h2>
            {artigo.split('\n\n').map((par, i) => <p key={i} style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20 }}>{par}</p>)}
          </div>
        </section>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 20, textAlign: 'center' }}>
            {([['300+','Eventos Realizados'],['100%','Entrega ao Vivo'],['5★','Avaliação Média'],['3','Cidades Atendidas']] as [string,string][]).map(([num,label]) => (
              <div key={label} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 16, padding: '24px 16px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#d4a843' }}>{num}</div>
                <div style={{ color: '#999', fontSize: 13 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: '#111', padding: '50px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 36 }}>O Que Nossos Clientes Dizem</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
              {depoimentos.map((d,i) => (
                <div key={i} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 16, padding: 24 }}>
                  <div style={{ color: '#d4a843', fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                  <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{d.texto}"</p>
                  <div style={{ color: '#d4a843', fontWeight: 700, fontSize: 13 }}>{d.nome}</div>
                  <div style={{ color: '#777', fontSize: 12 }}>{d.evento} em Umuarama PR</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '50px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 36 }}>Perguntas Frequentes</h2>
          {faqs.map((faq,i) => (
            <div key={i} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12, padding: 20, marginBottom: 12 }}>
              <div style={{ color: '#d4a843', fontWeight: 700, marginBottom: 8 }}>❓ {faq.q}</div>
              <div style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
            </div>
          ))}
        </section>
        <section style={{ background: '#111', padding: '30px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {hashtags.map(h => <span key={h} style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)', color: '#d4a843', padding: '4px 12px', borderRadius: 20, fontSize: 12 }}>{h}</span>)}
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Pronto para Contratar?</h2>
          <p style={{ color: '#999', marginBottom: 30 }}>Entre em contato e garanta a data do seu {pagina.evento} em {pagina.local}!</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '16px 32px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fff', padding: '16px 32px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>📸 Instagram</a>
          </div>
        </section>
        <footer style={{ background: '#050403', borderTop: '1px solid rgba(212,168,67,0.15)', padding: '30px 24px', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: 13 }}>© 2025 Giroto Story Maker · Umuarama PR</p>
          <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13, display: 'inline-block', marginTop: 8 }}>← Voltar à Página Inicial</a>
        </footer>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 24, right: 24, background: '#25d366', color: '#fff', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 100 }}>💬</a>
      </div>
    </>
  )
}
