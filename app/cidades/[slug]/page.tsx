import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPaginaCidadeBySlug, paginasCidades } from '@/data/paginas_cidades'

const WA = 'https://wa.me/5544984383013'
const IG = 'https://instagram.com/giroto_storymaker'
const TT = 'https://www.tiktok.com/@girotostorymaker'
const FB = 'https://www.facebook.com/people/Giroto-Story-Maker/61571625703393/'
const SITE = 'https://www.eternamoments.com.br'
const ENDERECO = 'Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return paginasCidades.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPaginaCidadeBySlug(params.slug)
  if (!p) return {}
  const desc = `${p.title} — Vânia Giroto, profissional especializada em cobertura de eventos em ${p.cidade} PR e região. Atendemos ${p.cidade} e toda a região Noroeste do Paraná. Solicite orçamento!`
  return {
    title: `${p.title} | Giroto Story Maker`,
    description: desc,
    keywords: `${p.titulo_tipo.toLowerCase()} ${p.cidade.toLowerCase()}, ${p.titulo_tipo.toLowerCase()} ${p.cidade.toLowerCase()} pr, giroto story maker, cobertura eventos ${p.cidade.toLowerCase()}`,
    alternates: { canonical: `${SITE}/cidades/${p.slug}` },
    openGraph: { title: p.title, description: desc, images: [{ url: `${SITE}/fotos/foto5.jpg` }] },
  }
}

function getDescricoes(p: { titulo_tipo: string; cidade: string }) {
  const { titulo_tipo: t, cidade: c } = p
  return [
    { titulo: `${t} Profissional em ${c}`, desc: `Serviço de ${t.toLowerCase()} profissional em ${c} PR com entrega em tempo real. Vânia Giroto atende ${c} e toda a região Noroeste do Paraná com qualidade e pontualidade garantidas.` },
    { titulo: `Cobertura Completa em ${c}`, desc: `Cobertura audiovisual completa para casamentos, formaturas e eventos em ${c} PR. Stories, Reels e vídeos editados durante o evento para você publicar nas redes sociais na hora.` },
    { titulo: `Entrega em Tempo Real em ${c}`, desc: `O grande diferencial do nosso serviço em ${c} é a entrega em tempo real. Enquanto a festa acontece, o conteúdo já fica pronto para você compartilhar com família e amigos.` },
    { titulo: `Qualidade Profissional em ${c}`, desc: `Equipamentos profissionais de última geração — iPhone com estabilizador, LED portátil e microfone direcional — para garantir qualidade impecável em qualquer evento em ${c} PR.` },
    { titulo: `Atendimento Personalizado em ${c}`, desc: `Cada evento em ${c} é único e merece uma cobertura especial. Trabalhamos de forma personalizada, entendendo a história de cada cliente para criar conteúdo que emocione.` },
    { titulo: `${t} para Casamento em ${c}`, desc: `Especialistas em cobertura de casamentos em ${c} PR. Do making-of ao beijo do casal, cada momento especial é capturado e editado com muito carinho e profissionalismo.` },
  ]
}

function getArtigos(p: { titulo_tipo: string; cidade: string; title: string }) {
  const { titulo_tipo: t, cidade: c } = p
  return {
    a1_titulo: `Por Que Contratar ${t} em ${c} PR?`,
    a1: `Contratar um serviço de ${t.toLowerCase()} profissional em ${c} PR é um investimento que faz toda a diferença para tornar seu evento inesquecível. A Giroto Story Maker atende ${c} e toda a região Noroeste do Paraná, oferecendo cobertura audiovisual de alta qualidade com entrega em tempo real.

Vânia Giroto é referência em ${t.toLowerCase()} na região, atendendo cidades como Umuarama, ${c}, Perobal, Maria Helena, Iporã e dezenas de outras cidades do Noroeste do Paraná. Com anos de experiência e centenas de eventos cobertos, cada trabalho é tratado com atenção aos detalhes e muito carinho.

O diferencial do serviço em ${c} está na combinação de qualidade profissional com entrega ágil. Utilizamos iPhone com estabilizador, iluminação LED portátil e microfone direcional para garantir imagens e áudio perfeitos em qualquer condição. E o melhor: enquanto a festa acontece, o conteúdo já fica pronto para publicar!`,
    a2_titulo: `Como Funciona o ${t} em ${c}?`,
    a2: `O processo é simples e transparente. Primeiro, você entra em contato pelo WhatsApp informando a data e tipo do evento em ${c} PR. Recebemos seu contato rapidamente e enviamos um orçamento personalizado.

Após a confirmação, assinamos um contrato com todos os detalhes do serviço e a data fica reservada exclusivamente para você. No dia do evento em ${c}, chegamos com antecedência para conhecer o espaço e começar a capturar os primeiros bastidores.

Durante todo o evento, estamos presentes capturando os melhores momentos e editando em tempo real. Você recebe stories e reels prontos para publicar enquanto a festa ainda está acontecendo. Para clientes de ${c} e região, também realizamos reunião prévia online ou presencial para alinhar expectativas e estilo do conteúdo.`
  }
}

