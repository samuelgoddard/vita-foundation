import Link from 'next/link'
import cx from 'classnames'

export default function FancyLink( {href, ariaLabel, children, className} ) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cx(className, 'outline-none focus-visible:outline-current focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5')}
    >
      {children}
    </Link>
  )
}