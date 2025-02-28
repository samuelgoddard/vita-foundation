import { useState } from 'react'
import { useRouter } from 'next/router'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import slugify from 'slugify'

import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import Btn from '@/components/btn'

import { nav } from '@/data/nav'

export default function Header({ aboutNav, trainingNav, networkNav, company }) {
  const [activeNav, setActiveNav] = useState(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(null)
  const { asPath } = useRouter()
  return (
    <LazyMotion features={domAnimation}>
      <header className={`py-4 md:py-5 xl:py-6 absolute top-0 left-0 right-0 w-full z-[100] ${asPath !== '/' ? 'border-b border-white/10 select-red' : 'select-white'  }`}>
        <Container>
          <nav className="flex flex-wrap w-full items-center">
            <div className="mr-12">
              <FancyLink href="/" ariaLabel="Navigate to the home page" className="w-[120px] md:w-[130px] xl:w-[150px] block focus-visible:outline-offset-8 text-white">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 150 69"><path fill="currentColor" d="M79.664 48.407c.172.8.345.924.761.924.376 0 .549-.123.71-.924l5.298-23.08c.172-.712.376-1.014 1.137-1.014h1.392c.753 0 .923.468.792.972L83.579 51.01c-.294 1.26-1.176 1.424-2.099 1.424h-2.23c-.924 0-1.808-.164-2.103-1.424l-6.18-25.726c-.123-.502.039-.972.8-.972h1.471c.801 0 1.007.302 1.179 1.014l5.247 23.08ZM101.156 51.517c0 .63-.294.916-.924.916h-1.308c-.631 0-.922-.287-.922-.916V25.285c0-.627.293-.972.922-.972h1.308c.63 0 .924.343.924.972v26.232ZM124.82 24.315c.628 0 .967.302.967.93v1.086c0 .627-.337.921-.967.921h-5.796v24.263c0 .63-.293.916-.93.916h-1.298c-.63 0-.925-.287-.925-.916V27.252h-5.796c-.632 0-.975-.296-.975-.921v-1.087c0-.627.343-.929.975-.929h14.747-.002ZM140.841 24.315c1.007 0 1.726.302 2.018 1.431l7.105 25.733c.123.54-.049.958-.8.958h-1.388c-.753 0-1.009-.289-1.179-.958l-1.929-7.266h-9.793l-1.932 7.266c-.173.67-.383.958-1.178.958h-1.348c-.753 0-.963-.418-.799-.958l7.104-25.733c.293-1.127 1.013-1.43 2.018-1.43h2.101Zm-5.257 17.046h8.365l-3.445-13.013c-.21-.8-.333-.93-.709-.93-.425 0-.508.13-.762.93l-3.449 13.013ZM35.069 45.684c.01-1.317-.555-2.396-1.68-3.221a3.841 3.841 0 0 0-1.962-.527c-.293 0-.587.033-.876.102-1.348.311-2.536 1.311-3.534 2.971-2.53 4.212-6.54 7.778-9.45 9.71l-.046.03.375 1.169.081-.052c3.084-2 7.343-5.743 10.051-10.247.824-1.37 1.756-2.185 2.771-2.427a2.87 2.87 0 0 1 .638-.075c.7 0 1.196.269 1.284.319.792.58 1.173 1.312 1.167 2.24-.034 5.035-10.794 13.542-14.089 16.03l-.042.031.381 1.193.08-.062c3.473-2.585 14.81-11.464 14.849-17.182"/><path fill="currentColor" d="M31.183 47.125c.007-.016.01-.027.013-.043a.585.585 0 1 0-1.025-.56.254.254 0 0 0-.044.06c-.791 1.445-3.946 6.58-11.322 12.017l-.042.03.38 1.187.08-.06c7.673-5.579 10.92-10.693 11.958-12.633"/><path fill="currentColor" d="M38.398 45.315c0-3.735-3.283-6.912-7.173-6.94H31.2c-3.262 0-5.909 3.947-7.49 6.31l-.032.047c-.34.506-.632.94-.823 1.162-1.839 2.142-4.83 4.173-6.45 5.193l-.047.03.37 1.16.078-.048c1.385-.856 4.832-3.108 6.945-5.568.24-.28.543-.735.928-1.306l.016-.02c1.355-2.022 3.88-5.78 6.507-5.78h.019c3.253.021 5.999 2.66 5.999 5.76 0 1.958-.586 7.056-6.012 12.087-2.697 2.502-7.124 5.487-10.361 7.551l-.048.03.373 1.166.08-.05c3.342-2.12 7.924-5.202 10.759-7.831 5.765-5.35 6.387-10.84 6.387-12.953Z"/><path fill="currentColor" d="M41.491 49.6c.566-3.414.78-7.797-2.638-11.409-1.737-1.834-4.587-2.929-7.626-2.929h-.253l-.015.05c-.104.314-.212.639-.318.971l-.067.208.106-.008c.189-.01.38-.015.572-.015 1.307 0 4.581.246 6.742 2.531 3.043 3.216 2.887 7.066 2.33 10.409-1.465 8.843-11.947 15.849-18.062 19.24l-.248.136h.447c.404.002 1.103-.002 1.99-.01h.02l.015-.01c5.722-3.35 15.532-10.292 17.005-19.164ZM22.112 42.863c1.66-2.398 2.983-3.81 5.05-5.397.65-.504 1.879-.863 3.281-.963l.094-.008-.381-1.183-.06.004c-1.525.146-2.825.577-3.655 1.212-2.176 1.673-3.563 3.154-5.301 5.664-1.345 1.938-4.592 4.5-5.867 5.373l-.044.03.372 1.16.079-.051c1.165-.733 4.909-3.64 6.432-5.84"/><path fill="currentColor" d="M43.244 38.299c-.825-1.415-4.422-5.302-11.099-6.268l-.06-.01-.02.058-.343.985-.03.087.09.011c6.293.84 9.73 4.51 10.441 5.731 1.81 3.11 2.75 6.691 2.871 10.95l.014.422.13-.404c.282-.86.561-1.727.848-2.605l.004-.014v-.015c-.39-3.39-1.321-6.31-2.842-8.93M19.974 40.426c.033-.06 3.47-5.968 9.354-7.447l.077-.017-.36-1.125-.066.02c-6.391 1.636-9.981 7.9-10.016 7.961-.726 1.143-2.983 4.183-4.69 4.518l-.082.015.368 1.15.067-.017c2.492-.63 5.061-4.604 5.348-5.058Z"/><path fill="currentColor" d="M46.443 37.262c-1.175-2.43-5.824-6.75-13.306-8l-.06-.01-.02.06c-.118.33-.238.654-.351.973l-.031.083.089.013c7.997 1.264 11.884 5.877 12.615 7.391 1.075 2.227 1.506 4.014 1.813 5.616l.053.283.09-.272c.207-.65.417-1.294.627-1.94l.006-.02-.006-.019a21.775 21.775 0 0 0-1.518-4.156M15.994 39.843l.296-.469c1.43-2.288 4.776-7.647 12.158-9.131l.08-.018-.36-1.127-.065.014c-7.807 1.62-11.314 7.239-12.814 9.639l-.29.458c-.767 1.192-1.176 1.55-1.605 1.927-.037.03-.073.063-.11.094l-.073.065.402 1.258.085-.086a8 8 0 0 1 .472-.443c.474-.415.965-.844 1.824-2.179"/><path fill="currentColor" d="M27.539 27.45h.1l-.372-1.162h-.055c-7.126.266-12.645 7.803-14.17 10.105-.368.56-.663 1.04-.906 1.468l-.015.027.528 1.65.073-.2c.439-1.206 6.6-11.844 14.815-11.888"/><path fill="currentColor" d="m16.664 28.098.008-.011.052-.06c2.707-2.358 8.856-2.86 10.062-2.937l.094-.005-.37-1.156-.057.004c-1.279.088-4.485.407-7.307 1.444 2.377-2.494 4.422-4.283 6.072-5.3l.05-.03-.371-1.155-.077.048c-5.03 2.962-12.052 11.866-14.086 14.524l-.02.03.44 1.376.083-.115c.254-.337 2.54-3.358 5.427-6.655M14.6 25.235c3.647-5.08 7.046-8.034 9.573-8.316l.088-.01-.373-1.173-.064.01c-3.603.57-7.526 5.102-10.184 8.802-1.377 1.918-3.158 3.31-4.41 4.137l-.048.03.37 1.164.08-.05c1.14-.721 3.304-2.279 4.966-4.593M12.762 22.644c3.126-4.662 8.29-7.908 10.367-9.087l.052-.03-.183-.566-.037-.014s-.264-.08-.703-.225l-.03-.011-.03.017c-1.451.84-4.24 2.61-6.878 5.13.714-1.988 1.864-4.594 3.43-6.32l.069-.078-.096-.038a72.23 72.23 0 0 1-1.006-.421l-.05-.021-.034.04c-2.587 3.066-4.008 8.149-4.181 8.785a22.924 22.924 0 0 0-1.67 2.183c-1.013 1.51-2.207 2.714-3.547 3.583l-.048.03.373 1.163.08-.049c1.074-.653 2.659-1.886 4.124-4.07M15.295 9.947l.015-.06-.054-.027a34.674 34.674 0 0 1-.932-.49l-.08-.042-.026.086c-.499 1.7-3.183 10.31-7.085 12.717l-.048.03.366 1.137.077-.044c4.28-2.43 7.027-10.8 7.767-13.307ZM11.582 7.685l-.039-.025c-.308-.202-.63-.41-.963-.627l-.1-.063-.013.115c-.164 1.368-.973 6.253-4.432 11.709l-.017.029.462 1.436.083-.127c3.698-5.514 4.74-10.51 5.015-12.404l.006-.049-.002.006ZM7.767 5.22v-.037l-.557-.365-.578-.385-.134-.088.019.157c.43 3.456-.888 8.06-1.712 10.5l-.008.024.597 1.852.073-.196c.763-2.033 2.517-7.222 2.3-11.459M4.46 2.989l-1.292-.864.015.154c.102 1.056.424 4.77.181 8.245v.015l.86 2.687.045-.308c.468-3.008.447-7.343.195-9.897L4.46 2.99ZM2.203 6.445c-.173-1.893-.252-4.206-.277-5.112v-.039l-.031-.02L.892.6.865.58.847.57C.422.284.164.11.164.11L0 0l.058.215c.004.02.01.035.015.054L.946 3V2.99l1.319 4.123-.064-.67h.002ZM34.048 26.689l-.058-.008-.019.056c-.121.344-.24.679-.356 1.002l-.031.09.098.008c1.19.086 11.755 1.079 15.505 9.404l.077.175.508-1.579-.015-.027c-4.164-7.671-13.816-8.946-15.71-9.123"/><path fill="currentColor" d="M51.072 31.704c-4.385-5.462-13.434-7.256-16.102-7.677l-.061-.01-.385 1.137.086.013c1.874.296 8.341 1.52 12.915 4.83 1.246.903 2.27 1.915 3.04 3.007l.085.122.378-1.183.07-.21-.026-.03v.001ZM35.78 21.586l-.06-.007-.104.315c-.083.252-.168.502-.247.74l-.027.087.089.01c1.95.246 11.919 1.686 16.575 5.829l.085.077.035-.108c.111-.358.225-.715.337-1.056l.013-.046-.038-.03c-5.023-4.141-14.758-5.566-16.66-5.81"/><path fill="currentColor" d="M54.64 20.31c-2.486-.582-6.183-.876-10.986-.876-.757 0-1.49.008-2.19.021l-.046-.015-.004.015c-2.174.039-3.99.127-5.017.185h-.05l-.104.327-.252.779-.035.102.108-.006c.748-.044 2.747-.152 5.25-.196.765.24 7.16 2.304 11.672 4.898l.081.048.027-.088c.112-.35.218-.681.32-1.008l.02-.058-.051-.028c-2.77-1.568-6.068-2.9-8.48-3.783 4.068.042 7.232.319 9.404.815l.066.014.056-.18.27-.875.02-.073-.075-.019h-.003ZM30.45 68.586l-.207.136h.25l1.84-.02h.02l.02-.016a43.769 43.769 0 0 0 9.943-9.841l.011-.021.651-2 .701-2.158-.326.534c-2.28 3.74-6.372 9.095-12.9 13.386M36.536 68.522l-.17.133.885-.01c.389-.003.728-.007 1.003-.011h.027l.02-.017c.388-.327.744-.648 1.168-1.031l.016-.014.244-.757c.123-.381.266-.822.43-1.318l.092-.288-.214.213a42.926 42.926 0 0 1-3.5 3.1Z"/></svg>
              </FancyLink>
            </div>
            
            <ul className="hidden lg:flex lg:space-x-3">
              {nav.map((e,i) => {
                let currentNav = null
                let showContact = true
                let prefix = '#'
                let active = 'text-white'
                
                asPath.includes(e.href) && (active = 'text-orange')
                
                e.href == '/resources' && asPath.includes('/educational-resources') && (active = 'text-orange')
                e.href == '/resources' && asPath.includes('/blog') && (active = 'text-orange')
                
                e.href == '/about' && (currentNav = aboutNav, prefix = '/about#')
                e.href == '/training' && (currentNav = trainingNav, prefix = '/training#')
                e.href == '/resources' && (currentNav = null, showContact = false)

                return (
                  <li
                    key={i}
                    className={"block relative group py-3"}
                    onMouseEnter={() => setActiveNav(i)}
                    onFocus={() => setActiveNav(i)}
                    onBlur={() => setActiveNav(null)}
                    onMouseLeave={() => setActiveNav(null)}
                  >
                    <FancyLink
                      key={i}
                      href={e.href}
                      ariaLabel={`Navigate to the ${e.label} page`}
                      className={`px-2 block group ${active}`}
                    >
                      <div className="flex flex-wrap items-center">
                        {e.label}
                        
                        {(currentNav?.length > 0 || e.children?.length) && (
                          <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25"><g clipPath="url(#a)"><path stroke="currentColor" strokeLinejoin="round" d="m4 8.392 8 8 8-8"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .392h24v24H0z"/></clipPath></defs></svg>
                        )}
                      </div>
                    </FancyLink>    

                    {e.children && (
                      <>
                        <AnimatePresence>
                          {activeNav == i && (
                            <m.ul
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className={`absolute top-0 translate-y-12 rounded-md p-4 left-0 bg-white w-[250px] shadow-md`}
                            >
                            {currentNav !== null ? (
                              <>
                              {currentNav.map((e,i) => {
                                return (
                                  <li key={i}>
                                    <FancyLink
                                      href={`${prefix}${slugify(e.label, { lower: true, strict: true })}`}
                                      ariaLabel={`Navigate to the ${e.label} page: ${e.label} section`}
                                      className="text-black/70 focus-visible:outline-black block mb-1 md:mb-2 text-sm md:text-base"
                                    >
                                      {e.label}
                                    </FancyLink>
                                  </li>
                                )
                              })}
                              </>
                            ) : (
                              <>
                                {e.children.map((e,i) => {
                                  return (
                                    <li key={i}>
                                      <FancyLink
                                        href={e.href}
                                        ariaLabel={`Navigate to the ${e.label} page`}
                                        className="text-black/70 focus-visible:outline-black block mb-1 md:mb-2 text-sm md:text-base select-white"
                                      >
                                        {e.label}
                                      </FancyLink>
                                    </li>
                                  )
                                })}
                              </>
                            )}
                              {showContact && (
                                <li>
                                  <FancyLink
                                    href={`${prefix}contact`}
                                    ariaLabel={`Navigate to the ${e.label} page: contact section`}
                                    className="text-black/70 focus-visible:outline-black block mb-1 md:mb-2 text-sm md:text-base"
                                  >
                                    Contact
                                  </FancyLink>
                                </li>
                              )}
                            </m.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="flex space-x-3 ml-auto">
              <Btn href={company.signUpButtonURL} external intent="primary" className="hidden lg:block">Sign up</Btn>
              <Btn href={company.donateButtonURL} external intent="secondary" className="hidden lg:inline-block">Donate</Btn>
              <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="bg-red text-white shadow-md text-center px-3 md:px-4 xl:px-5 py-2 text-sm md:text-base rounded-md font-semibold outline-none focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5 flex items-center lg:hidden"><span className="mr-1">&equiv;</span>Menu</button>
            </div>
          </nav>
        </Container>
        
        <AnimatePresence>
          { mobileNavOpen && (
            <>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-6 bg-black z-[101] rounded-md p-4 flex flex-col h-[calc(100dvh-48px)] lg:hidden"
              >
                <div className="absolute top-4 right-4 z-10">
                  <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="bg-red text-white shadow-md text-center px-3 md:px-4 xl:px-5 py-2 text-sm md:text-base rounded-md font-semibold outline-none focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5 flex items-center lg:hidden"><span className="mr-1">&#10005;</span>Close</button>
                </div>

                <nav className="flex-1 overflow-scroll scroll-hide pb-40 relative">
                  <ul className="">
                    <li className={"block relative pb-3 first-of-type:pt-4"}>
                      <FancyLink
                        href="/"
                        ariaLabel={`Navigate to the Home page`}
                        className={`block group text-xl mb-2 border-b border-white/10 pb-2 ${asPath == '/' ? 'text-orange' : 'text-white'}`}
                      >
                        Home
                      </FancyLink>
                    </li>
                    {nav.map((e,i) => {
                      return (
                        <li
                          key={i}
                          className={"block relative pb-3 first-of-type:pt-4"}
                        >
                          <FancyLink
                            key={i}
                            href={e.href}
                            ariaLabel={`Navigate to the ${e.label} page`}
                            className={`block group text-xl mb-2 border-b border-white/10 pb-2 ${asPath.includes(e.href) ? 'text-orange' : 'text-white'}`}
                          >
                            {e.label}
                          </FancyLink>

                          {e.children && (
                            <ul
                              className={``}
                            >
                              {/* {e.children.map((e,i) => {
                                return (
                                  <li key={i}>
                                    <FancyLink
                                      href={e.href}
                                      ariaLabel={`Navigate to the ${e.label} page`}
                                      className="text-white/50 focus-visible:outline-white block text-sm pb-1"
                                    >
                                      {e.label}
                                    </FancyLink>
                                  </li>        
                                )
                              })} */}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </nav>
                
                <div className="absolute bottom-4 left-4 right-4 bg-black border-t border-white/10 pt-5 z-10 space-y-4">
                  <Btn href="https://mailchi.mp/55437799748c/sign-up" external intent="primary" className="block w-full">Sign up</Btn>
                  <Btn href="https://example.com" external intent="secondary" className="block w-full">Donate</Btn>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm lg:hidden"
              ></m.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  )
}