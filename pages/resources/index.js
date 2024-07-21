import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Btn from '@/components/btn'
import ContactCta from '@/components/contactCta'

import { resourcesLandingQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
const pageService = new SanityPageService(resourcesLandingQuery)

export default function Resources(initialData) {
  const { data: { articles, educationalResources, events, company, nav }  } = pageService.getPreviewHook(initialData)()

  const upcomingEvents = events.filter(
    obj => new Intl.DateTimeFormat('en-GB').format(new Date(obj.eventDate)) >= new Intl.DateTimeFormat('en-GB').format(new Date())
  );

  return (
    <Layout>
      <NextSeo title="Resources" />

      <Header
        aboutNav={nav.aboutNav.contentBlocks}
        trainingNav={nav.trainingNav.trainingTypes}
        network={nav.networkNav}
      />
      
      <main>
        <article>
          <Hero
            pill="Training For Healthcare Professionals"
            heading="VITA Resources"
          />

          <section className="bg-white pt-6 py-10 md:py-16 xl:py-28 border-b border-black/10">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 lg:gap-10 items-start scroll-mt-6" id="blog">
                <div className="col-span-1 border border-black/20 p-4 md:p-6 rounded-md  self-start">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Our Blog</h2>

                  <div className="content mt-4 md:mt-6 mb-6 md:mb-10">
                    <p>Sharing experiences, thoughts and perspectives with each-other can be a really powerful way to understand human trafficking, exploitation, health and the work of other people across the sector in new ways. We love to hear from our network members. If you have a blog (or even vlog!) idea you would like to discuss please email us at <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>

                    <p>Our blog guidelines and confidentiality information can be found here.</p>
                  </div>

                  <nav className="mb-4 md:mb-8">
                    <p className="font-semibold mb-3">Latest Posts:</p>
                    
                    <ul className="border-t border-t-black/20">
                      {articles.map((e,i) => {
                        return (
                          <li key={i}><Link className="text-red hover:text-black font-semibold py-2.5 border-b flex items-center border-b-black/20 a11y-focus" href={`/blog/${e.slug.current}`}>
                            <span className="block flex-1">{e.title}</span>
                            <span className="w-auto ml-auto pl-6">
                              <svg className="w-4" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.268 1.152 7.93.785l-.687.726.34.368 5.128 5.555L.984 7.43H.502L.5 8.464h.483l11.853.003-5.322 5.629-.343.363.678.735.344-.363 6.084-6.436c.19-.2.192-.528.004-.73L8.268 1.151Z" fill="currentColor"/></svg>
                            </span>
                          </Link></li>
                        )
                      })}
                    </ul>
                  </nav>

                  <Btn href="/blog" intent="primary">View All Blog Posts</Btn>
                </div>

                <div className="col-span-1 border border-black/20 p-4 md:p-6 rounded-md  self-start scroll-mt-6" id="educational">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Educational Resources</h2>

                  <div className="content mt-4 md:mt-6 mb-6 md:mb-10">
                    <p>Learning never stops - and for the anti-trafficking sector this is especially true! Human trafficking is a crime that changes in response to supply, demand, barriers and policies. We are continuing to learn about how the whole-person health of victims is essential in protecting people from exploitation, understanding the harms of human trafficking and exploitation and how to provide excellent survivor care. We also believe that listening and learning with and from survivor colleagues is vital.</p>

                    <p>Here we will provide human trafficking, exploitation and health insights, links to research and connect you to educational pieces from different perspectives.</p>
                    
                    <p>If you have an educational piece you would like us to consider, please email us at <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>
                    
                    <ul className="list-disc list-inside">
                      <li>Support and Self-care Resources</li>
                      <li>Educational Videos</li>
                      <li>Publications</li>
                      <li>Audio/Podcasts</li>
                    </ul>
                  </div>

                  <nav className="mb-4 md:mb-8">
                    <p className="font-semibold mb-3">Latest Educational Resources:</p>
                    
                    <ul className="border-t border-t-black/20">
                      {educationalResources.map((e,i) => {
                        return (
                          <li key={i}><Link className="text-red hover:text-black font-semibold py-2.5 border-b flex items-center border-b-black/20 a11y-focus" href={`/educational-resources/${e.slug.current}`}>
                            <span className="block flex-1">{e.title}</span>
                            <span className="w-auto ml-auto pl-6">
                              <svg className="w-4" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.268 1.152 7.93.785l-.687.726.34.368 5.128 5.555L.984 7.43H.502L.5 8.464h.483l11.853.003-5.322 5.629-.343.363.678.735.344-.363 6.084-6.436c.19-.2.192-.528.004-.73L8.268 1.151Z" fill="currentColor"/></svg>
                            </span>
                          </Link></li>
                        )
                      })}
                    </ul>
                  </nav>

                  <Btn href="/educational-resources" intent="primary">View All Educational Resources</Btn>
                </div>

                <div className="col-span-1 border border-black/20 p-4 md:p-6 rounded-md  self-start scroll-mt-6" id="newsletter">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Newsletter</h2>

                  <div className="content mt-4 md:mt-6">
                    <p>If you have not signed up to our newsletter yet then you can by clicking the button &quot;Sign Up&quot;.</p>

                    <p>Our monthly newsletter brings human trafficking, exploitation and health updates, anti-trafficking education and advocacy support straight to your inbox! Look out for new people and organisations to connect with, information and stories to equip you with new insights, and practical ways to take action and mobilise our workforces and communities to respond to human trafficking and exploitation.</p>
                    
                    <p>If you have something you&rsquo;d like to discuss for our newsletter, please email <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>
                  </div>

                  <Btn href="https://mailchi.mp/55437799748c/sign-up" external intent="primary">Sign Up</Btn>
                </div>

                <div className="col-span-1 border border-black/20 p-4 md:p-6 rounded-md scroll-mt-6" id="events">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Events</h2>

                  <div className="content mt-4 md:mt-6 mb-6 md:mb-10">
                    <p>Here we hope to keep you up to date with any events run by VITA or other organisations. If you are running an event, whether it&rsquo;s a conference, an online webinar, a presentation, meeting or art exhibition, let us know by emailing <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>

                    <p>We can publicise certain events to our network right here on our website and through social media. We will only publicise events that align with our aim and guiding principles that you can see in About Us.</p>
                  </div>
                  
                  <p className="font-semibold mb-3">Upcoming Events:</p>
                  
                  {upcomingEvents.length ? (
                    <nav className="mb-4 md:mb-8">
                
                      <ul className="border-t border-t-black/20">
                        {upcomingEvents.map((e,i) => {
                          const date = new Date(e.eventDate);

                          return (
                            <li key={i}><Link className="text-red hover:text-black font-semibold py-2.5 border-b flex items-center border-b-black/20 a11y-focus" href={`/events/${e.slug.current}`}>
                              <span className="block flex-1">{new Intl.DateTimeFormat('en-GB').format(date)} - {e.title}</span>
                              <span className="w-auto ml-auto pl-6">
                                <svg className="w-4" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.268 1.152 7.93.785l-.687.726.34.368 5.128 5.555L.984 7.43H.502L.5 8.464h.483l11.853.003-5.322 5.629-.343.363.678.735.344-.363 6.084-6.436c.19-.2.192-.528.004-.73L8.268 1.151Z" fill="currentColor"/></svg>
                              </span>
                            </Link></li>
                          )
                        })}
                      </ul>
                    </nav>
                  ) : ( 
                    <p className="border-y mb-4 md:mb-8 border-y-black/20 py-2.5">No upcoming events...</p>
                  )}

                  <Btn href="/events" intent="primary">View All Events</Btn>
                </div>

                <div className="col-span-1 border border-black/20 p-4 md:p-6 rounded-md scroll-mt-6" id="signposting">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Signposting</h2>

                  <div className="content mt-4 md:mt-6">
                    <p>Partnership working powers the anti-trafficking sector.</p>

                    <p>Here are some of the key organisations working in the UK at a local, regional, national and international level to end slavery, support survivors and change system-wide policy and practice. If you know an organisation that you would like to be listed below, please contact us at <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>
                  </div>
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