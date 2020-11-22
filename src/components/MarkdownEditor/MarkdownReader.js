import React from "react";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import styled from "styled-components";

const MarkdownReader = ({ value, banner, judul, date }) => {
  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={tomorrow}
          language={language}
          children={value ? value : ""}
        />
      );
    },
  };

  return (
    <MarkDownComponent>
      <div className="header">
        <p>{judul}</p>
        {date && <small>Created at: {date}</small>}
      </div>
      <div className="banner-image">
        {banner && <img src={URL.createObjectURL(banner)} />}
      </div>
      <Markdown
        plugins={[gfm]}
        children={value}
        renderers={renderers}
        escapeHtml={false}
      />
    </MarkDownComponent>
  );
};

const MarkDownComponent = styled.div`
  h1,
  h2 {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    margin-bottom: 8px;
  }
  .header {
    margin-bottom: 10px;
  }
  .header p {
    font-size: 2rem;
    font-weight: bold;
  }

  .banner-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  .banner-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MarkdownReader;
