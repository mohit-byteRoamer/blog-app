import React from "react";
import CloseIcon from "../../assets/icon/close.png";
import BlogContext from "../../contexts/blogContext/blogContext";
const BlogListModal = ({}) => {
  const blogContext = React.useContext(BlogContext);
  let { blogModalData, blogModalHandler } = blogContext;
  setTimeout(() => {
    setNote("");
  }, 2000);
  const [note, setNote] = React.useState(
    "Please note that a vertical scrollbar is available within the details section to view more content."
  );
  return (
    <div className="modal-overlay-blog-card">
      <div className="modal-content">
        <div onClick={blogModalHandler} className="closeModalBox">
          <img className="icon" src={CloseIcon} />
        </div>
        <img
          src={blogModalData?.blog.cover}
          alt="Blog Thumbnail"
          className="blog-Modal__image"
        />
        {blogModalData && note && (
          <div className="noticeBox">
            Please note that a vertical scrollbar is available within the
            details section to view more content.
          </div>
        )}
        <div className="modal_textContent scrollable-content">
          <div
            dangerouslySetInnerHTML={{ __html: blogModalData?.blog?.body }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogListModal;
