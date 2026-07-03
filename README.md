# SARGA Motorsport

The official event site for the **SARGA Grand Prix** — a fictional, dummy-data
motorsport landing page built to a grand-prix design language (dark canvas,
ignition-crimson accent, condensed italic display type).

Built with **React 18 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**.

## Features

- **Hero** — event title, tagline, key info and a live "lights out" countdown.
- **Event** — ticket tiers / zones with pricing (the ticketing feature).
- **About** — event story, animated stats and circuit pillars.
- **Schedule** — interactive three-day race-weekend timetable.
- **Partners & Sponsors** — tiered partner wall (title → founding → presenting → official).
- **Newsletter** + **Footer** with navigation and socials.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project structure

The app is data-driven and scalable — content lives in typed `data/` modules,
so adding a ticket tier, schedule session or sponsor is a one-line change with
no component edits.

```
src/
  data/          # dummy content, all typed against src/types
    event.ts        # the headline event + countdown target
    tickets.ts      # ticket tiers
    schedule.ts     # race-weekend timetable
    about.ts        # intro, stats, pillars
    partners.ts     # flat partner list, grouped by tier at render time
    navigation.ts   # nav + footer links
  types/         # shared domain contracts
  hooks/         # useCountdown, useCountUp
  components/
    ui/          # Button, Container, Reveal, SectionHeader, Countdown,
                 # StatCounter, Marquee, Logo
    layout/      # Navbar, Footer
  sections/      # Hero, Event, About, Schedule, Partners, Newsletter
  pages/         # HomePage composes the sections
```

### Design system

Colours, fonts and decorative utilities are defined once in
[`src/index.css`](src/index.css) via Tailwind v4's `@theme` block — surfaces
(`ink`, `carbon`, `void`…), the crimson `molten` accent, display/sans fonts and
motifs (`motif-grid`, `hazard`, `clip-angle`). Change the theme there and it
propagates everywhere.

> All content is placeholder/dummy data. Brand names, prices and dates are
> illustrative only.
# sarga-motorsport
