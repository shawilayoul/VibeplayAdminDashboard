# 🎧 VibePlay – Admin Dashboard

VibePlay is a modern music streaming app available on the Google Play Store.  
This repository contains the **admin dashboard**, a React-based web application that allows administrators to manage content, artists, tracks, playlists, and users.

---

## 🚀 Overview

The **admin dashboard** was built to support and manage the VibePlay mobile app developed in **React Native**. It enables seamless content management while ensuring performance and usability for admins and moderators.

---

## 📱 VibePlay Mobile App

🛒 **Available on Google Play Store**: [VibePlay](https://play.google.com/store/apps/details?id=com.fjuchristianvibes&hl=en_US)  
🧠 Built with: **React Native** + **TypeScript**  
🎵 Features: music playback, playlists, artist profiles, live streaming

---

## 🛠️ Technologies Used (Admin Dashboard)

- **React**
- **TypeScript**
- **Tailwind CSS** – for clean, responsive UI
- **React Router** – for routing and navigation
- **Axios** – for REST API communication
- **JWT 

---

## 🎯 Key Features

- ✅ Add/edit/delete songs, playlists, and artists  
- 📁 Upload and manage audio files and images (via Firebase)    
- 🔒 Secured access for admins only  

---

## 🧱 Backend Overview

The backend powers both the mobile app and dashboard:

- **NestJS** for scalable and structured backend architecture  
- **MongoDB** for flexible data modeling  
- **Prisma** as ORM  
- **Firebase** for media storage and live streaming support  
- **Hosted on Render**

---

## 📂 Project Structure (Admin Dashboard)

src/
├── components/        # UI components (tables, forms, modals, etc.)
├── pages/             # Dashboard pages (e.g., Artists, Songs, Users)
├── services/          # API service handlers
├── hooks/             # Custom hooks
├── assets/            # Images, icons, etc.
└── App.tsx            # Main app entry

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
