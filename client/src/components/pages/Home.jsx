import { styled } from "@mui/material";

const MainDiv = styled("div")({
  height: "100vh",
  fontSize: "25px",
  textAlign: "center",
});

const Home = () => {
  return (
    <div>
      <MainDiv>Home page</MainDiv>
    </div>
  );
};

export default Home;
