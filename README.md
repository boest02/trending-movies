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


## 🗂️ Project Structure

```bash
├── README.md
├── src
│   ├── api                           # API helper functions
│   ├── components                    # React components
│   ├── css                           # Global styles or CSS modules
│   ├── hooks                         # Custom react hooks 
│   ├── pages                         # Page-level components (React Router)
│   └── tests                         # all tests
│       ├── components                # component tests
│       ├── mocks                     # mock data
│       └── pages                     # page tests

```

## 🚀 Getting Started / Installation

Cloning the repo from github [Github Link](https://github.com/boest02/trending-movies)

```bash
git clone https://github.com/boest02/trending-movies.git
```

Should clone to the folder listed below

```bash
cd trending-movies
```

Inside that folder you can run 

```bash
npm install    # note: I'm using node 24.11.1
```

There is a sample .env file (.env.sample) that can be copied and the API key can be added there  

```bash
cp .env.sample .env  # copy sample to .env to configure
# add your API key to the  VITE_TMDB_API_KEY variable
```

Start the dev server:

```bash
npm run dev
# or
# yarn dev
```

Open your browser at the port Vite reports (usually http://localhost:5173).

## 🛣️ Roadmap

Possible improvements with more time:

- Add pagination... (page support in API)
  - can get # of pages from API, so could list page #'s and next page navigation
  - or could use infinite scrolling to load each new page as the user scrolls
- Add a search bar for filtering movies by title, or more
- Display additional metadata:
  - genres
  - cast
  - etc
- Add dark and light theme support

## 🧾 Notes

Environment variables must start with VITE_ to be exposed to the client by Vite (for example VITE_TMDB_API_KEY).

Do not commit your .env file. It is currently added to .gitignore.





