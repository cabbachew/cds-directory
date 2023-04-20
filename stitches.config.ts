import { createStitches } from "@stitches/react"

export const { styled, getCssText } = createStitches({
	media: {
		motionSafe: "(prefers-reduced-motion: no-preference)",
		bpXs: "(min-width: 20em)",
		bpSm: "(min-width: 40em)",
		bpMd: "(min-width: 60em)",
		bpLg: "(min-width: 80em)",
		bpXl: "(min-width: 100em)",
	},
	theme: {
		space: {
			s1: "4px",
			s2: "8px",
			s3: "12px",
			s4: "16px",
			s5: "20px",
			s6: "24px",
			s7: "32px",
			s8: "48px",
			s9: "64px",
		},
		fonts: {
			system: "system-ui",
			regular: "generalSans",
			semibold: "generalSansSemibold",
			jpRegular: "noto",
			jpBold: "notoBold",
		},
		colors: {
			white: "white",
			black: "rgba(0,0,0,0.8)",
		},
		fontSizes: {
			sm: "12px",
			md: "16px",
			lg: "20px",
			h1: "36px",
			h2: "30px",
			h3: "24px",
		},
		lineHeights: {
			none: "1",
			tight: "1.2",
			base: "1.3",
			relaxed: "1.4",
			loose: "1.6",
		},
		radii: {
			default: ".25rem",
			round: "50%",
		},
	},
})