import Layout from '@/components/layout'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Pill from '@/components/pill'
import TeamMember from '@/components/teamMember'
import FancyLink from '@/components/fancyLink'
import ContactCta from '@/components/contactCta'
import Hero from '@/components/hero'
import { team } from '@/data/about'

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />
      
      <article>
        <Hero
          pill="Training For Healthcare Professionals"
          heading="Advancing the Health Response to Human Trafficking & Exploitation"
          media={<iframe src="https://player.vimeo.com/video/463396374?color=00afaa&amp;title=0&amp;byline=0&amp;portrait=0" className="w-full aspect-video rounded-md" allow="autoplay; fullscreen" allowFullScreen=""></iframe>}
        />

        <section className="bg-white py-5 border-b border-b-black/10 sticky top-0 z-50 hidden md:block">
          <Container>
            <nav>
              <ul className="md:flex md:space-x-8 lg:space-x-12">
                <li><FancyLink className="text-sm md:text-base block font-semibold" href="#aims">Aims</FancyLink></li>
                <li><FancyLink className="text-sm md:text-base block font-semibold" href="#values">Values</FancyLink></li>
                <li><FancyLink className="text-sm md:text-base block font-semibold" href="#principles">Principles</FancyLink></li>
                <li><FancyLink className="text-sm md:text-base block font-semibold" href="#team">Our Team</FancyLink></li>
                <li><FancyLink className="text-sm md:text-base block font-semibold" href="#contact">Contact</FancyLink></li>
              </ul>
            </nav>
          </Container>
        </section>

        <section className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10" id="aims">
          <Container>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-6 md:mb-10 lg:mb-0 lg:pr-16">
                <Pill className="bg-red text-white mb-4 md:mb-6">Our Aims</Pill>
                
                <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full">To advance the health and public health response to human trafficking and exploitation.</h2>
              </div>

              <div className="w-full md:w-9/12 lg:w-1/2 lg:mt-16">
                <ol className="fancy-ol mb-10 md:mb-12">
                  <li>To advance the education and training of health professionals, multi-disciplinary public health professionals and other stakeholders (including experts by lived experience), and the public, in the health and public health-related components of human trafficking, exploitation and associated social injustices.</li>

                  <li>To advance survivor-informed, survivor-led, and trauma-informed approaches to all aspects of the health and public health response to human trafficking, exploitation, and associated social injustices.</li>

                  <li>To conduct, promote, or otherwise further research into the health and public health components of human trafficking, exploitation, and associated social injustices, and to publish, disseminate and/or critique the results of such research.</li>

                  <li>To advance the health and public health presence, approach*** and evidence-base in leadership, governance, policy, research, practice, and evaluation related to human trafficking, exploitation, and associated social injustices.</li>

                  <li>To advance networking, linkage and peer support for health professionals, multi-disciplinary public health professionals and other stakeholders (including experts by lived experience) working in the challenging arenas of human trafficking, exploitation and associated social injustices.</li>
                </ol>

                <small className="mb-3 text-black/70 block leading-tight">* &quot;Health&quot; is considered in line with the World Health Organisation definition as &quot;a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity&quot;. The enjoyment of the highest attainable standard of health is one of the fundamental rights of every human being without distinction of race, religion, political belief, economic or social condition.</small>

                <small className="text-black/70 block leading-tight">** Including but not limited to poverty, racism and other forms of discrimination, violence and abuse, refugee, migrant and asylum seeking, experience of state care and other health developmental and social vulnerabilities.</small>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10" id="values">
          <Container>
            <div className="w-full text-center">
              <Pill className="bg-red text-white mb-4 md:mb-6">Our Values</Pill>
              
              <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full pb-4 md:pb-6 xl:pb-12">Foundational values of VITA:</h2>
            </div>

            <div className="md:space-x-3 flex flex-wrap md:flex-nowrap justify-center text-center">
              <div className="w-full md:flex-1 mb-1 md:mb-0">
                <span className="letter-wrap text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55]">Human Rights &amp; Dignity</span>
              </div>
              <div className="w-full md:flex-1 mb-1 md:mb-0">
                <span className="letter-wrap text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55]">Justice &amp; Equity</span>
              </div>
              <div className="w-full md:flex-1 mb-1 md:mb-0">
                <span className="letter-wrap text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55]">Trauma-Informed Care</span>
              </div>
              <div className="w-full md:flex-1 mb-1 md:mb-0">
                <span className="letter-wrap text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55]">Evidence-Based Practice</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10" id="principles">
          <Container>
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-6 md:mb-10 lg:mb-0 lg:pr-16">
                <Pill className="bg-red text-white mb-4 md:mb-6">Guiding Principles</Pill>
                
                <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full">Guiding principles of the VITA Network:</h2>
              </div>

              <div className="w-full md:w-9/12 lg:w-1/2 lg:mt-16">
                <ol className="fancy-ol mb-10 md:mb-12">
                  <li>Understands “health” in line with the WHO definition - “a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity”.</li>

                  <li>Takes a public health approach to identifying and preventing MSHT through partnership working across all sectors, developing and sharing evidence-based policy and practice and providing system leadership.</li>

                  <li>Believes all individuals vulnerable to, experiencing or survivors of MSHT deserve equal access to all preventative, health and support services available, regardless of race/ethnicity, gender, age, religion, sexuality, immigration-status or ability to pay.</li>

                  <li>Recognises the diversity of risk factors, vulnerabilities, experiences and needs of victims and that a survivor&rquo;s identity is not defined by their exploitation.</li>

                  <li>Promotes a survivor-centred, trauma-informed and evidence-based approach to MSHT prevention, intervention and survivor-care.</li>

                  <li>Promotes a culture of health and wellbeing for all those working in the counter-trafficking field.</li>

                  <li>Encourages and welcomes a diversity and breadth of voices in the sector both nationally and internationally. The Network seeks to work across different services and specialisations; within academia, clinical practice, public health and the media; and in conjunction with survivor networks.</li>
                </ol>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-red text-white py-10 md:py-16 xl:py-28" id="team">
          <Container>
            <div className="w-full flex justify-center">
              <div className="text-center w-full md:w-1/2 max-w-[720px] mb-8 md:mb-12">
                <Pill className="bg-white text-red mb-4 md:mb-6">Who We Are</Pill>
                
                <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full mb-5 md:mb-8 xl:mb-10 mx-auto px-8">Meet The Team</h2>

                <div className="w-full text-center mx-auto px-8">
                  <p>The criminal act of trafficking and exploiting human beings significantly harms the health of not only that person, but also their families, their children, their communities, society as a whole.</p>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 md:gap-6 md:gap-y-10 lg:gap-8 lg:gap-y-12">
              {team.map((e,i) => {
                return (
                  <TeamMember
                    key={i}
                    avatar={e.avatar}
                    name={e.name}
                    title={e.title}
                  />
                )
              })}
            </div>
          </Container>
        </section>
        
        <ContactCta />
      </article>
    </Layout>
  )
}
