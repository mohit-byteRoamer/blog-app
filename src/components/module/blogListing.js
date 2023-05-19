import React from "react";
import BlogContext from "../../contexts/blogContext/blogContext";
import BlogListCard from "../widgets/blogListCard";
import "./index.css";
const BlogListing = ({}) => {
  const blogContext = React.useContext(BlogContext);
  const { blogData, blogModalHandler } = blogContext;
  return (
    <div className="blogListContainer">
      {blogData.map((val, key) => {
        return (
          <BlogListCard
            key={key}
            onClick={() => blogModalHandler(val.slug)}
            image={val.thumb}
            title={val.title}
            description={val.short_description}
          />
        );
      })}
    </div>
  );
};

export default BlogListing;
