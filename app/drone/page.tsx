import { paginasDrone } from '@/data/paginas_drone'

export default function DronePage() {
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13 }}>← Voltar ao Início</a>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '20px 0 8px' }}>Drone em Umuarama PR</h1>
        <p style={{ color: '#888', marginBottom: 8 }}>Vânia Giroto — Filmagem e edição profissional para casamentos e eventos</p>
        <p style={{ color: '#666', fontSize: 13, marginBottom: 40 }}>📍 Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
          {paginasDrone.map(p => (
            <a key={p.slug} href={'/drone/' + p.slug} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 10, padding: '14px 16px', textDecoration: 'none', color: '#ccc', fontSize: 13, display: 'block' }}>
              🎬 {p.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
