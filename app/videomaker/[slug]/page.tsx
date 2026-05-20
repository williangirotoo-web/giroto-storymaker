import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPaginaVideoBySlug, paginasVideo } from '@/data/paginas_video'

const WA = 'https://wa.me/5544984383013'
const IG = 'https://instagram.com/giroto_storymaker'
const TT = 'https://www.tiktok.com/@girotostorymaker'
const SITE = 'https://www.eternamoments.com.br'
const ENDERECO = 'Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return paginasVideo.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPaginaVideoBySlug(params.slug)
  if (!p) return {}
  const desc = `${p.title} — Vânia Giroto, videomaker e story maker profissional em Umuarama PR. Filmagem, edição e entrega de vídeos para casamentos e eventos. Solicite orçamento!`
  return {
    title: `${p.title} | Giroto Story Maker`,
    description: desc,
    keywords: `${p.kw}, videomaker umuarama, filmagem casamento umuarama pr, vania giroto, giroto story maker`,
    alternates: { canonical: `${SITE}/videomaker/${p.slug}` },
    openGraph: { title: p.title, description: desc, images: [{ url: `${SITE}/fotos/foto5.jpg` }] },
  }
}

const cards = [
  { icon: '🎬', titulo: 'Filmagem Profissional', desc: 'Câmeras profissionais e iPhone com estabilizador para vídeos nítidos e cinematográficos em qualquer evento.' },
  { icon: '✂️', titulo: 'Edição Criativa', desc: 'Edição com músicas tendência, transições modernas, cor grading e textos personalizados para cada evento.' },
  { icon: '📱', titulo: 'Entrega em Tempo Real', desc: 'Stories e Reels editados e entregues ainda durante o evento para você publicar nas redes sociais na hora.' },
  { icon: '🎵', titulo: 'Trilha Sonora Especial', desc: 'Músicas selecionadas a dedo para cada momento — do making-of ao beijo do casal.' },
  { icon: '📺', titulo: 'Vídeo Final Completo', desc: 'Vídeo completo do evento editado com todos os melhores momentos, entregue em até 7 dias.' },
  { icon: '🌐', titulo: 'Conteúdo para Redes Sociais', desc: 'Versões otimizadas para Instagram, TikTok, WhatsApp e YouTube — cada formato no tamanho ideal.' },
]

const faqs = [
  { q: 'O que é videomaker para casamento?', a: 'O videomaker é o profissional responsável por filmar e editar vídeos do seu evento. A Giroto Story Maker oferece filmagem profissional com entrega de conteúdo em tempo real para redes sociais E vídeo completo do evento.' },
  { q: 'Qual a diferença entre videomaker e story maker?', a: 'O story maker foca em conteúdo curto para redes sociais (stories, reels) entregue em tempo real. O videomaker produz o vídeo completo do evento com edição cinematográfica. A Vânia Giroto oferece os dois serviços.' },
  { q: 'A Giroto Story Maker atende casamentos fora de Umuarama?', a: 'Sim! Atendemos toda a região Noroeste do Paraná, incluindo Alto Paraná, Cianorte, Paranavaí e municípios vizinhos. Consulte disponibilidade e condições de deslocamento.' },
  { q: 'Quanto tempo demora para receber o vídeo do casamento?', a: 'Os stories e reels são entregues em tempo real durante o evento. O vídeo completo editado é entregue em até 7 dias após o casamento.' },
  { q: 'Quais equipamentos são usados na filmagem?', a: 'Utilizamos iPhone com estabilizador profissional, iluminação de LED portátil, microfone direcional e drone quando solicitado. Tudo para garantir qualidade cinematográfica.' },
  { q: 'Como contratar videomaker em Umuarama PR?', a: 'Entre em contato pelo WhatsApp ou Instagram. Respondemos rapidamente e fornecemos orçamento personalizado para o seu evento em Umuarama PR e região.' },
]

const depoimentos = [
  { nome: 'Valmira Bruna', texto: 'Uma profissional incrível com um trabalho impecável, com fotos e vídeos lindos e cheios de sensibilidade!', evento: 'Casamento' },
  { nome: "L'umière Assessoria", texto: 'Minhas experiências com a Vânia sempre foram extremamente positivas! É sempre um prazer indicar o trabalho dela.', evento: 'Eventos' },
  { nome: 'Ivonice da Silva Souza', texto: 'Uma profissional incrível!! Trabalho impecável, feito com amor.', evento: 'Casamento' },
  { nome: 'merynhaap', texto: 'Muito obrigado pela confiança em registrar esse momento tão especial ✨ Foi um prazer fazer parte do casamento.', evento: 'Casamento' },
]

