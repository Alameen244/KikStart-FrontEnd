import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)({});

const StyledButton = styled(Button)(({ bgcolor , theme }) => ({
  borderRadius: "50px",
  paddingLeft: "25px",
  paddingRight: "25px",
  paddingTop: "15px",
  paddingBottom: "15px",
  fontFamily: "Noto Sans",
  fontWeight: 500,
  fontSize: "16px",
  color: "#FFFFFF",
  backgroundColor:
    bgcolor === "primary"
      ? theme.palette.primary.main
      : bgcolor === "secondary"
      ? theme.palette.secondary.main
      : bgcolor,


}));


const RedButton = (props) => {
  return (
    <Wrapper>
      <StyledButton variant="contained" bgcolor={props.bgColor}>
        {props.text}
      </StyledButton>
    </Wrapper>
  );
};

export default RedButton;
