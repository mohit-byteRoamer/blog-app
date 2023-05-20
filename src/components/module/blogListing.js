import React from "react";
import BlogContext from "../../contexts/blogContext/blogContext";
import BlogListCard from "../widgets/blog-card-modal/blogListCard";
import Input from "../widgets/input";
import Loding from "../../assets/gif/loding.gif";
import "./index.css";
const BlogListing = ({}) => {
  const blogContext = React.useContext(BlogContext);
  const {
    blogData,
    blogModalHandler,
    searchRequest,
    searchBlogHandler,
    searchBlog,
    loding,
    blogModal,
  } = blogContext;
  return (
    <div className="blogListContainer">
      {!blogModal && loding ? (
        <img className="lodingGif" src={Loding} alt="Loading" />
      ) : (
        <>
          <div
            className={
              searchRequest == 0 ? "blogListHeader" : "searchAbleHeader"
            }
          >
            {searchRequest.length == 0 && (
              <div className="AllArticlesText">All articles</div>
            )}
            <div className="inputBox">
              <Input state={searchRequest} onChange={searchBlogHandler} />
            </div>
          </div>
          <div className={searchRequest && "blogListHeader"}>
            {searchRequest && (
              <div className="AllArticlesText">Search result</div>
            )}
          </div>
          <div className="content">
            {searchBlog.length == 0
              ? blogData.map((val, key) => {
                  return (
                    <BlogListCard
                      key={key}
                      onClick={() => blogModalHandler(val.slug)}
                      image={val.thumb}
                      title={val.title}
                      description={val.short_description}
                    />
                  );
                })
              : searchBlog.map((val, key) => {
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
        </>
      )}
    </div>
  );
};

export default BlogListing;
