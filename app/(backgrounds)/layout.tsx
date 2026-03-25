export default function BackgroundsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      {children}

      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 -z-10 dark:hidden"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Emerald Void */}
      <div
        className="absolute inset-0 -z-10 not-dark:hidden"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
        }}
      />
    </>
  )
}
