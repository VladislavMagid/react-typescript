import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import {APP_ROUTES} from "constants/routes";

import { PageWrapper, ButtonControl } from "./styles";

function About() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate(APP_ROUTES.HOME);
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
      <ButtonControl>
        <Button name="Go to Homepage" onClick={goToHomepage} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
