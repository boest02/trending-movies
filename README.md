# trending-movies

A React + TypeScript movie discovery app that displays trending films, shows detailed movie pages, and lets users mark favorites — with persistence and smooth, lazy-loaded browsing.

## ✨ What It Does

- Fetches trending movie data from The Movie Database (TMDB) via their API.  
- Displays a scrollable list of trending movies, with poster, title, and release date.  
- Lets users click a movie to view a detailed page.  
- Allows marking/unmarking movies as favorites, stored locally so favorites persist across browser sessions.  
- Caches fetched data to avoid redundant network calls and improve performance.  
- Lazy-loads movie posters to optimize loading for long lists or slower connections.  
- Handles loading and error states gracefully to improve user experience.

## 📦 What’s Included

- Source code in `/src`, including React + TypeScript components, custom hooks, and API layer.  
- vanilla css in the `/src/css` folder for each page/component.  
- Local storage logic for favorites.  
- Routing and navigation via react-router.  
- Fetching and caching via TanStack Query.  

## 🚀 Getting Started / Installation

```bash
git clone https://github.com/boest02/trending-movies.git
cd trending-movies
npm install    # or yarn install
```

## 🗂️ Project Structure

```bash
/src
  /api        # API helper functions
  /components # React components
  /pages      # Page-level components (Home, Movie)
  /styles     # Global styles or CSS modules
  App.tsx
  main.tsx
.env          # For API keys
README.md
package.json
```


