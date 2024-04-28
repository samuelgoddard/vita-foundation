import cx from 'classnames'
import Image from 'next/image'

export default function TeamMember({className, avatar, name, title, i}) {
  return (
    <div
      className={cx(
        className, 
        'block'
      )}
    >
      {avatar && (
        <div className="w-full rounded-md bg-black mb-3 md:mb-4 xl:mb-5 relative overflow-hidden">
          <Image src={avatar} alt={`Avatar of ${name}`} width="500" height="500" />
        </div>
      )}
      {name && (<span className="px-[10px] py-[6px] text-white bg-orange font-semibold text-xs md:text-sm inline-block mb-1 md:mb-1 xl:mb-2">{name}</span>)}
      {title && (<p className="text-sm md:text-base text-white">{title}</p>)}
    </div>
  )
}