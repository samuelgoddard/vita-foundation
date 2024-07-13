import React from 'react'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'

export default function BodyMinimal({ content, className }) {
  return (
    <div className={cx('content', className)}>
      <PortableText
        value={content}
      />
    </div>
  )
}