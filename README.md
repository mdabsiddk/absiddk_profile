# Next.js Framework Starter
ফাইল কাঠামো

portfolio/
├── app/
│   ├── layout.tsx          ← মেটাডেটা, ফন্ট, থিম
│   ├── page.tsx            ← সব সেকশন একত্রিত
│   └── globals.css         ← CSS ভেরিয়েবল, অ্যানিমেশন
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── LanguagesSection.tsx
│   ├── InterestsSection.tsx
│   ├── PhilosophySection.tsx
│   └── ContactSection.tsx
└── public/
    └── (assets)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/next-starter-template)

<!-- dash-content-start -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's deployed on Cloudflare Workers as a [static website](https://developers.cloudflare.com/workers/static-assets/).

This template uses [OpenNext](https://opennext.js.org/) via the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare), which works by taking the Next.js build output and transforming it, so that it can run in Cloudflare Workers.

<!-- dash-content-end -->

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/next-starter-template
```

A live public deployment of this template is available at [https://next-starter-template.templates.workers.dev](https://next-starter-template.templates.workers.dev)

## Getting Started

First, run:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then run the development server (using the package manager of your choice):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploying To Production

| Command                           | Action                                       |
| :-------------------------------- | :------------------------------------------- |
| `npm run build`                   | Build your production site                   |
| `npm run preview`                 | Preview your build locally, before deploying |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare    |
| `npm wrangler tail`               | View real-time logs for all Workers          |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

## 🏷️ Floating Label Input System

সাইটের প্রতিটি ইনপুট ফিল্ডে **floating label animation** চালু আছে।  
ইনপুটে ক্লিক করলে label টি smooth CSS transition-এ উপরে উঠে যায় এবং indigo রঙ ধারণ করে।

### কীভাবে কাজ করে

**CSS** (`src/app/globals.css`) — `.floating-field` utility class-এ সব animation সংজ্ঞায়িত।  
**React** — প্রতিটি ফাইলে একটি local `FloatingField` component আছে যা `useState` দিয়ে `isFocused` ও `hasValue` track করে এবং wrapper-এ CSS class toggle করে।

### নতুন ইনপুট ফিল্ড যোগ করার নিয়ম

**ধাপ ১** — ফাইলের শীর্ষে `FloatingField` component কপি করুন (অথবা বিদ্যমান ফাইলে ইতোমধ্যে আছে):

```tsx
function FloatingField({
  label,
  isTextarea = false,
  hasIcon = false,
  children,
}: {
  label: string;
  isTextarea?: boolean;
  hasIcon?: boolean;
  children: ReactNode;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue,  setHasValue]  = useState(false);

  const wrapperClass = [
    "floating-field",
    isTextarea ? "is-textarea" : "",
    hasIcon    ? "has-icon"    : "",
    isFocused  ? "is-focused"  : "",
    hasValue   ? "has-value"   : "",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={wrapperClass}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        setIsFocused(false);
        setHasValue((e.target as HTMLInputElement | HTMLTextAreaElement).value.length > 0);
      }}
      onChange={(e) => {
        setHasValue((e.target as HTMLInputElement | HTMLTextAreaElement).value.length > 0);
      }}
    >
      <label>{label}</label>
      {children}
    </div>
  );
}
```

**ধাপ ২** — যেকোনো `<input>` বা `<textarea>` কে `<FloatingField>` দিয়ে wrap করুন।  
`placeholder` দেওয়ার **দরকার নেই** — `label` prop-ই placeholder হিসেবে কাজ করবে:

```tsx
{/* সাধারণ text/email/password input */}
<FloatingField label="আপনার নাম">
  <input type="text" id="my-input" className="..." style={...} />
</FloatingField>

{/* textarea */}
<FloatingField label="আপনার বার্তা" isTextarea>
  <textarea rows={4} id="my-textarea" className="..." style={...} />
</FloatingField>

{/* icon সহ input (যেমন admin login) */}
<FloatingField label="Email Address" hasIcon>
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" style={{ zIndex: 2 }}>
      <Mail className="h-5 w-5 text-slate-500" />
    </div>
    <input type="email" className="... pl-12" />
  </div>
</FloatingField>
```

### Props সারসংক্ষেপ

| Prop | Type | Default | কখন ব্যবহার করবেন |
|------|------|---------|-------------------|
| `label` | `string` | — | সবসময় — এটি floating label টেক্সট |
| `isTextarea` | `boolean` | `false` | `<textarea>` হলে `true` |
| `hasIcon` | `boolean` | `false` | input-এর বামে icon থাকলে `true` |

### CSS Class Reference

| Class | কখন লাগে |
|-------|-----------|
| `.floating-field` | সবসময় (wrapper-এ) |
| `.is-textarea` | textarea হলে |
| `.has-icon` | বাম পাশে icon থাকলে |
| `.is-focused` | input focus-এ থাকলে (JS-এ toggle) |
| `.has-value` | input-এ কোনো value থাকলে (JS-এ toggle) |

> **নোট:** CSS সম্পূর্ণ `src/app/globals.css`-এ আছে।  
> নতুন ফাইলে নতুন করে CSS লেখার দরকার নেই।
