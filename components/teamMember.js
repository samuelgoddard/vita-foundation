import cx from 'classnames'
import SanityImageResponsive from './sanityImageResponsive'

export default function TeamMember({className, avatar, name, title, bio, i}) {
  return (
    <div
      className={cx(
        className, 
        'block'
      )}
    >
        <div className="w-full rounded-md bg-black/25 aspect-square mb-3 md:mb-4 xl:mb-5 relative overflow-hidden">
          {avatar && (
            <SanityImageResponsive image={avatar} className={`w-full h-full object-cover`} />
          )}
        </div>
      {name && (<span className="px-[10px] py-[6px] text-white bg-orange font-semibold text-xs md:text-sm inline-block mb-1 md:mb-1 xl:mb-2">{name}</span>)}
      {title && (<p className="text-sm md:text-base text-white">{title}</p>)}
      {bio && (<p className="text-xs md:text-sm text-white/90 mt-3">{bio}</p>)}
    </div>
  )
}