import { useContext } from "react";
import { BlogManagementContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { MessageWrapper } from "./styles";

function Message() {
  const post = useContext<string>(BlogManagementContext);
  return <MessageWrapper>{post}</MessageWrapper>;
}

export default Message;
