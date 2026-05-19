import { paginasFoto } from '@/data/paginas_foto'

export default function FotografoPage() {
  const grupos: Record<string, typeof paginasFoto> = {}
  paginasFoto.forEach(p => {
    if (!grupos[p.evento]) grupos[p.evento] = []
    grupos[p.evento].push(p)
  })
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13 }}>← Voltar ao Início</a>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '20px 0 8px' }}>Fotógrafo em Umuarama PR</h1>
        <p style={{ color: '#888', marginBottom: 8 }}>Studio Foto Danielle — Cícero Giroto — 40 anos de experiência</p>
        <p style={{ color: '#666', marginBottom: 40, fontSize: 13 }}>Rua Amadeu Boggio Melo, 925 - Jardim Alto da Boa Vista, Umuarama PR</p>
        {Object.entries(grupos).map(([evento, items]) => (
          <div key={evento} style={{ marginBottom: 40 }}>
            <h2 style={{ color: '#d4a843', fontSize: '1.2rem', fontWeight: 700, marginBottom: 16, borderBottom: '1px solid rgba(212,168,67,0.2)', paddingBottom: 8 }}>{evento} ({items.length})</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
              {items.map(p => (
                <a key={p.slug} href={`/fotografo/${p.slug}`} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 10, padding: '12px 16px', textDecoration: 'none', color: '#ccc', fontSize: 13, display: 'block' }}>
                  {p.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
