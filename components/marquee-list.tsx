import { Children } from "react"
import Marquee from "react-fast-marquee"

type MarqueeListProps = React.ComponentProps<typeof Marquee>

export function MarqueeList({ children, ...props }: MarqueeListProps) {
  const wrappedChildren = Children.map(children, (child, index) => (
    <div key={index} className="mx-2.5">
      {child}
    </div>
  ))

  return (
    <Marquee autoFill play {...props}>
      {wrappedChildren}
    </Marquee>
  )
}
