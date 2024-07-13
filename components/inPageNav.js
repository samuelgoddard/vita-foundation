import { useContext } from "react";
import cx from "classnames";
import slugify from "slugify"

import Container from "./container"
import FancyLink from "./fancyLink"

import { InPageNavContext } from '@/context/inPageNav'

export default function InPageNav({ items }) {
  const [inPageNavContext] = useContext(InPageNavContext);

  return (
    <section id="in-page-nav" className="bg-white py-5 border-b border-b-black/10 sticky top-0 z-50 hidden md:block">
      <Container>
        <nav>
          <ul className="md:flex md:space-x-8 lg:space-x-12">
            {items.map((e,i) => {
              return (
                <li key={i}>
                  <FancyLink
                    className={cx(
                      'text-sm md:text-base block font-semibold',
                      // inPageNavContext == slugify(e.sectionTagline, { lower: true, strict: true }) && 'text-red font-bold'
                    )}
                    href={`#${slugify(e.sectionTagline, { lower: true, strict: true })}`}
                  >
                    {e.sectionTagline}
                  </FancyLink>
                </li>)
            })}

            <li><FancyLink className="text-sm md:text-base block font-semibold" href="#contact">Contact</FancyLink></li>
          </ul>
        </nav>
      </Container>
    </section>
  )
}