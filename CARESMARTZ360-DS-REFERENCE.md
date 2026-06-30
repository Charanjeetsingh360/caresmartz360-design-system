# CareSmartz360 Design System — AI Handoff Reference

**Version:** 2.3.0  
**Figma File:** `$-Primitives (CS360) V2.0` (ID: `DJBpjoXPMEw6bBAByIQaAy`)  
**Last Updated:** 2025-01-01

---

## Overview

This document serves as the authoritative reference for AI-assisted development, design handoff, and component implementation for the CareSmartz360 product design system.

---

## Token Architecture

### Layer 1: Primitives
Foundational raw values. Never reference primitives directly in components — always use semantic tokens.

| Category | Example Token | Value |
|----------|--------------|-------|
| Color | `primitives.colors.blue.600` | `#2563EB` |
| Spacing | `primitives.spacing.4` | `16px` |
| Typography | `primitives.typography.fontSize.base` | `14px` |
| Radius | `primitives.radius.md` | `4px` |
| Shadow | `primitives.shadow.md` | `0 4px 6px rgba(0,0,0,0.1)` |

### Layer 2: Semantic Tokens
Meaning-based tokens referencing primitives.

| Token | References | Usage |
|-------|-----------|-------|
| `semantic.brand.primary` | `blue.600` | Primary CTA buttons |
| `semantic.brand.hover` | `blue.700` | Button hover state |
| `semantic.brand.disabled` | `gray.300` | Disabled interactive elements |
| `semantic.status.success` | `green.600` | Success states, positive feedback |
| `semantic.status.warning` | `yellow.500` | Warning states, caution |
| `semantic.status.error` | `red.600` | Error states, destructive actions |
| `semantic.status.info` | `blue.600` | Informational states |
| `semantic.surface.default` | `white` | Main content areas |
| `semantic.surface.subtle` | `gray.50` | Subtle backgrounds |
| `semantic.surface.muted` | `gray.100` | Muted/secondary surfaces |
| `semantic.surface.overlay` | `gray.800` | Modal overlays, tooltips |
| `semantic.text.primary` | `gray.900` | Body text, headings |
| `semantic.text.secondary` | `gray.600` | Captions, labels |
| `semantic.text.disabled` | `gray.400` | Disabled text |
| `semantic.text.inverse` | `white` | Text on dark backgrounds |
| `semantic.text.brand` | `blue.600` | Links, brand text |
| `semantic.border.default` | `gray.200` | Default borders |
| `semantic.border.strong` | `gray.400` | Emphasized borders |
| `semantic.border.focus` | `blue.500` | Focus ring |
| `semantic.border.error` | `red.500` | Error state borders |

---

## Component Reference

### Button
- **Variants:** Primary, Secondary, Ghost, Danger, Link
- **Sizes:** SM (32px), MD (40px), LG (48px)
- **States:** Default, Hover, Active, Disabled, Loading
- **Key Tokens:** `semantic.brand.primary` (bg), `semantic.text.inverse` (text), `primitives.radius.md`
- **Figma Node:** `1:100`
- **shadcn/ui:** `Button`

### Input
- **Variants:** Default, Error, Success, Disabled
- **Sizes:** SM (32px), MD (40px), LG (48px)
- **States:** Default, Focus, Filled, Error, Disabled
- **Key Tokens:** `semantic.surface.default` (bg), `semantic.border.focus` (focus ring), `semantic.border.error`
- **Figma Node:** `1:200`
- **shadcn/ui:** `Input`

### Badge
- **Variants:** Default, Success, Warning, Error, Info, Outline
- **Sizes:** SM, MD
- **Key Tokens:** Respective `semantic.status.*` for colored variants
- **Figma Node:** `1:300`
- **shadcn/ui:** `Badge`

### Card
- **Variants:** Default, Outlined, Elevated
- **Key Tokens:** `semantic.surface.default` (bg), `primitives.radius.lg`, `primitives.shadow.md`
- **Figma Node:** `1:400`
- **shadcn/ui:** `Card`

