# Bolt Landing Page

A modern landing page built with Next.js, featuring a sleek UI powered by Radix UI components and Firebase integration.

## 🚀 Technologies

- [Next.js](https://nextjs.org/) - React framework for production
- [Firebase](https://firebase.google.com/) - Backend and hosting platform
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- TypeScript - For type safety and better developer experience

## 📦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase CLI (for deployment)

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd bolt-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs the linter
- `npm run analyze` - Analyzes the bundle size

## 📁 Project Structure

```
project/
├── app/           # Next.js app directory
├── components/    # React components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
├── public/        # Static assets
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

## 🔥 Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)

2. Copy the Firebase configuration
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the web app icon (</>)
   - Register your app and copy the configuration object

3. Set up Firebase configuration
   ```bash
   # Copy the example configuration file
   cp src/firebase/firebaseConfig.example.js src/firebase/firebaseConfig.js
   ```
   
   Then edit `src/firebase/firebaseConfig.js` and replace the placeholder values with your Firebase project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key-here",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id",
     measurementId: "your-measurement-id"
   };
   ```

4. Install and initialize Firebase CLI (for deployment)
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   ```

## 🔥 Firebase Setup

1. Create a new Firebase project
2. Configure your Firebase credentials
3. Enable required Firebase services (Hosting, etc.)
4. Deploy using Firebase CLI:
```bash
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
