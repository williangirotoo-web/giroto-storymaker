import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPaginaFotoBySlug, paginasFoto } from '@/data/paginas_foto'

const WA = 'https://wa.me/5544984383013'
const IG = 'https://instagram.com/giroto_storymaker'
const SITE = 'https://www.eternamoments.com.br'
const ENDERECO = 'Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return paginasFoto.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPaginaFotoBySlug(params.slug)
  if (!p) return {}
  const desc = `Contrate o melhor ${p.servico} para ${p.evento} em ${p.local}. Studio Foto Danielle — Cícero Giroto, 40 anos de experiência em fotografia profissional em Umuarama PR. Solicite orçamento!`
  return {
    robots: { index: false, follow: true },
    title: `${p.title} | Studio Foto Danielle`,
    description: desc,
    keywords: `${p.servico}, ${p.evento}, ${p.local}, fotógrafo umuarama, studio foto danielle, cicero giroto`,
    alternates: { canonical: `${SITE}/fotografo/${p.slug}` },
    openGraph: { title: `${p.title} | Studio Foto Danielle`, description: desc, images: [{ url: `${SITE}/fotos/casal.jpg` }] },
  }
}

function getArtigo(p: { evento: string; servico: string; local: string }) {
  return [
    `O ${p.servico} para ${p.evento} em ${p.local} do Studio Foto Danielle é referência em qualidade e tradição. Com mais de 40 anos de experiência, Cícero Giroto é o fotógrafo mais experiente de Umuarama PR, tendo registrado milhares de momentos inesquecíveis para famílias de toda a região.`,
    `Cada ${p.evento} é único e merece ser fotografado com sensibilidade e técnica. O Studio Foto Danielle utiliza equipamentos profissionais de última geração para garantir fotos nítidas, bem iluminadas e com composições artísticas que contam a história do seu evento com emoção e beleza.`,
    `O diferencial do ${p.servico} para ${p.evento} em ${p.local} está na experiência acumulada em 40 anos de trabalho. Cícero Giroto conhece cada detalhe que faz a diferença em uma foto — o ângulo perfeito, a luz ideal, o momento exato. Cada clique é uma obra de arte que preserva sua memória para sempre.`,
    `Além da fotografia, o Studio Foto Danielle oferece um serviço completo que inclui edição profissional, álbum impresso de alta qualidade e entrega digital de todas as fotos. Trabalhamos em parceria com a Giroto Story Maker para oferecer cobertura completa do seu evento — fotos profissionais E conteúdo para redes sociais em tempo real.`,
    `Atendemos ${p.local} e toda a região Noroeste do Paraná. Nosso estúdio fica na Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR. Entre em contato pelo WhatsApp e garante a data do seu ${p.evento}!`,
  ].join('\n\n')
}

function getFaqs(p: { evento: string; servico: string; local: string }) {
  return [
    { q: `Quantos anos de experiência tem o fotógrafo do Studio Foto Danielle?`, a: `Cícero Giroto tem mais de 40 anos de experiência em fotografia profissional em Umuarama PR, sendo um dos fotógrafos mais experientes e respeitados da região Noroeste do Paraná.` },
    { q: `O Studio Foto Danielle atende ${p.evento} em ${p.local}?`, a: `Sim! Atendemos ${p.local} e toda a região Noroeste do Paraná. Entre em contato pelo WhatsApp para verificar disponibilidade e condições de deslocamento.` },
    { q: `Quanto tempo demora para receber as fotos do ${p.evento}?`, a: `As fotos editadas são entregues em até 30 dias após o evento. Para casos especiais com urgência, consulte nossa disponibilidade pelo WhatsApp.` },
    { q: `O Studio Foto Danielle trabalha com Story Maker também?`, a: `Sim! Trabalhamos em parceria com a Giroto Story Maker para oferecer cobertura completa — fotografia profissional para álbum eterno E stories/reels para redes sociais em tempo real durante o evento.` },
    { q: `Qual o endereço do Studio Foto Danielle?`, a: `Nosso estúdio fica na Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR, CEP 87506-450. Atendimento de Segunda a Sábado.` },
    { q: `Como solicitar orçamento de ${p.servico} em ${p.local}?`, a: `Entre em contato pelo WhatsApp clicando no botão abaixo. Respondemos rapidamente e fornecemos orçamento personalizado para o seu ${p.evento}.` },
  ]
}

