import { blogPostsSM, blogPostsFoto } from '@/data/blog_posts'

export default function BlogPage() {
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', background: '#0a0806', color: '#f0f0f0', minHeight: '100vh' }}>
      <nav style={{ background: 'rgba(10,8,6,0.95)', borderBottom: '1px solid rgba(212,168,67,0.2)', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#f0d080,#d4a843)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#0a0806', fontSize: 16 }}>G</div>
          <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>Giroto Blog</div><div style={{ color: '#d4a843', fontSize: 9, letterSpacing: 2 }}>UMUARAMA PR</div></div>
        </a>
        <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, border: '1px solid rgba(212,168,67,0.3)', padding: '5px 12px', borderRadius: 20 }}>← Início</a>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 24px' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>Blog · Umuarama PR</h1>
        <p style={{ color: '#888', marginBottom: 48 }}>Dicas, guias e tudo sobre Story Maker e Fotografia em Umuarama PR</p>

        <h2 style={{ color: '#d4a843', fontSize: '1.3rem', fontWeight: 700, marginBottom: 20, borderBottom: '1px solid rgba(212,168,67,0.2)', paddingBottom: 10 }}>📱 Story Maker — Vânia Giroto ({blogPostsSM.length} artigos)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14, marginBottom: 48 }}>
          {blogPostsSM.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.12)', borderRadius: 12, padding: '14px 16px', textDecoration: 'none', color: '#ccc', fontSize: 13, display: 'block', lineHeight: 1.5 }}>
              <span style={{ color: '#d4a843', fontSize: 10, display: 'block', marginBottom: 4, letterSpacing: 1 }}>STORY MAKER</span>
              {p.title}
            </a>
          ))}
        </div>

        <h2 style={{ color: '#88aaff', fontSize: '1.3rem', fontWeight: 700, marginBottom: 20, borderBottom: '1px solid rgba(136,170,255,0.2)', paddingBottom: 10 }}>📷 Fotografia — Cícero Manoel Domingos ({blogPostsFoto.length} artigos)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
          {blogPostsFoto.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} style={{ background: 'rgba(136,170,255,0.04)', border: '1px solid rgba(136,170,255,0.12)', borderRadius: 12, padding: '14px 16px', textDecoration: 'none', color: '#ccc', fontSize: 13, display: 'block', lineHeight: 1.5 }}>
              <span style={{ color: '#88aaff', fontSize: 10, display: 'block', marginBottom: 4, letterSpacing: 1 }}>FOTOGRAFIA</span>
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <footer style={{ background: '#050403', borderTop: '1px solid rgba(212,168,67,0.1)', padding: '24px', textAlign: 'center', marginTop: 60 }}>
        <p style={{ color: '#444', fontSize: 12 }}>© 2025 Giroto Story Maker & Studio Foto Danielle · Umuarama PR</p>
        <a href="/" style={{ color: '#d4a843', textDecoration: 'none', fontSize: 12, display: 'inline-block', marginTop: 6 }}>← Voltar ao Início</a>
      </footer>
    </div>
  )
}
