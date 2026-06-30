# CareSmartz360 Design System

> Figma tokens, component map, AI handoff reference, and export pipeline docs

![Version](https://img.shields.io/badge/version-2.3.0-blue)
![Status](https://img.shields.io/badge/status-active-green)
![License](https://img.shields.io/badge/license-private-red)

---

## Overview

The CareSmartz360 Design System is a comprehensive, token-driven design system for the CareSmartz360 healthcare product. It provides a single source of truth for design tokens, component specifications, and implementation guidelines used across web and mobile platforms.

### Key Features
- **3-Tier Token Architecture** — Primitives → Semantic → Component
- **Figma Integration** — All tokens sourced from Figma Variables
- **Tailwind CSS v4** — Full configuration with design tokens
- **AI Handoff Ready** — Structured for AI-assisted development
- **Automated Versioning** — GitHub Actions for version bumping
- **ADA Compliant** — WCAG AA (4.5:1) contrast ratios enforced

---

## Repository Structure

```
caresmartz360-design-system/
├── README.md                          # This file
├── CHANGELOG.md                       # Version history
├── AI-TOOLS-GUIDE.md                  # Guide for AI-assisted development
├── CARESMARTZ360-DS-REFERENCE.md      # Full AI handoff reference
├── ds-tokens-latest.json              # Current token export (always latest)
├── ds-tokens-v2.3.0.json             # Versioned token snapshot
├── tailwind.config.js                 # Tailwind CSS v4 configuration
├── components/
│   └── component-mapping.json         # Component → Figma node ID map
└── .github/
    └── workflows/
        └── version-bump.yml           # Auto version bump on token changes
```

---

## Token Architecture

```
Primitive Tokens (raw values)
        ↓
Semantic Tokens (meaning-based aliases)
        ↓
Component Tokens (component-scoped)
        ↓
  Tailwind CSS
        ↓
 shadcn/ui Components
```

### Tier 1: Primitives
Raw design values. **Never use directly in components.**

| Category | Count | Example |
|----------|-------|--------|
| Colors | 60+ | `blue.600` = `#2563EB` |
| Spacing | 13 steps | `spacing.4` = `16px` |
| Typography | 10 sizes | `fontSize.base` = `14px` |
| Radius | 7 steps | `radius.md` = `4px` |
| Shadow | 6 levels | `shadow.md` |

### Tier 2: Semantic Tokens
Meaning-based aliases that reference primitives.

| Group | Tokens | Purpose |
|-------|--------|--------|
| `brand.*` | 5 | Primary brand interactions |
| `status.*` | 4 | Success/warning/error/info |
| `surface.*` | 4 | Background surfaces |
| `text.*` | 5 | Text color roles |
| `border.*` | 4 | Border color roles |

### Tier 3: Component Tokens
Component-scoped design decisions.
- Pattern: `{component}.{property}.{state}`
- Example: `button.primary.background.hover`

---

## Quick Start

### Install Dependencies
```bash
npm install tailwindcss @tailwindcss/forms
```

### Use the Tailwind Config
```js
// tailwind.config.js is ready to use
// Copy to your project root or extend from it
const baseConfig = require('./tailwind.config.js');

module.exports = {
  ...baseConfig,
  content: ['./your-app/**/*.{html,ts,tsx}'],
};
```

### Reference Tokens in Angular/TypeScript
```typescript
// Import and use semantic token values
const brandPrimary = '#2563EB';  // semantic.brand.primary
const statusSuccess = '#16A34A'; // semantic.status.success
```

---

## Figma Integration

| Property | Value |
|----------|------|
| **File Name** | `$-Primitives (CS360) V2.0` |
| **File ID** | `DJBpjoXPMEw6bBAByIQaAy` |
| **Variable Collections** | CS-Primitives, CS-Semantic, CS-Component |
| **Export Plugin** | Tokens Studio / Variables API |

### Figma Direct Link
`https://www.figma.com/design/DJBpjoXPMEw6bBAByIQaAy`

---

## Component Library

15 core components mapped with Figma node IDs and shadcn/ui equivalents:

| Component | Figma Node | shadcn/ui | Variants |
|-----------|-----------|-----------|----------|
| Button | `1:100` | `Button` | Primary, Secondary, Ghost, Danger, Link |
| Input | `1:200` | `Input` | Default, Error, Success, Disabled |
| Badge | `1:300` | `Badge` | Default, Success, Warning, Error, Info |
| Card | `1:400` | `Card` | Default, Outlined, Elevated |
| Modal | `1:500` | `Dialog` | Default, Wide, Fullscreen |
| Select | `1:600` | `Select` | Default, Error, Disabled |
| Checkbox | `1:700` | `Checkbox` | Unchecked, Checked, Indeterminate |
| Toggle | `1:800` | `Switch` | Off, On, Disabled |
| Alert | `1:900` | `Alert` | Info, Success, Warning, Error |
| Avatar | `1:1000` | `Avatar` | Image, Initials, Icon |
| Tooltip | `1:1100` | `Tooltip` | Default, Info |
| Table | `1:1200` | — | Default, Striped, Compact |
| Tabs | `1:1300` | `Tabs` | Default, Pills, Underline |
| Breadcrumb | `1:1400` | `Breadcrumb` | — |
| Pagination | `1:1500` | — | — |

---

## Accessibility

- All color pairs meet **WCAG AA** (4.5:1 contrast ratio minimum)
- Focus states use `semantic.border.focus` (`#3B82F6`)
- Status colors always paired with icons/labels (not color alone)
- Minimum touch target: **44×44px**

---

## Versioning

This repo uses [Semantic Versioning](https://semver.org/).

- **Current Version:** `2.3.0`
- Version bumps are automated via GitHub Actions (`version-bump.yml`)
- Each version creates a snapshot: `ds-tokens-v{version}.json`
- `ds-tokens-latest.json` always points to the current version

---

## Documentation

| Document | Description |
|----------|------------|
| [CHANGELOG.md](./CHANGELOG.md) | Full version history |
| [AI-TOOLS-GUIDE.md](./AI-TOOLS-GUIDE.md) | Guide for AI-assisted development |
| [CARESMARTZ360-DS-REFERENCE.md](./CARESMARTZ360-DS-REFERENCE.md) | Complete component & token reference |
| [component-mapping.json](./components/component-mapping.json) | Figma node ID mappings |

---

## Contributing

This repository is maintained by the CareSmartz360 UX team.

1. Export updated tokens from Figma
2. Replace `ds-tokens-latest.json` with new export
3. Push to `main` — GitHub Actions will auto-bump the version
4. Update `CHANGELOG.md` with changes

---

*CareSmartz360 Design System — Built with ❤️ by the CS360 UX Team*
