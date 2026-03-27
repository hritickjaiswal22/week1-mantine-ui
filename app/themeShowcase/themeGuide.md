# Mantine Theme Configuration Guide

## Overview

This guide explains how to configure and use a custom Mantine theme for consistent styling across your application.

## 🎨 Theme Configuration (theme.ts)

The theme object contains all design tokens:

### 1. **Colors**

```typescript
colors: {
  navy: ['#f0f3ff', '#dce4f5', ... '#2d4b81'], // 10 shades (0-9)
  teal: [...],
  coral: [...],
}
```

Each color has **10 shades** (indices 0-9):

- **Shade 0**: Lightest (background/hover states)
- **Shade 6**: Primary shade (default used in most cases)
- **Shade 9**: Darkest (text/borders)

**Usage:**

```tsx
<Button color="navy">Click me</Button>           // Uses navy.6
<Button color="navy.3">Light variant</Button>    // Uses navy.3
<Text c="navy.8">Dark text</Text>                // Uses navy.8
```

### 2. **Typography**

```typescript
fontFamily: '"Segoe UI", Roboto, sans-serif'
headings: {
  fontFamily: '"Segoe UI", Roboto, sans-serif'
  sizes: {
    h1: { fontSize: '2.5rem', fontWeight: '700' }
    // ... h2-h6
  }
}
```

**Usage:**

```tsx
<Title order={1}>Page Title</Title>        // Uses h1 styles
<Title order={2}>Section Title</Title>     // Uses h2 styles
<Text>Body text</Text>                     // Uses default font
<Text size="sm">Small text</Text>          // Uses fontSizes.sm
```

### 3. **Spacing**

```typescript
spacing: {
  xs: '0.5rem',  // 8px
  sm: '0.75rem', // 12px
  md: '1rem',    // 16px
  lg: '1.5rem',  // 24px
  xl: '2rem',    // 32px
}
```

**Usage:**

```tsx
<Box p="md">Padding medium</Box>
<Stack gap="lg">Content with large gap</Stack>
<Button m="sm">Margin small</Button>
```

### 4. **Border Radius**

```typescript
radius: {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '0.75rem',  // 12px
  lg: '1rem',     // 16px
  xl: '1.5rem',   // 24px
}
defaultRadius: 'md' // Default used by most components
```

**Usage:**

```tsx
<Card radius="lg">Large radius card</Card>
<Button radius="xs">Slightly rounded button</Button>
```

### 5. **Shadows**

```typescript
shadows: {
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.1), ...',
  // ... md, lg, xl
}
```

**Usage:**

```tsx
<Card shadow="md">Card with medium shadow</Card>
<Box style={{ boxShadow: theme.shadows.lg }}>Custom shadow</Box>
```

### 6. **Responsive Breakpoints**

```typescript
breakpoints: {
  xs: '36em',  // 576px
  sm: '48em',  // 768px
  md: '62em',  // 992px
  lg: '75em',  // 1200px
  xl: '88em',  // 1408px
}
```

**Usage:**

```tsx
<Box
  display={{ base: "block", sm: "none", md: "flex" }}
  p={{ base: "sm", md: "lg" }}
>
  Responsive content
</Box>
```

### 7. **Component Defaults**

```typescript
components: {
  Button: {
    defaultProps: { size: 'md', radius: 'md' },
    styles: {
      root: { fontWeight: 600 }
    }
  }
  // ... other components
}
```

This lets you set default props and styles for all instances of a component.

### 8. **Custom Properties**

```typescript
other: {
  brandName: 'MyApp',
  containerMaxWidth: '1200px',
  transitionFast: '150ms',
  successColor: '#10b981',
  // ... any custom values
}
```

**Usage:**

```tsx
const theme = useMantineTheme();
const maxWidth = theme.other.containerMaxWidth;
const transitionDuration = theme.other.transitionFast;
```

---

## 🚀 Setup Instructions

### Step 1: Install Mantine

```bash
npm install @mantine/core @mantine/hooks
```

### Step 2: Copy theme.ts

Place the `theme.ts` file in your `src/` directory.

### Step 3: Setup App Component

Wrap your entire app with `MantineProvider`:

```tsx
// App.tsx
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

export function App() {
  return (
    <MantineProvider theme={theme}>
      {/* Your routes/components here */}
    </MantineProvider>
  );
}
```

### Step 4: Update main.tsx/index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css"; // Import Mantine styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## 📚 Common Usage Patterns

### Using Colors

```tsx
import { Button, Text, Box } from '@mantine/core';

// Using primary color
<Button>Default (uses primaryColor: navy)</Button>

// Using specific colors
<Button color="teal">Teal button</Button>
<Button color="coral">Coral button</Button>

// Using specific shades
<Box bg="navy.1">Light background</Box>
<Text c="navy.9">Dark text</Text>
```

### Using Typography

```tsx
import { Title, Text } from '@mantine/core';

<Title order={1}>Main Heading</Title>
<Title order={2}>Subheading</Title>
<Text>Body text</Text>
<Text size="sm">Small text</Text>
<Text fw={600}>Bold text (fontWeight: 600)</Text>
<Text fs="italic">Italic text</Text>
```

### Using Spacing

