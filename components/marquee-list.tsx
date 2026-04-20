import { Children } from "react"
import Marquee from "react-fast-marquee"

export function MarqueeList({ children }: React.PropsWithChildren) {
  const wrappedChildren = Children.map(children, (child, index) => (
    <div key={index} className="mx-2.5">
      {child}
    </div>
  ))

  return (
    <Marquee pauseOnHover autoFill play>
      {wrappedChildren}
    </Marquee>
  )
}