const hashtags = ['#VideomakerUmuarama','#FilmagemCasamentoUmuarama','#VideomakerPR','#CasamentoUmuarama','#UmuaramaPR','#VideomakerProfissional','#FilmagemProfissional','#VaniaGiroto','#GirotoStoryMaker','#VideoEmocional','#CinegrafistUmuarama','#ReelsUmuarama','#TikTokCasamento','#VideoInstagram','#NoroestePR','#VideoCasamento','#EdicaoVideo','#FilmagemEvento','#VideoMakingOf','#MomentosEternos']

export default function PaginaVideomaker({ params }: Props) {
  const pagina = getPaginaVideoBySlug(params.slug)
  if (!pagina) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: pagina.title, description: `${pagina.title} em Umuarama PR`, provider: { '@type': 'LocalBusiness', name: 'Giroto Story Maker', telephone: '+55-44-98438-3013', address: { '@type': 'PostalAddress', streetAddress: 'Rua Amadeu Boggio Melo, 925', addressLocality: 'Umuarama', addressRegion: 'PR', postalCode: '87506-450', addressCountry: 'BR' }, geo: { '@type': 'GeoCoordinates', latitude: -23.7667, longitude: -53.3167 }, url: SITE } },
      { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh' }}>

        {/* NAV */}
        <nav style={{ background: 'rgba(10,8,6,0.95)', borderBottom: '1px solid rgba(212,168,67,0.2)', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#f0d080,#d4a843)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#0a0806', fontSize: 16 }}>G</div>
            <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Giroto</div><div style={{ color: '#d4a843', fontSize: 9, letterSpacing: 2 }}>STORY MAKER</div></div>
          </a>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, border: '1px solid rgba(212,168,67,0.3)', padding: '5px 12px', borderRadius: 20 }}>← Início</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '6px 14px', borderRadius: 20, textDecoration: 'none', fontSize: 12, fontWeight: 700 }}>WhatsApp</a>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg,#1a0808 0%,#0a0806 70%)', padding: '60px 24px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(212,68,67,0.05)', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(212,168,67,0.05)', filter: 'blur(40px)' }} />
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-block', background: 'rgba(212,68,67,0.15)', border: '1px solid rgba(212,68,67,0.4)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ color: '#e05050', fontSize: 12, fontWeight: 600, letterSpacing: 2 }}>🎬 VIDEOMAKER EM UMUARAMA PR</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem,5vw,3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>{pagina.title}</h1>
            <p style={{ color: '#aaa', fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: '0 auto 12px' }}>Vânia Giroto — Videomaker e Story Maker profissional em Umuarama PR. Filmagem, edição e entrega de vídeos para casamentos e eventos.</p>
            <p style={{ color: '#666', fontSize: 13, marginBottom: 30 }}>📍 {ENDERECO}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#d4a843', color: '#0a0806', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>🎬 Solicitar Orçamento</a>
              <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>📸 Ver no Instagram</a>
              <a href={TT} target="_blank" rel="noopener noreferrer" style={{ background: '#000', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>🎵 Ver no TikTok</a>
            </div>
          </div>
        </section>

        {/* FOTO + SOBRE */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)', aspectRatio: '4/5', position: 'relative' }}>
            <img src="/fotos/foto5.jpg" alt={`Vânia Giroto - ${pagina.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
              <div style={{ color: '#d4a843', fontWeight: 700, fontSize: 15 }}>Vânia Giroto</div>
              <div style={{ color: '#999', fontSize: 12 }}>Videomaker & Story Maker · Umuarama PR</div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Videomaker Profissional em Umuarama PR</h2>
            <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
              Vânia Giroto é videomaker e story maker profissional em Umuarama PR. Com equipamentos de última geração e olhar artístico apurado, ela transforma cada evento em uma obra audiovisual inesquecível — filmes que emocionam e conteúdo que viraliza nas redes sociais.
            </p>
            <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24, fontSize: 15 }}>
              Trabalhando em parceria com o Studio Foto Danielle, oferece o pacote mais completo de cobertura de eventos de Umuarama PR: fotografia profissional + filmagem + story maker para redes sociais. Tudo em um único contrato, com um resultado extraordinário.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[['🎬','Filmagem Profissional'],['📱','Entrega em Tempo Real'],['✂️','Edição Criativa'],['🎵','Trilha Especial']].map(([icon,label]) => (
                <div key={String(label)} style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#d4a843' }}>{icon} {label}</div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 CARDS */}
        <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Serviços de Videomaker</h2>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: 36 }}>Cobertura audiovisual completa para seu evento em Umuarama PR</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {cards.map((c,i) => (
                <div key={i} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 16, padding: 24, transition: 'all 0.3s' }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{c.titulo}</h3>
                  <p style={{ color: '#999', fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTIGO 1 */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '50px 24px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 24, borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>{pagina.title}: Por Que Contratar?</h2>
          <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20 }}>O {pagina.title.toLowerCase()} é um dos investimentos mais importantes para quem quer guardar memórias inesquecíveis do seu evento em Umuarama PR. Com a Giroto Story Maker, você tem a garantia de qualidade profissional, equipamentos modernos e entrega em tempo real para suas redes sociais.</p>
          <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20 }}>Vânia Giroto atua com iPhone profissional com estabilizador, iluminação de LED portátil e microfone direcional, garantindo vídeos nítidos e com áudio limpo mesmo em ambientes com pouca luz ou muito barulho. Cada evento é tratado com atenção aos detalhes e muito carinho.</p>
          <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20 }}>A grande diferença da Giroto Story Maker está na entrega em tempo real: enquanto a festa acontece, os stories e reels já são editados e entregues para você publicar nas redes sociais. Isso cria um engajamento orgânico enorme e faz com que o seu evento seja comentado por muito mais pessoas.</p>

          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', margin: '40px 0 24px', borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>Como Funciona o Serviço de {pagina.title}?</h2>
          <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20 }}>O processo é simples: você entra em contato pelo WhatsApp, informa a data e tipo do evento, e recebe um orçamento personalizado. Após a confirmação e assinatura do contrato, a data fica reservada exclusivamente para você.</p>
          <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20 }}>No dia do evento, a Vânia chega com antecedência para entender o roteiro, conhecer o espaço e começar a capturar os primeiros bastidores. Durante todo o evento, ela estará presente capturando os melhores momentos e editando em tempo real para entrega imediata.</p>
          <p style={{ color: '#bbb', lineHeight: 1.8 }}>Após o evento, você recebe o vídeo completo editado com trilha sonora especial, cor grading profissional e todos os melhores momentos selecionados com cuidado. Um presente eterno para você, sua família e seus convidados.</p>
        </section>

        {/* STATS */}
        <section style={{ background: '#111', padding: '40px 24px', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 20, textAlign: 'center' }}>
            {[['300+','Eventos Filmados'],['100%','Entrega ao Vivo'],['5★','Avaliação Média'],['7 dias','Vídeo Final']].map(([num,label]) => (
              <div key={label} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 16, padding: '24px 16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d4a843' }}>{num}</div>
                <div style={{ color: '#999', fontSize: 13 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 36 }}>O Que Dizem Nossos Clientes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {depoimentos.map((d,i) => (
              <div key={i} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 16, padding: 24 }}>
                <div style={{ color: '#d4a843', fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{d.texto}"</p>
                <div style={{ color: '#d4a843', fontWeight: 700, fontSize: 13 }}>{d.nome}</div>
                <div style={{ color: '#777', fontSize: 12 }}>{d.evento} · Umuarama PR</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 36 }}>Perguntas Frequentes</h2>
            {faqs.map((f,i) => (
              <div key={i} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: '#d4a843', fontWeight: 700, marginBottom: 8 }}>❓ {f.q}</div>
                <div style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HASHTAGS */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 24px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {hashtags.map(h => <span key={h} style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)', color: '#d4a843', padding: '4px 12px', borderRadius: 20, fontSize: 12 }}>{h}</span>)}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Agende seu Evento!</h2>
            <p style={{ color: '#999', marginBottom: 8 }}>Giroto Story Maker · Videomaker Umuarama PR</p>
            <p style={{ color: '#666', fontSize: 13, marginBottom: 28 }}>📍 {ENDERECO}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp</a>
              <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>📸 Instagram</a>
              <a href={TT} target="_blank" rel="noopener noreferrer" style={{ background: '#000', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>🎵 TikTok</a>
            </div>
          </div>
        </section>

        <footer style={{ background: '#050403', borderTop: '1px solid rgba(212,168,67,0.15)', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: '#444', fontSize: 12 }}>© 2025 Giroto Story Maker · Vânia Giroto · Videomaker Umuarama PR</p>
          <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, display: 'inline-block', marginTop: 6 }}>← Voltar ao Início</a>
        </footer>

        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 24, right: 24, background: '#25d366', color: '#fff', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 100 }}>💬</a>
      </div>
    </>
  )
}
