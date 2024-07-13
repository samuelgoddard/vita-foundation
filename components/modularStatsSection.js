import BodyMinimal from "./bodyMinimal"
import Btn from "./btn"
import Card from "./card"
import Container from "./container"
import Pill from "./pill"

export default function ModularStatsSection({sectionTagline, sectionHeading, sectionText, stats}) {
  return (
    <div className="bg-red text-white py-10 md:py-16 xl:py-28">
      <Container>
        <div className="w-full flex justify-center">
          <div className="text-center w-full md:w-1/2 max-w-[720px] mb-8 md:mb-12">
            {sectionTagline && (
              <Pill className="bg-white text-red mb-4 md:mb-6">{sectionTagline}</Pill>
            )}
            
            {sectionHeading && (
              <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full mb-5 md:mb-8 xl:mb-10 mx-auto px-8">{sectionHeading}</h2>
            )}
            
            {sectionText && (
              <div className="w-full text-center mx-auto px-8">
                <p>{sectionText}</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 px-4 md:px-8 xl:px-28 mb-8 md:mb-12 xl:mb-16 ">
          {stats.map((e,i) => {
            return (
              <Card
                key={i}
                className="col-span-1 bg-white text-red"
                stat={e.metaText}
              >
                <BodyMinimal content={e.text} />
              </Card>
            )
          })}
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-4 space-y-3 md:space-y-0">
          <Btn href="https://example.com" external intent="secondary" className="w-[55%] md:w-auto block md:inline-block">Donate</Btn>
          <Btn href="/training#contact" intent="secondary" className="w-[55%] md:w-auto block md:inline-block">Book A Course</Btn>
        </div>
      </Container>
    </div> 
  )
}