import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

import Layout from "components/Layout/Layout";
import Home from "./pages/EmployeeApp/Home/Home";
import About from "./pages/EmployeeApp/About/About";
import ContactUs from "./pages/EmployeeApp/ContactUs/ContactUs";
import Login from "./pages/EmployeeApp/LogIn/LogIn";
import Clients from "./pages/EmployeeApp/Clients/Clients";
import Netflix from "./pages/EmployeeApp/Clients/Netflix/Netflix";
import Amazon from "./pages/EmployeeApp/Clients/Amazon/Amazon";
import YouTube from "./pages/EmployeeApp/Clients/YouTube/YouTube";
import {APP_ROUTES} from "constants/routes";

// Lessons
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
import Lesson_13 from "lessons/Lesson_13/Lesson_13";


// Homeworks
import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homewotk_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_13 from "homeworks/Homework_13/Homework_13";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />
          <Route path={APP_ROUTES.CLIENTS} element={<Clients />} />
          <Route path={APP_ROUTES.NETFLIX}element={<Netflix />} />
          <Route path={APP_ROUTES.AMAZON} element={<Amazon />} />
          <Route path={APP_ROUTES.YOUTUBE} element={<YouTube />} />
          <Route path={APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.NOT_FOUND} element="Page not Found!" />
        </Routes>
      </Layout> */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09/> */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08/> */}
      {/* <Homework_09/> */}
      {/* <Lesson_10/> */}
      {/* <Lesson_11/> */}
      {/* <Lesson_13/> */}
      {/* <Homework_13/> */}
    </BrowserRouter>
  );
}

export default App;
