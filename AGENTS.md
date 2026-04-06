# Project Details

- **Framework**: Next.js 16.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS (PostCSS)
- **Deployment & Edge Computing**: Cloudflare Pages / Workers (via OpenNext)
- **UI Architecture**: React Server Components (App Router) + Client Components
- **Key Modules**:
  - `framer-motion` for animations
  - `lucide-react` / `react-icons` for graphics

## AI Development Guidelines
1. **Always use specific Next.js App Router rules** (e.g., `use client` at the top of client components).
2. **Handle Cloudflare integrations carefully**: Global types mapping, KV bindings, and server actions should be compatible with Edge Runtime.
3. Use the experimental `@vercel/next-browser` to inspect the live component tree during debugging.
