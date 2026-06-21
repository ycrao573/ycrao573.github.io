<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, but it invokes Vite through `vp dev` and `vp build`.

## Vite+ Workflow

`vp` is a global binary that handles the full development lifecycle. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

### Start

- create - Create a new project from a template
- migrate - Migrate an existing project to Vite+
- config - Configure hooks and agent integration
- staged - Run linters on staged files
- install (`i`) - Install dependencies
- env - Manage Node.js versions

### Develop

- dev - Run the development server
- check - Run format, lint, and TypeScript type checks
- lint - Lint code
- fmt - Format code
- test - Run tests

### Execute

- run - Run monorepo tasks
- exec - Execute a command from local `node_modules/.bin`
- dlx - Execute a package binary without installing it as a dependency
- cache - Manage the task cache

### Build

- build - Build for production
- pack - Build libraries
- preview - Preview production build

### Manage Dependencies

Vite+ automatically detects and wraps the underlying package manager such as pnpm, npm, or Yarn through the `packageManager` field in `package.json` or package manager-specific lockfiles.

- add - Add packages to dependencies
- remove (`rm`, `un`, `uninstall`) - Remove packages from dependencies
- update (`up`) - Update packages to latest versions
- dedupe - Deduplicate dependencies
- outdated - Check for outdated packages
- list (`ls`) - List installed packages
- why (`explain`) - Show why a package is installed
- info (`view`, `show`) - View package information from the registry
- link (`ln`) / unlink - Manage local package links
- pm - Forward a command to the package manager

### Maintain

- upgrade - Update `vp` itself to the latest version

These commands map to their corresponding tools. For example, `vp dev --port 3000` runs Vite's dev server and works the same as Vite. `vp test` runs JavaScript tests through the bundled Vitest. The version of all tools can be checked using `vp --version`. This is useful when researching documentation, features, and bugs.

## Common Pitfalls

