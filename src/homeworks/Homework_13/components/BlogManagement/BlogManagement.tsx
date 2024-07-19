import { useState, createContext, ChangeEvent } from "react";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";

import { BlogManagementWrapper, ButtonControl, PostStyled } from "./styles";

export const BlogManagementContext = createContext<string>("");

function BlogManagement() {
  const [text, setText] = useState<string>("");
  const [post, setPost] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const getPost = () => {
    setPost(text);
  };
  return (
    <BlogManagementWrapper>
      <BlogManagementContext.Provider value={post}>
        <PostStyled
          value={text}
          onChange={onChange}
        ></PostStyled>
        <ButtonControl>
          <Button name="Запостить" onClick={getPost} />
        </ButtonControl>
        <Card />
      </BlogManagementContext.Provider>
    </BlogManagementWrapper>
  );
}

export default BlogManagement;
