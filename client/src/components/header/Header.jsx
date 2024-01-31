import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Translate from "../Translate";

const Component = styled(AppBar)`
  position: static;
  background: #7c91eb;
`;
const Component1 = styled(AppBar)`
  position: static;
  background: white;
`;
const Component2 = styled(AppBar)`
  position: static;
  background: #a3e6cd;
`;

const Container = styled(Toolbar)`
  & > a {
    padding: 25px;
    color: white;
    font-size: 18px;
    text-decoration: none;
  }
`;

const KsgLOGO = styled("img")({
  width: "40px",
  height: "40px",
});

const DIV = styled("div")({
  width: "200vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
});

const InnerDiv = styled(Typography)`
  margin-top: -22px;
  & > p {
    font-size: 10px;
    margin-top: -26px;
  }
`;

const Header = () => {
  const ksgURL =
    "https://ksp.karnataka.gov.in/frontend/opt1/images/center_logo/kar_main_logo.png";

  return (
    <>
      <Component2>
        <Container>
          <Container maxWidth="sm">
            <Typography style={{ color: "red" }}>
              Emergency Number: 112
            </Typography>
          </Container>

          <Container maxWidth="sm">{/* <Translate /> */}</Container>
        </Container>
      </Component2>

      <Component1>
        <Container>
          {/* <Typography>Hello</Typography> */}
          <img src="" alt="our logo" style={{ border: "2px solid black" }} />
          <DIV>
            <KsgLOGO src={ksgURL} alt="ksg logo" />
            <InnerDiv>
              <h5>Karnataka State Police</h5>
              <Typography>Government of Karnataka</Typography>
            </InnerDiv>
          </DIV>
          <Container maxWidth="sm" style={{ color: "#212121" }}>
            Sirigannadam gelge
          </Container>
        </Container>
      </Component1>

      <Component>
        <Container>
          <Link to="/">
            <HomeIcon />
          </Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/login">Login</Link>
        </Container>
      </Component>
    </>
  );
};

export default Header;
