import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function About() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
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
