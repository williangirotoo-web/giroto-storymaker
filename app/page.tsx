'use client'
// rebuild v2

import { useState, useEffect, useRef } from 'react'

const WA_NUMBER = '5544984383013'
const WA_MSG = encodeURIComponent('Olá! Vi o site e gostaria de saber mais sobre o Story Maker para meu evento. 📸')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`
const IG_LINK = 'https://www.instagram.com/giroto_storymaker/'

// ─── FAQ DATA ─────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'O que é um Story Maker para casamentos em Umuarama?',
    a: 'Um Story Maker para casamentos é um profissional especializado em criar conteúdo para Instagram Stories, Reels e TikTok em tempo real durante o evento. O Giroto Story Maker captura os melhores momentos do seu casamento e entrega o conteúdo editado ainda durante a festa — para você compartilhar com seus seguidores enquanto a celebração acontece!',
  },
  {
    q: 'Qual a diferença entre Story Maker e fotógrafo de casamento?',
    a: 'O fotógrafo registra momentos para álbuns e memórias eternas. O Story Maker foca em criar conteúdo dinâmico para redes sociais — Stories, Reels e TikToks — entregando o material editado em tempo real. Os dois serviços se complementam perfeitamente para uma cobertura completa.',
  },
  {
    q: 'O Giroto Story Maker atende fora de Umuarama PR?',
    a: 'Sim! Atendemos toda a região noroeste do Paraná, incluindo Cianorte, Campo Mourão, Paranavaí, Maringá e cidades vizinhas. Entre em contato pelo WhatsApp para verificar disponibilidade e condições de deslocamento para sua cidade.',
  },
  {
    q: 'Quando recebo o conteúdo do Story Maker?',
    a: 'Esse é o nosso grande diferencial! Você recebe stories e reels editados ainda durante o evento para compartilhar na hora. Todo o conteúdo final é entregue em até 24 horas após o evento — assim você começa a reviver cada momento no dia seguinte.',
  },
  {
    q: 'Quais eventos o Story Maker em Umuarama atende?',
    a: 'Atendemos casamentos, formaturas, festas de 15 anos, aniversários, eventos corporativos, festas de confraternização e qualquer celebração que mereça ser compartilhada nas redes sociais com qualidade profissional.',
  },
  {
    q: 'Como contratar o Story Maker para meu casamento em Umuarama?',
    a: 'É simples! Entre em contato pelo WhatsApp (44) 98438-3013 ou preencha o formulário nesta página. Informe a data do seu evento e receba um orçamento personalizado. As datas são limitadas — quanto antes reservar, melhor!',
  },
]

// ─── DEPOIMENTOS ──────────────────────────────────────────────────────────
const depoimentos = [
  {
    nome: 'Ana Paula R.',
    evento: 'Casamento • Umuarama PR',
    texto: 'Contratei o Giroto Story Maker para o meu casamento e foi incrível! Enquanto estávamos na festa, minha família toda já estava vendo os stories. Qualidade profissional e entrega em tempo real. Super recomendo!',
    estrelas: 5,
  },
  {
    nome: 'Fernanda M.',
    evento: 'Formatura • Cianorte PR',
    texto: 'Os reels que ela criou na minha formatura ficaram perfeitos! Editado na hora, com música e tudo. Minhas amigas amaram. Já indiquei para mais três pessoas!',
    estrelas: 5,
  },
  {
    nome: 'Juliana & Carlos',
    evento: 'Casamento • Umuarama PR',
    texto: 'Que serviço diferenciado! A gente nem sabia que existia Story Maker. Ficamos impressionados com a agilidade e a qualidade. O conteúdo ficou profissional demais para as redes sociais.',
    estrelas: 5,
  },
  {
    nome: 'Bruna T.',
    evento: 'Festa de 15 Anos • Umuarama PR',
    texto: 'Minha filha ficou apaixonada! A festa virou viral no Instagram com os reels da Giroto Story Maker. Todo mundo queria saber quem era a profissional. Serviço impecável!',
    estrelas: 5,
  },
]

// ─── SERVIÇOS ─────────────────────────────────────────────────────────────
const servicos = [
  {
    icon: '💍',
    titulo: 'Casamentos',
    desc: 'Cobertura completa em stories e reels do seu grande dia. Do making-of ao beijo do casal — cada detalhe viraliza nas redes sociais em tempo real.',
  },
  {
    icon: '🎓',
    titulo: 'Formaturas',
    desc: 'Sua conquista merece ser celebrada online também. Conteúdo profissional para Instagram, Reels e TikTok criado durante a cerimônia e jantar.',
  },
  {
    icon: '🌸',
    titulo: 'Festas de 15 Anos',
    desc: 'Uma festa linda precisa de um conteúdo ainda mais lindo. Stories e reels exclusivos para tornar a festa da debutante inesquecível nas redes.',
  },
  {
    icon: '🎉',
    titulo: 'Aniversários & Eventos',
    desc: 'Seja qual for a comemoração, transformamos seus momentos em conteúdo profissional para Instagram e TikTok. Qualquer evento merece brilhar.',
  },
  {
    icon: '🏢',
    titulo: 'Eventos Corporativos',
    desc: 'Lançamentos, confraternizações e eventos empresariais com cobertura digital profissional para fortalecer a presença da sua empresa nas redes.',
  },
  {
    icon: '📱',
    titulo: 'Pacote Redes Sociais',
    desc: 'Além dos stories ao vivo, entregamos reels editados, fotos selecionadas e sugestões de legendas e hashtags para maximizar o alcance do seu conteúdo.',
  },
]

// ─── COMO FUNCIONA ────────────────────────────────────────────────────────
const etapas = [
  { num: '01', titulo: 'Orçamento', desc: 'Nos fale sobre o seu evento pelo WhatsApp. Data, tipo e expectativas — montamos um pacote personalizado para você.' },
  { num: '02', titulo: 'Reserva da Data', desc: 'Confirmamos presença com contrato e sinal. Datas são limitadas — quanto antes reservar, mais tranquila você fica!' },
  { num: '03', titulo: 'No Dia do Evento', desc: 'Chegamos com antecedência, entendemos o roteiro e já começamos a capturar os primeiros bastidores incríveis.' },
  { num: '04', titulo: 'Entrega ao Vivo', desc: 'Enquanto a festa acontece, você já recebe stories e reels editados para compartilhar. Emoção em tempo real!' },
]

// ─── HASHTAGS ─────────────────────────────────────────────────────────────
const hashtags = [
  '#StoryMaker', '#StoryMakerUmuarama', '#CasamentoUmuarama', '#StoryMakerCasamento',
  '#ReelsUmuarama', '#CasamentoPR', '#StoryMakerParaná', '#EventosUmuarama',
  '#GirotoStoryMaker', '#FormaturaUmuarama', '#TikTokCasamento', '#ContentCreator',
  '#WeddingContent', '#InstagramCasamento', '#NoroestePR', '#StoriesAoVivo',
  '#CasamentoDreams', '#MakingOf', '#BastidoresDoCasamento', '#UmuaramaPR',
]

// ─── COMPONENT ────────────────────────────────────────────────────────────
export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', evento: '', data: '', mensagem: '' })
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach(el => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá! Quero solicitar um orçamento.\n\n👤 Nome: ${formData.nome}\n📱 Telefone: ${formData.telefone}\n🎉 Evento: ${formData.evento}\n📅 Data: ${formData.data}\n\n💬 ${formData.mensagem}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0806]/95 backdrop-blur-md border-b border-[rgba(212,168,67,0.15)] py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#d4a843] flex items-center justify-center">
              <span className="text-[#d4a843] font-bold text-sm">G</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white leading-none block">Giroto</span>
              <span className="text-[#d4a843] text-xs tracking-widest uppercase leading-none">Story Maker</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['#inicio','#sobre','#servicos','#como-funciona','#depoimentos','#faq','#contato'].map((href, i) => (
              <a key={i} href={href} className="nav-link text-gray-300 text-sm">
                {['Início','Sobre','Serviços','Como Funciona','Depoimentos','FAQ','Contato'][i]}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[rgba(212,168,67,0.4)] flex items-center justify-center text-[#d4a843] hover:bg-[#d4a843] hover:text-black transition-all">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#d4a843]">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#130f0a] border-t border-[rgba(212,168,67,0.15)] px-6 py-4 flex flex-col gap-4">
            {['#inicio','#sobre','#servicos','#como-funciona','#depoimentos','#faq','#contato'].map((href, i) => (
              <a key={i} href={href} onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm py-1">
                {['Início','Sobre','Serviços','Como Funciona','Depoimentos','FAQ','Contato'][i]}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold px-4 py-2 rounded-full text-sm font-bold text-center mt-2">
              Falar no WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="inicio" className="hero-bg hero-animated-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#d4a843]/5 blur-3xl animate-pulse"/>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#d4a843]/3 blur-3xl animate-pulse" style={{animationDelay:'1.5s'}}/>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 badge-shine border border-[rgba(212,168,67,0.3)] rounded-full px-4 py-2 mb-6 fade-up-1">
            <span className="w-2 h-2 rounded-full bg-[#d4a843] animate-pulse"/>
            <span className="text-[#d4a843] text-sm font-medium">Story Maker Profissional em Umuarama PR</span>
          </div>
          <h1 className="font-display font-black leading-tight mb-6 fade-up-2" style={{fontSize:"clamp(1.1rem,4vw,4.5rem)", lineHeight:"1.15"">
            <span className="text-white">Story Maker Para</span><br/>
            <span className="text-shimmer">Casamentos e Eventos</span><br/>
            <span className="text-white">Em Umuarama PR</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 fade-up-3 leading-relaxed">
            Conteúdo profissional para <strong className="text-[#d4a843]">Instagram, Reels e TikTok</strong> criado em tempo real durante o seu evento. Seu casamento viraliza enquanto ainda está acontecendo!
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-full text-base font-bold inline-flex items-center justify-center gap-2">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Solicitar Orçamento
            </a>
            <a href="#servicos" className="btn-outline-gold px-8 py-4 rounded-full text-base font-bold inline-flex items-center justify-center gap-2">
              Ver Serviços
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-16 border-t border-[rgba(212,168,67,0.1)]">
            {[['300+','Eventos Realizados'],['100%','Entrega ao Vivo'],['5★','Avaliação'],['3 cidades','Atendimento']]
              .map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-display text-3xl font-black text-[#d4a843]">{n}</div>
                  <div className="text-gray-400 text-sm mt-1">{l}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4a843] animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* ── SOBRE ───────────────────────────────────────────── */}
      <section id="sobre" className="py-24 bg-[#130f0a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="sobre-grid grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="inline-block bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#d4a843] text-xs font-semibold tracking-widest uppercase">Sobre o Serviço</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                Story Maker que Transforma seu Evento em <span className="gold-text">Conteúdo Viral</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                O <strong className="text-white">Giroto Story Maker</strong> é o serviço de cobertura digital mais completo de Umuarama PR. Especializada em criar conteúdo profissional para redes sociais em tempo real durante casamentos, formaturas e eventos, a profissional captura cada momento especial e o transforma em stories e reels prontos para compartilhar enquanto a festa ainda está acontecendo.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                A tendência do Story Maker chegou com força em todo o Brasil — e em Umuarama e região, o Giroto Story Maker é referência nesse serviço inovador. Com smartphone profissional, edição ágil e olhar artístico, cada evento se torna um conteúdo inesquecível nas redes sociais.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['📱','Entrega em tempo real','Stories e reels durante o evento'],
                  ['✨','Edição profissional','Conteúdo com qualidade para redes'],
                  ['🗺️','Toda a região','Umuarama e municípios vizinhos'],
                  ['⚡','Agilidade','Momentos capturados na hora certa'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="card-glass rounded-xl p-4">
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="text-white font-semibold text-sm mb-1">{title}</div>
                    <div className="text-gray-400 text-xs">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll relative" style={{animationDelay:'0.2s'}}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[rgba(212,168,67,0.2)]">
                <img src="/fotos/foto5.jpg" alt="Vania Giroto Story Maker profissional" style={{width:'100%',height:'100%',minHeight:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}} loading="eager" decoding="sync" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#d4a843]/10 border border-[rgba(212,168,67,0.3)] flex items-center justify-center">
                <span className="text-3xl">💍</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-[#d4a843]/10 border border-[rgba(212,168,67,0.3)] flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ────────────────────────────────────────── */}
      <section id="servicos" className="py-24 bg-[#0a0806] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4a843] text-xs font-semibold tracking-widest uppercase">O Que Oferecemos</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Story Maker Para Todo <span className="gold-text">Tipo de Evento</span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Do casamento dos sonhos à formatura inesquecível — transformamos qualquer celebração em conteúdo profissional para as suas redes sociais.
            </p>
          </div>
          <div className="servicos-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s, i) => (
              <div key={i} className="animate-on-scroll card-glass card-hover rounded-2xl p-6 group" style={{animationDelay:`${i*0.1}s`}}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{s.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-on-scroll">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-full text-base font-bold inline-flex items-center gap-2">
              Quero um Orçamento Personalizado
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── ARTIGO / COMO FUNCIONA ──────────────────────────── */}
      <section id="como-funciona" className="py-24 bg-[#130f0a] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4a843] text-xs font-semibold tracking-widest uppercase">Como Funciona</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Do Orçamento à <span className="gold-text">Entrega ao Vivo</span>
            </h2>
          </div>

          <div className="etapas-grid grid md:grid-cols-4 gap-6 mb-20">
            {etapas.map((e, i) => (
              <div key={i} className="animate-on-scroll text-center relative" style={{animationDelay:`${i*0.15}s`}}>
                {i < etapas.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-[#d4a843] to-transparent z-0"/>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-[#d4a843] bg-[#1c1610] flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl font-bold text-[#d4a843]">{e.num}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{e.titulo}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── ARTIGO SEO ── */}
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <article className="card-glass rounded-2xl p-8 md:p-12">
              <h2 className="font-display font-bold text-3xl text-white mb-6">
                Por Que Contratar um Story Maker para seu Casamento em Umuarama PR?
              </h2>
              <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                <p>
                  Nos últimos anos, o serviço de <strong className="text-white">Story Maker para casamentos</strong> se tornou uma das tendências mais procuradas por noivos em todo o Brasil — e em Umuarama PR e região, essa febre chegou com tudo. Mas afinal, o que é um Story Maker e por que ele se tornou indispensável nos eventos modernos?
                </p>
                <p>
                  O Story Maker é um profissional especializado em criar <strong className="text-white">conteúdo para Instagram Stories, Reels e TikTok</strong> em tempo real durante o evento. Diferente do fotógrafo ou videógrafo tradicional, que entrega o material dias ou semanas depois, o Story Maker edita e envia o conteúdo ainda durante a festa — para que os noivos e convidados possam compartilhar os melhores momentos enquanto eles ainda estão acontecendo.
                </p>
                <p>
                  Em Umuarama PR, o <strong className="text-white">Giroto Story Maker</strong> é pioneiro nesse serviço e já acumula centenas de eventos realizados com sucesso. Com smartphone profissional, aplicativos de edição de ponta e um olhar artístico único, cada detalhe do seu casamento se transforma em conteúdo viral — do making-of da noiva ao primeiro beijo do casal.
                </p>
                <p>
                  O serviço de Story Maker para casamentos atende toda a <strong className="text-white">região noroeste do Paraná</strong>, incluindo cidades como Cianorte, Campo Mourão, Paranavaí, Maringá e municípios vizinhos. A mobilidade é um dos grandes diferenciais: onde há um evento especial, o Giroto Story Maker está presente.
                </p>
                <p>
                  Além dos casamentos, o serviço de <strong className="text-white">Story Maker em Umuarama</strong> atende formaturas, festas de 15 anos, aniversários, eventos corporativos e qualquer celebração que mereça ser compartilhada com qualidade nas redes sociais. O resultado são stories e reels profissionais que geram engajamento real e transformam momentos inesquecíveis em conteúdo duradouro.
                </p>
                <p>
                  Se você está planejando seu casamento ou evento em Umuarama PR e quer garantir conteúdo profissional para as redes sociais, entre em contato agora mesmo pelo WhatsApp. As datas são limitadas — reserve a sua com antecedência e garanta que seu grande dia seja lembrado para sempre.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ─────────────────────────────────────── */}
      <section id="depoimentos" className="py-24 bg-[#0a0806] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,168,67,0.3)] to-transparent"/>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4a843] text-xs font-semibold tracking-widest uppercase">Depoimentos</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Quem Já Contratou <span className="gold-text">Aprova!</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Veja o que nossos clientes dizem sobre a experiência com o Giroto Story Maker em Umuarama PR.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {depoimentos.map((d, i) => (
              <div key={i} className="animate-on-scroll card-glass rounded-2xl p-6 hover:border-[rgba(212,168,67,0.35)] transition-all duration-300" style={{animationDelay:`${i*0.1}s`}}>
                <div className="flex gap-1 mb-4">
                  {Array(d.estrelas).fill(0).map((_, si) => <span key={si} className="star text-lg">★</span>)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{d.texto}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(212,168,67,0.1)]">
                  <div className="w-10 h-10 rounded-full bg-[rgba(212,168,67,0.2)] flex items-center justify-center">
                    <span className="text-[#d4a843] font-bold text-sm">{d.nome[0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{d.nome}</div>
                    <div className="text-gray-500 text-xs">{d.evento}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HASHTAGS ────────────────────────────────────────── */}
      <section className="py-16 bg-[#130f0a] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 text-xs tracking-widest uppercase mb-6 font-semibold">Nos Encontre nas Redes Sociais</p>
          <div className="flex flex-wrap justify-center gap-2">
            {hashtags.map((tag, i) => (
              <a key={i} href={`https://www.instagram.com/explore/tags/${tag.replace('#','')}/`}
                target="_blank" rel="noopener noreferrer"
                className="bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.2)] rounded-full px-3 py-1.5 text-[#d4a843] text-xs font-medium hover:bg-[rgba(212,168,67,0.15)] transition-colors">
                {tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-[#0a0806]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4a843] text-xs font-semibold tracking-widest uppercase">Dúvidas Frequentes</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Perguntas <span className="gold-text">Frequentes</span>
            </h2>
            <p className="text-gray-400 text-base">
              Tudo que você precisa saber sobre o Story Maker para casamentos em Umuarama PR.
            </p>
          </div>
          <div className="space-y-0 animate-on-scroll">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-[#d4a843] transition-colors">
                  <span className={`font-semibold text-base transition-colors ${faqOpen === i ? 'text-[#d4a843]' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <span className={`text-[#d4a843] text-xl flex-shrink-0 transition-transform duration-300 ${faqOpen === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`faq-answer ${faqOpen === i ? 'open' : ''}`}>
                  <p className="text-gray-400 text-sm leading-relaxed pb-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO + MAPA ───────────────────────────────── */}
      <section id="contato" className="py-24 bg-[#130f0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4a843] text-xs font-semibold tracking-widest uppercase">Fale Conosco</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Solicite seu <span className="gold-text">Orçamento</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Preencha o formulário e entraremos em contato pelo WhatsApp com um orçamento personalizado para o seu evento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleForm} className="animate-on-scroll space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2 block">Nome *</label>
                  <input type="text" required placeholder="Seu nome"
                    value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})}
                    className="w-full bg-[#1c1610] border border-[rgba(212,168,67,0.2)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#d4a843] transition-colors"/>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2 block">WhatsApp *</label>
                  <input type="tel" required placeholder="(44) 99999-9999"
                    value={formData.telefone} onChange={e => setFormData({...formData, telefone: e.target.value})}
                    className="w-full bg-[#1c1610] border border-[rgba(212,168,67,0.2)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#d4a843] transition-colors"/>
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2 block">E-mail</label>
                <input type="email" placeholder="seu@email.com"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#1c1610] border border-[rgba(212,168,67,0.2)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#d4a843] transition-colors"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2 block">Tipo de Evento *</label>
                  <select required value={formData.evento} onChange={e => setFormData({...formData, evento: e.target.value})}
                    className="w-full bg-[#1c1610] border border-[rgba(212,168,67,0.2)] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4a843] transition-colors">
                    <option value="">Selecione...</option>
                    <option>Casamento</option>
                    <option>Formatura</option>
                    <option>Festa de 15 Anos</option>
                    <option>Aniversário</option>
                    <option>Evento Corporativo</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2 block">Data do Evento</label>
                  <input type="date" value={formData.data} onChange={e => setFormData({...formData, data: e.target.value})}
                    className="w-full bg-[#1c1610] border border-[rgba(212,168,67,0.2)] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4a843] transition-colors"/>
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2 block">Mensagem</label>
                <textarea rows={4} placeholder="Conte mais sobre seu evento, cidade, expectativas..."
                  value={formData.mensagem} onChange={e => setFormData({...formData, mensagem: e.target.value})}
                  className="w-full bg-[#1c1610] border border-[rgba(212,168,67,0.2)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#d4a843] transition-colors resize-none"/>
              </div>
              <button type="submit" className="btn-gold w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enviar pelo WhatsApp
              </button>
            </form>

            <div className="animate-on-scroll space-y-6" style={{animationDelay:'0.2s'}}>
              <div className="card-glass rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117858.39!2d-53.3795!3d-23.7634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef5ae6b89b0f8d%3A0x1d0f0b7b3e3a5e9a!2sUmuarama%2C%20PR!5e0!3m2!1spt!2sbr!4v1"
                  width="100%" height="300" style={{border:0, filter:'invert(90%) hue-rotate(180deg)'}}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Giroto Story Maker em Umuarama PR"/>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '📱', label: 'WhatsApp', value: '(44) 98438-3013', href: WA_LINK },
                  { icon: '📸', label: 'Instagram', value: '@giroto_storymaker', href: IG_LINK },
                  { icon: '📍', label: 'Localização', value: 'Umuarama PR e região', href: null },
                  { icon: '🕐', label: 'Atendimento', value: 'Seg–Dom, 8h às 22h', href: null },
                ].map((item) => (
                  <div key={item.label} className="card-glass rounded-xl p-4 flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer"
                          className="text-[#d4a843] text-sm font-medium hover:underline">{item.value}</a>
                      ) : (
                        <div className="text-white text-sm font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-[#0a0806] border-t border-[rgba(212,168,67,0.1)] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#d4a843] flex items-center justify-center">
                <span className="text-[#d4a843] font-bold text-sm">G</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white leading-none block">Giroto Story Maker</span>
                <span className="text-[#d4a843] text-xs">Story Maker para Casamentos em Umuarama PR</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Giroto Story Maker — Umuarama PR. Todos os direitos reservados.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Story Maker profissional para casamentos, formaturas e eventos no Noroeste do Paraná.
              </p>
            </div>
            <div className="flex gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLUTUANTE ──────────────────────────────── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="whatsapp-float w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp">
        <svg width="30" height="30" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  )
}
