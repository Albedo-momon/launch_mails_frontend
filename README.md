# LaunchMails Frontend

A modern, responsive frontend application for LaunchMails - a simple email API service for product launches and transactional emails.

## 🚀 Features

- **Authentication**: Google sign-in integration using Clerk
- **Dashboard**: Domain setup, API integration, and email logs management
- **API Documentation**: Comprehensive API docs with interactive examples
- **Coming Soon**: Feature preview page for upcoming functionality
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Built with Shadcn/UI components for a professional look

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Authentication**: Clerk
- **Routing**: React Router
- **State Management**: TanStack Query
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd launch_mails
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   - Copy `.env.example` to `.env`
   - Add your Clerk publishable key:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   VITE_API_BASE_URL=http://localhost:4000/api
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
launch_mails/
├── public/                 # Static assets
│   ├── logo.svg           # Application logo
│   ├── favicon.ico        # Favicon
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   ├── DomainSetup.tsx
│   │   ├── APIIntegration.tsx
│   │   └── Logs.tsx
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Landing page
│   │   ├── Dashboard.tsx # Main dashboard
│   │   ├── ApiDocs.tsx   # API documentation
│   │   ├── ComingSoon.tsx
│   │   └── NotFound.tsx
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Application entry point
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🔐 Authentication

This application uses [Clerk](https://clerk.com) for authentication with Google OAuth integration.

### Setup Clerk Authentication

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Configure Google OAuth provider
4. Copy your publishable key to `.env` file
5. See `CLERK_SETUP.md` for detailed setup instructions

### Development Mode

For development purposes, you can enable `DEV_MODE` in the following files:

- `src/App.tsx`
- `src/components/Header.tsx`
- `src/pages/Index.tsx`

Set `DEV_MODE = true` to bypass Clerk authentication during development.

## 🎨 UI Components

The application uses [Shadcn/UI](https://ui.shadcn.com) components for a consistent and modern design:

- **Button**: Various button styles and sizes
- **Card**: Content containers with shadows
- **Input**: Form input fields
- **Badge**: Status indicators
- **Label**: Form labels

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔗 API Integration

The frontend communicates with the LaunchMails backend API:

- **Base URL**: `http://localhost:4000/api`
- **Endpoints**:
  - `POST /send-email` - Send transactional emails
  - `POST /verify-domain` - Verify domain ownership
  - `GET /logs` - Retrieve email logs

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure environment variables in Netlify dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/launch_mails/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔄 Version History

- **v1.0.0** - Initial release with core features
  - Authentication with Clerk
  - Dashboard with domain setup and API integration
  - API documentation
  - Coming soon page
  - Responsive design

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
