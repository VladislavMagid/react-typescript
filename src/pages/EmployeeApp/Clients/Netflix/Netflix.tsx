import { useNavigate } from "react-router-dom";
import { PageWrapper, ClientInfo, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Netflix() {
  const navigate = useNavigate();
    
  const goBack = () => {
      navigate(-1);
    }

  return (
    <PageWrapper>
      <ClientInfo>
        Netflix is an American subscription video on-demand Internet streaming
        service. The service primarily distributes original and acquired films
        and television shows from various genres, and it is available
        internationally in multiple languages.
      </ClientInfo>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Netflix;
