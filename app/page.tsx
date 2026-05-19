import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Táxi Umuarama 24h | Giroto Táxi — (44) 99891-3040",
  description:
    "Táxi em Umuarama 24 horas por dia, 7 dias por semana. Serviço de táxi em Umuarama com corridas rápidas, táxi executivo, viagens intermunicipais e traslado para aeroporto. Chame agora pelo WhatsApp!",
  keywords:
    "táxi umuarama, taxi em umuarama, taxi de umuarama, serviço de táxi umuarama, corridas em umuarama taxi, táxi 24h umuarama, táxi executivo umuarama, táxi aeroporto umuarama, chamar táxi umuarama, giroto táxi",
  openGraph: {
    title: "Táxi Umuarama 24h | Giroto Táxi",
    description:
      "Serviço de táxi em Umuarama 24h. Corridas rápidas, táxi executivo e viagens intermunicipais. Chame agora!",
    url: "https://taxiumuarama24h.com.br",
    siteName: "Giroto Táxi Umuarama",
    locale: "pt_BR",
    type: "website",
  },
};

const WA_LINK =
  "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora.";
const PHONE = "tel:+5544998913040";

const services = [
  {
    icon: "🚖",
    title: "Táxi em Umuarama",
    desc: "Corridas rápidas por todos os bairros de Umuarama, 24 horas por dia. Ideal para trabalho, médico, supermercado e muito mais.",
  },
  {
    icon: "✈️",
    title: "Táxi para Aeroporto",
    desc: "Traslado pontual para o aeroporto de Maringá e região. Chegue sem atraso com motorista aguardando na hora marcada.",
  },
  {
    icon: "🌆",
    title: "Viagens Intermunicipais",
    desc: "Serviço de táxi de Umuarama para Maringá, Cianorte, Goioerê, Cruzeiro do Oeste e toda a região noroeste do Paraná.",
  },
  {
    icon: "💼",
    title: "Táxi Executivo Umuarama",
    desc: "Veículos de alto padrão para reuniões, eventos corporativos e clientes que exigem pontualidade e conforto.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Carro 7 Lugares",
    desc: "Espaço de sobra para toda a família ou grupo. A melhor opção para viagens em conjunto com muito conforto.",
  },
  {
    icon: "🏥",
    title: "Táxi para Hospital",
    desc: "Transporte rápido e seguro para clínicas e hospitais de Umuarama e região. Disponível inclusive de madrugada.",
  },
];

const reviews = [
  {
    name: "Fernanda Oliveira",
    text: "Chegou em poucos minutos, excelente atendimento! Motorista super educado e carro impecável. O melhor táxi de Umuarama!",
    stars: 5,
    label: "Umuarama",
  },
  {
    name: "Carlos Henrique",
    text: "Motorista educado e carro muito confortável. Paguei via Pix na hora, sem complicação. Recomendo para qualquer corrida na cidade.",
    stars: 5,
    label: "Cliente recorrente",
  },
  {
    name: "Ana Paula Martins",
    text: "Melhor táxi de Umuarama! Fiz uma viagem até Maringá e foi perfeita — pontual, carro limpo e preço justo.",
    stars: 5,
    label: "Umuarama → Maringá",
  },
];

