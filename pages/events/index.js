import { NextSeo } from 'next-seo'
import { FiUser, FiCalendar } from 'react-icons/fi'

import Layout from '@/components/layout'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import ContactCta from '@/components/contactCta'

import { eventsLandingQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import FancyLink from '@/components/fancyLink'
const pageService = new SanityPageService(eventsLandingQuery)

export default function Events(initialData) {
  const { data: { events, company, nav }  } = pageService.getPreviewHook(initialData)()
  
  function isAfterNow(date) {
    return new Date(date).getTime() >= new Date().getTime();
  }

  return (
    <Layout>
      <NextSeo title="Events" />

      <Header
        aboutNav={nav.aboutNav.contentBlocks}
        wide
        trainingNav={nav.trainingNav.trainingTypes}
        network={nav.networkNav}
        company={company}
      />
    
      <main>
        <article>
          <Hero
            pill="Something"
            heading="VITA Events"
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
              <div className="pt-5 py-10 md:pt-10 md:py-16 xl:py-28 xl:pt-14">
                <nav className="mb-6 md:mb-10 xl:mb-14 pb-10 md:pb-12 xl:pb-16 border-b border-black/10">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">Upcoming Events</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                    {events.map((e,i) => {
                      const date = new Date(e.eventDate);

                      return new Intl.DateTimeFormat('en-GB').format(date) >= new Intl.DateTimeFormat('en-GB').format(new Date()) && (
                        <li className="col-span-1" key={i}><Link className="text-black border border-black/20 flex flex-wrap h-full w-full rounded-md p-3.5 md:p-5 lg:p-6 items-center border-b-black/20 a11y-focus group" href={`/events/${e.slug.current}`}>

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

                <nav className="">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">Past Events</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                    {events.map((e,i) => {
                      const date = new Date(e.eventDate);

                      return new Intl.DateTimeFormat('en-GB').format(date) < new Intl.DateTimeFormat('en-GB').format(new Date()) && (
                        <li className="col-span-1" key={i}><Link className="text-black opacity-60 grayscale border border-black/20 flex flex-wrap h-full w-full rounded-md p-3.5 md:p-5 lg:p-6 items-center border-b-black/20 a11y-focus group" href={`/events/${e.slug.current}`}>
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
              </div>
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