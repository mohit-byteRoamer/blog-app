import React from "react";

const blogListCard = ({ image, title, description }) => {
  const Image = "https:" + image;
  return (
    <div className="blog-card">
      <img src={Image} alt="Blog Thumbnail" className="blog-card__image" />
      <h2 className="blog-card__title">{title}</h2>
      <p className="blog-card__description">{description}</p>
    </div>
  );
};

export default blogListCard;
