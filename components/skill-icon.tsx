import Image from "next/image"

export interface SkillIconProps extends React.ComponentProps<typeof Image> {
  size?: number
}

export function SkillIcon({ src, alt, size = 60, ...props }: SkillIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      unoptimized
      loading="eager"
      {...props}
    />
  )
}
