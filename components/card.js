import cx from 'classnames'

export default function Card({children, className, stat}) {
  return (
    <div
      className={cx(
        className, 
        'p-5 md:p-6 xl:p-8 text-sm md:text-base rounded-md'
      )}
    >
      {stat && (<span className="px-[10px] py-[6px] text-white bg-orange font-semibold text-sm inline-block mb-3 md:mb-4 xl:mb-5">{stat}</span>)}
      {children}
    </div>
  )
}