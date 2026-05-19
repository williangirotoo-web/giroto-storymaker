import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fotógrafo em Umuarama PR | Studio Foto Danielle | Cícero Giroto',
  description: 'Studio Foto Danielle — Cícero Giroto, fotógrafo profissional em Umuarama PR com 40 anos de experiência. Casamentos, formaturas, festas e eventos. Solicite orçamento!',
  alternates: { canonical: 'https://www.eternamoments.com.br/fotografo' },
}

const WA = 'https://wa.me/5544984383013'
const IG = 'https://instagram.com/giroto_storymaker'
const ENDERECO = 'Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR'

const servicos = [
  { icon: '💍', titulo: 'Casamentos', desc: 'Cobertura completa do seu grande dia com álbum impresso de alta qualidade e entrega digital de todas as fotos.' },
  { icon: '🎓', titulo: 'Formaturas', desc: 'Registre sua conquista com fotos artísticas que contam a história da sua jornada acadêmica.' },
  { icon: '🌸', titulo: 'Festas de 15 Anos', desc: 'Cada detalhe da festa da debutante eternizado em fotos lindas e emocionantes.' },
  { icon: '🎉', titulo: 'Aniversários', desc: 'Momentos especiais merecem registros especiais. Cobertura completa para qualquer celebração.' },
  { icon: '📸', titulo: 'Book Fotográfico', desc: 'Ensaios fotográficos profissionais em estúdio ou externos para pessoas, casais e famílias.' },
  { icon: '🏢', titulo: 'Eventos Corporativos', desc: 'Cobertura profissional para eventos empresariais, lançamentos e confraternizações.' },
]

export default function FotografoPage() {
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh' }}>
      
      {/* NAV */}
      <nav style={{ background: 'rgba(10,8,6,0.95)', borderBottom: '1px solid rgba(212,168,67,0.2)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #d4a843', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843', fontWeight: 700 }}>G</div>
          <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Studio Foto</div><div style={{ color: '#d4a843', fontSize: 10, letterSpacing: 2 }}>DANIELLE</div></div>
        </a>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13, border: '1px solid rgba(212,168,67,0.4)', padding: '6px 14px', borderRadius: 20 }}>← Story Maker</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '8px 16px', borderRadius: 20, textDecoration: 'none', fontSize: 13, fontWeight: 700 }}>WhatsApp</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#1c1008 0%,#0a0806 70%)', padding: '70px 24px 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
            <span style={{ color: '#d4a843', fontSize: 12, fontWeight: 600, letterSpacing: 2 }}>FOTÓGRAFO PROFISSIONAL EM UMUARAMA PR</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
            Studio Foto Danielle<br/><span style={{ color: '#d4a843' }}>40 Anos de Arte e Tradição</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: '0 auto 12px' }}>
            Cícero Giroto, fotógrafo profissional em Umuarama PR desde os anos 80. Mais de 5.000 eventos fotografados com qualidade, emoção e arte.
          </p>
          <p style={{ color: '#666', fontSize: 13, marginBottom: 32 }}>📍 {ENDERECO}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#d4a843', color: '#0a0806', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>📷 Solicitar Orçamento</a>
            <a href="/servicos/story-maker-para-casamento-em-umuarama-pr" style={{ border: '2px solid #d4a843', color: '#d4a843', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>🎬 Ver Story Maker</a>
          </div>
        </div>
      </section>

      {/* FOTO + INFO */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)', aspectRatio: '4/5' }}>
          <img src="/fotos/casal.jpg" alt="Cícero e Vânia Giroto - Studio Foto Danielle e Giroto Story Maker Umuarama PR" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
        </div>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Cícero & Vânia Giroto</h2>
          <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
            Com mais de 40 anos de experiência, Cícero Giroto é referência em fotografia profissional no Noroeste do Paraná. 
            Em parceria com Vânia, da <strong style={{ color: '#d4a843' }}>Giroto Story Maker</strong>, oferecem o pacote mais completo de cobertura de eventos de Umuarama PR — fotos eternas para o álbum E conteúdo profissional para suas redes sociais em tempo real.
          </p>
          {([
            ['📷', '40+ Anos', 'de experiência'],
            ['🏆', '5000+', 'eventos fotografados'],
            ['⭐', '5 Estrelas', 'avaliação média'],
            ['📍', 'Umuarama', 'PR e região'],
          ] as [string,string,string][]).map(([icon,num,label]) => (
            <div key={label} style={{ display: 'flex', gap: 14, marginBottom: 12, background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.1)', borderRadius: 12, padding: '12px 16px', alignItems: 'center' }}>
              <span style={{ fontSize: 22 }}>{icon}</span>
              <div><span style={{ color: '#d4a843', fontWeight: 700 }}>{num}</span> <span style={{ color: '#888', fontSize: 13 }}>{label}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Serviços de Fotografia</h2>
          <p style={{ textAlign: 'center', color: '#888', marginBottom: 36 }}>Cobertura profissional para todos os tipos de eventos em Umuarama PR</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {servicos.map((s,i) => (
              <div key={i} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{s.titulo}</h3>
                <p style={{ color: '#999', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACOTE COMPLETO */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '50px 24px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.1), rgba(212,168,67,0.05))', border: '2px solid rgba(212,168,67,0.3)', borderRadius: 24, padding: '40px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📷🎬</div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Pacote Foto + Story Maker</h2>
          <p style={{ color: '#bbb', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
            O pacote mais completo de Umuarama PR! Fotografia profissional para o álbum eterno <strong style={{ color: '#d4a843' }}>+</strong> cobertura para redes sociais em tempo real. Dois profissionais, um resultado incrível.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#d4a843', color: '#0a0806', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>💬 Quero o Pacote Completo</a>
            <a href="/" style={{ border: '2px solid #d4a843', color: '#d4a843', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>🎬 Ver Story Maker</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: '#111', padding: '50px 24px', borderTop: '1px solid rgba(212,168,67,0.1)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Agende seu Evento!</h2>
          <p style={{ color: '#999', marginBottom: 8 }}>Studio Foto Danielle — Umuarama PR</p>
          <p style={{ color: '#666', fontSize: 13, marginBottom: 28 }}>📍 {ENDERECO}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#25d366', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color: '#fff', padding: '14px 28px', borderRadius: 30, textDecoration: 'none', fontWeight: 700 }}>📸 Instagram</a>
          </div>
          <div style={{ marginTop: 24 }}>
            <a href="/fotografo/all" style={{ color: '#555', fontSize: 12, textDecoration: 'none' }}>Ver todos os serviços de fotografia →</a>
          </div>
        </div>
      </section>

      <footer style={{ background: '#050403', borderTop: '1px solid rgba(212,168,67,0.15)', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#444', fontSize: 12 }}>© 2025 Studio Foto Danielle · Cícero Giroto · {ENDERECO}</p>
        <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, display: 'inline-block', marginTop: 6 }}>← Voltar ao Início</a>
      </footer>

      <a href={WA} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 24, right: 24, background: '#25d366', color: '#fff', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 100 }}>💬</a>
    </div>
  )
}
