export default function Container({ children, className }) {
  return(
    <div className={`px-4 max-w-screen-2xl mx-auto w-full md:px-8 xl:px-12 ${className}`}>
      {children}
    </div>
  )
}