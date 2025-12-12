# LinkedIn Clone - AI Coding Agent Guide

## Project Overview

React + TypeScript + Vite app cloning LinkedIn functionality. Uses Redux Toolkit for state management, React Bootstrap for UI, and connects to Striveschool API for backend services.

## Architecture & State Management

### Redux Store Pattern (Critical)

- **ALL state management uses Redux Toolkit** - never use local state for API data
- Store is configured in `src/store/index.ts` with typed hooks (`useAppDispatch`, `useAppSelector`)
- State loaded globally in `App.tsx` on mount: `dispatch(fetchCurrentUser())`
- **Italian documentation exists in `src/store/`** - refer to `GUIDA_REDUX_SEMPLICE.md` and `COME_AGGIUNGERE_FEATURES.md` for team conventions

### Slice Architecture Pattern

Each feature follows this exact structure:

```typescript
// 1. Define TypeScript interface in src/types/*.ts
// 2. Create slice in src/store/*Slice.ts with:
//    - State interface with data/loading/error
//    - createAsyncThunk for API calls
//    - extraReducers for pending/fulfilled/rejected states
// 3. Add API functions in src/api/*.ts using httpClient
// 4. Register reducer in store/index.ts
```

**Example**: `experienceSlice.ts` shows complete CRUD pattern with thunks for fetch/create/update/delete/updateImage.

## API Integration

### Authentication & Configuration

- **Bearer token system** in `src/config/constants.ts` - team members switch `ACTIVE_TOKEN` by name
- All API calls use shared `httpClient` helper from `profileApi.ts` that auto-injects token
- Base URL: `https://striveschool-api.herokuapp.com/api`

### API Client Pattern

```typescript
// Use httpClient for JSON requests (GET/POST/PUT/DELETE)
export const fetchData = async (): Promise<Type> => {
  return httpClient("/endpoint");
};

// Use raw fetch for FormData (file uploads)
const formData = new FormData();
formData.append("experience", file);
await fetch(url, {
  method: "POST",
  headers: { Authorization },
  body: formData,
});
```

## Component Organization

### Page Structure Convention

- Pages in `components/[feature]/[Feature]Page.tsx`
- Bootstrap Container/Row/Col layout with 9-3 column split (content-sidebar)
- Shared `<TopNavbar />` rendered in App.tsx, `<Footer />` in individual pages

### Component Composition

- Feature components grouped by domain (profile/, homepage/, editprofile/, layout/)
- Each feature has multiple sub-components (e.g., ProfileHeaderCard, ProfileExperiences, ProfileSidebar)
- Layout components (Navbar, Footer) are shared across all pages

## Routing

React Router v7 with routes defined in `App.tsx`:

- `/` - Homepage
- `/profile` - ProfilePage
- `/edit-profile` - EditProfilePage

## Development Workflow

### Essential Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript compile + production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

### Tech Stack

- **Build**: Vite with SWC plugin for fast refresh
- **UI**: React Bootstrap (imported globally) + Bootstrap Icons + React Icons
- **State**: Redux Toolkit with React-Redux
- **Types**: TypeScript strict mode, separate type definitions per feature

## Key Conventions

1. **Never create local state for API data** - use Redux slices
2. **TypeScript interfaces must match API response** - check existing types in `src/types/`
3. **All API calls go through thunks** - dispatch from components, handle loading/error states
4. **Component pattern**: useEffect → dispatch thunk → useAppSelector for state → render
5. **File naming**: PascalCase for components, camelCase for utilities, lowercase for types
6. **Import order**: React → Third-party → Store/API → Components → Types → Styles

## Team Context

Collaborative student project (Epicode BuildWeek 3). Code includes Italian comments and documentation for non-English speakers. Multiple team members share codebase via token-switching system.