### Modal / Dialog
- **Variants:** Default (480px), Wide (720px), Fullscreen
- **Key Tokens:** `semantic.surface.overlay` (backdrop), `primitives.radius.xl`
- **Figma Node:** `1:500`
- **shadcn/ui:** `Dialog`

### Select
- **Variants:** Default, Error, Disabled
- **Key Tokens:** Same as Input
- **Figma Node:** `1:600`
- **shadcn/ui:** `Select`

### Checkbox
- **Variants:** Unchecked, Checked, Indeterminate, Disabled
- **Key Tokens:** `semantic.brand.primary` (checked bg), `primitives.radius.sm`
- **Figma Node:** `1:700`
- **shadcn/ui:** `Checkbox`

### Toggle / Switch
- **Variants:** Off, On, Disabled
- **Key Tokens:** `semantic.brand.primary` (on state), `semantic.neutral.300` (off state)
- **Figma Node:** `1:800`
- **shadcn/ui:** `Switch`

### Alert
- **Variants:** Info, Success, Warning, Error
- **Key Tokens:** Tinted backgrounds from respective primitive color scale (step 50)
- **Figma Node:** `1:900`
- **shadcn/ui:** `Alert`

### Avatar
- **Variants:** Image, Initials, Icon
- **Sizes:** XS (24px), SM (32px), MD (40px), LG (48px), XL (64px)
- **Key Tokens:** `semantic.surface.muted` (fallback bg), `primitives.radius.full`
- **Figma Node:** `1:1000`
- **shadcn/ui:** `Avatar`

---

## Typography Scale

| Step | Size | Weight | Use Case |
|------|------|--------|----------|
| xs | 11px | 400 | Legal text, micro labels |
| sm | 12px | 400 | Captions, helper text |
| base | 14px | 400 | Body text (default) |
| md | 16px | 400/500 | Large body, subheadings |
| lg | 18px | 500/600 | Section headers |
| xl | 20px | 600 | Card titles |
| 2xl | 24px | 600/700 | Page section titles |
| 3xl | 28px | 700 | Page titles |
| 4xl | 32px | 700 | Hero headings |
| 5xl | 36px | 700 | Display headings |

---

## Spacing Scale

Base unit: **4px**

| Step | Value | Common Usage |
|------|-------|-------------|
| 1 | 4px | Micro gaps |
| 2 | 8px | Inner padding (sm) |
| 3 | 12px | Inner padding (md) |
| 4 | 16px | Standard spacing |
| 6 | 24px | Section gaps (sm) |
| 8 | 32px | Section gaps (md) |
| 12 | 48px | Section gaps (lg) |
| 16 | 64px | Page sections |

---

## Accessibility Standards

- **Color Contrast:** All text/background pairs meet WCAG AA (4.5:1 minimum)
- **Focus States:** All interactive elements have visible focus rings using `semantic.border.focus`
- **Status Colors:** Status indicators never rely on color alone (always paired with icon or label)
- **Touch Targets:** Minimum 44x44px for all interactive elements

---

## Export Pipeline

1. **Figma Tokens** → Export via Tokens Studio plugin or Variables API
2. **Token Transform** → Style Dictionary transforms JSON to CSS/JS/SCSS
3. **Tailwind Config** → Auto-generated from transformed tokens
4. **Component Library** → shadcn/ui components consume Tailwind classes
5. **Version Bump** → GitHub Actions auto-increments on token changes

---

## Figma Variable Collections

| Collection | Type | Purpose |
|-----------|------|--------|
| CS-Primitives | Color, Dimension | Raw values |
| CS-Semantic | Color | Meaning-based aliases |
| CS-Component | Color, Dimension | Component-scoped tokens |

---

*This document is auto-generated as part of the CareSmartz360 DS export pipeline.*
