import React, { useEffect, useState } from "react";
import BlogContext from "./blogContext";
import axios from "axios";

const BlogState = (props) => {
  const [blogData, setBlogData] = useState([]);
  const [blogModal, setBlogModal] = useState(false);
  const [blogModalData, setBlogModalData] = useState(null);
  const [searchRequest, setSearchRequest] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10"
        );
        setBlogData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const fetchBlogDetails = async (slug) => {
    try {
      // debugger;
      const response = await axios.get(
        `https://api.theinnerhour.com/v1/blogdetail/${slug}`
      );
      console.log(response.data.blog.body);
      setBlogModalData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const blogModalHandler = (slug) => {
    setBlogModal((prevModal) => !prevModal);
    if (blogModal) {
      setBlogModalData(null);
    } else {
      fetchBlogDetails(slug);
    }
  };

  const searchBlogHandler = (searchRequest) => {
    setSearchRequest(searchRequest);
  };
  const getItemsByTitle = () => {
    const searchWords = searchRequest.trim().toLowerCase().split(/\s+/);
    return blogData.filter((item) => {
      const itemTitle = item.title.toLowerCase();
      return searchWords.every((word) => itemTitle.includes(word));
    });
  };

  const searchBlog = getItemsByTitle();
  console.log(searchBlog);
  return (
    <BlogContext.Provider
      value={{
        blogData,
        blogModalData,
        blogModal,
        fetchBlogDetails,
        blogModalHandler,
        searchRequest,
        setSearchRequest,
        searchBlogHandler,
        searchBlog,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
