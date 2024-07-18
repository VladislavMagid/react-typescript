// шаг 3 импортируем useContext из react и MainContext, который создан в компоненте Main
import { useContext } from "react";
import { MainContext } from "lessons/Lesson_13/components/Main/Main";
import { UserData } from "lessons/Lesson_13/components/Main/types";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

// interface ContentProps {
//   fullName: string | undefined,
//   age: number | undefined,
//   jobPosition: string | undefined,
// }

function Content() {
  // шаг 4 получаем доступ к данным, которые мы храним в контексте компонента Main
  const userData = useContext<UserData | undefined>(MainContext);

  console.log(userData);

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      <ContentInfo>{userData?.fullName}</ContentInfo>
      <ContentInfo>{userData?.age}</ContentInfo>
      <ContentInfo>{userData?.jobPosition}</ContentInfo>
    </ContentWrapper>
  );
}

export default Content;
