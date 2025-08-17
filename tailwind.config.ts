
import type { Config } from "tailwindcss";

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
      fontFamily: {
        ai: ['Orbitron', 'monospace'],
        code: ['JetBrains Mono', 'monospace'],
        pixel: ['Press Start 2P', 'monospace'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* AI Color Palette */
				ai: {
					purple: 'hsl(var(--ai-purple))',
					cyan: 'hsl(var(--ai-cyan))',
					pink: 'hsl(var(--ai-pink))',
					blue: 'hsl(var(--ai-blue))',
					green: 'hsl(var(--ai-green))',
				},
				matrix: {
					green: 'hsl(var(--matrix-green))',
				},
				neon: {
					blue: 'hsl(var(--neon-blue))',
				},
				cyber: {
					orange: 'hsl(var(--cyber-orange))',
				},
				
				pixel: {
					DEFAULT: 'hsl(var(--pixel-color))',
					black: '#000000',
					white: '#FFFFFF',
					red: '#ea384c',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				/* Base Animations */
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				/* AI-Themed Animations */
				'neural-pulse': {
					'0%, 100%': { 
						opacity: '0.5',
						transform: 'scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.05)',
						filter: 'brightness(1.2)'
					}
				},
				'data-stream': {
					'0%': { 
						transform: 'translateY(100vh) translateX(-50%)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(-100vh) translateX(-50%)',
						opacity: '0'
					}
				},
				'holographic-glow': {
					'0%, 100%': { 
						filter: 'hue-rotate(0deg) brightness(1)',
						'box-shadow': '0 0 20px rgba(139, 92, 246, 0.5)'
					},
					'25%': { 
						filter: 'hue-rotate(90deg) brightness(1.2)',
						'box-shadow': '0 0 30px rgba(59, 130, 246, 0.7)'
					},
					'50%': { 
						filter: 'hue-rotate(180deg) brightness(1.1)',
						'box-shadow': '0 0 40px rgba(16, 185, 129, 0.6)'
					},
					'75%': { 
						filter: 'hue-rotate(270deg) brightness(1.3)',
						'box-shadow': '0 0 35px rgba(236, 72, 153, 0.8)'
					}
				},
				'ai-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
					},
					'33%': { 
						transform: 'translateY(-10px) rotate(1deg)',
					},
					'66%': { 
						transform: 'translateY(5px) rotate(-1deg)',
					}
				},
				'matrix-rain': {
					'0%': { 
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'10%, 90%': { 
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'cyber-glitch': {
					'0%, 100%': { 
						transform: 'translate(0)',
						filter: 'hue-rotate(0deg)'
					},
					'20%': { 
						transform: 'translate(-2px, 2px)',
						filter: 'hue-rotate(90deg)'
					},
					'40%': { 
						transform: 'translate(-2px, -2px)',
						filter: 'hue-rotate(180deg)'
					},
					'60%': { 
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(270deg)'
					},
					'80%': { 
						transform: 'translate(2px, -2px)',
						filter: 'hue-rotate(360deg)'
					}
				},
				'quantum-shift': {
					'0%, 100%': { 
						'background-position': '0% 50%',
						opacity: '0.8'
					},
					'50%': { 
						'background-position': '100% 50%',
						opacity: '1'
					}
				},
				'pixel-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95) translateY(10px)'
					},
					'50%': {
						opacity: '0.5',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.9) translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				}
			},
			animation: {
				/* Base Animations */
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-fade-in': 'pixel-fade-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-in-left': 'slide-in-left 0.3s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.3s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				
				/* AI-Themed Animations */
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
				'data-stream': 'data-stream 3s linear infinite',
				'holographic-glow': 'holographic-glow 4s ease-in-out infinite',
				'ai-float': 'ai-float 6s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 2s linear infinite',
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out',
				'quantum-shift': 'quantum-shift 3s ease-in-out infinite',
				
				/* Hover Effects */
				'hover-glow': 'neural-pulse 1s ease-in-out',
				'hover-lift': 'ai-float 0.3s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
