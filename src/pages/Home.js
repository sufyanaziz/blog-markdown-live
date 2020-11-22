import React, { useContext } from "react";
import { Context } from "../context/context";

import { Link } from "react-router-dom";
import styled from "styled-components";
import MarkdownReader from "../components/MarkdownEditor/MarkdownReader";
import remark from "remark";
import strip from "strip-markdown";

const Home = () => {
  const context = useContext(Context);

  const { blog } = context;
  console.log(context);

  const filterValue = value => {
    let newValue;
    remark()
      .use(strip)
      .process(value, function (err, file) {
        if (err) throw err;
        newValue = String(file);
      });
    if (newValue.length < 100) {
      return newValue;
    } else {
      return newValue.slice(0, 100) + "...";
    }
  };

  return (
    <HomeComponent>
      <div className="header">
        <h1>Welcome to my blog</h1>
      </div>
      <div className="btn-create">
        <Link to="/create-blog">Create New Blog</Link>
      </div>
      <div className="container-blog">
        {blog.all_blog.length === 0 ? (
          <p>Theres nothing blog</p>
        ) : (
          blog.all_blog.map(data => {
            return (
              <Link
                key={data.id}
                style={{ color: "#222831", textDecoration: "none" }}
                to={`/blog/${data.id}`}
              >
                <CardBlog>
                  <div className="card-image">
                    <img src={URL.createObjectURL(data.image)} />
                  </div>
                  <div className="card-content">
                    <p className="judul">{data.judul}</p>
                    <MarkdownReader value={filterValue(data.content)} />
                    <p className="date">{data.date}</p>
                  </div>
                </CardBlog>
              </Link>
            );
          })
        )}
      </div>
    </HomeComponent>
  );
};

const HomeComponent = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eee;
  display: flex;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  color: #222831;

  .header {
    margin: 2rem 0;
  }
  .header h1 {
    color: #222831;
    text-transform: capitalize;
    border-bottom: 1px solid #222831;
    cursor: pointer;
  }

  .btn-create {
    margin-bottom: 2rem;
  }
  .btn-create a {
    padding: 10px;
    background: #393e46;
    border: transparent;
    outline: none;
    color: #ffd369;
    border-radius: 4px;
    text-decoration: none;
  }

  .container-blog {
    background: #eeeeee;
    width: 500px;
    heigh: auto;
  }
`;

const CardBlog = styled.div`
  height: auto;
  width: 100%;
  background: white;
  display: flex;
  margin-bottom: 10px;
  .card-image {
    flex: 0.5;
    height: auto;
    width: 100%;
    margin-right: 10px;
  }
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-content {
    flex: 1;
    padding: 5px;
  }
  .card-content .judul {
    margin-top: 10px;
    margin-bottom: -1.3rem;
    font-size: 20px;
    font-weight: bold;
  }
  .card-content .date {
    margin-top: 16px;
    font-size: 14px;
    color: gray;
  }
`;

export default Home;