```tsx
import { Box, Stack, Group } from '@mantine/core';

<Box p="md">Padding medium</Box>
<Box m="lg">Margin large</Box>
<Box px="md" py="lg">Horizontal padding, vertical padding large</Box>

<Stack gap="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Stack>

<Group gap="lg" justify="space-between">
  <Box>Left</Box>
  <Box>Right</Box>
</Group>
```

### Responsive Styling

```tsx
import { Box, Stack } from '@mantine/core';

<Box
  p={{ base: 'sm', sm: 'md', md: 'lg' }}
  display={{ base: 'block', md: 'flex' }}
  w={{ base: '100%', md: '80%' }}
>
  Content that changes based on screen size
</Box>

<Stack gap={{ base: 'sm', md: 'lg' }}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>
```

### Accessing Theme in Components

```tsx
import { useMantineTheme, Box } from "@mantine/core";

function MyComponent() {
  const theme = useMantineTheme();

  return (
    <Box
      style={{
        padding: theme.spacing.md,
        backgroundColor: theme.colors.navy[1],
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadows.md,
      }}
    >
      Content
    </Box>
  );
}
```

### Component Props

```tsx
import { Button, Card, TextInput } from '@mantine/core';

// Size
<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>

// Radius
<Button radius="xs">Very sharp</Button>
<Button radius="md">Medium</Button>
<Button radius="xl">Very round</Button>

// Shadow
<Card shadow="sm">Small shadow</Card>
<Card shadow="md">Medium shadow</Card>
<Card shadow="lg">Large shadow</Card>

// Variant
<Button variant="filled">Filled (default)</Button>
<Button variant="light">Light</Button>
<Button variant="outline">Outline</Button>
<Button variant="subtle">Subtle</Button>
<Button variant="gradient">Gradient</Button>
```

---

## 🎯 Best Practices

### 1. Use Theme Values, Not Hardcoded Values

❌ **Bad:**

```tsx
<Box p="16px" bg="#f0f3ff">
  Content
</Box>
```

✅ **Good:**

```tsx
<Box p="md" bg="navy.1">
  Content
</Box>
```

### 2. Use Semantic Color Names

❌ **Bad:**

```tsx
<Text c="navy.5">Some text</Text>
```

✅ **Good:**

```tsx
<Text c="gray.6">Secondary text</Text>
<Text fw={600}>Important text</Text>
```

### 3. Extract Repeated Styles to Components

❌ **Bad:**

```tsx
<Box p="lg" shadow="md" radius="lg" bg="white">Card 1</Box>
<Box p="lg" shadow="md" radius="lg" bg="white">Card 2</Box>
```

✅ **Good:**

```tsx
// Create a component
function MyCard({ children }) {
  return (
    <Box p="lg" shadow="md" radius="lg" bg="white">
      {children}
    </Box>
  );
}
```

### 4. Use Component Defaults

Instead of setting the same props on every component, configure them in `theme.components`:

```typescript
// In theme.ts
Button: {
  defaultProps: {
    size: 'md',
    radius: 'md',
  },
}
```

Then in your app, you only need:

```tsx
<Button>Click me</Button> // Already has size="md" and radius="md"
```

### 5. Use Responsive Props Correctly

```tsx
// Good: responsive spacing
<Box p={{ base: 'sm', md: 'lg' }}>Responsive padding</Box>

// Good: responsive display
<Box display={{ base: 'block', md: 'flex' }}>
  Content
</Box>
```

---

## 🔧 Customization Examples

### Changing Primary Color

```typescript
// In theme.ts
primaryColor: "teal"; // Instead of 'navy'
```

### Adding Custom Colors

```typescript
// In theme.ts
colors: {
  navy: [...],
  // Add new brand color
  myBrandColor: [
    '#f0f3ff',
    '#dce4f5',
    // ... 8 more shades
  ],
}
```

### Customizing Font

```typescript
// In theme.ts
fontFamily: '"Inter", sans-serif',  // Change from Segoe UI
fontFamilyMonospace: '"Monaco", monospace',  // Change monospace font

headings: {
  fontFamily: '"Playfair Display", serif',  // Different font for headings
}
```

### Adding Custom Breakpoint Logic

```tsx
const { breakpoints } = useMantineTheme();
const isMobile = useMediaQuery(`(max-width: ${breakpoints.sm})`);
```

---

## 📖 Resources

- [Mantine Documentation](https://mantine.dev)
- [Theme Object Reference](https://mantine.dev/theming/theme-object/)
- [Colors Guide](https://mantine.dev/theming/colors/)
- [Styles API](https://mantine.dev/styles/styles-api/)
- [Components Library](https://mantine.dev/core/package/)

---

## ✅ Checklist for Your Theme

- [ ] Define custom colors (at least 10 shades per color)
- [ ] Set primary color
- [ ] Configure typography (font families, heading sizes)
- [ ] Set spacing and radius scales
- [ ] Define shadows
- [ ] Configure breakpoints
- [ ] Set component defaults
- [ ] Add custom properties to `other`
- [ ] Wrap app with MantineProvider
- [ ] Test theme in components
- [ ] Document any custom patterns used in your app

---

That's it! You now have a complete, consistent theme across your Mantine application.