const faqs_base = (cidade: string, tipo: string) => [
  { q: `A Giroto Story Maker atende em ${cidade}?`, a: `Sim! Atendemos ${cidade} PR e toda a região Noroeste do Paraná, incluindo Umuarama, Perobal, Maria Helena, Iporã, Altônia, Xambrê e municípios vizinhos. Entre em contato para verificar disponibilidade e condições de deslocamento.` },
  { q: `Quanto custa ${tipo.toLowerCase()} em ${cidade}?`, a: `O valor varia de acordo com o tipo de evento, duração e serviços incluídos. Entre em contato pelo WhatsApp para receber um orçamento personalizado para o seu evento em ${cidade} PR.` },
  { q: `Com quanto tempo de antecedência devo contratar?`, a: `Recomendamos contratar com pelo menos 30 dias de antecedência para garantir a data em ${cidade}. Em períodos de alta demanda como dezembro e janeiro, o ideal é reservar com 60 a 90 dias.` },
  { q: `O conteúdo fica pronto no dia do evento?`, a: `Sim! Nossa especialidade é a entrega em tempo real. Durante seu evento em ${cidade}, os stories e reels já são editados e entregues para você publicar nas redes sociais enquanto a festa acontece.` },
  { q: `Quais tipos de eventos vocês atendem em ${cidade}?`, a: `Atendemos casamentos, formaturas, festas de 15 anos, aniversários, chá de bebê, chá revelação, noivados, eventos corporativos e qualquer celebração especial em ${cidade} PR e região.` },
  { q: `Como entrar em contato para ${cidade}?`, a: `Entre em contato pelo WhatsApp (44) 98438-3013, Instagram @giroto_storymaker ou pelo formulário do site. Respondemos rapidamente com orçamento personalizado para seu evento em ${cidade}.` },
]

const depoimentos = [
  { nome: 'Valmira Bruna', texto: 'Uma profissional incrível com um trabalho impecável, com fotos e vídeos lindos e cheios de sensibilidade!', evento: 'Casamento' },
  { nome: "L'umière Assessoria", texto: 'Minhas experiências com a Vânia sempre foram extremamente positivas! É sempre um prazer indicar o trabalho dela.', evento: 'Eventos' },
  { nome: 'Ivonice da Silva Souza', texto: 'Uma profissional incrível!! Trabalho impecável, feito com amor.', evento: 'Casamento' },
  { nome: 'merynhaap', texto: 'Muito obrigado pela confiança em registrar esse momento tão especial. Foi um prazer fazer parte do casamento.', evento: 'Casamento' },
]

const cards = (cidade: string, tipo: string) => [
  { icon: '📱', titulo: 'Stories ao Vivo', desc: `Stories editados durante o evento em ${cidade} para publicar na hora` },
  { icon: '🎬', titulo: 'Reels Profissionais', desc: 'Reels com músicas tendência e transições modernas' },
  { icon: '✨', titulo: 'Edição Criativa', desc: 'Cor grading, textos e efeitos personalizados para cada evento' },
  { icon: '📍', titulo: `Atende ${cidade}`, desc: `Cobertura em ${cidade} PR e toda a região Noroeste do Paraná` },
  { icon: '⚡', titulo: 'Entrega Rápida', desc: 'Conteúdo pronto enquanto a festa ainda está acontecendo' },
  { icon: '💎', titulo: 'Qualidade Premium', desc: 'iPhone profissional, LED portátil e microfone direcional' },
]

