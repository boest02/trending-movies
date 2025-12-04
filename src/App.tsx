import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Movie from "./pages/Movie.tsx";

import "/src/css/app.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </>
  );
};

export default App;
