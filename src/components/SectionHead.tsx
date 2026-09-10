import type { ReactNode } from 'react'
import SectionLabel from './SectionLabel'

type SectionHeadProps = {
  label: string
  index: string
  title?: ReactNode
}

export default function SectionHead({ label, index, title }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div className="section-head__line">
        <SectionLabel>{label}</SectionLabel>
        <span className="section-head__index" aria-hidden="true">
          {index}
        </span>
      </div>
      {title ? <h2 className="section-head__title">{title}</h2> : null}
    </div>
  )
}
