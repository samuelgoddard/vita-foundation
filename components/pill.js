import cx from 'classnames'

export default function Pill({children, className}) {
  return (
    <span
      className={cx(
        className, 
        'shadow-md inline-block px-3 py-2 font-semibold text-xs md:text-sm select-white'
      )}
    >
      {children}
    </span>
  )
}