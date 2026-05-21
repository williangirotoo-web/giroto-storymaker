import { paginasCidades } from '@/data/paginas_cidades'

export default function CidadesPage() {
  const cidades = [...new Set(paginasCidades.map(p => p.cidade))]
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 13 }}>← Voltar ao Início</a>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '20px 0 8px' }}>Cidades Atendidas</h1>
        <p style={{ color: '#888', marginBottom: 40 }}>Giroto Story Maker · Noroeste do Paraná · 24 cidades atendidas</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
          {cidades.map(cidade => {
            const pagsCidade = paginasCidades.filter(p => p.cidade === cidade)
            return (
              <div key={cidade} style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: 14, padding: 20 }}>
                <h2 style={{ color: '#d4a843', fontWeight: 700, fontSize: 15, marginBottom: 12 }}>📍 {cidade} PR</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {pagsCidade.map(p => (
                    <a key={p.slug} href={'/cidades/' + p.slug} style={{ color: '#ccc', textDecoration: 'none', fontSize: 12, padding: '4px 8px', borderRadius: 6, background: 'rgba(255,255,255,0.03)' }}>
                      → {p.titulo_tipo}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
