import React from "react";
import BlogContext from "../../contexts/blogContext/blogContext";
import BlogListCard from "../widgets/blogListCard";
const BlogListing = ({}) => {
  const blogContext = React.useContext(BlogContext);
  const { blogData } = blogContext;
  console.log("BLOGDATa =>> ", blogData);
  return (
    <>
      {blogData.map((val, key) => {
        return (
          <BlogListCard
            key={key}
            image={val.thumb}
            title={val.title}
            description={val.short_description}
          />
        );
      })}
      <div> KJFJFKSJDNKSJDFnsJDF</div>
    </>
  );
};

export default BlogListing;
