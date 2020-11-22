import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";

import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor";
import MarkdownReader from "../components/MarkdownEditor/MarkdownReader";

const CreateBlog = props => {
  const [image, setImage] = useState("");
  const [judul, setJudul] = useState("");
  const [content, setContent] = useState("");

  const context = useContext(Context);

  const changeImage = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage("");
    }
  };

  const handleAddNewBlog = () => {
    const data = {
      id: uuidv4(),
      judul,
      content,
      image,
      date: new Date().toISOString().split("T")[0],
    };
    if (image === "" || judul === "" || content === "") {
      window.alert("Harap isi semua!");
    } else {
      context.addNewBlog(data);
      props.history.push("/");
    }
  };

  console.log(context.blog);

  return (
    <CreateBlogComponent>
      <div className="blog-editor">
        <button className="back-btn" onClick={() => props.history.goBack()}>
          Back To Home
        </button>
        <div className="header">
          <h2>Create Blog</h2>
        </div>
        <div className="input-top">
          <div className="input-image">
            <label>Banner</label>
            {image === "" ? (
              <div className="image">X</div>
            ) : (
              <img
                className="image"
                src={image ? URL.createObjectURL(image) : ""}
                alt="banner"
              />
            )}
            <input type="file" onChange={changeImage} />
          </div>
          <div className="input-text">
            <div className="judul">
              <label>Judul</label>
              <br />
              <input
                placeholder="Judul"
                value={judul}
                onChange={e => setJudul(e.target.value)}
              />
            </div>
            <div className="content">
              <label>Content (Markdown format)</label>
              <br />
              <MarkdownEditor
                value={content}
                judul={judul}
                onChange={e => setContent(e.target.value)}
              />
            </div>
            <div className="action">
              <button onClick={handleAddNewBlog}>Add New Blog</button>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-reader">
        <div className="header">
          <h2>Live Preview</h2>
        </div>
        <div className="markdown-live">
          <MarkdownReader value={content} judul={judul} banner={image} />
        </div>
      </div>
    </CreateBlogComponent>
  );
};

const CreateBlogComponent = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eee;
  display: flex;
  padding: 10px;
  color: #222831;

  .blog-editor {
    flex: 1;
    margin-right: 10px;
  }
  .blog-reader {
    flex: 1;
  }
  .back-btn {
    padding: 10px;
    background: #393e46;
    border: transparent;
    outline: none;
    color: #ffd369;
    border-radius: 4px;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .input-top {
    margin: 20px 0;
    display: flex;
  }
  .input-text {
    flex: 1;
  }
  .input-text input {
    width: 100%;
    padding: 5px;
    margin: 5px 0;
  }
  .input-image {
    margin-right: 10px;
    flex: 0.5;
  }

  .image {
    width: 100%;
    height: 150px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    object-fit: cover;
  }

  .action {
    margin: 10px 0;
  }
  .action button {
    width: 100%;
    background: #393e46;
    border: transparent;
    outline: none;
    color: #ffd369;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
  }

  // Markdown
  .markdown-live {
    border: 1px solid #393e46;
    height: 90vh;
    margin-top: 5px;
    background: white;
    padding: 10px;
    overflow-y: scroll;
  }
`;

export default CreateBlog;