const depoimentos = [
  { nome: 'Fernanda & Ricardo', evento: 'Casamento', texto: 'O Cícero é simplesmente incrível! 40 anos de experiência fazem toda a diferença. Nossas fotos ficaram obras de arte. Super recomendo o Studio Foto Danielle!' },
  { nome: 'Patrícia S.', evento: 'Formatura', texto: 'Melhor fotógrafo de Umuarama com certeza! As fotos da minha formatura ficaram perfeitas. Profissional, atencioso e muito talentoso.' },
  { nome: 'Ana e Marcos', evento: 'Casamento', texto: 'Contratamos o pacote completo com fotografia e story maker. Foi perfeito! Fotos lindas para o álbum e conteúdo viral nas redes. Família Giroto é referência!' },
  { nome: 'Juliana M.', evento: 'Festa de 15 Anos', texto: 'Minha filha amou as fotos! O Cícero capturou cada detalhe com muito carinho. Studio Foto Danielle é tradição em Umuarama PR!' },
]

const hashtags = ['#StudioFotoDanielle','#FotografoUmuarama','#UmuaramaPR','#FotografiaUmuarama','#CasamentoUmuarama','#FormaturaUmuarama','#FotografoProfissional','#40AnosDeExperiencia','#CiceroGiroto','#FotografiaDeEvento','#AlbumDeFotos','#FotoEVideo','#NoroesteParana','#MelhorFotografo','#FotografiaArtistica','#MomentosEternos','#StudioFoto','#FotoUmuarama','#EventosUmuarama','#FotografoParana']

