---
name: Kinetic Engineering
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#f4f6ff'
  on-tertiary: '#263143'
  tertiary-container: '#cfdaf2'
  on-tertiary-container: '#545f73'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
  terminal-bg: '#020617'
  electric-cyan: '#00F0FF'
  slate-surface: '#1E293B'
  border-muted: '#334155'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  button:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
---

# Kinetic Engineering — Implementation Design Handoff

This document defines the complete visual specification and implementation design system for the **Jorge Augusto Gutiérrez Bandera** Professional Profile web application, synthesized directly from the approved Google Stitch project (`Jorge Gutiérrez Professional Profile`).

---

## 1. Design Philosophy

The **Kinetic Engineering** design system conveys the authority, architectural rigor, and technical depth of an elite Full Stack Software Engineer. It rejects noisy, generic portfolio templates in favor of a **terminal-adjacent, dark-mode architectural canvas**. 

Key principles:
- **Precision over Decoration:** High-density structure, 1px low-contrast borders (`#334155`), and strict alignment.
- **Architectural Lighting:** Deep Space background (`#0b1326` / `#020617`) with focused **Electric Cyan** (`#00F0FF`) accents for active states, key data signals, and interactive focus.
- **Zero Heavy Shadows:** Depth achieved via tonal surface layering (`surface`, `surface-container`, `surface-container-high`, `slate-surface`) and subtle glow borders.

---

## 2. Visual Identity

- **Theme Mode:** Dark Mode only.
- **Mood / Aesthetic:** Cyber-architectural, high-end developer workspace, terminal aesthetics.
- **Brand Mark:** Terminal glyph `>_` (`material-symbols-outlined: terminal`) paired with bold sans-serif logotype **`J. GUTIÉRREZ`** with electric cyan text glow.
- **Background Pattern:** Subtle engineering grid overlay (`24px x 24px` grid pattern in `rgba(51, 65, 85, 0.1)`).

---

## 3. Color Tokens

### 3.1 Surface & Background Hierarchy
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `background` / `surface` | `#0b1326` | Main body background canvas. |
| `terminal-bg` / `surface-container-lowest` | `#020617` / `#060e20` | High-contrast deep base, footer, badge text contrast. |
| `surface-container-low` | `#131b2e` | Recessed containers, table wells. |
| `surface-container` | `#171f33` | Standard card and panel backgrounds. |
| `surface-container-high` | `#222a3d` | Elevated experience cards and interactive containers. |
| `surface-container-highest` / `surface-variant` | `#2d3449` | Skill pill tags, chip backgrounds. |
| `slate-surface` | `#1E293B` | Bento stat metric tiles, timeline track nodes. |

### 3.2 Accent & Interactive
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `electric-cyan` / `primary-container` | `#00F0FF` | Primary brand accent, glowing highlights, active nodes, primary CTA buttons. |
| `surface-tint` | `#00dbe9` | Hover state for cyan buttons, interactive focus rings. |
| `primary` | `#dbfcff` | High-contrast cyan text / icon highlight. |
| `on-primary` | `#00363a` | Dark text rendered on bright cyan containers. |
| `border-muted` | `#334155` | 1px component borders and dividers. |
| `outline-variant` | `#3b494b` | Subtle secondary borders. |

### 3.3 Text & Typography Contrast
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `on-surface` / `on-background` | `#dae2fd` | High-contrast primary headings and card titles. |
| `on-surface-variant` | `#b9cacb` | Secondary descriptions, subheadings, metadata text. |

---

## 4. Typography

