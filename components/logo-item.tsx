"use client"

import { useState } from "react"
import type { LogoItem as LogoItemType } from "@/lib/data"

export function LogoItem({ name, img, size, pill, label }: LogoItemType) {
  const [errored, setErrored] = useState(false)

  const classes = [
    "logo-item",
    pill ? "logo-pill" : "",
    label ? "logo-item-labeled" : "",
    size ? `logo-item-${size}` : "",
  ]
    .filter(Boolean)
    .join(" ")

  if (label) {
    return (
      <div className={classes}>
        <div className="logo-labeled-wrap">
          {errored ? (
            <span className="logo-fallback">{name}</span>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={img || "/placeholder.svg"} alt={name} loading="lazy" onError={() => setErrored(true)} />
          )}
          <span className="logo-label">{label}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={classes}>
      {errored ? (
        <span className="logo-fallback">{name}</span>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={img || "/placeholder.svg"} alt={name} loading="lazy" onError={() => setErrored(true)} />
      )}
    </div>
  )
}
