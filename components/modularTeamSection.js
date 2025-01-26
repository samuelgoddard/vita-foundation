import Container from "./container"
import Pill from "./pill"
import TeamMember from "./teamMember"

export default function ModularTeamSection({ sectionTagline, sectionHeading, sectionText, team }) {
  return (
    <div className="bg-red text-white py-10 md:py-16 xl:py-28">
      <Container>
        <div className="w-full flex justify-center">
          <div className="text-center w-full md:w-1/2 max-w-[720px] mb-8 md:mb-12">
            {sectionTagline && (
              <Pill className="bg-white text-red mb-4 md:mb-6 select-red">{sectionTagline}</Pill>
            )}
            
            {sectionHeading && (
              <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full mb-4 md:mb-6 xl:mb-8 mx-auto px-8">{sectionHeading}</h2>
            )}

            {sectionText && (
              <div className="w-full text-center mx-auto px-8">
                <p>{sectionText}</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 md:gap-6 md:gap-y-10 lg:gap-8 lg:gap-y-12">
          {team.map((e,i) => {
            return (
              <TeamMember
                key={i}
                i={i+1}
                avatar={e.image}
                name={e.title}
                title={e.position}
                bio={e.bio}
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}