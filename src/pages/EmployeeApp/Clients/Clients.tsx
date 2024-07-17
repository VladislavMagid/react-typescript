import { PageWrapper, ClientsLink } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <ClientsLink to="/clients/Netflix">Netflix</ClientsLink>
      <ClientsLink to="/clients/Amazon">Amazon</ClientsLink>
      <ClientsLink to="/clients/YouTube">YouTube</ClientsLink>
    </PageWrapper>
  );
}

export default Clients;
