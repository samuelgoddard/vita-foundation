
import Container from "./container";
import Pill from "./pill";


export default function ModularValuesSection({sectionTagline, sectionHeading, sectionText, values}) {
  return (
    <div className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10">
      <Container>
        <div className="w-full text-center">
          {sectionTagline && (
            <Pill className="bg-red text-white mb-4 md:mb-6">{sectionTagline}</Pill>
          )}
          
          <div className="pb-4 md:pb-6 xl:pb-12">
            {sectionHeading && (
              <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full">{sectionHeading}</h2>
            )}

            {sectionText && (
              <div className="content mt-4 md:mt-6 md:w-10/12 lg:w-6/12 mx-auto ">
                <p>{sectionText}</p>
              </div>
            )}
          </div>
        </div>

        <div className="md:space-x-3 flex flex-wrap md:flex-nowrap justify-center text-center">
          {values.map((e,i) => {
            return (
              <div className="w-full md:flex-1 mb-1 md:mb-0" key={i}>
                <span className="letter-wrap text-2xl leading-[1.6] md:text-2xl md:leading-[1.63] lg:text-3xl xl:text-4xl lg:leading-[1.55] xl:leading-[1.55]">{e}</span>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}