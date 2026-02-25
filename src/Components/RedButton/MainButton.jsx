import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)({});

const StyledButton = styled(Button)({
  borderRadius: "50px",
  paddingLeft: "25px",
  paddingRight: "25px",
  paddingTop: "15px",
  paddingBottom: "15px",
  fontFamily: "Noto Sans",
  fontWeight: 500,
  fontSize: "16px",
  color: "#FFFFFF",
});

const MainButton = (props) => {
  return (
    <Wrapper>
      <StyledButton variant="contained" color={props.bgColor}>
        {props.text}
      </StyledButton>
    </Wrapper>
  );
};

export default MainButton;
