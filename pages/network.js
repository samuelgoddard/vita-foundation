import Layout from '@/components/layout'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Pill from '@/components/pill'
import TeamMember from '@/components/teamMember'
import FancyLink from '@/components/fancyLink'
import Hero from '@/components/hero'
import BookCta from '@/components/bookCta'
import Btn from '@/components/btn'
import Image from 'next/image'

export default function Resources() {
  return (
    <Layout>
      <NextSeo title="Resources" />
      
      <article>
        <Hero
          pill="Training For Healthcare Professionals"
          heading="VITA Network"
        />

        <section className="bg-white py-5 border-b border-b-black/10 sticky top-0 z-50 hidden md:block">
          <Container>
            <nav>
              <ul className="md:flex md:space-x-6 lg:space-x-8 xl:space-x-12">
                <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#about">About</FancyLink></li>
                <li><FancyLink className="text-xs lg:text-base block font-semibold" href="#get involved">Get Involved</FancyLink></li>
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
                <Pill className="bg-red text-white mb-4 md:mb-6">VITA Network</Pill>
                
                <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full mb-4 md:mb-6">About Our Network</h2>

                <div className="w-full content mb-6 md:mb-10">
                  <p>Victims of human trafficking and exploitation are presenting in healthcare settings and are not receiving the safeguarding and care they need.</p>

                  <p>The solution is not just about raising awareness. VITA training aims to improve identification, support and care for victims by equipping healthcare professionals with transferable trauma-informed consultation skills along with practical, user-friendly, evidence-based guidance.</p>

                  <p>More than 2,000 NHS healthcare professionals have received VITA Training, which is now being commissioned and rolled out to thousands of NHS doctors across London and the South East.</p>

                  <p>Bespoke tailored training is available for NHS Foundation Trusts, General Practices, healthcare professional trainee programmes and other health services and teams.</p>
                </div>

                <Btn href="#get-involved" intent="primary">Get Involved</Btn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10" id="get-involved">
          <Container>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-6 md:mb-10 lg:mb-0 lg:pr-16">
                <h2 className="text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55] letter-wrap">Get Involved</h2>

                <div className="content mt-4 md:mt-8">
                  <p>Coming soon...</p>
                </div>
              </div>

              <div className="w-full md:w-9/12 lg:w-1/2">
              </div>
            </div>
          </Container>
        </section>
        
        <BookCta />
      </article>
    </Layout>
  )
}
