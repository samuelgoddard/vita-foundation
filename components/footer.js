import Container from '@/components/container'
import Btn from './btn'
import { nav } from '@/data/nav'
import FancyLink from './fancyLink'

export default function Footer() {
  return (
    <footer className="bg-[#F5F2F1]">
      <Container className="relative overflow-hidden py-6 md:py-16 lg:py-24">
        <div className="flex flex-wrap w-full md:space-x-8 relative z-10">
          <div className="p-5 md:p-6 xl:p-8 text-sm md:text-base rounded-md shadow-md bg-white w-full md:flex-1 mb-4 md:mb-0">
            <div className="flex flex-wrap md:flex-nowrap items-center">
              <div className="w-full md:flex-1 mb-4 md:mb-0 md:pr-8">
                <p className="text-red text-base md:text-lg mb-1"><strong>Get in Touch</strong></p>
                <p>For more information or to see how you can get involved, contact the VITA team.</p>
              </div>
              <div className="w-full md:w-auto md:ml-auto">
                <Btn href="/" intent="primary" className="block md:inline-block w-full md:w-auto focus-visible:outline-red">Contact Us</Btn>
              </div>
            </div>
          </div>

          <div className="p-5 md:p-6 xl:p-8 text-sm md:text-base rounded-md shadow-md bg-black w-full md:w-[30%] md:max-w-[250px] flex items-center">
            <Btn href="/" intent="secondary" className="block w-full">Get Urgent Help</Btn>
          </div>
        </div>

        <nav className="flex flex-wrap w-full items-start py-8 md:py-10 lg:py-14 relative z-10">
          <div className="mr-12">
            <FancyLink href="/" ariaLabel="Navigate to the home page" className="w-[120px] md:w-[130px] xl:w-[150px] block focus-visible:outline-offset-8 text-red mb-6 xl:mb-0">
              <svg className="w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 150 69"><path fill="currentColor" d="M79.664 48.407c.172.8.345.924.761.924.376 0 .549-.123.71-.924l5.298-23.08c.172-.712.376-1.014 1.137-1.014h1.392c.753 0 .923.468.792.972L83.579 51.01c-.294 1.26-1.176 1.424-2.099 1.424h-2.23c-.924 0-1.808-.164-2.103-1.424l-6.18-25.726c-.123-.502.039-.972.8-.972h1.471c.801 0 1.007.302 1.179 1.014l5.247 23.08ZM101.156 51.517c0 .63-.294.916-.924.916h-1.308c-.631 0-.922-.287-.922-.916V25.285c0-.627.293-.972.922-.972h1.308c.63 0 .924.343.924.972v26.232ZM124.82 24.315c.628 0 .967.302.967.93v1.086c0 .627-.337.921-.967.921h-5.796v24.263c0 .63-.293.916-.93.916h-1.298c-.63 0-.925-.287-.925-.916V27.252h-5.796c-.632 0-.975-.296-.975-.921v-1.087c0-.627.343-.929.975-.929h14.747-.002ZM140.841 24.315c1.007 0 1.726.302 2.018 1.431l7.105 25.733c.123.54-.049.958-.8.958h-1.388c-.753 0-1.009-.289-1.179-.958l-1.929-7.266h-9.793l-1.932 7.266c-.173.67-.383.958-1.178.958h-1.348c-.753 0-.963-.418-.799-.958l7.104-25.733c.293-1.127 1.013-1.43 2.018-1.43h2.101Zm-5.257 17.046h8.365l-3.445-13.013c-.21-.8-.333-.93-.709-.93-.425 0-.508.13-.762.93l-3.449 13.013ZM35.069 45.684c.01-1.317-.555-2.396-1.68-3.221a3.841 3.841 0 0 0-1.962-.527c-.293 0-.587.033-.876.102-1.348.311-2.536 1.311-3.534 2.971-2.53 4.212-6.54 7.778-9.45 9.71l-.046.03.375 1.169.081-.052c3.084-2 7.343-5.743 10.051-10.247.824-1.37 1.756-2.185 2.771-2.427a2.87 2.87 0 0 1 .638-.075c.7 0 1.196.269 1.284.319.792.58 1.173 1.312 1.167 2.24-.034 5.035-10.794 13.542-14.089 16.03l-.042.031.381 1.193.08-.062c3.473-2.585 14.81-11.464 14.849-17.182"/><path fill="currentColor" d="M31.183 47.125c.007-.016.01-.027.013-.043a.585.585 0 1 0-1.025-.56.254.254 0 0 0-.044.06c-.791 1.445-3.946 6.58-11.322 12.017l-.042.03.38 1.187.08-.06c7.673-5.579 10.92-10.693 11.958-12.633"/><path fill="currentColor" d="M38.398 45.315c0-3.735-3.283-6.912-7.173-6.94H31.2c-3.262 0-5.909 3.947-7.49 6.31l-.032.047c-.34.506-.632.94-.823 1.162-1.839 2.142-4.83 4.173-6.45 5.193l-.047.03.37 1.16.078-.048c1.385-.856 4.832-3.108 6.945-5.568.24-.28.543-.735.928-1.306l.016-.02c1.355-2.022 3.88-5.78 6.507-5.78h.019c3.253.021 5.999 2.66 5.999 5.76 0 1.958-.586 7.056-6.012 12.087-2.697 2.502-7.124 5.487-10.361 7.551l-.048.03.373 1.166.08-.05c3.342-2.12 7.924-5.202 10.759-7.831 5.765-5.35 6.387-10.84 6.387-12.953Z"/><path fill="currentColor" d="M41.491 49.6c.566-3.414.78-7.797-2.638-11.409-1.737-1.834-4.587-2.929-7.626-2.929h-.253l-.015.05c-.104.314-.212.639-.318.971l-.067.208.106-.008c.189-.01.38-.015.572-.015 1.307 0 4.581.246 6.742 2.531 3.043 3.216 2.887 7.066 2.33 10.409-1.465 8.843-11.947 15.849-18.062 19.24l-.248.136h.447c.404.002 1.103-.002 1.99-.01h.02l.015-.01c5.722-3.35 15.532-10.292 17.005-19.164ZM22.112 42.863c1.66-2.398 2.983-3.81 5.05-5.397.65-.504 1.879-.863 3.281-.963l.094-.008-.381-1.183-.06.004c-1.525.146-2.825.577-3.655 1.212-2.176 1.673-3.563 3.154-5.301 5.664-1.345 1.938-4.592 4.5-5.867 5.373l-.044.03.372 1.16.079-.051c1.165-.733 4.909-3.64 6.432-5.84"/><path fill="currentColor" d="M43.244 38.299c-.825-1.415-4.422-5.302-11.099-6.268l-.06-.01-.02.058-.343.985-.03.087.09.011c6.293.84 9.73 4.51 10.441 5.731 1.81 3.11 2.75 6.691 2.871 10.95l.014.422.13-.404c.282-.86.561-1.727.848-2.605l.004-.014v-.015c-.39-3.39-1.321-6.31-2.842-8.93M19.974 40.426c.033-.06 3.47-5.968 9.354-7.447l.077-.017-.36-1.125-.066.02c-6.391 1.636-9.981 7.9-10.016 7.961-.726 1.143-2.983 4.183-4.69 4.518l-.082.015.368 1.15.067-.017c2.492-.63 5.061-4.604 5.348-5.058Z"/><path fill="currentColor" d="M46.443 37.262c-1.175-2.43-5.824-6.75-13.306-8l-.06-.01-.02.06c-.118.33-.238.654-.351.973l-.031.083.089.013c7.997 1.264 11.884 5.877 12.615 7.391 1.075 2.227 1.506 4.014 1.813 5.616l.053.283.09-.272c.207-.65.417-1.294.627-1.94l.006-.02-.006-.019a21.775 21.775 0 0 0-1.518-4.156M15.994 39.843l.296-.469c1.43-2.288 4.776-7.647 12.158-9.131l.08-.018-.36-1.127-.065.014c-7.807 1.62-11.314 7.239-12.814 9.639l-.29.458c-.767 1.192-1.176 1.55-1.605 1.927-.037.03-.073.063-.11.094l-.073.065.402 1.258.085-.086a8 8 0 0 1 .472-.443c.474-.415.965-.844 1.824-2.179"/><path fill="currentColor" d="M27.539 27.45h.1l-.372-1.162h-.055c-7.126.266-12.645 7.803-14.17 10.105-.368.56-.663 1.04-.906 1.468l-.015.027.528 1.65.073-.2c.439-1.206 6.6-11.844 14.815-11.888"/><path fill="currentColor" d="m16.664 28.098.008-.011.052-.06c2.707-2.358 8.856-2.86 10.062-2.937l.094-.005-.37-1.156-.057.004c-1.279.088-4.485.407-7.307 1.444 2.377-2.494 4.422-4.283 6.072-5.3l.05-.03-.371-1.155-.077.048c-5.03 2.962-12.052 11.866-14.086 14.524l-.02.03.44 1.376.083-.115c.254-.337 2.54-3.358 5.427-6.655M14.6 25.235c3.647-5.08 7.046-8.034 9.573-8.316l.088-.01-.373-1.173-.064.01c-3.603.57-7.526 5.102-10.184 8.802-1.377 1.918-3.158 3.31-4.41 4.137l-.048.03.37 1.164.08-.05c1.14-.721 3.304-2.279 4.966-4.593M12.762 22.644c3.126-4.662 8.29-7.908 10.367-9.087l.052-.03-.183-.566-.037-.014s-.264-.08-.703-.225l-.03-.011-.03.017c-1.451.84-4.24 2.61-6.878 5.13.714-1.988 1.864-4.594 3.43-6.32l.069-.078-.096-.038a72.23 72.23 0 0 1-1.006-.421l-.05-.021-.034.04c-2.587 3.066-4.008 8.149-4.181 8.785a22.924 22.924 0 0 0-1.67 2.183c-1.013 1.51-2.207 2.714-3.547 3.583l-.048.03.373 1.163.08-.049c1.074-.653 2.659-1.886 4.124-4.07M15.295 9.947l.015-.06-.054-.027a34.674 34.674 0 0 1-.932-.49l-.08-.042-.026.086c-.499 1.7-3.183 10.31-7.085 12.717l-.048.03.366 1.137.077-.044c4.28-2.43 7.027-10.8 7.767-13.307ZM11.582 7.685l-.039-.025c-.308-.202-.63-.41-.963-.627l-.1-.063-.013.115c-.164 1.368-.973 6.253-4.432 11.709l-.017.029.462 1.436.083-.127c3.698-5.514 4.74-10.51 5.015-12.404l.006-.049-.002.006ZM7.767 5.22v-.037l-.557-.365-.578-.385-.134-.088.019.157c.43 3.456-.888 8.06-1.712 10.5l-.008.024.597 1.852.073-.196c.763-2.033 2.517-7.222 2.3-11.459M4.46 2.989l-1.292-.864.015.154c.102 1.056.424 4.77.181 8.245v.015l.86 2.687.045-.308c.468-3.008.447-7.343.195-9.897L4.46 2.99ZM2.203 6.445c-.173-1.893-.252-4.206-.277-5.112v-.039l-.031-.02L.892.6.865.58.847.57C.422.284.164.11.164.11L0 0l.058.215c.004.02.01.035.015.054L.946 3V2.99l1.319 4.123-.064-.67h.002ZM34.048 26.689l-.058-.008-.019.056c-.121.344-.24.679-.356 1.002l-.031.09.098.008c1.19.086 11.755 1.079 15.505 9.404l.077.175.508-1.579-.015-.027c-4.164-7.671-13.816-8.946-15.71-9.123"/><path fill="currentColor" d="M51.072 31.704c-4.385-5.462-13.434-7.256-16.102-7.677l-.061-.01-.385 1.137.086.013c1.874.296 8.341 1.52 12.915 4.83 1.246.903 2.27 1.915 3.04 3.007l.085.122.378-1.183.07-.21-.026-.03v.001ZM35.78 21.586l-.06-.007-.104.315c-.083.252-.168.502-.247.74l-.027.087.089.01c1.95.246 11.919 1.686 16.575 5.829l.085.077.035-.108c.111-.358.225-.715.337-1.056l.013-.046-.038-.03c-5.023-4.141-14.758-5.566-16.66-5.81"/><path fill="currentColor" d="M54.64 20.31c-2.486-.582-6.183-.876-10.986-.876-.757 0-1.49.008-2.19.021l-.046-.015-.004.015c-2.174.039-3.99.127-5.017.185h-.05l-.104.327-.252.779-.035.102.108-.006c.748-.044 2.747-.152 5.25-.196.765.24 7.16 2.304 11.672 4.898l.081.048.027-.088c.112-.35.218-.681.32-1.008l.02-.058-.051-.028c-2.77-1.568-6.068-2.9-8.48-3.783 4.068.042 7.232.319 9.404.815l.066.014.056-.18.27-.875.02-.073-.075-.019h-.003ZM30.45 68.586l-.207.136h.25l1.84-.02h.02l.02-.016a43.769 43.769 0 0 0 9.943-9.841l.011-.021.651-2 .701-2.158-.326.534c-2.28 3.74-6.372 9.095-12.9 13.386M36.536 68.522l-.17.133.885-.01c.389-.003.728-.007 1.003-.011h.027l.02-.017c.388-.327.744-.648 1.168-1.031l.016-.014.244-.757c.123-.381.266-.822.43-1.318l.092-.288-.214.213a42.926 42.926 0 0 1-3.5 3.1Z"/></svg>
            </FancyLink>
          </div>
          
          <ul className="flex flex-wrap lg:space-x-[5vw] lg:ml-auto w-full xl:w-auto">
            {nav.map((e,i) => {
              return (
                <li key={i} className="px-2 block w-1/2 md:w-1/4 lg:w-auto mb-5">
                  <FancyLink
                    href={e.href}
                    ariaLabel={`Navigate to the ${e.label} page`}
                    className="text-black mb-2 md:mb-3 block text-sm md:text-base"
                  >
                    {e.label}
                  </FancyLink>
                  {e.children && (
                    <ul>
                      {e.children.map((e,i) => {
                        return (
                          <li key={i}>
                            <FancyLink
                              href={e.href}
                              ariaLabel={`Navigate to the ${e.label} page`}
                              className="text-black/50 focus-visible:outline-black block mb-1 md:mb-2 text-sm md:text-base"
                            >
                              {e.label}
                            </FancyLink>
                          </li>        
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <hr className="mb-4 md:mb-8 lg:mb-12 border-b border-black/10 border-t-0 relative z-10" />

        <div className="flex flex-wrap items-end relative z-10">
          <div className="w-full md:w-[70%] lg:w-[60%] order-2 md:order-1">
            <div className="flex space-x-4 mb-4 md:mb-6">
              <FancyLink
                href="/"
                ariaLabel={`Navigate to the Cookies page`}
                className="text-xs md:text-base text-black/50 focus-visible:outline-black block mb-1 md:mb-2"
              >
                Cookie Policy
              </FancyLink>
              <FancyLink
                href="/"
                ariaLabel={`Navigate to the Cookies page`}
                className="text-xs md:text-base text-black/50 focus-visible:outline-black block mb-1 md:mb-2"
              >
                Privacy Policy
              </FancyLink>
            </div>
            <p className="text-black/50 text-xs lg:text-sm">If you have any concerns about a patient/client or other individual please:<br/>Follow local child/adult safeguarding policies.<br/>Contact modern slavery helpline for anonymous advice - 08000 121 700.<br/>Contact police in an emergency.</p>
          </div>
          
          <div className="w-full md:w-[30%] lg:w-[40%] order-1 md:order-2 mb-5 md:mb-0">
            <div className="flex space-x-1 md:justify-end mb-3">
              <a href="https://example.com" className="px-2 outline-none focus-visible:outline-current focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5">
                <svg className="w-4 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17"><path fill="currentColor" d="M9.317 7.56 15.146.785h-1.381L8.704 6.667 4.662.785H0L6.112 9.68 0 16.785h1.381l5.344-6.213 4.269 6.213h4.662L9.317 7.56ZM7.426 9.759l-.62-.886L1.88 1.824H4l3.977 5.689.62.885 5.168 7.394h-2.121L7.426 9.76Z"/></svg>
              </a>

              <a href="https://example.com" className="px-2 outline-none focus-visible:outline-current focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5">
                <svg className="w-4 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17"><path fill="currentColor" d="M8 .785c-2.173 0-2.445.009-3.298.048-.852.039-1.433.174-1.942.372a3.922 3.922 0 0 0-1.417.922A3.92 3.92 0 0 0 .42 3.544c-.198.51-.333 1.09-.372 1.942C.01 6.34 0 6.612 0 8.785c0 2.172.01 2.445.048 3.298.039.852.174 1.433.372 1.942.204.526.478.972.923 1.417.444.445.89.718 1.417.923.509.197 1.09.333 1.942.372.853.039 1.125.048 3.298.048s2.445-.01 3.298-.049c.852-.038 1.433-.174 1.942-.371a3.922 3.922 0 0 0 1.417-.923c.445-.445.719-.891.923-1.417.198-.509.333-1.09.372-1.942.039-.853.048-1.126.048-3.298 0-2.173-.01-2.445-.048-3.299-.039-.851-.174-1.433-.372-1.942a3.921 3.921 0 0 0-.923-1.417 3.922 3.922 0 0 0-1.417-.922c-.509-.198-1.09-.333-1.942-.372C10.445.793 10.173.785 8 .785Zm0 1.441c2.136 0 2.39.008 3.233.047.78.035 1.203.166 1.485.275.374.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.389-.047 3.232c-.036.78-.166 1.204-.276 1.486-.145.373-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.046-3.233.046s-2.39-.008-3.233-.046c-.78-.036-1.203-.166-1.485-.276a2.477 2.477 0 0 1-.92-.598 2.479 2.479 0 0 1-.598-.92c-.11-.282-.24-.706-.276-1.486-.038-.843-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.204.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.454.92-.599.282-.11.705-.24 1.485-.275.844-.039 1.097-.047 3.233-.047Z"/><path fill="currentColor" d="M8 11.451a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333Zm0-6.774a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216Zm5.23-.163a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0Z"/></svg>
              </a>

              <a href="https://example.com" className="px-2 outline-none focus-visible:outline-current focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5">
                <svg className="w-4 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17"><path fill="currentColor" d="M16.098 8.834a8.049 8.049 0 1 0-9.307 7.95V11.16H4.748V8.834H6.79V7.06c0-2.017 1.202-3.131 3.04-3.131.881 0 1.802.157 1.802.157v1.98h-1.015c-1 0-1.311.621-1.311 1.258v1.51h2.232l-.357 2.326H9.307v5.625a8.051 8.051 0 0 0 6.79-7.951Z"/></svg>
              </a>
            </div>
            <p className="text-black text-xs lg:text-sm md:text-right">&copy; Vita Ltd {new Date().getFullYear()}, All Rights Reserved. Registered Charity No 237891.</p>
          </div>
        </div>

        <svg className="hidden md:block grayscale opacity-40 w-full md:w-1/4 xl:w-1/5 absolute md:max-w-[280px] bottom-0 right-8 xl:right-12 z-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 251 317"><g opacity=".3"><path fill="url(#a)" d="M160.861 210.661c.044-6.053-2.544-11.009-7.703-14.8-.645-.406-4.081-2.421-9.001-2.421-1.343 0-2.695.151-4.02.469-6.183 1.431-11.634 6.025-16.209 13.65-11.608 19.35-30 35.731-43.347 44.61l-.212.133 1.722 5.372.371-.239c14.143-9.189 33.683-26.382 46.103-47.075 3.781-6.291 8.057-10.037 12.712-11.15a13.144 13.144 0 0 1 2.924-.345c3.215 0 5.486 1.237 5.892 1.467 3.631 2.668 5.38 6.026 5.353 10.293-.159 23.131-49.513 62.21-64.627 73.643l-.194.142 1.749 5.477.37-.282c15.928-11.875 67.932-52.668 68.108-78.936"/><path fill="url(#b)" d="M143.035 217.278c.035-.07.044-.123.062-.194a2.686 2.686 0 1 0-4.7-2.571 1.14 1.14 0 0 0-.203.274c-3.631 6.635-18.1 30.226-51.933 55.203l-.194.142 1.74 5.451.37-.274c35.194-25.631 50.088-49.125 54.849-58.04"/><path fill="url(#c)" d="M176.135 208.964c0-17.158-15.062-31.754-32.906-31.887h-.115c-14.964 0-27.101 18.139-34.354 28.989l-.15.221c-1.555 2.324-2.897 4.321-3.772 5.337-8.436 9.842-22.155 19.172-29.584 23.855l-.22.142 1.695 5.327.362-.221c6.352-3.931 22.164-14.278 31.855-25.578 1.104-1.29 2.491-3.375 4.258-5.999l.07-.098c6.219-9.286 17.8-26.55 29.849-26.55h.089c14.92.097 27.516 12.219 27.516 26.462 0 8.995-2.685 32.417-27.578 55.531-12.367 11.494-32.676 25.207-47.526 34.687l-.22.142 1.713 5.354.363-.23c15.335-9.736 36.35-23.9 49.353-35.978 26.448-24.58 29.302-49.796 29.302-59.506Z"/><path fill="url(#d)" d="M190.321 228.649c2.598-15.682 3.578-35.818-12.102-52.411-7.968-8.429-21.041-13.456-34.981-13.456h-1.157l-.071.229c-.477 1.44-.972 2.934-1.457 4.462l-.31.954.486-.035c.866-.044 1.74-.071 2.624-.071 5.998 0 21.015 1.131 30.927 11.628 13.957 14.772 13.241 32.461 10.688 47.817-6.722 40.625-54.804 72.812-82.851 88.389l-1.139.627h2.049c1.855.009 5.062-.008 9.134-.044h.088l.071-.044c26.245-15.391 71.244-47.287 78.001-88.045Z"/><path fill="url(#e)" d="M101.428 197.699c7.615-11.018 13.684-17.503 23.162-24.792 2.986-2.315 8.622-3.967 15.053-4.427l.433-.035-1.75-5.434-.273.018c-6.997.671-12.959 2.651-16.767 5.566-9.982 7.687-16.342 14.49-24.319 26.02-6.166 8.907-21.06 20.675-26.907 24.687l-.203.141 1.705 5.328.362-.239c5.344-3.366 22.517-16.716 29.504-26.824"/><path fill="url(#f)" d="M198.36 176.733c-3.781-6.503-20.282-24.36-50.908-28.795l-.274-.044-.097.265c-.522 1.493-1.043 2.995-1.573 4.524l-.132.397.406.053c28.869 3.861 44.637 20.719 47.896 26.33 8.304 14.287 12.615 30.738 13.171 50.3l.062 1.943.601-1.855c1.29-3.949 2.57-7.934 3.887-11.972l.017-.062v-.07c-1.793-15.568-6.06-28.989-13.038-41.023"/><path fill="url(#g)" d="M91.623 186.505c.15-.274 15.918-27.417 42.905-34.211l.353-.08-1.652-5.168-.3.088c-29.319 7.519-45.785 36.296-45.944 36.579-3.33 5.248-13.683 19.217-21.519 20.754l-.37.071 1.687 5.283.309-.079c11.43-2.898 23.215-21.152 24.53-23.237Z"/><path fill="url(#h)" d="M213.033 171.97c-5.389-11.168-26.713-31.012-61.032-36.755l-.274-.044-.097.274c-.539 1.52-1.087 3.004-1.608 4.471l-.141.379.406.062c36.687 5.805 54.513 27.001 57.87 33.955 4.929 10.231 6.908 18.439 8.312 25.799l.248 1.299.406-1.246c.954-2.986 1.917-5.946 2.88-8.915l.026-.088-.026-.089c-1.732-6.759-3.94-12.82-6.961-19.093"/><path fill="url(#i)" d="m73.364 183.827 1.36-2.155c6.555-10.514 21.907-35.13 55.767-41.951l.371-.079-1.652-5.178-.3.062c-35.812 7.439-51.898 33.256-58.78 44.283l-1.333 2.103c-3.516 5.478-5.389 7.121-7.359 8.853-.168.141-.336.291-.503.433l-.336.3 1.846 5.779.389-.398a36.644 36.644 0 0 1 2.164-2.032c2.173-1.909 4.426-3.879 8.366-10.011"/><path fill="url(#j)" d="M126.322 126.892h.459l-1.705-5.336h-.256c-32.685 1.219-58.002 35.845-64.998 46.421-1.688 2.571-3.04 4.78-4.152 6.741l-.07.124 2.42 7.581.335-.919c2.014-5.54 30.273-54.409 67.958-54.612"/><path fill="url(#k)" d="m76.438 129.87.035-.053.239-.274c12.42-10.832 40.626-13.138 46.156-13.492l.432-.026-1.696-5.31-.265.017c-5.865.407-20.573 1.873-33.515 6.636 10.901-11.46 20.282-19.677 27.853-24.35l.23-.133-1.705-5.31-.354.22c-23.073 13.607-55.28 54.515-64.61 66.725l-.096.142 2.023 6.317.38-.53c1.166-1.546 11.651-15.427 24.893-30.57"/><path fill="url(#l)" d="M66.968 116.714C83.7 93.38 99.29 79.808 110.88 78.51l.407-.045-1.714-5.39-.292.045c-16.527 2.624-34.522 23.44-46.712 40.44-6.316 8.808-14.487 15.205-20.23 19.005l-.22.141 1.696 5.345.371-.229c5.23-3.314 15.15-10.47 22.773-21.099"/><path fill="url(#m)" d="M58.54 104.813c14.338-21.417 38.03-36.332 47.552-41.748l.239-.132-.839-2.607-.168-.062s-1.21-.37-3.224-1.033l-.142-.053-.132.08c-6.66 3.86-19.452 11.989-31.554 23.563 3.277-9.127 8.55-21.099 15.733-29.033l.318-.353-.442-.177a332.693 332.693 0 0 1-4.611-1.935l-.23-.097-.159.185c-11.864 14.084-18.383 37.436-19.178 40.36-2.827 3.287-5.406 6.662-7.659 10.029-4.646 6.935-10.123 12.466-16.271 16.46l-.221.141 1.714 5.337.362-.221c4.929-3.004 12.2-8.667 18.922-18.696"/><path fill="url(#n)" d="m70.157 46.481.07-.274-.247-.123a159.127 159.127 0 0 1-4.275-2.253l-.371-.195-.115.398c-2.288 7.81-14.602 47.366-32.5 58.42l-.22.141 1.678 5.222.354-.204c19.628-11.159 32.234-49.61 35.626-61.132Z"/><path fill="url(#o)" d="m53.126 36.09-.177-.114c-1.413-.928-2.889-1.882-4.417-2.88l-.46-.292-.061.53c-.75 6.282-4.461 28.724-20.326 53.79l-.08.133 2.12 6.6.38-.584c16.96-25.33 21.74-48.285 23.003-56.988l.027-.22-.01.026Z"/><path fill="url(#p)" d="M35.626 24.764v-.168l-2.553-1.679c-.892-.592-1.775-1.184-2.65-1.767l-.618-.406.088.724c1.97 15.878-4.072 37.03-7.853 48.233l-.035.115 2.738 8.508.336-.901c3.498-9.34 11.545-33.177 10.547-52.641"/><path fill="url(#q)" d="m20.459 14.515-5.928-3.967.071.707c.468 4.85 1.944 21.911.83 37.877v.07l3.94 12.344.212-1.414c2.147-13.819 2.05-33.733.893-45.467l-.018-.15Z"/><path fill="url(#r)" d="M10.106 30.392C9.31 21.698 8.949 11.07 8.834 6.908V6.73l-.142-.097C6.882 5.414 5.336 4.372 4.09 3.54l-.124-.088-.08-.053C1.936 2.092.752 1.288.752 1.288L0 .785l.265.99c.018.088.044.158.07.247l4.002 12.537v-.035l6.051 18.943-.291-3.075h.009Z"/><path fill="url(#s)" d="m156.179 123.393-.265-.035-.088.256c-.557 1.582-1.104 3.119-1.634 4.603l-.142.416.451.035c5.459.398 53.921 4.957 71.12 43.205l.353.804 2.332-7.254-.07-.123c-19.099-35.245-63.373-41.103-72.065-41.915"/><path fill="url(#t)" d="M234.269 146.436c-20.114-25.092-61.624-33.336-73.858-35.271l-.283-.044-1.767 5.222.398.062c8.595 1.36 38.258 6.98 59.238 22.185 5.716 4.153 10.415 8.8 13.949 13.819l.388.556 1.732-5.433.318-.963-.115-.142v.009Z"/><path fill="url(#u)" d="m164.121 99.953-.274-.035-.477 1.449c-.38 1.157-.769 2.306-1.131 3.401l-.123.398.406.044c8.948 1.131 54.672 7.749 76.031 26.78l.389.354.159-.495a355.665 355.665 0 0 1 1.546-4.851l.062-.212-.177-.141c-23.038-19.023-67.692-25.57-76.42-26.692"/><path fill="url(#v)" d="M250.638 94.086c-11.404-2.668-28.365-4.02-50.396-4.02-3.472 0-6.838.036-10.044.097l-.212-.07-.018.07c-9.973.177-18.303.584-23.012.849h-.229l-.477 1.502c-.398 1.219-.786 2.412-1.157 3.578l-.159.468.494-.026a602.23 602.23 0 0 1 24.081-.901c3.507 1.104 32.843 10.584 53.541 22.503l.371.221.123-.406c.513-1.608.999-3.128 1.467-4.63l.088-.265-.23-.133c-12.702-7.2-27.834-13.323-38.894-17.379 18.656.195 33.17 1.467 43.135 3.746l.3.062.256-.821c.468-1.529.883-2.863 1.237-4.02l.097-.336-.345-.089h-.017Z"/><path fill="url(#w)" d="m139.678 315.872-.954.628h1.148c2.827-.036 5.663-.062 8.437-.098h.097l.088-.07c17.411-12.414 32.755-27.62 45.608-45.211l.053-.097c.963-2.969 1.961-6.035 2.986-9.189l3.216-9.913-1.493 2.456c-10.459 17.176-29.231 41.783-59.177 61.494"/><path fill="url(#x)" d="m167.592 315.581-.777.609 4.055-.044c1.784-.017 3.339-.035 4.602-.053h.124l.088-.079c1.784-1.502 3.419-2.978 5.362-4.736l.071-.062 1.122-3.481c.565-1.749 1.219-3.773 1.97-6.052l.424-1.326-.981.981a196.96 196.96 0 0 1-16.06 14.243Z"/></g><defs><linearGradient id="a" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="b" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="c" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="d" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="e" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="f" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="g" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="h" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="i" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="j" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="k" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="l" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="m" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="n" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="o" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="p" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="q" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="r" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="s" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="t" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="u" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="v" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="w" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient><linearGradient id="x" x1="125.5" x2="125.5" y1=".785" y2="316.785" gradientUnits="userSpaceOnUse"><stop stopColor="#A1A1A1"/><stop offset="1" stopColor="#C6C6C6"/></linearGradient></defs></svg>
      </Container>
    </footer>
  )
}