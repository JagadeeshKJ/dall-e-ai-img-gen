import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { openai } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-[#E7717D] sm:px-8 px-4 py-4 border-b border-b-[#E7717D]">
        <Link to="/">
          <img src={openai} alt="logo" className="h-10 w-10 object-cover" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#f3f3f3] text-[#E7717D] px-4 py-2 rounded-md"
        >
          Create Post
        </Link>
      </header>

      {/* Body UI */}
      <main className="sm:px-8 px-4 py-8 w-full bg-[#EFEFEF] min-h-[calc(100vh-4.563rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
