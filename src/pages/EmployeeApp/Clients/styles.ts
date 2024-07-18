import styled from "@emotion/styled";
import {  Link as SimpleLink } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
`;

export const ClientsLink = styled(SimpleLink)`
  color: black;
  font-size: 60px;
  font-weight: bold;
  text-decoration: none;
`;