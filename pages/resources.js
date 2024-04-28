import Layout from '@/components/layout'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Hero from '@/components/hero'
import Btn from '@/components/btn'
import ContactCta from '@/components/contactCta'

export default function Resources() {
  return (
    <Layout>
      <NextSeo title="Resources" />
      
      <article>
        <Hero
          pill="Training For Healthcare Professionals"
          heading="VITA Resources"
        />

        <section className="bg-white pt-6 py-10 md:py-16 xl:py-28 border-b border-black/10">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
              <div className="col-span-1">
                <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Our Blog</h2>

                <div className="content mt-4 md:mt-6">
                  <p>Sharing experiences, thoughts and perspectives with each-other can be a really powerful way to understand human trafficking, exploitation, health and the work of other people across the sector in new ways. We love to hear from our network members. If you have a blog (or even vlog!) idea you would like to discuss please email us at <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>

                  <p>Our blog guidelines and confidentiality information can be found here.</p>
                </div>

                <Btn href="/" intent="primary">View Blog</Btn>
              </div>

              <div className="col-span-1 mb-5 md:mb-10 lg:mb-16">
                <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Educational Resources</h2>

                <div className="content mt-4 md:mt-6">
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

                <Btn href="/" intent="primary">View Resources</Btn>
              </div>

              <div className="col-span-1 mb-5 md:mb-10 lg:mb-16">
                <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Newsletter</h2>

                <div className="content mt-4 md:mt-6">
                  <p>If you have not signed up to our newsletter yet then you can by clicking the button &quot;Sign Up&quot;.</p>

                  <p>Our monthly newsletter brings human trafficking, exploitation and health updates, anti-trafficking education and advocacy support straight to your inbox! Look out for new people and organisations to connect with, information and stories to equip you with new insights, and practical ways to take action and mobilise our workforces and communities to respond to human trafficking and exploitation.</p>
                  
                  <p>If you have something you&rsquo;d like to discuss for our newsletter, please email <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>
                </div>

                <Btn href="https://mailchi.mp/55437799748c/sign-up" external intent="primary">Sign Up</Btn>
              </div>

              <div className="col-span-1 mb-5 md:mb-10 lg:mb-16">
                <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Events</h2>

                <div className="content mt-4 md:mt-6">
                  <p>Here we hope to keep you up to date with any events run by VITA or other organisations. If you are running an event, whether it&rsquo;s a conference, an online webinar, a presentation, meeting or art exhibition, let us know by emailing <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>

                  <p>We can publicise certain events to our network right here on our website and through social media. We will only publicise events that align with our aim and guiding principles that you can see in About Us.</p>
                </div>

                <Btn href="/" intent="primary">View Events</Btn>
              </div>

              <div className="col-span-1 mb-5 md:mb-10 lg:mb-16">
                <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap letter-wrap--orange">Signposting</h2>

                <div className="content mt-4 md:mt-6">
                  <p>Partnership working powers the anti-trafficking sector.</p>

                  <p>Here are some of the key organisations working in the UK at a local, regional, national and international level to end slavery, support survivors and change system-wide policy and practice. If you know an organisation that you would like to be listed below, please contact us at <a href="mailto:connect@vita-network.com">connect@vita-network.com</a>.</p>
                </div>

                <Btn href="/" intent="primary">View Signposting</Btn>
              </div>
            </div>
          </Container>
        </section>
        
        <ContactCta />
      </article>
    </Layout>
  )
}
