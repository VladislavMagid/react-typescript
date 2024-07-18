import { useState, createContext } from "react";

import Button from "components/Button/Button";
import Section from "lessons/Lesson_13/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
import { UserData } from "./types";
// шаг 1: создаем контекст - хранилище данных, которое мы хотим передать в любой компонент на уровень ниже
export const MainContext = createContext<UserData | undefined>({
  fullName: "",
  age: 0,
  jobPosition: "",
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    const userResponse = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };
    setUserData(userResponse);
  };

  console.log(userData);

  return (
    // шаг 2: обернуть все в return в MainContext.Provider и передать что мы хотим в value
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get user data" onClick={getUserData} />
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
