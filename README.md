# RandomKeygen

**RandomKeygen** is a free, modern, and open-source secure password and cryptographic key generator toolkit. It runs entirely on the client-side in the browser, ensuring your secrets are generated safely and are never sent over the network.

Built with **Next.js (App Router)** and styled using modern, sleek design patterns, it serves as a lightweight alternative to online keygen tools with premium UX improvements, support for dark/light themes, and keyboard shortcuts.

---

## 🚀 Key Features

- **🔒 Client-Side Generation**: Cryptographically secure keys are generated directly in your browser using local Web Cryptography APIs.
- **⚡ Keyboard Shortcuts**: Press `R` or `r` to regenerate all keys across the dashboard instantly.
- **🎨 Premium Visual Design**: Responsive layout centered to the middle (896px max-width) matching modern aesthetics, with smooth transitions, theme toggling, and clean micro-interactions.
- **📋 Single-Click Copying**: Copy any key instantly with temporary tooltips and success indicators.
- **🔧 Multi-Category Generator Support**:
  - **Passwords**: Memorable passphrases, Strong (16-char), Fort Knox (32-char), Alphanumeric, Master, and Bulk password generators.
  - **Developer Tools**: UUID v4, Stripe-style API Keys, JWT Secrets, 128-bit/256-bit Hex, MongoDB ObjectIds, and test Credit Cards.
  - **Frameworks**: Secure secrets for Django, Laravel, Flask, and WordPress salts.
  - **Encryption**: SSH Keys, PGP/GPG Keys, WireGuard Keys, VAPID Keys, AES, RSA, HMAC keys, and Cryptographic Salts.
- **📖 Developer Documentation**: Built-in developer guides, best practices, and integration examples (Express, Flask, and environment files) for all API keys and JWT claims.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS variables
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fi`)
- **Package Manager / Runtime**: [Bun](https://bun.sh/) (or Node.js + npm)

---

## 💻 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

Ensure you have [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rahmatez/random-keygen.git
   cd random-keygen
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

### Running the Development Server

Start the local server:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To compile a highly optimized production build:
   ```bash
   bun run build
   bun start
   # or
   npm run build
   npm run start
   ```

---

## 🔒 Security & Privacy

This application is designed with a **privacy-first** approach:
- All key generation logic utilizes the standard Web Crypto API (`window.crypto.getRandomValues`) where available.
- No network requests are made when generating passwords or keys.
- **Zero data** is stored, logged, or sent to external servers.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
