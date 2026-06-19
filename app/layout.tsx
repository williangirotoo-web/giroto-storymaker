import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://eternamoments.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Giroto Story Maker | Story Maker para Casamentos e Eventos em Umuarama PR',
    template: '%s | Giroto Story Maker Umuarama',
  },
  description: 'Story Maker profissional para casamentos, formaturas e eventos em Umuarama PR e região. Conteúdo para Instagram, Reels e TikTok criado em tempo real durante seu evento. Solicite orçamento!',
  keywords: [
    'story maker umuarama',
    'story maker para casamento umuarama',
    'story maker casamento pr',
    'story maker eventos umuarama',
    'story maker umuarama parana',
    'cobertura stories casamento umuarama',
    'conteúdo instagram casamento umuarama',
    'reels casamento umuarama',
    'tiktok casamento umuarama',
    'story maker formatura umuarama',
    'story maker 15 anos umuarama',
    'giroto story maker',
    'cobertura digital eventos umuarama',
    'story maker noroeste parana',
    'story maker campo mourao',
    'story maker cianorte',
    'story maker paranavaí',
    'social media eventos umuarama',
    'conteúdo em tempo real casamento',
    'story maker profissional pr',
  ],
  authors: [{ name: 'Giroto Story Maker', url: siteUrl }],
  creator: 'Giroto Story Maker',
  publisher: 'Giroto Story Maker',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Giroto Story Maker',
    title: 'Story Maker para Casamentos e Eventos em Umuarama PR | Giroto Story Maker',
    description: 'Conteúdo profissional para Instagram, Reels e TikTok criado em tempo real durante o seu evento. Story Maker em Umuarama PR e toda a região.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Giroto Story Maker - Story Maker para Casamentos em Umuarama PR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giroto Story Maker | Story Maker para Casamentos em Umuarama PR',
    description: 'Conteúdo profissional para Instagram, Reels e TikTok criado em tempo real durante o seu evento.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: '2pEP85ATbgBUwhJFlk1dwUtyBtwW1Y0r2szz37qejJA',
  },
  category: 'photography',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'Giroto Story Maker',
      description: 'Story Maker profissional para casamentos, formaturas e eventos em Umuarama PR. Conteúdo para Instagram, Reels e TikTok criado em tempo real.',
      url: siteUrl,
      telephone: '+5544984383013',
      priceRange: '$$',
      image: `${siteUrl}/og-image.jpg`,
      logo: `${siteUrl}/logo.png`,
      sameAs: [
        'https://www.instagram.com/giroto_storymaker/',
        `https://wa.me/5544984383013`,
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Umuarama',
        addressRegion: 'PR',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.7661,
        longitude: -53.3206,
      },
      areaServed: [
        { '@type': 'City', name: 'Umuarama', containedInPlace: { '@type': 'State', name: 'Paraná' } },
        { '@type': 'City', name: 'Cianorte' },
        { '@type': 'City', name: 'Campo Mourão' },
        { '@type': 'City', name: 'Paranavaí' },
        { '@type': 'City', name: 'Maringá' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de Story Maker',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Story Maker para Casamentos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Story Maker para Formaturas' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Story Maker para Eventos Corporativos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Story Maker para Festas de 15 Anos' } },
        ],
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Giroto Story Maker',
      description: 'Story Maker profissional para casamentos e eventos em Umuarama PR',
      publisher: { '@id': `${siteUrl}/#business` },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é um Story Maker para casamentos em Umuarama?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Um Story Maker para casamentos é um profissional especializado em criar conteúdo para Instagram Stories, Reels e TikTok em tempo real durante o evento. Em Umuarama PR, o Giroto Story Maker captura os melhores momentos do seu casamento e entrega o conteúdo editado ainda durante a festa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a diferença entre Story Maker e fotógrafo de casamento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O fotógrafo registra momentos para álbuns e memórias. O Story Maker foca em criar conteúdo dinâmico para redes sociais — Stories, Reels e TikToks — entregando o material editado em tempo real para você compartilhar ainda durante o evento.',
          },
        },
        {
          '@type': 'Question',
          name: 'O Giroto Story Maker atende fora de Umuarama PR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim! Atendemos toda a região noroeste do Paraná incluindo Cianorte, Campo Mourão, Paranavaí, Maringá e cidades vizinhas. Entre em contato pelo WhatsApp para verificar disponibilidade na sua cidade.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quando recebo o conteúdo do Story Maker?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O diferencial do Giroto Story Maker é a entrega em tempo real! Você recebe stories e reels editados ainda durante o evento para compartilhar na hora. Todo o conteúdo final é entregue em até 24 horas após o evento.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais eventos o Story Maker em Umuarama atende?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Atendemos casamentos, formaturas, festas de 15 anos, aniversários, eventos corporativos, festas de confraternização e qualquer celebração que mereça ser compartilhada nas redes sociais com qualidade profissional.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como contratar o Story Maker para meu casamento em Umuarama?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'É simples! Entre em contato pelo WhatsApp (44) 98438-3013 ou pelo formulário do site. Informe a data do seu evento e receba um orçamento personalizado. Recomendamos verificar a disponibilidade com antecedência, pois as datas são limitadas.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Umuarama" />
        <meta name="geo.position" content="-23.7661;-53.3206" />
        <meta name="ICBM" content="-23.7661, -53.3206" />
        <meta name="theme-color" content="#0a0806" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
