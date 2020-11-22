import React from "react";

import styled from "styled-components";

const MarkdownEditor = ({ value, onChange }) => {
  return (
    <MarkdownEditorComponent>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Content - This input contain markdown format. You can see on https://guides.github.com/features/mastering-markdown/"
      />
    </MarkdownEditorComponent>
  );
};

const MarkdownEditorComponent = styled.div`
  textarea {
    width: 100%;
    min-height: 90px;
    padding: 5px;
  }
`;

export default MarkdownEditor;
