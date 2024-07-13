import Link from 'next/link'
import cx from 'classnames'

export default function Btn( {href, ariaLabel, children, className, intent, external}) {
  return external ? (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={cx( 
        intent == 'primary' ? 'bg-red text-white hover:bg-black select-white' : 'bg-white text-red',
        'inline-block shadow-md text-center px-3 md:px-4 xl:px-5 py-2 text-sm md:text-base rounded-md font-semibold outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5',
        className,
      )}
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cx( 
        intent == 'primary' ? 'bg-red text-white hover:bg-black select-white' : 'bg-white text-red',
        'inline-block shadow-md text-center px-3 md:px-4 xl:px-5 py-2 text-sm md:text-base rounded-md font-semibold outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5',
        className,
      )}
    >
      {children}
    </Link>
  )
}