| Role | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-lg` | **Space Grotesk** | 48px | 700 (Bold) | 1.1 | -0.02em |
| `headline-lg-mobile`| **Space Grotesk** | 32px | 700 (Bold) | 1.2 | -0.02em |
| `headline-md` | **Space Grotesk** | 24px | 600 (SemiBold) | 1.3 | Normal |
| `body-lg` | **Geist** | 18px | 400 (Regular) | 1.6 | Normal |
| `body-md` | **Geist** | 16px | 400 (Regular) | 1.5 | Normal |
| `code-label` | **JetBrains Mono**| 14px | 500 (Medium) | 1.4 | 0.05em (Uppercase) |
| `button` | **Geist** | 14px | 600 (SemiBold) | 1.0 | 0.02em |

---

## 5. Layout & Spacing System

- **Max Container Width:** `1200px` (`max-w-container-max`).
- **Desktop Grid:** 12-column grid with `24px` gutter (`px-gutter`).
- **Mobile Grid:** Fluid single column with `16px` lateral margin (`px-margin-mobile`).
- **Section Rhythm:** `120px` vertical gap between major chapters on desktop (`mb-section-gap`); `64px`–`80px` on mobile.
- **Component Stack:** `8px` (`stack-sm`) for compact item groups, `16px` (`stack-md`) for standard card elements.

---

## 6. Component Specifications

### 6.1 Navigation Bars
- **Desktop TopAppBar:**
  - Fixed position at top (`z-50`, height `64px` / `h-16`).
  - Glassmorphic backdrop: `bg-surface/80` with `backdrop-blur-xl` and `border-b border-border-muted/30`.
  - Left: Terminal icon (`material-symbols-outlined`) + `J. GUTIÉRREZ` logotype.
  - Center/Right: Navigation anchors (`#profile`, `#experience`, `#skills`, `#journey`, `#contact`) + Ghost `DOWNLOAD CV` CTA.
- **Mobile Sticky Sub-Nav / Drawer:**
  - Fixed at screen bottom (`z-40`, height `56px`), `bg-surface-container-high/90 backdrop-blur-md border-t border-border-muted`.
  - Icon-and-label tabs: `Home`, `Profile`, `Exp`, `Skills`, `Journey`, `Contact`.

### 6.2 Buttons & Action Controls
- **Primary CTA Button:**
  - Background: `bg-electric-cyan` (`#00F0FF`), Text: `text-terminal-bg` (`#020617`), Font: `Geist 600`, Radius: `4px` (`rounded-DEFAULT` / `rounded-lg`).
  - Hover: `hover:bg-surface-tint` or `hover:opacity-90` with smooth transition.
- **Secondary / Ghost Button:**
  - Background: Transparent, Border: `1px solid #334155` (`border-border-muted`), Text: `text-on-surface`.
  - Hover: `hover:border-electric-cyan hover:text-electric-cyan hover:bg-electric-cyan/10`.
- **Icon Action Buttons (LinkedIn, GitHub):**
  - Square container `48px x 48px` (`w-12 h-12`), `bg-surface-container`, `border border-border-muted`, `rounded-lg`, JetBrains Mono text glyphs (`in`, `gh`) or SVG icons.

### 6.3 Bento Stat Tiles (Professional Snapshot)
- Grid layout: 4 columns on desktop (`grid-cols-4`), 2x2 on mobile (`grid-cols-2`).
- Styling: `bg-slate-surface` (`#1E293B`) or `bg-surface-container`, `border border-border-muted`, `p-6`–`p-8`, `rounded-xl`.
- Content: Number rendered in `text-3xl`–`text-4xl Space Grotesk 700 text-electric-cyan` + JetBrains Mono uppercase label.

### 6.4 Engineering Domain Cards
- Grid: 2-column or 3-column responsive card layout.
- Styling: `bg-surface-container`, `border border-border-muted/50`, `p-6`, `rounded-xl`.
- Header: Domain icon (`material-symbols-outlined text-electric-cyan text-2xl`) + Space Grotesk title.
- Hover: Glow border transition `hover:border-electric-cyan/50`.

### 6.5 Skill Badges & Chip Grouping
- Container: `bg-surface-variant` (`#2d3449`) or `bg-surface-container`, `border border-border-muted`, `px-3 py-1`, `rounded-DEFAULT` (4px).
- Font: `JetBrains Mono 14px text-on-surface-variant` (or `text-electric-cyan` for highlighted database technologies).

### 6.6 Vertical Timeline (Career Journey & Experience)
- Architecture: 2px continuous vertical line in `border-border-muted` or cyan gradient.
- Milestones: Numbered circles (`01`, `02`, `03`, `04`) with `bg-surface-container border-2 border-border-muted`.
- Active Milestone (Current State): `border-electric-cyan text-electric-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)] bg-surface`.

### 6.7 Enterprise Experience Panels
- Deep container: `bg-surface-container-high border-2 border-electric-cyan/20 rounded-xl p-6 md:p-8 relative overflow-hidden`.
- Subtle radial accent in top corner (`bg-electric-cyan/5 rounded-bl-full pointer-events-none`).
- Nested project cards: `bg-surface border border-border-muted p-4 rounded-lg`.

---

## 7. Page Structure & Section-by-Section Blueprint

