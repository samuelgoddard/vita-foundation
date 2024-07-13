import { NextSeo } from 'next-seo'
import Image from 'next/image'

import Layout from '@/components/layout'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Pill from '@/components/pill'
import FancyLink from '@/components/fancyLink'
import Hero from '@/components/hero'
import BookCta from '@/components/bookCta'
import Btn from '@/components/btn'

import { trainingQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
const pageService = new SanityPageService(trainingQuery)

export default function Training(initialData) {
  const { data: { training, company, nav }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title="VITA Training" />

      <Header
        aboutNav={nav.aboutNav.contentBlocks}
        trainingNav={nav.trainingNav.trainingTypes}
        network={nav.networkNav}
      />

      <main>
        <article>
          <Hero
            pill="Training For Healthcare Professionals"
            heading="VITA Training"
          />

          <section className="bg-white py-5 border-b border-b-black/10 sticky top-0 z-50 hidden md:block">
            <Container>
              <nav>
                <ul className="md:flex md:space-x-6 lg:space-x-8 xl:space-x-12">
                  <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#about">About</FancyLink></li>
                  <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#simulation-training">Simulation Training</FancyLink></li>
                  <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#seminar-training-with-video">Seminar Training With Video</FancyLink></li>
                  <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#interactive-webinar">Interactive Webinar</FancyLink></li>
                  <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#testimonials">Testimonials</FancyLink></li>
                  <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#contact">Book Now</FancyLink></li>
                </ul>
              </nav>
            </Container>
          </section>

          <section className="bg-white pt-6 py-10 md:py-16 xl:py-28 border-b border-black/10" id="about">
            <Container>
              <div className="flex flex-wrap xl:items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-12 lg:pr-20 xl:pr-28">
                  <Image
                    src="/images/training.jpg"
                    width="1442"
                    height="1400"
                    className="w-full rounded-md"
                    alt="Missing Alt Text"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <Pill className="bg-red text-white mb-4 md:mb-6">VITA Training</Pill>
                  
                  <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full mb-4 md:mb-6">About Our Training</h2>

                  <div className="w-full content mb-6 md:mb-10">
                    <p>Victims of human trafficking and exploitation are presenting in healthcare settings and are not receiving the safeguarding and care they need.</p>

                    <p>The solution is not just about raising awareness. VITA training aims to improve identification, support and care for victims by equipping healthcare professionals with transferable trauma-informed consultation skills along with practical, user-friendly, evidence-based guidance.</p>

                    <p>More than 2,000 NHS healthcare professionals have received VITA Training, which is now being commissioned and rolled out to thousands of NHS doctors across London and the South East.</p>

                    <p>Bespoke tailored training is available for NHS Foundation Trusts, General Practices, healthcare professional trainee programmes and other health services and teams.</p>
                  </div>

                  <Btn href="#book" intent="primary">Book A Course</Btn>
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10" id="simulation-training">
            <Container>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 mb-6 md:mb-10 lg:mb-0 lg:pr-16">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap">Simulation Training</h2>

                  <div className="content mt-4 md:mt-8">
                    <p>This face-to-face training session is delivered in an engaging and interactive seminar format, facilitated by practical and impactful discussion. Our video shows an example consultation from the Emergency Department, which is then followed by an in-depth debrief, equipping delegates with practical and transferable consultation and safeguarding skills. This training is being delivered to hundreds of doctors across London and the South East.</p>

                    <p>&quot;I&rsquo;ve never had safeguarding training like this before. I feel like I know exactly what I need to do now.&quot; GP Trainee.</p>
                  </div>
                </div>

                <div className="w-full md:w-9/12 lg:w-1/2">
                  <p className="text-lg md:text-xl text-red font-semibold mb-2 md:mb-3">Training consists of:</p>
                  <ul className="list-disc list-inside mb-10 md:mb-12">
                    <li>4-hour session total</li>
                    <li>An interactive presentation</li>
                    <li>Final discussion and feedback</li>
                    <li>Small groups of delegates rotate around different realistic simulation scenarios</li>
                    <li>VITA Adult Safeguarding Level 3 certificate and 4 CPD hours</li>
                  </ul>

                  <p className="text-lg md:text-xl text-red font-semibold mb-2 md:mb-3">We recommend:</p>
                  <ul className="list-disc list-inside mb-10 md:mb-12">
                    <li>Between 10-40 delegates.</li>
                    <li>One facilitator and one actor will be provided per 5-10 delegates</li>
                    <li>Host Trust/Education Centre to supply venue</li>
                    <li>One larger room for whole group presentation and discussion</li>
                    <li>One smaller room per 5-10 delegates for simulation</li>
                    <li>Projector and audio system</li>
                  </ul>

                  <div className="md:flex md:space-x-3 space-y-2 md:space-y-0">
                    <Btn href="/book" intent="primary" className="block w-full md:w-auto">Book Individual Course</Btn>
                    <Btn href="/book" intent="primary" className="bg-[#7F142E] block w-full md:w-auto">Contact For Group Options</Btn>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10" id="seminar-training-with-video">
            <Container>
              <div className="flex flex-wrap" id="simulation-training">
                <div className="w-full lg:w-1/2 mb-6 md:mb-10 lg:mb-0 lg:pr-16">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap">Seminar Training With Video</h2>

                  <div className="content mt-4 md:mt-8">
                    <p>This face-to-face Simulation training with actors and real case scenarios allows the delegates to practice conducting these challenging consultations and implement safeguarding skills with feedback and debriefing. VITA simulation training is being delivered to hundreds of doctors across London and the South East.</p>

                    <p>&quot;I&rsquo;ve never had safeguarding training like this before. I feel like I know exactly what I need to do now.&quot; GP Trainee.</p>
                  </div>
                </div>

                <div className="w-full md:w-9/12 lg:w-1/2">
                  <p className="text-lg md:text-xl text-red font-semibold mb-2 md:mb-3">Training consists of:</p>
                  <ul className="list-disc list-inside mb-10 md:mb-12">
                    <li>4-hour session total</li>
                    <li>An interactive presentation</li>
                    <li>Final discussion and feedback</li>
                    <li>Small groups of delegates rotate around different realistic simulation scenarios</li>
                    <li>VITA Adult Safeguarding Level 3 certificate and 4 CPD hours</li>
                  </ul>

                  <p className="text-lg md:text-xl text-red font-semibold mb-2 md:mb-3">We recommend:</p>
                  <ul className="list-disc list-inside mb-10 md:mb-12">
                    <li>Between 10-40 delegates.</li>
                    <li>One facilitator and one actor will be provided per 5-10 delegates</li>
                    <li>Host Trust/Education Centre to supply venue</li>
                    <li>One larger room for whole group presentation and discussion</li>
                    <li>One smaller room per 5-10 delegates for simulation</li>
                    <li>Projector and audio system</li>
                  </ul>

                  <div className="md:flex md:space-x-3 space-y-2 md:space-y-0">
                    <Btn href="/book" intent="primary" className="block w-full md:w-auto">Book Individual Course</Btn>
                    <Btn href="/book" intent="primary" className="bg-[#7F142E] block w-full md:w-auto">Contact For Group Options</Btn>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10" id="interactive-webinar">
            <Container>
              <div className="flex flex-wrap" id="simulation-training">
                <div className="w-full lg:w-1/2 mb-6 md:mb-10 lg:mb-0 lg:pr-16">
                  <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap">Interactive Webinar</h2>

                  <div className="content mt-4 md:mt-8">
                    <p>This face-to-face Simulation training with actors and real case scenarios allows the delegates to practice conducting these challenging consultations and implement safeguarding skills with feedback and debriefing. VITA simulation training is being delivered to hundreds of doctors across London and the South East.</p>

                    <p>&quot;I&rsquo;ve never had safeguarding training like this before. I feel like I know exactly what I need to do now.&quot; GP Trainee.</p>
                  </div>
                </div>

                <div className="w-full md:w-9/12 lg:w-1/2">
                  <p className="text-lg md:text-xl text-red font-semibold mb-2 md:mb-3">Training consists of:</p>
                  <ul className="list-disc list-inside mb-10 md:mb-12">
                    <li>4-hour session total</li>
                    <li>An interactive presentation</li>
                    <li>Final discussion and feedback</li>
                    <li>Small groups of delegates rotate around different realistic simulation scenarios</li>
                    <li>VITA Adult Safeguarding Level 3 certificate and 4 CPD hours</li>
                  </ul>

                  <p className="text-lg md:text-xl text-red font-semibold mb-2 md:mb-3">We recommend:</p>
                  <ul className="list-disc list-inside mb-10 md:mb-12">
                    <li>Between 10-40 delegates.</li>
                    <li>One facilitator and one actor will be provided per 5-10 delegates</li>
                    <li>Host Trust/Education Centre to supply venue</li>
                    <li>One larger room for whole group presentation and discussion</li>
                    <li>One smaller room per 5-10 delegates for simulation</li>
                    <li>Projector and audio system</li>
                  </ul>

                  <div className="md:flex md:space-x-3 space-y-2 md:space-y-0">
                    <Btn href="/book" intent="primary" className="block w-full md:w-auto">Book Individual Course</Btn>
                    <Btn href="/book" intent="primary" className="bg-[#7F142E] block w-full md:w-auto">Contact For Group Options</Btn>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          
          <BookCta />
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