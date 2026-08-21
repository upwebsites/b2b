/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FFFFFF',
        'surface-2': '#F9FAFB',
        'surface-3': '#F3F4F6',
        border: '#E5E7EB',
        'border-hover': '#D1D5DB',
        primary: '#107A72',
        'primary-hover': '#0D625B',
        'primary-soft': 'rgba(16, 122, 114, 0.08)',
        accent: '#F6A432',
        'accent-hover': '#E29122',
        'accent-soft': 'rgba(246, 164, 50, 0.12)',
        apricot: '#F6A432',
        'apricot-hover': '#E29122',
        'apricot-soft': 'rgba(246, 164, 50, 0.12)',
        petrol: '#107A72',
        'petrol-hover': '#0D625B',
        text: '#111827',
        'text-2': '#4B5563',
        'text-3': '#6B7280',
        'text-4': '#9CA3AF',
        success: '#10B981',
        danger: '#EF4444',
        'wa-green': '#25D366',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        marker: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        handwriting: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        artistic: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        normal: '-0.01em',
      },
      boxShadow: {
        professional: '0 2px 10px -2px rgba(15, 23, 42, 0.06), 0 1px 3px -1px rgba(15, 23, 42, 0.04)',
        'professional-sm': '0 1px 3px 0 rgba(15, 23, 42, 0.05)',
        'professional-lg': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'professional-xl': '0 20px 48px -8px rgba(15, 23, 42, 0.12), 0 8px 20px -4px rgba(15, 23, 42, 0.06)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.8)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

