import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        jakarta: ['var(--font-plus-jakarta-sans)', 'sans-serif']
      },
      fontSize: {
        base: 'var(--size-default)'
      },
      lineHeight: {
        default: 'var(--lh-default)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'hsl(var(--secondary-foreground))',
          'indigo-dark': 'var(---color-secondary-dark)'
        },
        third: {
          DEFAULT: 'var(--color-third)',
          foreground: 'var(--color-secondary)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          btc: 'var(--btc)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border-color))',
        light: 'hsl(var(--light-border))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        light: '0px 0px 10px 5px rgba(0, 0, 0, 0.04)',
        blogCard: '0px 4px 30px 0px rgba(0, 0, 0, 0.1)'
      },
      backgroundColor: {
        'white-opacity-5': 'rgba(255, 255, 255, 0.05)'
      },
      backgroundImage: {
        'hero-banner-gradient': 'linear-gradient(259deg, #006cf5 7.09%, #0559d9 71.14%)',
        'primary-gradient': 'linear-gradient(180deg, #308BFF 0%, #1262FF 100%)',
        'advanced-security-blue-gradient': 'linear-gradient(180deg, #E4EDFF 0%, rgba(228, 237, 255, 0) 125%)',
        'advanced-security-purple-gradient': 'linear-gradient(180deg, #EFE4FF 0%, rgba(228, 237, 255, 0) 125%)',
        'advanced-security-green-gradient': 'linear-gradient(180deg, #E5EEFF 0%, rgba(228, 237, 255, 0) 125%)',
        'blog-card-gradient': 'linear-gradient(180deg, #d8eaff 0%, #f6f6f6 100%)',
        'blog-card-active-gradient': 'linear-gradient(180deg, #187eff 0%, #0445c5 100%, #044ddf 100%)',
        'header-top-gradient':
          'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 8.51%, rgba(255, 255, 255, 0.10) 77.02%)'
      },
      transitionDuration: {
        '400': '400ms'
      },
      transitionTimingFunction: {
        primary: 'ease'
      },
      keyframes: {
        'bottom-top2': {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(3px)' },
          '40%': { transform: 'translateY(5px)' },
          '50%': { transform: 'translateY(7px)' },
          '65%': { transform: 'translateY(5px)' },
          '75%': { transform: 'translateY(3px)' },
          '100%': { transform: 'translateY(0)' }
        },
        'ping-pong': {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.05)' },
          '40%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '65%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        },
        moveRightTopToLeftBottom: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-30px, -10px)' },
          '50%': { transform: 'translate(-15px, 0px)' },
          '75%': { transform: 'translate(0px, 0)' },
          '100%': { transform: 'translate(0, 0)' }
        },
        stickyanimation: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'bottom-top2': 'bottom-top2 3s linear infinite',
        'ping-pong': 'ping-pong 8s linear infinite',
        'move-right-top-left-bottom': 'moveRightTopToLeftBottom 15s linear infinite',
        stickyanimation: 'stickyanimation 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        html: {
          fontSize: '12px',
          '@screen md': {
            fontSize: '14px'
          },
          '@screen lg': {
            fontSize: '15px'
          },
          '@screen xl': {
            fontSize: '16px'
          }
        },
        body: {
          fontSize: 'var(--size-default)',
          lineHeight: 'var(--lh-default)',
          fontFamily: 'var(--font-inter)',
          color: 'var(--btc)',
          background: 'var(--body-bg)',
          position: 'relative',
          scrollBehavior: 'smooth',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          overflowX: 'hidden'
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'var(--font-jakarta)',
          wordBreak: 'break-word'
        },
        h1: {
          fontSize: 'var(--size-h1)',
          lineHeight: 'var(--lh-h1)'
        },
        h2: {
          fontSize: 'var(--size-h2)',
          lineHeight: 'var(--lh-h2)'
        },
        h3: {
          fontSize: 'var(--size-h3)',
          lineHeight: 'var(--lh-h3)'
        },
        h4: {
          fontSize: 'var(--size-h4)',
          lineHeight: 'var(--lh-h4)'
        },
        h5: {
          fontSize: 'var(--size-h5)'
        },
        h6: {
          fontSize: 'var(--size-h6)'
        },
        '@media screen and (max-width: 1.875rem)': {
          h2: { fontSize: '30px' }
        }
      })
    })
  ]
}

export default config
