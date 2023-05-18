import React from "react";
import BlogContext from "../../contexts/blogContext/blogContext";
import BlogListCard from "../widgets/blogListCard";
const BlogListing = ({}) => {
  const blogContext = React.useContext(BlogContext);
  const { blogData } = blogContext;

  return (
    <>
      {blogData.map((val, key) => {
        return <BlogListCard key={key} />;
      })}
    </>
  );
};

export default BlogListing;
