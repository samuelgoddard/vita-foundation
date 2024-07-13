import { NextSeo } from 'next-seo'
import { FiUser, FiCalendar } from 'react-icons/fi'

import Layout from '@/components/layout'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Btn from '@/components/btn'
import ContactCta from '@/components/contactCta'


import { educationalLandingQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import FancyLink from '@/components/fancyLink'
const pageService = new SanityPageService(educationalLandingQuery)

export default function Resources(initialData) {
  const { data: { articles, company, nav }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Educational Resources" />

      <Header
        aboutNav={nav.aboutNav.contentBlocks}
        trainingNav={nav.trainingNav.trainingTypes}
        network={nav.networkNav}
      />
      
      <main>
        <article>
          <Hero
            pill="Latest Resources"
            heading="Educational Resources"
          />

          <section className="bg-white border-b border-black/10">
            <div className="bg-white py-5 border-b border-b-black/10 sticky top-0 z-50 hidden md:block">
              <Container>
                <nav>
                  <ul className="md:flex md:space-x-8 lg:space-x-12">
                    <li><FancyLink className="hover:text-red a11y-focus" href="/resources">← Back to All Resources</FancyLink></li>
                  </ul>
                </nav>
              </Container>
            </div>

            <Container>
              <nav className="pt-5 py-10 md:pt-10 md:py-16 xl:py-28 xl:pt-14">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                  {articles.map((e,i) => {
                    const date = new Date(e.publishedDate);

                    return (
                      <li className="col-span-1" key={i}><Link className="text-black border border-black/20 flex flex-wrap h-full w-full rounded-md p-3.5 md:p-5 lg:p-6 items-center border-b-black/20 a11y-focus group" href={`/resources/educational/${e.slug.current}`}>
                        <div className="w-full mb-auto pb-6">
                          <span className="block max-w-[80%] text-xl leading-tight md:text-2xl md:leading-tight mb-2 font-semibold">{e.title}</span>

                          <div className="flex gap-3 items-center mb-3 md:mb-4 pb-3 md:pb-4 border-b border-black/20">
                            <span className="text-sm flex items-center gap-1"><span className="block w-3.5 text-black/50"><FiCalendar size="auto" /></span> {new Intl.DateTimeFormat('en-GB').format(date)}</span>
                          </div>

                          <div className="w-full text-black/70 text-sm md:text-base">
                            {e.content[0].children && (
                              <p>{e.content[0].children[0].text?.substring(0,100) + '…'}</p>
                            )}
                          </div>
                        </div>

                        <div className="mt-auto w-full">
                          <span className="bg-red text-white group-hover:bg-black relative block shadow-md text-center px-3 md:px-4 xl:px-5 py-2 text-sm md:text-base rounded-md font-semibold outline-none group-focus-visible:outline-red group-focus-visible:outline-2 group-focus-visible:outline-dashed group-focus-visible:outline-offset-5">Read More</span>
                        </div>
                      </Link></li>
                    )
                  })}
                  {articles.map((e,i) => {
                    const date = new Date(e.publishedDate);

                    return (
                      <li className="col-span-1" key={i}><Link className="text-black border border-black/20 flex flex-wrap h-full w-full rounded-md p-3.5 md:p-5 lg:p-6 items-center border-b-black/20 a11y-focus group" href={`/resources/educational/${e.slug.current}`}>
                        <div className="w-full mb-auto pb-6">
                          <span className="block max-w-[80%] text-xl leading-tight md:text-2xl md:leading-tight mb-2 font-semibold">{e.title}</span>

                          <div className="flex gap-3 items-center mb-3 md:mb-4 pb-3 md:pb-4 border-b border-black/20">
                            <span className="text-sm flex items-center gap-1"><span className="block w-3.5 text-black/50"><FiCalendar size="auto" /></span> {new Intl.DateTimeFormat('en-GB').format(date)}</span>
                            
                          </div>

                          <div className="w-full text-black/70 text-sm md:text-base">
                            {e.content[0].children && (
                              <p>{e.content[0].children[0].text?.substring(0,100) + '…'}</p>
                            )}
                          </div>
                        </div>

                        <div className="mt-auto w-full">
                          <span className="bg-red text-white group-hover:bg-black relative block shadow-md text-center px-3 md:px-4 xl:px-5 py-2 text-sm md:text-base rounded-md font-semibold outline-none group-focus-visible:outline-red group-focus-visible:outline-2 group-focus-visible:outline-dashed group-focus-visible:outline-offset-5">Read More</span>
                        </div>
                      </Link></li>
                    )
                  })}
                </ul>
              </nav>
            </Container>
          </section>
          
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