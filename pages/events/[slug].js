import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import ContactCta from '@/components/contactCta'

import { eventSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import { PortableText } from '@portabletext/react'
import Blockquote from '@/components/blockQuote'
import SanityImageResponsive from '@/components/sanityImageResponsive'
import Link from 'next/link'
import FancyLink from '@/components/fancyLink'
import { FiCalendar, FiAlertCircle } from 'react-icons/fi'
import Btn from '@/components/btn'
const pageService = new SanityPageService(eventSlugQuery)

export default function Event(initialData) {
  const { data: { event, company, nav }  } = pageService.getPreviewHook(initialData)()
  const date = new Date(event.eventDate);


  const myPortableTextComponents = {
    types: {
      image: ({value}) => <SanityImageResponsive image={value} />,
      blockquote: ({value}) => <Blockquote text={value.text} author={value.author} />
    }
  }
  return (
    <Layout>
      <NextSeo title={event.title} />
      
      <Header
        aboutNav={nav.aboutNav.contentBlocks}
        trainingNav={nav.trainingNav.trainingTypes}
        network={nav.networkNav}
        company={company}
      />
      <main>
        <article>
          <Hero
            pill={new Intl.DateTimeFormat('en-GB').format(date)}
            wide
            heading={event.title}
          />

          <section className="bg-white border-b border-black/10">
            <div className="bg-white py-5 border-b border-b-black/10 sticky top-0 z-50 hidden md:block">
              <Container>
                <nav>
                  <ul className="md:flex md:space-x-8 lg:space-x-12">
                    <li><FancyLink className="hover:text-red a11y-focus" href="/events">← Back to All Events</FancyLink></li>
                  </ul>
                </nav>
              </Container>
            </div>

            <Container>
              <div className="grid grid-cols-12 pt-5 py-10 md:pt-10 md:py-16 xl:py-28 xl:pt-14">
                <div className="col-span-12 lg:col-span-2">
                  <div className="flex gap-6 lg:block lg:gap-0 text-sm lg:text-base border-b border-black/20 lg:border-b-0 mb-5 pb-2 lg:pb-0 lg:mb-0 sticky top-[108px] xl:top-[120px]">
                    <div className="mb-4 lg:mb-6 order-2 lg:order-1">
                      <div className="flex gap-3 items-center">
                        <div className="hidden md:flex w-8 h-8 rounded-full bg-black/10 relative items-center justify-center">
                          <FiCalendar size="50%" className="opacity-50" />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold block leading-none">Event Date:</span><span className={`block ${new Intl.DateTimeFormat('en-GB').format(date) < new Intl.DateTimeFormat('en-GB').format(new Date()) && 'line-through'}`}>{new Intl.DateTimeFormat('en-GB').format(date)}</span>
                        </div>
                      </div>
                    </div>

                    {event.ticketLink && (
                      <div className="order-1 lg:order-2">
                        <Btn intent="primary" external href="https://example.com">Get Tickets</Btn>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="col-span-12 lg:col-span-6 lg:col-start-4">
                  <div className="w-full content content--blog">
                    {new Intl.DateTimeFormat('en-GB').format(date) < new Intl.DateTimeFormat('en-GB').format(new Date()) && (
                      <span className="bg-red/20 border border-red/30 text-red rounded-lg p-3 flex gap-3 items-center text-sm leading-tight">
                        <span><FiAlertCircle /></span>
                        <span>Unfortunately, this event is in the past, <Link href="/events">see all upcoming events</Link></span>
                      </span>
                    )}

                    <PortableText
                      value={event.content}
                      components={myPortableTextComponents}
                    />
                  </div>

                  {event.next ? (
                    <Link href={`/events/${event.next.slug.current}`} className="flex items-end mt-6 lg:mt-12 pt-4 lg:pt-6 border-t border-black/20 hover:text-red focus:text-red a11y-focus">
                      <div className="flex-1">
                        <span className="block text-sm mb-1 text-black/70">Next event</span>
                        <span className="text-2xl leading-tight md:text-3xl md:leading-tight">{event.next.title}</span>
                      </div>

                      <svg className="w-4 lg:w-6 ml-auto mb-2 lg:mb-1.5" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.268 1.152 7.93.785l-.687.726.34.368 5.128 5.555L.984 7.43H.502L.5 8.464h.483l11.853.003-5.322 5.629-.343.363.678.735.344-.363 6.084-6.436c.19-.2.192-.528.004-.73L8.268 1.151Z" fill="currentColor"/></svg>
                    </Link>
                  ) : (
                    <Link href={`/events`} className="flex items-end mt-6 lg:mt-12 pt-4 lg:pt-6 border-t border-black/20 hover:text-red focus:text-red a11y-focus">
                      <div className="flex-1">
                        <span className="block text-sm mb-1 text-black/70">Back to</span>
                        <span className="text-2xl leading-tight md:text-3xl md:leading-tight">All Events</span>
                      </div>

                      <svg className="w-4 lg:w-6 ml-auto mb-2 lg:mb-1.5" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.268 1.152 7.93.785l-.687.726.34.368 5.128 5.555L.984 7.43H.502L.5 8.464h.483l11.853.003-5.322 5.629-.343.363.678.735.344-.363 6.084-6.436c.19-.2.192-.528.004-.73L8.268 1.151Z" fill="currentColor"/></svg>
                    </Link>
                  )}
                </div>
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

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('event')
  return {
    paths: paths,
    fallback: false,
  };
}