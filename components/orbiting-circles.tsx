// Credit: https://magicui.design/docs/components/orbiting-circles

import * as React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
  doubleChildren?: boolean
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  doubleChildren = false,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  const childrenToRender = doubleChildren ? [children, children] : [children]

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="fill-none stroke-border stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
          />
        </svg>
      )}
      {React.Children.map(childrenToRender, (child, index) => {
        const angle = (360 / React.Children.count(childrenToRender)) * index
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-(--icon-size) transform-gpu animate-orbit items-center justify-center rounded-full`,
              { "direction-[reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
