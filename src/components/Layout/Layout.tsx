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
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <Link to="/">
        <Logo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="App logo"
          />
        </Logo>
        </Link>
        <NavigationContainer>
        <Link style={({isActive})=>({fontWeight:isActive ? "bold" : "normal", textDecoration:isActive ? "underline" : "none"})} to="/">Home</Link>
          <Link style={({isActive})=>({fontWeight:isActive ? "bold" : "normal", textDecoration:isActive ? "underline" : "none"})} to="/contactUs">Contact Us</Link>
          <Link style={({isActive})=>({fontWeight:isActive ? "bold" : "normal", textDecoration:isActive ? "underline" : "none"})} to="/about">About</Link>
          <Link style={({isActive})=>({fontWeight:isActive ? "bold" : "normal", textDecoration:isActive ? "underline" : "none"})} to="/clients">Clients</Link>
          <Link style={({isActive})=>({fontWeight:isActive ? "bold" : "normal", textDecoration:isActive ? "underline" : "none"})} to="/logIn">Log In</Link>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="App logo"
          />
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/clients">About</FooterLink>
          <FooterLink to="/logIn" >Log In</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
