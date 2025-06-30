/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Telares Los Morros Brand Colors (Based on Logo)
        primary: {
          DEFAULT: "#4CAF50", // Verde Principal del logo
          foreground: "#FFFFFF",
          50: "#E8F5E8",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
        secondary: {
          DEFAULT: "#2E7D32", // Verde Oscuro para textos destacados
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF9800", // Naranja de la camisa en el logo
          foreground: "#FFFFFF",
          blue: "#2196F3", // Azul del uniforme en el logo
          brown: "#8D6E63", // Marrón del pantalón en el logo
        },

        // Colores neutros
        neutral: {
          white: "#FFFFFF",
          light: "#F5F5F5",
          dark: "#424242",
        },

        // Colores del sistema
        destructive: {
          DEFAULT: "#F44336",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#424242",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#424242",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#424242",
        },
      },
      fontFamily: {
        // Telares Los Morros Typography
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