const faqs = [
  {
    q: "O táxi em Umuarama funciona 24 horas?",
    a: "Sim! A Giroto Táxi opera 24 horas por dia, 7 dias por semana, incluindo domingos e feriados. Basta chamar pelo WhatsApp ou ligar para (44) 99891-3040.",
  },
  {
    q: "Aceita Pix ou cartão de crédito?",
    a: "Sim, aceitamos Pix, cartão de crédito, cartão de débito e dinheiro em espécie. Você escolhe o que for mais conveniente.",
  },
  {
    q: "Fazem viagens de Umuarama para Maringá?",
    a: "Sim! Realizamos viagens intermunicipais para Maringá, Cianorte, Goioerê, Cruzeiro do Oeste e toda a região noroeste do Paraná.",
  },
  {
    q: "Como chamar um táxi rápido em Umuarama?",
    a: "A forma mais rápida é clicar no botão do WhatsApp — uma mensagem pronta já estará preenchida. Você também pode ligar para (44) 99891-3040.",
  },
  {
    q: "Fazem traslado para o aeroporto de Maringá?",
    a: "Com certeza! Fazemos traslados pontuais para o aeroporto de Maringá. Informe o horário do voo e garantimos que chegue com tempo de sobra.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxiumuarama24h.com.br/#business",
      name: "Giroto Táxi Umuarama",
      description:
        "Serviço de táxi 24 horas em Umuarama, Paraná. Corridas urbanas, viagens intermunicipais, traslado para aeroporto e táxi executivo.",
      url: "https://taxiumuarama24h.com.br",
      telephone: "+55-44-99891-3040",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Umuarama",
        addressRegion: "PR",
        postalCode: "87501-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.7659,
        longitude: -53.3208,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      priceRange: "$$",
      paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, Pix",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#080808] text-white font-sans antialiased">
        {/* TOP BAR MOBILE */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black text-xs font-bold text-center py-1.5 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
          </span>
          Disponível Agora • Atendimento Imediato 24h
        </div>

        {/* NAV */}
        <nav className="fixed top-6 md:top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">🚖</span>
              <div>
                <p className="font-bold text-white leading-none">Giroto Táxi</p>
                <p className="text-[10px] text-yellow-400 uppercase tracking-widest">Umuarama 24h</p>
              </div>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 md:pb-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.15),transparent_60%)]" />

          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-yellow-400 font-semibold mb-6 uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Motorista Disponível Agora
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Táxi em{" "}
                <span className="text-yellow-400">Umuarama</span>{" "}
                24h — Rápido e Seguro
              </h1>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Serviço de táxi em Umuarama com atendimento imediato, motoristas
                profissionais e conforto para qualquer destino — a qualquer hora do
                dia ou da noite.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.542 5.878L0 24l6.296-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.574 9.574 0 01-4.889-1.34l-.35-.208-3.64.877.908-3.524-.228-.362A9.556 9.556 0 012.4 12C2.4 6.698 6.698 2.4 12 2.4S21.6 6.698 21.6 12 17.302 21.6 12 21.6z" />
                  </svg>
                  Chamar no WhatsApp
                </a>
                <a
                  href={PHONE}
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (44) 99891-3040
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                {["✓ Viagens Rápidas", "✓ Aceitamos Pix", "✓ Atendimento 24h", "✓ Táxi Executivo"].map((t) => (
                  <span key={t} className="text-gray-400">{t}</span>
                ))}
              </div>
            </div>

            {/* STATS CARD */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { value: "24/7", label: "Disponibilidade total" },
                { value: "100%", label: "Frota revisada" },
                { value: "Pix", label: "Pagamento facilitado" },
                { value: "PR", label: "Toda a região noroeste" },
              ].map((s) => (
                <div
                  key={s.value}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors"
                >
                  <p className="text-3xl font-extrabold text-yellow-400 mb-1">{s.value}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicos" className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Nossos Serviços</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Táxi em Umuarama para toda necessidade
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Do táxi urbano ao táxi executivo em Umuarama — temos o veículo certo e o motorista experiente para o seu destino.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all hover:-translate-y-1 group"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Como Funciona</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Chamar táxi em Umuarama nunca foi tão fácil
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Clique no WhatsApp", desc: "Toque no botão verde do WhatsApp. Uma mensagem pronta já estará preenchida — é só enviar." },
                { num: "02", title: "Envie sua localização", desc: "Compartilhe onde você está. Nossa central identifica o táxi mais próximo de você em Umuarama." },
                { num: "03", title: "Táxi na sua porta", desc: "Em minutos um motorista profissional estará a caminho. Sem espera, sem complicação." },
              ].map((s) => (
                <div key={s.num} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 text-black font-extrabold text-lg flex items-center justify-center mx-auto mb-5">
                    {s.num}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-base hover:bg-yellow-300 transition-colors shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              >
                Chamar Táxi Agora
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Avaliações</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">O que nossos clientes dizem</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div key={r.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/20 transition-all">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{r.name}</p>
                      <p className="text-xs text-gray-500">{r.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Dúvidas Frequentes</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Perguntas sobre Táxi em Umuarama</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold hover:text-yellow-400 transition-colors list-none">
                    {f.q}
                    <span className="text-yellow-400 text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Precisa de táxi em <span className="text-yellow-400">Umuarama</span> agora?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              A Giroto Táxi está disponível 24 horas por dia, 7 dias por semana. Chame agora pelo WhatsApp ou ligue diretamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)]"
              >
                Chamar no WhatsApp
              </a>
              <a
                href={PHONE}
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all"
              >
                (44) 99891-3040
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-10 bg-black/50">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 Giroto Táxi Umuarama. Todos os direitos reservados.</p>
            <p>Táxi em Umuarama · Táxi de Umuarama · Serviço de Táxi Umuarama · Corridas em Umuarama</p>
          </div>
        </footer>

        {/* MOBILE STICKY BOTTOM */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 p-3">
          <div className="flex items-center justify-center gap-1.5 mb-2 text-[11px] text-gray-400 font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            </span>
            Táxi disponível agora em Umuarama
          </div>
          <div className="flex gap-2.5">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-0.5 h-14 bg-green-500 rounded-2xl font-bold text-white text-sm active:scale-95 transition-transform"
            >
              <span>WhatsApp</span>
              <span className="text-[10px] text-green-100 font-normal">Resposta em segundos</span>
            </a>
            <a
              href={PHONE}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 h-14 border border-white/20 rounded-2xl font-semibold text-white text-sm active:scale-95 transition-transform"
            >
              <span>Ligar Agora</span>
              <span className="text-[10px] text-gray-400 font-normal">Atendimento 24h</span>
            </a>
          </div>
        </div>

        {/* SPACER MOBILE */}
        <div className="h-24 md:hidden" />
      </div>
    </>
  );
}
