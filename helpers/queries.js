
// Internal Vars
const seo = `seo { ... }`
const image = `
  asset-> { ... },
  hotspot { ... },
  crop { ... },
`
const hero = `
  hero { heroTagline, heroHeading, heroText }
`
const contentBlocks = `
  contentBlocks[] {
    ...,
    "team": *[_type == "team"]
  }
`
const content = `
  content[] {
    ...,
    ${image}
  }
`
const slug = `slug { current }`

const aboutNav = `"aboutNav": *[_type == "about"][0]{ contentBlocks[] { "label": sectionTagline } }`
const trainingNav = `"trainingNav": *[_type == "training"][0]{ trainingTypes[] { "label": title } }`
const networkNav = `"networkNav": *[_type == "network"][0]{...}`

const nav = `"nav": { ${aboutNav}, ${trainingNav}, ${networkNav} }`

const company = `"company": *[_type == "company"][0]{ emailAddress, signUpButtonURL, donateButtonURL, signUpcompanyName, registeredCharityNumber, socials[] { platform, url }}`

// External Queries
export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    ${hero},
    ${contentBlocks},
    ${seo},
  },
  ${company},
  ${nav}
}`

export const aboutQuery = `{
  "about": *[_type == "about"][0]{
    title,
    ${hero},
    ${contentBlocks},
    ${seo},
  },
  ${company},
  ${nav}
}`

export const trainingQuery = `{
  "training": *[_type == "training"][0]{
    title,
    ${hero},
    ${seo},
  },
  ${company},
  ${nav}
}`

export const networkQuery = `{
  "network": *[_type == "network"][0]{
    title,
    ${hero},
    ${seo}
  },
  ${company},
  ${nav}
}`

export const resourcesLandingQuery = `{
  "articles": *[_type == "blog"][0..2] {
    title,
    ${slug}
  },
  "educationalResources": *[_type == "educationalResources"][0..2] {
    title,
    ${slug}
  },
  "events": *[_type == "event"][0..2] {
    title,
    eventDate,
    ${slug}
  },
  ${company},
  ${nav}
}`

export const blogLandingQuery = `{
  "articles": *[_type == "blog"] {
    title,
    content,
    publishedDate,
    author->{
      name,
      ${image}
    },
    ${content},
    ${slug}
  },
  ${company},
  ${nav}
}`

export const eventsLandingQuery = `{
  "events": *[_type == "event"] {
    title,
    content,
    eventDate,
    ${content},
    ${slug}
  },
  ${company},
  ${nav}
}`

export const educationalLandingQuery = `{
  "articles": *[_type == "educationalResources"] {
    title,
    content,
    publishedDate,
    author->{
      name,
      ${image}
    },
    ${content},
    ${slug}
  },
  ${company},
  ${nav}
}`

export const articleSlugQuery = `{
  "article": *[_type == "blog" && slug.current == $slug][0] {
    title,
    publishedDate,
    author->{
      name,
      image {
        ${image}
      }
    },
    ${content},
    ${slug},
    ${seo},
    "next": *[_type == "blog" && slug.current != $slug && (publishedDate > ^.publishedDate)][0] {
      title,
      ${slug}
    }
  },
  ${company},
  ${nav}
}`


export const educationalArticleSlugQuery = `{
  "article": *[_type == "educationalResources" && slug.current == $slug][0] {
    title,
    publishedDate,
    author->{
      name,
      ${image}
    },
    ${content},
    ${slug},
    ${seo},
    "next": *[_type == "educationalResources" && slug.current != $slug && (publishedDate > ^.publishedDate)][0] {
      title,
      ${slug}
    }
  },
  ${company},
  ${nav}
}`

export const eventSlugQuery = `{
  "event": *[_type == "event" && slug.current == $slug][0] {
    title,
    eventDate,
    ${content},
    ${slug},
    ${seo},
    "next": *[_type == "event" && slug.current != $slug && (eventDate > ^.eventDate)][0] {
      title,
      ${slug}
    }
  },
  ${company},
  ${nav}
}`