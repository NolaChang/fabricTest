/** @type {import('tailwindcss').Config} */
export default {
  prefix: '',
  content: ['./components/**/*.{ts,tsx,vue}', './src/**/*.{ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(var(--primary-lighter))',
          DEFAULT: 'hsl(var(--primary))',
          darker: 'hsl(var(--primary-darker))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
        },
        secondary: {
          lighter: 'hsl(var(--secondary-lighter))',
          DEFAULT: 'hsl(var(--secondary))',
          darker: 'hsl(var(--secondary-darker))',
        },
        input: {
          lighter: 'hsl(var(--input-lighter))',
          DEFAULT: 'hsl(var(--input))',
          darker: 'hsl(var(--input-darker))',
        },
        danger: {
          lighter: 'hsl(var(--danger-lighter))',
          DEFAULT: 'hsl(var(--danger))',
          darker: 'hsl(var(--danger-darker))',
        },
        success: {
          lighter: 'hsl(var(--success-lighter))',
          DEFAULT: 'hsl(var(--success))',
        },
      },
      // 間距大小
      spacing: {
        1: '2px',
        2: '3px',
        3: '4px',
        4: '5px',
        5: '6px',
        6: '8px',
        7: '9px',
        8: '10px',
        9: '11px',
        10: '12px',
        11: '14px',
        12: '15px',
        13: '16px',
        14: '18px',
        15: '20px',
        16: '24px',
        17: '25px',
        18: '30px',
        19: '32px',
        20: '60px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '22px',
        '3xl': '24px',
        '4xl': '26px',
        '5xl': '30px',
        '6xl': '34px',
        '7xl': '36px',
        '8xl': '38px',
        '9xl': '40px',
        '10xl': '80px',
      },
      borderRadius: {
        5: '5px',
        10: '10px',
        20: '20px',
        30: '30px',
        50: '50px',
      },
      height: {
        'header-front': 'var(--header-height-front)',
        'header-back': 'var(--header-height-back)',
        'generate-baseOption': 'var(--generate-baseOption-height)',
      },
      width: {
        'canvas-asidemenu-width': 'var(--canvas-asidemenu-width)',
        'canvas-furniture': 'var(--canvas-furniture-width)',
      },
      boxShadow: {
        '3xl': '0px 0px 5px 0px rgba(0, 0, 0, 0.15)',
        '4xl': '0px 0px 5px 0px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
    },
  },
}
