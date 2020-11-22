import React, { useContext } from "react";
import styled from "styled-components";
import MarkdownReader from "../components/MarkdownEditor/MarkdownReader";

import { Context } from "../context/context";

const DetailBlog = props => {
  const id = props.match.params.id;
  const context = useContext(Context);

  return (
    <DetailBlogComponent>
      <div className="detail-blog">
        {context.blog.all_blog.length === 0 ? (
          <p>Not Found!</p>
        ) : (
          context.blog.all_blog
            .filter(blog => blog.id === id)
            .map(data => {
              return (
                <MarkdownReader
                  key={data.id}
                  banner={data.image}
                  value={data.content}
                  judul={data.judul}
                  date={data.date}
                />
              );
            })
        )}
      </div>
    </DetailBlogComponent>
  );
};

const DetailBlogComponent = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eee;
  display: flex;
  padding: 10px;
  color: #222831;
  display: flex;
  justify-content: center;

  .detail-blog {
    width: 800px;
  }
`;

export default DetailBlog;
