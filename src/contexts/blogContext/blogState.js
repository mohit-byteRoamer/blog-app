import React, { Children } from "react";
import BlogContext from "./blogContext";
import axios from "axios";

const BlogState = (props) => {
  const [blogData, setBlogData] = useState([]);

  React.useEffect(() => {
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
  return (
    <BlogContext.Provider value={{ blogData }}>
      {props.Children}
    </BlogContext.Provider>
  );
};

export default BlogState;
