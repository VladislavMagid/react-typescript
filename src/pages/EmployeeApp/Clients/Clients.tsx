import {APP_ROUTES} from "constants/routes";

import { PageWrapper, ClientsLink } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <ClientsLink to={APP_ROUTES.NETFLIX}>Netflix</ClientsLink>
      <ClientsLink to={APP_ROUTES.AMAZON}>Amazon</ClientsLink>
      <ClientsLink to={APP_ROUTES.YOUTUBE}>YouTube</ClientsLink>
    </PageWrapper>
  );
}

export default Clients;