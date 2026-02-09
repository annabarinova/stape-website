# Component Version History

## How it works

Each component lives in `components/` and is versioned via git. To iterate safely:

### Save a snapshot before changing a component
```bash
git add components/Hero.tsx
git commit -m "snapshot: Hero before [description of upcoming change]"
```

### Restore a component to a previous version
```bash
# See all versions of a component
git log --oneline -- components/Hero.tsx

# Restore to a specific commit
git checkout <commit-hash> -- components/Hero.tsx

# Or restore to the baseline tag
git checkout v1.0-wireframe-redesign -- components/Hero.tsx
```

### Compare current vs previous
```bash
git diff v1.0-wireframe-redesign -- components/Hero.tsx
```

### Create a named snapshot (tag) for the whole site
```bash
git tag -a v1.1-description -m "Description of changes"
```

## Tags

| Tag | Description | Date |
|-----|-------------|------|
| `v1.0-wireframe-redesign` | Baseline wireframe-based visual redesign | 2026-02-09 |

## Components

| Component | File | Description |
|-----------|------|-------------|
| Navbar | `components/Navbar.tsx` | Hamburger + logo, nav items, EN selector, Login, Book a Demo |
| Hero | `components/Hero.tsx` | Centered layout, avatars, email input, value props |
| Metrics | `components/Metrics.tsx` | 4 equal horizontal metric cards |
| ProductShowcase | `components/ProductShowcase.tsx` | Full-width dashboard screenshot |
| WorkThatDisappears | `components/WorkThatDisappears.tsx` | Dark bg, 2-column before/after |
| Timeline | `components/Timeline.tsx` | Vertical numbered steps in card |
| SocialProof | `components/SocialProof.tsx` | Featured testimonial + product image + metric cards |
| Stats | `components/Stats.tsx` | 3 metric cards with quote |
| Features | `components/Features.tsx` | Vertical timeline (4 steps) in card |
| ComparisonTable | `components/ComparisonTable.tsx` | 3-column comparison table |
| RoleSpecificOutcomes | `components/RoleSpecificOutcomes.tsx` | Tab-based role content |
| FAQ | `components/FAQ.tsx` | Q&A accordion with + icons |
| PricingComparison | `components/PricingComparison.tsx` | Side-by-side pricing cards |
| CTA | `components/CTA.tsx` | Final call-to-action section |
| Footer | `components/Footer.tsx` | Dark footer with CTA card + columns |
