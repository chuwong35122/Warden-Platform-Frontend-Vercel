import Image from "next/image"
import { useState, useEffect } from "react"

import FallbackImage from "../../../public/images/common/fallback-image.svg"

type Props = {
  alt: string
  src: string
  width?: number
  height?: number
  draggable?: boolean
  style?: any
}
export const ImageWithFallback = ({
  alt,
  src,
  width,
  height,
  style,
  draggable,
  ...props
}: Props) => {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [src])

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? FallbackImage : src}
      width={width}
      height={height}
      {...props}
      draggable={draggable}
      style={style}
    />
  )
}
