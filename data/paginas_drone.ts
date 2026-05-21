export interface PaginaDrone{title:string;slug:string;kw:string;tipo:string}
export const paginasDrone:PaginaDrone[]=[
  {
    "title": "Drone para Casamento em Umuarama PR",
    "kw": "drone casamento umuarama",
    "slug": "drone-para-casamento-em-umuarama-pr",
    "tipo": "casamento"
  },
  {
    "title": "Filmagem Aerea Casamento Umuarama PR",
    "kw": "filmagem aerea casamento umuarama",
    "slug": "filmagem-aerea-casamento-umuarama-pr",
    "tipo": "casamento"
  },
  {
    "title": "Foto Aerea Casamento Umuarama PR",
    "kw": "foto aerea casamento umuarama",
    "slug": "foto-aerea-casamento-umuarama-pr",
    "tipo": "casamento"
  },
  {
    "title": "Drone Making Of Umuarama PR",
    "kw": "drone making of umuarama",
    "slug": "drone-making-of-umuarama-pr",
    "tipo": "making-of"
  },
  {
    "title": "Filmagem Aerea Fazenda Umuarama PR",
    "kw": "filmagem aerea fazenda umuarama",
    "slug": "filmagem-aerea-fazenda-umuarama-pr",
    "tipo": "rural"
  },
  {
    "title": "Drone Rural Umuarama PR",
    "kw": "drone rural umuarama",
    "slug": "drone-rural-umuarama-pr",
    "tipo": "rural"
  },
  {
    "title": "Foto Aerea Rural Umuarama PR",
    "kw": "foto aerea rural umuarama",
    "slug": "foto-aerea-rural-umuarama-pr",
    "tipo": "rural"
  },
  {
    "title": "Drone DJI Eventos Umuarama PR",
    "kw": "drone dji eventos umuarama",
    "slug": "drone-dji-eventos-umuarama-pr",
    "tipo": "eventos"
  },
  {
    "title": "Filmagem Aerea Eventos Umuarama PR",
    "kw": "filmagem aerea eventos umuarama",
    "slug": "filmagem-aerea-eventos-umuarama-pr",
    "tipo": "eventos"
  },
  {
    "title": "Drone Formatura Umuarama PR",
    "kw": "drone formatura umuarama",
    "slug": "drone-formatura-umuarama-pr",
    "tipo": "formatura"
  },
  {
    "title": "Video Aereo Casamento Umuarama PR",
    "kw": "video aereo casamento umuarama",
    "slug": "video-aereo-casamento-umuarama-pr",
    "tipo": "casamento"
  },
  {
    "title": "Drone DJI Mavic Umuarama PR",
    "kw": "drone dji mavic umuarama",
    "slug": "drone-dji-mavic-umuarama-pr",
    "tipo": "drone"
  },
  {
    "title": "Drone DJI Mini Umuarama PR",
    "kw": "drone dji mini umuarama",
    "slug": "drone-dji-mini-umuarama-pr",
    "tipo": "drone"
  },
  {
    "title": "Drone DJI Air Umuarama PR",
    "kw": "drone dji air umuarama",
    "slug": "drone-dji-air-umuarama-pr",
    "tipo": "drone"
  },
  {
    "title": "Filmagem Aerea Profissional Umuarama PR",
    "kw": "filmagem aerea profissional umuarama",
    "slug": "filmagem-aerea-profissional-umuarama-pr",
    "tipo": "profissional"
  },
  {
    "title": "Foto Video Aereo Umuarama PR",
    "kw": "foto video aereo umuarama",
    "slug": "foto-video-aereo-umuarama-pr",
    "tipo": "profissional"
  },
  {
    "title": "Drone Propriedade Rural Umuarama PR",
    "kw": "drone propriedade rural umuarama",
    "slug": "drone-propriedade-rural-umuarama-pr",
    "tipo": "rural"
  },
  {
    "title": "Cinematografia Aerea Umuarama PR",
    "kw": "cinematografia aerea umuarama",
    "slug": "cinematografia-aerea-umuarama-pr",
    "tipo": "profissional"
  },
  {
    "title": "Drone Festa 15 Anos Umuarama PR",
    "kw": "drone festa 15 anos umuarama",
    "slug": "drone-festa-15-anos-umuarama-pr",
    "tipo": "eventos"
  },
  {
    "title": "Studio Foto Danielle Drone Umuarama PR",
    "kw": "studio foto danielle drone umuarama",
    "slug": "studio-foto-danielle-drone-umuarama-pr",
    "tipo": "profissional"
  }
]
export function getPaginaDroneBySlug(slug:string):PaginaDrone|undefined{return paginasDrone.find(p=>p.slug===slug)}