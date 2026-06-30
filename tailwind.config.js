/** @type {import('tailwindcss').Config} */
// CareSmartz360 Design System — Tailwind CSS v4 Configuration
// Version: 2.4.0
// Stack: Angular 19 + Tailwind CSS + SCSS
// Auto-generated from ds-tokens-latest.json

module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
    './projects/**/*.{html,ts,scss}'
  ],
  theme: {
    extend: {
      colors: {
        // --- Brand Colors (semantic.brand) ---
        brand: {
          primary:   '#2563EB', // blue.600
          secondary: '#DBEAFE', // blue.100
          hover:     '#1D4ED8', // blue.700
          active:    '#1E40AF', // blue.800
          disabled:  '#D1D5DB', // gray.300
        },
        // --- Status Colors (semantic.status) ---
        status: {
          success: '#16A34A', // green.600
          warning: '#EAB308', // yellow.500
          error:   '#DC2626', // red.600
          info:    '#2563EB', // blue.600
        },
        // --- Surface Colors (semantic.surface) ---
        surface: {
          default:  '#FFFFFF', // white
          subtle:   '#F9FAFB', // gray.50
          muted:    '#F3F4F6', // gray.100
          overlay:  '#1F2937', // gray.800
        },
        // --- Text Colors (semantic.text) ---
        text: {
          primary:   '#111827', // gray.900
          secondary: '#4B5563', // gray.600
          disabled:  '#9CA3AF', // gray.400
          inverse:   '#FFFFFF', // white
          brand:     '#2563EB', // blue.600
        },
        // --- Border Colors (semantic.border) ---
        border: {
          default: '#E5E7EB', // gray.200
          strong:  '#9CA3AF', // gray.400
          focus:   '#3B82F6', // blue.500
          error:   '#EF4444', // red.500
        },
        // --- Primitive Blue Scale ---
        blue: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // --- Primitive Gray Scale ---
        gray: {
          50:  '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // --- Primitive Green Scale ---
        green: {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          900: '#14532D',
        },
        // --- Primitive Red Scale ---
        red: {
          50:  '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          900: '#7F1D1D',
        },
        // --- Primitive Yellow Scale ---
        yellow: {
          50:  '#FEFCE8',
          400: '#FACC15',
          500: '#EAB308',
          700: '#A16207',
        },
      },
      fontFamily: {
        sans: ["'Inter'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      fontSize: {
        xs:   ['12px', { lineHeight: '1.5' }],
        sm:   ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.5' }],
        lg:   ['18px', { lineHeight: '1.5' }],
        xl:   ['20px', { lineHeight: '1.25' }],
        '2xl':['24px', { lineHeight: '1.25' }],
        '3xl':['30px', { lineHeight: '1.25' }],
        '4xl':['36px', { lineHeight: '1.25' }],
      },
      spacing: {
        '0':  '0px',
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '5':  '20px',
        '6':  '24px',
        '8':  '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
      },
      borderRadius: {
        none: '0px',
        sm:   '2px',
        DEFAULT: '4px',
        md:   '4px',
        lg:   '8px',
        xl:   '12px',
        '2xl':'16px',
        full: '9999px',
      },
      boxShadow: {
        sm:   '0 1px 2px 0 rgba(0,0,0,0.05)',
        DEFAULT: '0 4px 6px -1px rgba(0,0,0,0.1)',
        md:   '0 4px 6px -1px rgba(0,0,0,0.1)',
        lg:   '0 10px 15px -3px rgba(0,0,0,0.1)',
        xl:   '0 20px 25px -5px rgba(0,0,0,0.1)',
        none: 'none',
      },
      // --- Touch Target Enforcement (WCAG AA min 40px) ---
      minHeight: {
        touch: '40px',
        'touch-lg': '48px',
      },
      minWidth: {
        touch: '40px',
      },
    },
  },
  plugins: [],
  // SCSS-only custom properties are defined in src/styles/tokens.scss
  // Never use inline styles or hardcoded values — always reference semantic tokens
  // Icons: Google Material Symbols Rounded via <span class="material-symbols-rounded">
};
