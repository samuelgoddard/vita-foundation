import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ContactCta from '@/components/contactCta'
import Hero from '@/components/hero'
import InPageNav from '@/components/inPageNav'

import { aboutQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import BodyRenderer from '@/components/bodyRenderer'
const pageService = new SanityPageService(aboutQuery)

export default function About(initialData) {
  const { data: { about, company, nav }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title={about.title} />

      <Header
        aboutNav={nav.aboutNav.contentBlocks}
        trainingNav={nav.trainingNav.trainingTypes}
        network={nav.networkNav}
        company={company}
      />

      <main>
        <article>
          <Hero
            pill={about.hero.heroTagline}
            heading={about.hero.heroHeading}
            text={about.hero.heroText}
            media={<iframe src="https://player.vimeo.com/video/463396374?color=00afaa&amp;title=0&amp;byline=0&amp;portrait=0" className="w-full aspect-video rounded-md" allow="autoplay; fullscreen" allowFullScreen=""></iframe>}
          />

          <InPageNav items={about.contentBlocks} />

          <BodyRenderer body={about.contentBlocks} />

          <ContactCta />
        </article>
      </main>

      <Footer
        aboutNav={nav.aboutNav.contentBlocks}
        trainingNav={nav.trainingNav.trainingTypes}
        network={nav.networkNav}
        company={company}
      />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}