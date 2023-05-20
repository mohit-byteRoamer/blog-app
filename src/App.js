import React from "react";
import "./App.css";
import BlogListing from "./components/module/blogListing";
import BlogListModal from "./components/widgets/blog-card-modal/blogListModal.js";
import BlogContext from "./contexts/blogContext/blogContext.js";
import Header from "./components/widgets/header/header";
function App() {
  const blogContext = React.useContext(BlogContext);
  let { blogModal } = blogContext;
  return (
    <div className="App">
      <Header />
      <div className="appContent">
        <BlogListing />
        {blogModal && <BlogListModal />}
      </div>
    </div>
  );
}

export default App;
