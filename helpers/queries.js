
// Internal Vars
const seo = `seo { ..., shareGraphic { asset-> } }`
const image = `
  asset-> { ... },
  hotspot { ... },
  crop { ... },
`
const hero = `
  hero { heroTagline, heroHeading, heroText },
`
const slug = `slug { current }`
const company = `"company": *[_type == "company"][0]{ emailAddress, socials[] { platform, url }}`

// External Queries
export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    ${hero}
  },
  ${seo},
  ${company},
}`