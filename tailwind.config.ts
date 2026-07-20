import type { Config } from "tailwindcss";

// Add shimmer keyframe for progress bar

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: { height: '0' },
    				to: { height: 'var(--radix-accordion-content-height)' }
    			},
    			'accordion-up': {
    				from: { height: 'var(--radix-accordion-content-height)' },
    				to: { height: '0' }
    			},
    			'slide-tools': {
    				'0%': { transform: 'translateX(0)' },
    				'50%': { transform: 'translateX(-15px)' },
    				'100%': { transform: 'translateX(0)' }
    			},
    			'float': {
    				'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    				'50%': { transform: 'translateY(-20px) rotate(3deg)' }
    			},
    			'float-slow': {
    				'0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
    				'50%': { transform: 'translateY(-30px) rotate(15deg)' }
    			},
    			'float-slower': {
    				'0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
    				'50%': { transform: 'translateY(-15px) rotate(-8deg)' }
    			},
    			'morph': {
    				'0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
    				'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
    			},
    			'glow-pulse': {
    				'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
    				'50%': { opacity: '0.8', transform: 'scale(1.05)' }
    			},
    			'orbit': {
    				'0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
    				'100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
    			},
			'shimmer': {
				'0%': { transform: 'translateX(-100%)' },
				'100%': { transform: 'translateX(100%)' }
			},
			'aurora': {
				'0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1)' },
				'33%': { transform: 'translateX(-50%) translateY(-50%) rotate(120deg) scale(1.1)' },
				'66%': { transform: 'translateX(-50%) translateY(-50%) rotate(240deg) scale(0.9)' }
			},
			'mesh-flow': {
				'0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
				'25%': { transform: 'translate(5%, -5%) scale(1.05)' },
				'50%': { transform: 'translate(-3%, 3%) scale(0.95)' },
				'75%': { transform: 'translate(-5%, -3%) scale(1.02)' }
			},
			'particle-rise': {
				'0%': { transform: 'translateY(100%) scale(0)', opacity: '0' },
				'10%': { opacity: '1' },
				'90%': { opacity: '1' },
				'100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' }
			},
			'ripple': {
				'0%': { transform: 'scale(0.8)', opacity: '0.8' },
				'100%': { transform: 'scale(2.5)', opacity: '0' }
			},
			'gradient-shift': {
				'0%, 100%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' }
			},
			'pulse-ring': {
				'0%': { transform: 'scale(1)', opacity: '0.6' },
				'50%': { transform: 'scale(1.5)', opacity: '0.3' },
				'100%': { transform: 'scale(2)', opacity: '0' }
			},
			'constellation': {
				'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
				'50%': { opacity: '1', transform: 'scale(1.2)' }
			},
			'heartbeat': {
				'0%, 100%': { transform: 'scale(1)' },
				'14%': { transform: 'scale(1.3)' },
				'28%': { transform: 'scale(1)' },
				'42%': { transform: 'scale(1.3)' },
				'70%': { transform: 'scale(1)' }
			},
			'steam': {
				'0%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
				'50%': { transform: 'translateY(-8px) scale(1.2)', opacity: '0.4' },
				'100%': { transform: 'translateY(-16px) scale(0.8)', opacity: '0' }
			},
			'wave': {
				'0%': { transform: 'rotate(0deg)' },
				'10%': { transform: 'rotate(14deg)' },
				'20%': { transform: 'rotate(-8deg)' },
				'30%': { transform: 'rotate(14deg)' },
				'40%': { transform: 'rotate(-4deg)' },
				'50%': { transform: 'rotate(10deg)' },
				'60%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(0deg)' }
			},
			'shine': {
				'0%': { left: '-100%' },
				'50%, 100%': { left: '100%' }
			}
		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'slide-tools': 'slide-tools 2s ease-in-out infinite',
    			'float': 'float 6s ease-in-out infinite',
    			'float-slow': 'float-slow 8s ease-in-out infinite',
    			'float-slower': 'float-slower 10s ease-in-out infinite',
			'morph': 'morph 8s ease-in-out infinite',
			'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
			'orbit': 'orbit 20s linear infinite',
			'shimmer': 'shimmer 3s linear infinite',
			'spin-slow': 'spin 25s linear infinite',
			'aurora': 'aurora 15s ease-in-out infinite',
			'mesh-flow': 'mesh-flow 20s ease-in-out infinite',
			'particle-rise': 'particle-rise 8s ease-out infinite',
			'ripple': 'ripple 4s ease-out infinite',
			'gradient-shift': 'gradient-shift 10s ease-in-out infinite',
			'pulse-ring': 'pulse-ring 3s ease-out infinite',
			'constellation': 'constellation 12s ease-in-out infinite',
			'heartbeat': 'heartbeat 1.2s ease-in-out infinite',
			'steam': 'steam 2s ease-out infinite',
			'wave': 'wave 2s ease-in-out infinite',
			'shine': 'shine 3s ease-in-out infinite'
		},
    		boxShadow: {
    			'2xs': 'var(--shadow-2xs)',
    			xs: 'var(--shadow-xs)',
    			sm: 'var(--shadow-sm)',
    			md: 'var(--shadow-md)',
    			lg: 'var(--shadow-lg)',
    			xl: 'var(--shadow-xl)',
    			'2xl': 'var(--shadow-2xl)'
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'ui-sans-serif',
    				'system-ui',
    				'-apple-system',
    				'BlinkMacSystemFont',
    				'Segoe UI',
    				'Roboto',
    				'Helvetica Neue',
    				'Arial',
    				'Noto Sans',
    				'sans-serif'
    			],
    			serif: [
    				'Lora',
    				'ui-serif',
    				'Georgia',
    				'Cambria',
    				'Times New Roman',
    				'Times',
    				'serif'
    			],
    			mono: [
    				'Space Mono',
    				'ui-monospace',
    				'SFMono-Regular',
    				'Menlo',
    				'Monaco',
    				'Consolas',
    				'Liberation Mono',
    				'Courier New',
    				'monospace'
    			],
    			label: [
    				'Chivo Mono',
    				'ui-monospace',
    				'SFMono-Regular',
    				'Menlo',
    				'monospace'
    			],
    			display: [
    				'Aspekta',
    				'Inter',
    				'sans-serif'
    			]
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
