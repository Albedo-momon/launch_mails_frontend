# Clerk Authentication Setup

## Current Status

The application is currently running in **Development Mode** which bypasses Clerk authentication for easier testing and development.

## To Enable Clerk Authentication

### 1. Get Clerk API Keys

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or use an existing one
3. Go to "API Keys" section
4. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Add your Clerk publishable key to `.env`:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-actual-key-here
   ```

### 3. Enable Production Mode

1. Open `src/App.tsx`
2. Change `DEV_MODE` from `true` to `false`:

   ```typescript
   const DEV_MODE = false; // Change this to false
   ```

3. Open `src/components/Header.tsx`
4. Change `DEV_MODE` from `true` to `false`:

   ```typescript
   const DEV_MODE = false; // Change this to false
   ```

5. Open `src/pages/Index.tsx`
6. Change `DEV_MODE` from `true` to `false`:
   ```typescript
   const DEV_MODE = false; // Change this to false
   ```

### 4. Configure Clerk Application

1. In your Clerk Dashboard, go to "User & Authentication" → "Social Connections"
2. Enable **Google** as a sign-in provider
3. Configure your Google OAuth credentials
4. Set up your application URLs:
   - **Sign-in URL**: `http://localhost:8080/sign-in`
   - **Sign-up URL**: `http://localhost:8080/sign-up`
   - **After sign-in URL**: `http://localhost:8080/dashboard`
   - **After sign-up URL**: `http://localhost:8080/dashboard`

### 5. Restart the Application

```bash
npm run dev
```

## Development Mode Features

When `DEV_MODE = true`:

- ✅ No authentication required
- ✅ Dashboard is accessible without login
- ✅ Mock user is shown in header
- ✅ All routes work without Clerk setup
- ❌ No real authentication
- ❌ No Google sign-in

## Production Mode Features

When `DEV_MODE = false`:

- ✅ Real Clerk authentication
- ✅ Google sign-in enabled
- ✅ Protected dashboard route
- ✅ Real user data in header
- ❌ Requires valid Clerk API key
- ❌ Requires proper environment setup

## Troubleshooting

### "Invalid publishable key" Error

- Make sure you've set `VITE_CLERK_PUBLISHABLE_KEY` in your `.env` file
- Ensure the key starts with `pk_test_` or `pk_live_`
- Restart the development server after adding the environment variable

### Google Sign-in Not Working

- Check that Google is enabled in Clerk Dashboard
- Verify your Google OAuth credentials are correct
- Ensure your application URLs are properly configured

### White Screen After Enabling Clerk

- Check browser console for errors
- Verify your Clerk publishable key is correct
- Make sure all `DEV_MODE` flags are set to `false`
