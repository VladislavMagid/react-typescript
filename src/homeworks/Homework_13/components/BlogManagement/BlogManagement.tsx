import { useState, createContext, ChangeEvent } from "react";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";

import { BlogManagementWrapper, ButtonControl } from "./styles";

export const BlogManagementContext = createContext<string | undefined>("");

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
        <textarea
          value={text}
          onChange={onChange}
          style={{ width: "300px", height: "100px" }}
        ></textarea>
        <ButtonControl>
          <Button name="Запостить" onClick={getPost} />
        </ButtonControl>
        <Card />
      </BlogManagementContext.Provider>
    </BlogManagementWrapper>
  );
}

export default BlogManagement;
