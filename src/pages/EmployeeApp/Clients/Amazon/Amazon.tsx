import { useNavigate } from "react-router-dom";
import { PageWrapper, ClientInfo, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Amazon() {
  const navigate = useNavigate();
    
  const goBack = () => {
      navigate(-1);
    }

  return (
    <PageWrapper>
      <ClientInfo>
        Amazon.com, Inc., is an American multinational technology
        company, engaged in e-commerce, cloud computing, online advertising,
        digital streaming, and artificial intelligence. It is considered one
        of the Big Five American technology companies; the other four are
        Alphabet (parent company of Google), Apple, Meta (parent company of
        Facebook), and Microsoft.
      </ClientInfo>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Amazon;