- **Using the package manager directly:** Do not use pnpm, npm, or Yarn directly. Vite+ can handle all package manager operations.
- **Always use Vite commands to run tools:** Don't attempt to run `vp vitest` or `vp oxlint`. They do not exist. Use `vp test` and `vp lint` instead.
- **Running scripts:** Vite+ built-in commands (`vp dev`, `vp build`, `vp test`, etc.) always run the Vite+ built-in tool, not any `package.json` script of the same name. To run a custom script that shares a name with a built-in command, use `vp run <script>`. For example, if you have a custom `dev` script that runs multiple services concurrently, run it with `vp run dev`, not `vp dev` (which always starts Vite's dev server).
- **Do not install Vitest, Oxlint, Oxfmt, or tsdown directly:** Vite+ wraps these tools. They must not be installed directly. You cannot upgrade these tools by installing their latest versions. Always use Vite+ commands.
- **Use Vite+ wrappers for one-off binaries:** Use `vp dlx` instead of package-manager-specific `dlx`/`npx` commands.
- **Import JavaScript modules from `vite-plus`:** Instead of importing from `vite` or `vitest`, all modules should be imported from the project's `vite-plus` dependency. For example, `import { defineConfig } from 'vite-plus';` or `import { expect, test, vi } from 'vite-plus/test';`. You must not install `vitest` to import test utilities.
- **Type-Aware Linting:** There is no need to install `oxlint-tsgolint`, `vp lint --type-aware` works out of the box.

## CI Integration

For GitHub Actions, consider using [`voidzero-dev/setup-vp`](https://github.com/voidzero-dev/setup-vp) to replace separate `actions/setup-node`, package-manager setup, cache, and install steps with a single action.

```yaml
- uses: voidzero-dev/setup-vp@v1
  with:
    cache: true
- run: vp check
- run: vp test
```

## Review Checklist for Agents

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to validate changes.
<!--VITE PLUS END-->

<!-- PROJECT START -->

# Portfolio Project Guide

Personal portfolio site for Rao Yuchen, deployed to GitHub Pages at https://ycrao573.github.io. Pushes to `master` trigger automatic deployment via GitHub Actions.

## Tech Stack

- **React 18** + **TypeScript** — UI framework
- **Vite+** (`vp` CLI) — build, lint, format, test toolchain
- **Tailwind CSS v4** + **shadcn/ui** (`radix-nova` style) — styling and UI primitives
- **Motion** — animations
- **React Three Fiber** + **r3f-globe** — interactive 3D world map
- **react-router-dom** — routing (single-page portfolio)
- **Cloudflare Workers API** — dynamic skills and travel data

## Directory Map

```
src/
├── main.tsx              # Entry: I18nProvider → AppRoot
├── app-root.tsx          # Router wrapper
├── pages/
│   └── home-page.tsx     # Main portfolio page (all sections)
├── components/
│   ├── header.tsx        # Flat files for single-component sections
│   ├── hero.tsx
│   ├── about-me.tsx
│   ├── skills.tsx
│   ├── footer.tsx
│   ├── download-popup.tsx
│   ├── experience/       # Multi-file folders only when needed
│   ├── projects/
│   ├── world-map/        # 3D globe (globe-canvas.tsx, utils.ts, world-map.module.css)
│   └── ui/               # shadcn primitives (Button, Card, Dialog, etc.)
├── locale/
│   ├── en.json           # English strings
│   ├── zh.json           # Chinese strings
│   └── index.tsx         # I18nProvider + useI18n() hook
├── services/
│   └── api.ts            # Cloudflare Workers API client
├── context/
│   └── index.ts          # ThemeContext (dark/light)
├── lib/
│   └── utils.ts          # cn() class-name helper
└── index.css             # Tailwind + shadcn theme tokens
```

## Conventions

- **File/folder naming:** kebab-case only (enforced by oxlint in `vite.config.ts`)
- **Imports:** use `@/` alias → `src/` (e.g. `@/components/header`)
- **i18n:** all user-facing strings go in both `src/locale/en.json` and `src/locale/zh.json`; use `const { t } = useI18n()` and `t('key')`
- **UI:** prefer shadcn components from `@/components/ui/`; use Tailwind utilities and `cn()` for conditional classes. Use CSS modules (`.module.css`) only when Tailwind is impractical — never use SCSS
- **Component files:** single-file components live as `src/components/<name>.tsx`; use a subfolder only when multiple related files are needed (e.g. `world-map/`, `projects/`)
- **shadcn:** add components via `vp dlx shadcn@latest add <component>`; config in `components.json` (style: `radix-nova`, aliases: `@/components/ui`, `@/lib/utils`)
- **3D globe:** keep Three.js logic in `world-map/globe-canvas.tsx` and `world-map/utils.ts`; lazy-load with `React.lazy`
- **Theme:** dark mode toggled via `ThemeContext` on `home-page`; wrap sections in `className={darkMode ? 'dark' : ''}`

## External API

Base URL: `https://ghpage.raoyuchenom.workers.dev`

| Endpoint | Returns | Used by |
|---|---|---|
| `GET /api/skills:new` | `Skill[]` | `skills/` section |
| `GET /api/travel/countries` | `string[]` | `world-map/` |
| `GET /api/travel/markers` | `TravelMarker[]` | `world-map/` |
| `GET /api/travel/places` | `string[]` | `world-map/` |
| `GET /api/visited` | `VisitedEntry[]` | `world-map/` |

Types are defined in `src/services/api.ts`. When changing API shapes, update types and all consuming components together.

## Common Tasks

### Add a homepage section

1. Create `src/components/<section-name>.tsx` (kebab-case flat file)
2. Add i18n keys to both `en.json` and `zh.json`
3. Import and render in `src/pages/home-page.tsx` between `<Separator />` blocks
4. Run `vp check`

### Add a shadcn component

```bash
vp dlx shadcn@latest add <component-name>
```

Component lands in `src/components/ui/`. Import from `@/components/ui/<component>`.

### Add or modify i18n strings

1. Add the same key to `src/locale/en.json` and `src/locale/zh.json`
2. Use `const { t } = useI18n()` in the component
3. Reference with `t('your.key')` — missing keys fall back to the key string

### Change skills or travel data

- **Remote data:** edit the Cloudflare Worker backing `API_BASE_URL` in `src/services/api.ts`
- **Local fallback / static data:** check section-specific files under `src/components/<section>/`

## Deployment

- **Automatic:** push to `master` → `.github/workflows/deploy.yml` runs `vp check`, `vp test`, `vp build`, deploys `dist/` to GitHub Pages
- **Manual:** `vp run deploy` (runs `vp build` then `gh-pages -d dist`)

## Agent Skills

Three focused skills from [skills.sh](https://www.skills.sh/) live in [`.cursor/skills/`](.cursor/skills/):

| Skill | Source | Use when |
|---|---|---|
| `tailwind-design-system` | wshobson/agents | Tailwind v4 tokens, theming, component variants |
| `shadcn` | shadcn/ui | Adding/customizing shadcn/ui components |
| `git-workflow` | agno-agi/agno | Commits, branches, PRs (Conventional Commits) |

React, TypeScript, and Vite+ conventions are in `.cursor/rules/` and this file — avoid installing more skills unless needed.

```bash
npx skills add <owner/repo> --skill <skill-name> --agent cursor --copy -y
cp -r .agents/skills/<name> .cursor/skills/
```

<!-- PROJECT END-->
