"use client";

import { createTheme } from "@mantine/core";

// https://claude.ai/chat/41fef38c-daf2-462b-b0da-4fcecc257307
/**
 * Custom Mantine Theme Configuration
 *
 * This file defines all design tokens for the application:
 * - Color palette
 * - Typography settings
 * - Spacing and sizing
 * - Component defaults
 * - Custom properties
 */

export const theme = createTheme({
  // ============================================
  // COLOR SYSTEM
  // ============================================

  // Define your primary color palette
  // Each color needs 10 shades (0-9), where 6 is typically the main shade
  colors: {
    // Custom brand color: Deep Navy
    navy: [
      "#f0f3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4", // Shade 6 - primary shade
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],

    // Custom brand color: Vibrant Teal
    teal: [
      "#e6f9f7",
      "#c3f0ea",
      "#94e4dd",
      "#5fd8d0",
      "#37ccc4",
      "#1fc2b9",
      "#17bab0", // Shade 6 - primary shade
      "#10a39f",
      "#09938e",
      "#01827d",
    ],

    // Custom brand color: Warm Coral
    coral: [
      "#ffe8e0",
      "#ffc7b5",
      "#ffa285",
      "#ff7d52",
      "#ff6233",
      "#ff521a",
      "#f74910", // Shade 6 - primary shade
      "#de3f0a",
      "#c43605",
      "#aa2800",
    ],

    // Override default gray for better control
    gray: [
      "#f9fafb",
      "#f3f4f6",
      "#e5e7eb",
      "#d1d5db",
      "#9ca3af",
      "#6b7280",
      "#4b5563",
      "#374151",
      "#1f2937",
      "#111827",
    ],
  },

  // Set the primary color used throughout the app
  primaryColor: "navy",

  // Control which shade of the primary color is used
  // Can be a number (0-9) or an object for light/dark variants
  primaryShade: {
    light: 6, // Shade 6 for light mode
    dark: 8, // Shade 8 for dark mode (darker)
  },

  // Automatically adjust text color based on background luminance
  autoContrast: true,

  // Threshold for determining if text should be light or dark
  // 0.3 means colors with luminance below 0.3 get white text
  luminanceThreshold: 0.3,

  // White and black overrides
  white: "#ffffff",
  black: "#111827",

  // ============================================
  // TYPOGRAPHY
  // ============================================

  // Primary font family for body text
  fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',

  // Monospace font for code blocks
  fontFamilyMonospace: '"Fira Code", "Courier New", monospace',

  // Heading styles configuration
  headings: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    fontWeight: "600",
    textWrap: "wrap",

    sizes: {
      h1: {
        fontSize: "2.5rem", // 40px
        fontWeight: "700",
        lineHeight: "1.1",
      },
      h2: {
        fontSize: "2rem", // 32px
        fontWeight: "700",
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "1.5rem", // 24px
        fontWeight: "600",
        lineHeight: "1.3",
      },
      h4: {
        fontSize: "1.25rem", // 20px
        fontWeight: "600",
        lineHeight: "1.4",
      },
      h5: {
        fontSize: "1.125rem", // 18px
        fontWeight: "600",
        lineHeight: "1.4",
      },
      h6: {
        fontSize: "1rem", // 16px
        fontWeight: "600",
        lineHeight: "1.5",
      },
    },
  },

  // Font size scale - used by Text and other components
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
  },

  // Line height scale
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },

  // ============================================
  // SPACING & SIZING
  // ============================================

  // Spacing scale - used for margins, padding, gaps
  spacing: {
    xs: "0.5rem", // 8px
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },

  // Border radius scale
  radius: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "0.75rem", // 12px
    lg: "1rem", // 16px
    xl: "1.5rem", // 24px
  },

  // Default border radius for most components
  defaultRadius: "md",

  // ============================================
  // SHADOWS & EFFECTS
  // ============================================

  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
  },

  // Default gradient configuration
  defaultGradient: {
    from: "navy.6",
    to: "teal.6",
    deg: 135,
  },

  // ============================================
  // RESPONSIVE BREAKPOINTS
  // ============================================

  breakpoints: {
    xs: "36em", // 576px
    sm: "48em", // 768px
    md: "62em", // 992px
    lg: "75em", // 1200px
    xl: "88em", // 1408px
  },

  // ============================================
  // FOCUS & INTERACTION
  // ============================================

  // Control focus ring visibility
  // 'auto' = keyboard only (recommended)
  // 'always' = keyboard and mouse
  // 'never' = never show (not recommended)
  focusRing: "auto",

  // Cursor type for interactive elements
  // 'default' = standard cursor
  // 'pointer' = pointer cursor on all interactive elements
  cursorType: "pointer",

  // Font smoothing
  fontSmoothing: true,

  // Respect user's reduced motion preferences
  respectReducedMotion: true,

  // ============================================
  // COMPONENT DEFAULTS
  // ============================================

  components: {
    // Button defaults
    Button: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
      styles: {
        root: {
          fontWeight: 600,
          letterSpacing: "0.3px",
          transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",

          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },

    // TextInput defaults
    TextInput: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
      styles: {
        input: {
          transition: "border-color 200ms ease, box-shadow 200ms ease",

          "&:focus": {
            borderColor: "var(--mantine-color-navy-6)",
          },
        },
      },
    },

    // Card defaults
    Card: {
      defaultProps: {
        radius: "lg",
        padding: "lg",
      },
      styles: {
        root: {
          boxShadow: "var(--mantine-shadow-sm)",
          transition: "all 200ms ease",

          "&:hover": {
            boxShadow: "var(--mantine-shadow-md)",
          },
        },
      },
    },

    // Badge defaults
    Badge: {
      defaultProps: {
        radius: "md",
        variant: "light",
      },
    },

    // Alert defaults
    Alert: {
      defaultProps: {
        radius: "md",
      },
    },
  },

  // ============================================
  // CUSTOM PROPERTIES
  // ============================================

  // Store custom values in the 'other' object
  // Access these with: theme.other.propertyName
  other: {
    // Custom brand values
    brandName: "MyApp",

    // Custom spacing values
    containerMaxWidth: "1200px",
    sidebarWidth: "280px",

    // Custom animation timings
    transitionFast: "150ms",
    transitionBase: "200ms",
    transitionSlow: "300ms",

    // Custom colors for specific use cases
    successColor: "#10b981",
    warningColor: "#f59e0b",
    errorColor: "#ef4444",
    infoColor: "#3b82f6",

    // Border styles
    borderColor: "#e5e7eb",
    borderWidth: "1px",

    // Z-index scale
    zIndexDropdown: 1000,
    zIndexStickyHeader: 100,
    zIndexModal: 1300,
  },
});

export default theme;
