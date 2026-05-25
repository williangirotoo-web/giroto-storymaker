export interface PaginaDrone { title: string; slug: string; kw: string; tipo: string }

export const paginasDrone: PaginaDrone[] = [
  {
    "title": "Drone para Casamento em Umuarama PR",
    "kw": "drone casamento umuarama pr",
    "tipo": "casamento",
    "slug": "drone-para-casamento-em-umuarama-pr"
  },
  {
    "title": "Filmagem Aerea de Casamento em Umuarama PR",
    "kw": "filmagem aerea casamento umuarama",
    "tipo": "casamento",
    "slug": "filmagem-aerea-de-casamento-em-umuarama-pr"
  },
  {
    "title": "Foto Aerea de Casamento em Umuarama PR",
    "kw": "foto aerea casamento umuarama",
    "tipo": "casamento",
    "slug": "foto-aerea-de-casamento-em-umuarama-pr"
  },
  {
    "title": "Drone para Making Of em Umuarama PR",
    "kw": "drone making of umuarama",
    "tipo": "making-of",
    "slug": "drone-para-making-of-em-umuarama-pr"
  },
  {
    "title": "Filmagem Aerea para Fazenda em Umuarama PR",
    "kw": "filmagem aerea fazenda umuarama",
    "tipo": "rural",
    "slug": "filmagem-aerea-para-fazenda-em-umuarama-pr"
  },
  {
    "title": "Drone Rural em Umuarama PR",
    "kw": "drone rural umuarama pr",
    "tipo": "rural",
    "slug": "drone-rural-em-umuarama-pr"
  },
  {
    "title": "Foto Aerea Rural Umuarama PR",
    "kw": "foto aerea rural umuarama",
    "tipo": "rural",
    "slug": "foto-aerea-rural-umuarama-pr"
  },
  {
    "title": "Drone DJI para Eventos em Umuarama PR",
    "kw": "drone dji eventos umuarama",
    "tipo": "eventos",
    "slug": "drone-dji-para-eventos-em-umuarama-pr"
  },
  {
    "title": "Filmagem Aerea para Eventos em Umuarama PR",
    "kw": "filmagem aerea eventos umuarama",
    "tipo": "eventos",
    "slug": "filmagem-aerea-para-eventos-em-umuarama-pr"
  },
  {
    "title": "Drone para Formatura em Umuarama PR",
    "kw": "drone formatura umuarama pr",
    "tipo": "formatura",
    "slug": "drone-para-formatura-em-umuarama-pr"
  },
  {
    "title": "Video Aereo para Casamento em Umuarama PR",
    "kw": "video aereo casamento umuarama",
    "tipo": "casamento",
    "slug": "video-aereo-para-casamento-em-umuarama-pr"
  },
  {
    "title": "Drone DJI Mavic Umuarama PR",
    "kw": "drone dji mavic umuarama",
    "tipo": "drone",
    "slug": "drone-dji-mavic-umuarama-pr"
  },
  {
    "title": "Drone DJI Mini Umuarama PR",
    "kw": "drone dji mini umuarama",
    "tipo": "drone",
    "slug": "drone-dji-mini-umuarama-pr"
  },
  {
    "title": "Drone DJI Air Umuarama PR",
    "kw": "drone dji air umuarama",
    "tipo": "drone",
    "slug": "drone-dji-air-umuarama-pr"
  },
  {
    "title": "Filmagem Aerea Profissional Umuarama PR",
    "kw": "filmagem aerea profissional umuarama",
    "tipo": "profissional",
    "slug": "filmagem-aerea-profissional-umuarama-pr"
  },
  {
    "title": "Foto e Video Aereo Umuarama PR",
    "kw": "foto video aereo umuarama pr",
    "tipo": "profissional",
    "slug": "foto-e-video-aereo-umuarama-pr"
  },
  {
    "title": "Drone para Propriedade Rural Umuarama PR",
    "kw": "drone propriedade rural umuarama",
    "tipo": "rural",
    "slug": "drone-para-propriedade-rural-umuarama-pr"
  },
  {
    "title": "Cinematografia Aerea Umuarama PR",
    "kw": "cinematografia aerea umuarama pr",
    "tipo": "profissional",
    "slug": "cinematografia-aerea-umuarama-pr"
  },
  {
    "title": "Drone para Festa de 15 Anos Umuarama PR",
    "kw": "drone festa 15 anos umuarama",
    "tipo": "eventos",
    "slug": "drone-para-festa-de-15-anos-umuarama-pr"
  },
  {
    "title": "Studio Foto Danielle Drone Umuarama PR",
    "kw": "studio foto danielle drone umuarama",
    "tipo": "profissional",
    "slug": "studio-foto-danielle-drone-umuarama-pr"
  }
]

export function getPaginaDroneBySlug(slug: string): PaginaDrone | undefined { return paginasDrone.find(p => p.slug === slug) }
