import { useNavigate } from "react-router-dom";
import { PageWrapper, ClientInfo, ButtonControl } from "./styles";

import { ClientTamplateProps } from "./types";

import Button from "components/Button/Button";

function ClientTamplate({ children }: ClientTamplateProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ClientInfo>{children}</ClientInfo>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default ClientTamplate;
