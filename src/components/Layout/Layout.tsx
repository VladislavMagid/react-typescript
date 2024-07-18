import { APP_ROUTES } from "constants/routes";
import { v4 } from "uuid";

import { LayoutProps } from "./types";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Link,
  Logo,
  FooterLogo,
  LogoImg,
  NavigationContainer,
  FooterNavigation,
  FooterLink,
} from "./styles";

function Layout({ children }: LayoutProps) {
  const linksRoutes = {
    [APP_ROUTES.HOME]: "Home",
    [APP_ROUTES.CONTACT_US]: "Contact Us",
    [APP_ROUTES.ABOUT]: "About",
    [APP_ROUTES.CLIENTS]: "Clients",
    [APP_ROUTES.LOGIN]: "Login",
  };

  const headerLinks = Object.keys(linksRoutes).map((appRoute: string) => {
    return (
      <Link
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={appRoute}
      >
        {linksRoutes[appRoute as keyof typeof linksRoutes]}
      </Link>
    );
  });

  const footerLinks = Object.keys(linksRoutes).map((appRoute: string) => {
    return (
      <FooterLink key={v4()} to={appRoute}>
        {linksRoutes[appRoute as keyof typeof linksRoutes]}
      </FooterLink>
    );
  });

  return (
    <LayoutWrapper>
      <Header>
        <Link to={APP_ROUTES.HOME}>
          <Logo>
            <LogoImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
              alt="App logo"
            />
          </Logo>
        </Link>
        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="App logo"
          />
        </FooterLogo>
        <FooterNavigation>{footerLinks}</FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
