import Container from "./container";
import Pill from "./pill";

export default function ModularListSection({ sectionTagline, sectionHeading, sectionText, listItems, footnotes }) {
  return (
    <div className="bg-white py-10 md:py-16 xl:py-28 border-b border-black/10">
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-6 md:mb-10 lg:mb-0 lg:pr-16">
            {sectionTagline && (
              <Pill className="bg-red text-white mb-4 md:mb-6">{sectionTagline}</Pill>
            )}
            
            {sectionHeading && (
              <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full">{sectionHeading}</h2>
            )}

            {sectionText && (
              <div className="content mt-4 md:mt-6 md:w-10/12">
                <p>{sectionText}</p>
              </div>
            )}
          </div>

          <div className="w-full md:w-9/12 lg:w-1/2 lg:mt-16">
            <ol className="fancy-ol mb-10 md:mb-12">
              {listItems?.map((e, i) => {
                return (
                  <li key={i}>{e}</li>  
                )
              })}
            </ol>
            
            {footnotes?.map((e, i) => {
              return (
                <small key={i} className="mb-3 text-black/70 block leading-tight">{e}</small>    
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}