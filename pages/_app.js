import '@/styles/main.css'

import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { Inter } from 'next/font/google'

import SEO from '@/helpers/seo.config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} /> 

      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} key={router.asPath} />
      </div>

      {pageProps.preview && (
        <div
          className={
            "fixed bottom-0 left-0 w-auto px-2 py-2 text-white bg-[#DA442F] justify-center flex z-[1000000] uppercase text-xs m-3 font-mono tracking-wide"
          }
        >
          Preview Mode -{" "}
          <a
            className={"px-1 underline underline-offset-2"}
            href={`/api/exit-preview?currentRoute=${router.route}`}
          >
            Click To Exit
          </a>
        </div>
      )}
    </>
  )
}