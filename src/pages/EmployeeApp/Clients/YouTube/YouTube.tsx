import { useNavigate } from "react-router-dom";

import { PageWrapper, ClientInfo, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function YouTube() {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
      }
  return (
    <PageWrapper>
      <ClientInfo>
        YouTube is an American online video sharing platform owned by Google.
        Accessible worldwide,[note 1] YouTube was launched on February 14, 2005,
        by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of
        PayPal. Headquartered in San Bruno, California, United States, it is the
        second most visited website in the world, after Google Search. As of
        January 2024, YouTube has more than 2.7 billion monthly users, who
        collectively watch more than one billion hours of videos every day.
        As of May 2019, videos were being uploaded to the platform at a rate of
        more than 500 hours of content per minute, and as of 2021, there
        were approximately 14 billion videos in total.
      </ClientInfo>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default YouTube;
