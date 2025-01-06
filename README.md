# Zippopotam

A simple web application that allows users to search for a location by entering a zip code.

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- Bun runtime engine

If Bun is not installed, you can install it using:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

Install the dependencies by running:

```bash
bun install
```

### Development

Start the development server with:

```bash
bun dev
```

The app will be available at `http://localhost:3000`


## Caveats & Shortcuts

- [ ] Form inputs resetafter submission in Next.js 15 when using server actions [#72949]((https://github.com/vercel/next.js/issues/72949))
- [ ] The `LocationSearchResult` could render a map with the location coordinates