const hashtags = (cidade: string) => [
  `#StoryMaker${cidade.replace(/ /g,'')}`, `#${cidade.replace(/ /g,'')}PR`, '#StoryMakerUmuarama',
  '#UmuaramaPR', '#NoroesteParana', '#CasamentoPR', '#EventosPR',
  '#GirotoStoryMaker', '#VaniaGiroto', '#CoberturadeEventos',
  '#ReelsCasamento', '#StoriesAoVivo', '#VideomakerPR',
  '#CasamentoParana', '#FormaturaParana', '#ContentCreator',
  '#InstagramCasamento', '#TikTokCasamento', '#MomentosEternos', '#EternasMomentos'
]

export default function PaginaCidade({ params }: Props) {
  const pagina = getPaginaCidadeBySlug(params.slug)
  if (!pagina) notFound()

  const descricoes = getDescricoes(pagina)
  const artigos = getArtigos(pagina)
  const faqs = faqs_base(pagina.cidade, pagina.titulo_tipo)
  const cardsData = cards(pagina.cidade, pagina.tipo)
  const tags = hashtags(pagina.cidade)

  const schema: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Giroto Story Maker',
        description: `${pagina.titulo_tipo} profissional em ${pagina.cidade} PR`,
        telephone: '+55-44-98438-3013',
        url: SITE,
        image: `${SITE}/fotos/foto5.jpg`,
        address: { '@type': 'PostalAddress', streetAddress: 'Rua Amadeu Boggio Melo, 925', addressLocality: 'Umuarama', addressRegion: 'PR', postalCode: '87506-450', addressCountry: 'BR' },
        geo: { '@type': 'GeoCoordinates', latitude: -23.7667, longitude: -53.3167 },
        areaServed: { '@type': 'City', name: pagina.cidade, containedInPlace: { '@type': 'State', name: 'Paraná' } },
        sameAs: [IG, TT, FB],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
      }
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
        <section style={{ background: 'linear-gradient(135deg,#1c1610 0%,#0a0806 70%)', padding: '60px 24px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(212,168,67,0.04)', filter: 'blur(60px)', animation: 'pulse 3s infinite' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(212,168,67,0.03)', filter: 'blur(40px)', animation: 'pulse 4s infinite' }} />
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-block', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ color: '#d4a843', fontSize: 12, fontWeight: 600, letterSpacing: 2 }}>📍 {pagina.cidade.toUpperCase()} PR · NOROESTE DO PARANÁ</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem,5vw,3.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>{pagina.title}</h1>
            <p style={{ color: '#aaa', fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: '0 auto 12px' }}>
              Vânia Giroto — {pagina.titulo_tipo} profissional atendendo {pagina.cidade} PR e toda a região Noroeste do Paraná.
            </p>
            <p style={{ color: '#666', fontSize: 13, marginBottom: 30 }}>📍 {ENDERECO}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#d4a843', color: '#0a0806', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>💬 Solicitar Orçamento</a>
              <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>📸 Instagram</a>
              <a href={TT} target="_blank" rel="noopener noreferrer" style={{ background: '#000', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>🎵 TikTok</a>
            </div>
          </div>
        </section>

        {/* FOTO + INFO */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)', aspectRatio: '4/5', position: 'relative' }}>
            <img src="/fotos/foto5.jpg" alt={`Vânia Giroto - ${pagina.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
              <div style={{ color: '#d4a843', fontWeight: 700, fontSize: 15 }}>Vânia Giroto</div>
              <div style={{ color: '#999', fontSize: 12 }}>{pagina.titulo_tipo} · {pagina.cidade} PR</div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 20 }}>Por que escolher a Giroto Story Maker em {pagina.cidade}?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['⭐','Avaliação 5 Estrelas','Clientes de toda a região Noroeste do Paraná aprovam'],['📍',`Atende ${pagina.cidade}`,'Cobertura em toda a região sem custo adicional'],['⚡','Entrega em Tempo Real','Conteúdo pronto enquanto a festa acontece'],['📱','iPhone Profissional','Equipamentos de última geração para qualidade impecável'],['🎵','Músicas Tendência','Trilha sonora atual para viralizar nas redes sociais'],['💬','Suporte WhatsApp',`Atendimento rápido para clientes de ${pagina.cidade} e região`]].map(([icon,titulo,desc]) => (
                <div key={String(titulo)} style={{ display: 'flex', gap: 12, background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.1)', borderRadius: 12, padding: '12px 16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                  <div><div style={{ color: '#d4a843', fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{titulo}</div><div style={{ color: '#888', fontSize: 12 }}>{desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 DESCRIÇÕES */}
        <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{pagina.titulo_tipo} em {pagina.cidade} PR</h2>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: 36 }}>Serviço profissional com qualidade garantida</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
              {descricoes.map((d,i) => (
                <div key={i} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.12)', borderRadius: 16, padding: 24, transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <h3 style={{ color: '#d4a843', fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{d.titulo}</h3>
                  <p style={{ color: '#999', fontSize: 13, lineHeight: 1.7 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 CARDS */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 36 }}>O Que Está Incluído</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {cardsData.map((c,i) => (
              <div key={i} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 16, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{c.titulo}</h3>
                <p style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTIGOS */}
        <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 24, borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>{artigos.a1_titulo}</h2>
            {artigos.a1.split('\n\n').map((par,i) => <p key={i} style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>{par}</p>)}
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', margin: '40px 0 24px', borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>{artigos.a2_titulo}</h2>
            {artigos.a2.split('\n\n').map((par,i) => <p key={i} style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>{par}</p>)}
          </div>
        </section>

        {/* STATS */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 16, textAlign: 'center' }}>
            {[['300+','Eventos'],['5★','Avaliação'],['24','Cidades'],['100%','Ao Vivo']].map(([n,l]) => (
              <div key={l} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 14, padding: '20px 12px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d4a843' }}>{n}</div>
                <div style={{ color: '#888', fontSize: 12, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 36 }}>Avaliações dos Clientes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
              {depoimentos.map((d,i) => (
                <div key={i} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 16, padding: 24 }}>
                  <div style={{ color: '#d4a843', fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                  <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{d.texto}"</p>
                  <div style={{ color: '#d4a843', fontWeight: 700, fontSize: 13 }}>{d.nome}</div>
                  <div style={{ color: '#777', fontSize: 12 }}>{d.evento} · Noroeste do Paraná</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '50px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 36 }}>Perguntas Frequentes — {pagina.cidade}</h2>
          {faqs.map((f,i) => (
            <div key={i} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 12, padding: 20, marginBottom: 12 }}>
              <div style={{ color: '#d4a843', fontWeight: 700, marginBottom: 8, fontSize: 14 }}>❓ {f.q}</div>
              <div style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7 }}>{f.a}</div>
            </div>
          ))}
        </section>

        {/* REDES SOCIAIS */}
        <section style={{ background: 'linear-gradient(135deg,#833ab4 0%,#fd1d1d 50%,#fcb045 100%)', padding: '40px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Siga nas Redes Sociais</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 24 }}>Veja bastidores de eventos em {pagina.cidade} e região</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#833ab4', padding: '12px 24px', borderRadius: 25, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>📸 Instagram</a>
              <a href={TT} target="_blank" rel="noopener noreferrer" style={{ background: '#000', color: '#fff', padding: '12px 24px', borderRadius: 25, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>🎵 TikTok</a>
              <a href={FB} target="_blank" rel="noopener noreferrer" style={{ background: '#1877f2', color: '#fff', padding: '12px 24px', borderRadius: 25, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>👤 Facebook</a>
            </div>
          </div>
        </section>

        {/* HASHTAGS */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 24px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {tags.map(h => <span key={h} style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)', color: '#d4a843', padding: '4px 12px', borderRadius: 20, fontSize: 12 }}>{h}</span>)}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Agende em {pagina.cidade}!</h2>
            <p style={{ color: '#999', marginBottom: 8 }}>Giroto Story Maker · Noroeste do Paraná</p>
            <p style={{ color: '#666', fontSize: 13, marginBottom: 28 }}>📍 {ENDERECO}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp</a>
              <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>📸 Instagram</a>
            </div>
          </div>
        </section>

        <footer style={{ background: '#050403', borderTop: '1px solid rgba(212,168,67,0.15)', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: '#444', fontSize: 12 }}>© 2025 Giroto Story Maker · Vânia Giroto · Umuarama PR · Atende {pagina.cidade} e região</p>
          <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, display: 'inline-block', marginTop: 6 }}>← Voltar ao Início</a>
        </footer>

        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 24, right: 24, background: '#25d366', color: '#fff', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 100 }}>💬</a>
      </div>
    </>
  )
}
// v1779398125