export default function PaginaFotografo({ params }: Props) {
  const pagina = getPaginaFotoBySlug(params.slug)
  if (!pagina) notFound()
  const faqs = getFaqs(pagina)
  const artigo = getArtigo(pagina)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'LocalBusiness', name: 'Studio Foto Danielle', telephone: '+55-44-98438-3013', address: { '@type': 'PostalAddress', streetAddress: 'Rua Amadeu Boggio Melo, 925', addressLocality: 'Umuarama', addressRegion: 'PR', postalCode: '87506-450', addressCountry: 'BR' }, geo: { '@type': 'GeoCoordinates', latitude: -23.7667, longitude: -53.3167 }, url: SITE, image: `${SITE}/fotos/casal.jpg`, description: `Fotógrafo profissional em Umuarama PR com 40 anos de experiência. ${pagina.title}.` },
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
            <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Studio Foto</div><div style={{ color: '#d4a843', fontSize: 10, letterSpacing: 2 }}>DANIELLE</div></div>
          </a>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13, border: '1px solid #d4a843', padding: '6px 14px', borderRadius: 20 }}>← Início</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '8px 16px', borderRadius: 20, textDecoration: 'none', fontSize: 13, fontWeight: 700 }}>WhatsApp</a>
          </div>
        </nav>
        <section style={{ background: 'linear-gradient(135deg,#1c1008 0%,#0a0806 60%)', padding: '60px 24px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ color: '#d4a843', fontSize: 12, fontWeight: 600, letterSpacing: 2 }}>FOTÓGRAFO EM UMUARAMA PR • 40 ANOS DE EXPERIÊNCIA</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem,5vw,3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>{pagina.title}</h1>
            <p style={{ color: '#aaa', fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 12px' }}>Studio Foto Danielle — Cícero Giroto — Fotografia profissional para o seu {pagina.evento} em {pagina.local}.</p>
            <p style={{ color: '#666', fontSize: 13, marginBottom: 30 }}>📍 {ENDERECO}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#d4a843', color: '#0a0806', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>📷 Solicitar Orçamento</a>
              <a href="/servicos" style={{ border: '2px solid #d4a843', color: '#d4a843', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>🎬 Ver Story Maker</a>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)', aspectRatio: '4/5' }}>
            <img src="/fotos/casal.jpg" alt="Cícero e Vânia Giroto - Studio Foto Danielle e Giroto Story Maker" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>40 Anos Fotografando Momentos Únicos</h2>
            {([['📷','Experiência de 40 Anos','Cícero Giroto é referência em fotografia profissional em Umuarama PR desde os anos 80'],['✨','Equipamentos Profissionais','Câmeras e lentes de última geração para fotos nítidas e com qualidade cinematográfica'],['🎨','Edição Artística','Cada foto é editada com atenção aos detalhes, cores e composição para resultado perfeito'],['📍','Studio Próprio','Estúdio completo na Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR'],['🎬','Pacote Foto + Story Maker','Combine fotografia profissional com cobertura para redes sociais da Giroto Story Maker']] as [string,string,string][]).map(([icon,title,desc]) => (
              <div key={title} style={{ display: 'flex', gap: 14, marginBottom: 16, background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.1)', borderRadius: 12, padding: 16 }}>
                <span style={{ fontSize: 24 }}>{icon}</span>
                <div><div style={{ color: '#d4a843', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{title}</div><div style={{ color: '#999', fontSize: 13 }}>{desc}</div></div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: '#111', padding: '50px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 24, borderLeft: '4px solid #d4a843', paddingLeft: 16 }}>{pagina.title}: Tradição e Qualidade</h2>
            {artigo.split('\n\n').map((par, i) => <p key={i} style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20 }}>{par}</p>)}
          </div>
        </section>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 20, textAlign: 'center' }}>
            {([['40+','Anos de Experiência'],['5000+','Eventos Fotografados'],['5★','Avaliação Média'],['Umuarama','Sede do Studio']] as [string,string][]).map(([num,label]) => (
              <div key={label} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 16, padding: '24px 16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d4a843' }}>{num}</div>
                <div style={{ color: '#999', fontSize: 13 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: '#111', padding: '40px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', background: 'rgba(212,168,67,0.05)', border: '2px solid rgba(212,168,67,0.3)', borderRadius: 20, padding: '30px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🎬📷</div>
            <h3 style={{ color: '#d4a843', fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Pacote Completo: Foto + Story Maker</h3>
            <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>Combine a fotografia profissional do Studio Foto Danielle com a cobertura para redes sociais da Giroto Story Maker. Fotos eternas para o álbum E conteúdo viral para Instagram e TikTok — tudo em um único pacote!</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#d4a843', color: '#0a0806', padding: '12px 24px', borderRadius: 25, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>Quero o Pacote Completo</a>
              <a href="/servicos/story-maker-para-casamento-em-umuarama-pr" style={{ border: '1px solid #d4a843', color: '#d4a843', padding: '12px 24px', borderRadius: 25, textDecoration: 'none', fontSize: 14 }}>Ver Story Maker</a>
            </div>
          </div>
        </section>
        <section style={{ background: '#0d0b09', padding: '50px 24px' }}>
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Agende seu {pagina.evento}!</h2>
          <p style={{ color: '#999', marginBottom: 8 }}>Studio Foto Danielle — {pagina.local}</p>
          <p style={{ color: '#666', fontSize: 13, marginBottom: 30 }}>📍 {ENDERECO}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '16px 32px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fff', padding: '16px 32px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>📸 Instagram</a>
          </div>
        </section>
        <footer style={{ background: '#050403', borderTop: '1px solid rgba(212,168,67,0.15)', padding: '30px 24px', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: 13 }}>© 2025 Studio Foto Danielle · Cícero Giroto · Umuarama PR · {ENDERECO}</p>
          <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13, display: 'inline-block', marginTop: 8 }}>← Voltar à Página Inicial</a>
        </footer>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 24, right: 24, background: '#25d366', color: '#fff', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 100 }}>💬</a>
      </div>
    </>
  )
}