```text
1. Header / TopAppBar (Fixed Navigation)
2. Hero Section (Headline, Positioning, Summary, Primary & Secondary CTAs, Abstract Tech Visual)
3. Professional Snapshot (Bento Grid / Metric Tiles: 12+ Years Exp, 4+ Years at TCS, 3 Enterprise Clients, Full-Stack Delivery)
4. Engineering Profile (4 Domain Pillars: Backend Engineering, Database Architecture, Frontend Capability, Enterprise Systems)
5. Career Journey (4-Phase Vertical Evolution Timeline: Systems -> Development -> Engineering -> Full Stack)
6. Technical Architecture & Stack (Categorized Badges: Languages, Backend, Databases, Frontend, Mobile, Testing, Cloud)
7. Professional Experience (TCS + Client Engagements: Banistmo, Tuya, Summa; Personalsoft; Mangus.co; Metroarea)
8. Core Engineering Capabilities & Database Strength
9. Continuous Learning & Accreditations (LinkedIn Learning Paths, Corporate Programs)
10. Recognitions & Appreciation (TCS Gems Quotes & Leadership Feedback)
11. Formal Education & Academic Foundation (SENA ADSI)
12. Contact & Professional Links
13. Footer (Copyright, Quick Links, Brand Lockup)
```

---

## 8. Content vs. Design Boundary (CRITICAL FOR IMPLEMENTATION)

> **Mandatory Rule for Implementation Agent:**
> The Stitch screens contain visual placeholder text and illustrative mock skills. **All actual text, technologies, dates, and achievements MUST be strictly drawn from [`profile/profile-model.md`](file:///c:/Users/YAMI/Documents/projects/jorgegutierrezbandera.github.io/profile/profile-model.md)** and its supporting source files.

### Detected Visual Placeholders in Stitch to be Replaced:
1. **Unverified Programming Languages:**
   - Stitch displays: `Java`, `Spring Boot`, `C# .NET`, `Python`, `C/C++`.
   - **Real Source of Truth:** `TypeScript`, `JavaScript`, `PHP` (with .NET/ASP.NET learning evidence). Replace placeholder tags with real verified stack.
2. **Unverified Database Systems:**
   - Stitch displays: `Oracle`, `IBM DB2`, `Informix`, `MongoDB`, `Redis`.
   - **Real Source of Truth:** `SQL Server`, `PostgreSQL`, `MySQL` (and Access).
3. **Unverified Frontend Frameworks:**
   - Stitch displays: `Vue.js`, `Bootstrap`.
   - **Real Source of Truth:** `Angular`, `React`, `TypeScript`, `JavaScript`, `HTML/CSS`.
4. **Placeholder Quotation in Recognition:**
   - Stitch displays a generic quote: *"Jorge's ability to navigate complex backend architectures..."*.
   - **Real Source of Truth:** Verbatim TCS Gems appreciation notes from Raka Banerjee (Sub ISU Head) and Talent Transformation Team documented in [`profile/recognitions.md`](file:///c:/Users/YAMI/Documents/projects/jorgegutierrezbandera.github.io/profile/recognitions.md).
5. **Academic Degree Title in Footer:**
   - Stitch displays: *"B.S. Systems Engineering"*.
   - **Real Source of Truth:** *Tecnólogo en Análisis y Desarrollo de Sistemas de Información (ADSI)*, SENA (2015–2017).

---

## 9. Accessibility (a11y) & Performance Specifications

- **Color Contrast:** All text pairings (e.g., `text-on-surface` `#dae2fd` and `text-on-surface-variant` `#b9cacb` on `#0b1326`) satisfy WCAG 2.1 AAA contrast ratio (> 7:1).
- **Interactive Focus:** Focusable elements must feature `focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2 focus:ring-offset-background`.
- **Semantic HTML:** Strict usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<time>`, and `<footer>` tags.
- **Aria Labels:** Required on icon-only links (`aria-label="Jorge Gutiérrez LinkedIn Profile"`, `aria-label="GitHub Repository"`).

---

## 10. Assets & External Dependencies

1. **Web Fonts (Google Fonts):**
   - Space Grotesk (`wght@600;700`)
   - Geist (`wght@400;500;600;700`)
   - JetBrains Mono (`wght@400;500;600`)
2. **Icons:**
   - Material Symbols Outlined (`family=Material+Symbols+Outlined:wght,FILL@100..700,0..1`)
3. **Hero Abstract Graphic:**
   - Kinetic abstract network illustration with electric cyan data streams on dark obsidian background.