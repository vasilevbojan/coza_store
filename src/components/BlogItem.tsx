import React from "react";
import { BlogsType } from "./types";

const BlogItem: React.FC<BlogsType> = ({
  id,
  author,
  date,
  category,
  excerpt,
  img,
  title,
  first_content,
}) => {
  return (
    <a className="p-b-63 d-block" href={`/blogs/${id}`}>
      <span className="hov-img0 how-pos5-parent">
        <img src={img} alt="IMG-BLOG" />
      </span>

      <div className="p-t-32">
        <h4 className="p-b-15">
          <span className="ltext-108 cl2 hov-cl1 trans-04">{title}</span>
        </h4>

        <p className="stext-117 cl6">{excerpt}</p>

        <div className="flex-w flex-sb-m p-t-18">
          <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
            <span>
              <span className="cl4">By</span> {author}
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>

            <span>{category}</span>
          </span>

          <span className="stext-101 cl2 trans-04 m-tb-10">
            Continue Reading
            <i className="fa fa-long-arrow-right m-l-9"></i>
          </span>
        </div>
      </div>
    </a>
  );
};

export default BlogItem;
