import React from "react";
import { BlogsType } from "./types";

interface Props {
  relatedBlogs: BlogsType[];
}

const RelatedBlogs: React.FC<Props> = ({ relatedBlogs }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>
      <ul>
      {relatedBlogs.map((blog) => (
          <li className="mb-4" key={blog.id}>
            <a className="wrao-pic-w" href={`/blog/${blog.id}`}>
              <img
                src={blog.img}
                alt="PRODUCT"
                className="img-fluid"
              />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">{blog.title}</div>
              </div>
            </a>
          </li>
      ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
