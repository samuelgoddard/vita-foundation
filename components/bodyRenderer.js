import BlockContentWrapper from '@/components/blockContentWrapper'

import ModularListSection from '@/components/modularListSection'
import ModularValuesSection from '@/components/modularValuesSection'
import ModularTeamSection from '@/components/modularTeamSection'
import ModularStatsSection from '@/components/modularStatsSection'
import slugify from 'slugify'
import { useInView } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { InPageNavContext } from '@/context/inPageNav'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

let bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <>
        {children}
      </>
  },
  listSection: {
    component: ModularListSection,
    wrapper: ({ children }) => 
    <>
      {children}
    </>
  },
  valuesSection: {
    component: ModularValuesSection,
    wrapper: ({ children }) => 
    <>
      {children}
    </>
  },
  teamSection: {
    component: ModularTeamSection,
    wrapper: ({ children }) => 
    <>
      {children}
    </>
  },
  stats: {
    component: ModularStatsSection,
    wrapper: ({ children }) => 
    <>
      {children}
    </>
  }
}

function getSerializers() {
  const res = {}
  for (const [key, value] of Object.entries(bodySerializers)) {
    if (key === 'block') continue
    const Component = value.component
    res[key] = (props) => <Component {...props.node} />
  }
  return res
}

export const blockSerializers = getSerializers()

const BodyRenderer = ({ body }) => {
  if (!body) return <></>
  return body.map((item) => {
    const type = item._type
    const id = slugify(item.sectionTagline, { lower: true, strict: true })
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper
    
    const ref = useRef(null);
    const isInView = useInView(ref);

    const [inPageNavContext, setInPageNavContext] = useContext(InPageNavContext);

    useEffect(() => {
      setInPageNavContext(id)
    }, [isInView])

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? (
      <section id={id} ref={ref} key={item._key}>
        <Wrapper key={item._key}><Component {...item} {...args} /></Wrapper>
      </section>
    ) : <Component key={item._key} {...item} {...args} />
  })
}

export default BodyRenderer;