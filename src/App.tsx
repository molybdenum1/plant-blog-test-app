import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import SearchBar from "./components/SearchBar";

import postsData from "./data/posts";
import { useState } from "react";

import "./App.css";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [searchBar, setSearchBar] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    if (searchValue === "") {
      setPosts(postsData);
      setSearchBar("");
      return;
    } else {
      setSearchBar(() => searchValue);
      const searchWords = searchValue
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);

      let filteredPosts;
      if (searchWords.length === 1) {
        filteredPosts = postsData.filter(
          (post) =>
            post.title.toLowerCase().includes(searchWords[0]) ||
            post.text.toLowerCase().includes(searchWords[0])
        );
      } else {
        filteredPosts = postsData.filter((post) =>
          searchWords.every(
            (word) =>
              post.title.toLowerCase().includes(word) ||
              post.text.toLowerCase().includes(word)
          )
        );
      }
      setPosts(filteredPosts);
    }
  };

  return (
    <div className="main">
      <Navbar />
      <Breadcrumbs />
      <SearchBar searchBar={searchBar} onSearchChange={handleSearchChange} />
      <Hero />
      <div className="posts-section">
        <hr />
        <div className="posts-list-header">Top of the day</div>
        <div className="top-posts">
          <div className="top-post">
            <div className="top-post-img">
              <img width={521} height={364} src='https://www.vintagetreecare.com/wp-content/uploads/2023/06/planting-tree.jpg' alt='top-post' />
            </div>
            <div className="top-post-meta">
              <span className="post-date">2025-09-01 </span>
              <span className="post-read-time">5 min read</span>
            </div>
            <div className="top-post-content">
              <h2 className="top-post-title">Top Post Title</h2>
              <div className="top-post-excerpt">This is a brief excerpt from the top post.</div>
            </div>
          </div>
           <div className="top-post">
            <div className="top-post-img">
              <img width={521} height={364} src='https://www.vintagetreecare.com/wp-content/uploads/2023/06/planting-tree.jpg' alt='top-post' />
            </div>
            <div className="top-post-meta">
              <span className="top-post-date">2025-09-01 </span>
              <span className="top-post-read-time">5 min read</span>
            </div>
            <div className="top-post-content">
              <h2 className="top-post-title">Top Post Title</h2>
              <div className="top-post-excerpt">This is a brief excerpt from the top post.</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="posts-list-header">Interesting</div>
        <div className="posts-list">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
