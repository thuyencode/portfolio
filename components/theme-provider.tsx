import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";
import { ThemeHotkey } from "./theme-hotkey";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			{...props}
		>
			<ThemeHotkey />
			{children}
		</NextThemesProvider>
	);
}
