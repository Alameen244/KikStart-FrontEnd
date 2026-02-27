import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)({});

const StyledButton = styled(Button)(({ theme , py , px }) => ({
  borderRadius: "50px",
  paddingLeft: px,
  paddingRight: px,
  paddingTop: py,
  paddingBottom: py,
  fontFamily: "Noto Sans",
  fontWeight: 500,
  fontSize: "16px",
  color: "#FFFFFF",
  backgroundSize: "200% 100%",
  backgroundPosition: "right center",
  transition: "background-position 360ms ease, box-shadow 260ms ease",
  "&.MuiButton-containedPrimary": {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
  },
  "&.MuiButton-containedSecondary": {
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.dark} 50%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.main} 100%)`,
  },
  "&.MuiButton-containedPrimary:hover, &.MuiButton-containedSecondary:hover": {
    backgroundPosition: "left center",
  },

}));


const RedButton = ({ text, color , py="15px" , px="25px"}) => {
  return (
    <Wrapper>
      <StyledButton variant="contained" color={color} py={py} px={px}>
        {text}
      </StyledButton>
    </Wrapper>
  );
};

export default RedButton;
