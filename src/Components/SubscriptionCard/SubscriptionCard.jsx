import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import tick from "../../assets/tick.png";
import Line from "../Line/Line";
import RedButton from "../RedButton/RedButton";
// import Button from "@mui/material/Button";


const StyledCard = styled(Card)({
  maxWidth: 345,
  borderRadius: "5px",
  transition: "all 300ms",
  "&:hover": {
    boxShadow:
      "0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",
  },
});

const TopCardContent = styled(CardContent)({
  padding: 0,

});

const MiddleCardContent = styled(CardContent)({
  padding: "40.3px 0 22.83px",

});

const BottomCardContent = styled(CardContent)({
  padding: 0,
  "&.MuiCardContent-root:last-child": {
    padding: "0px",
  },
});

const  LevelTypography = styled(Typography)({
 /* basic */

fontFamily: 'Noto Sans',
fontStyle: 'normal',
fontWeight: 500,
fontSize: 15,
padding:"9px 13px",
textTransform: 'uppercase',
backgroundColor:"#FFF8F8",
color: '#ED1C24',
borderRadius: "5px",
  display: "inline-block",
  position: "relative",
  overflow: "hidden",
  transition: "transform 320ms ease, box-shadow 320ms ease, color 320ms ease",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-130%",
    width: "120%",
    height: "100%",
    background:
      "linear-gradient(115deg, rgba(255,255,255,0) 10%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 90%)",
    transform: "skewX(-22deg)",
    transition: "left 520ms ease",
    pointerEvents: "none",
  },
  "&:hover": {
    transform: "translateY(-4px) scale(1.04)",
    boxShadow: "0 10px 24px rgba(237, 28, 36, 0.3)",
    color: "#c1121a",
  },
  "&:hover::after": {
    left: "130%",
  },
});

const DividerTextTypography = styled(Typography)({
 /* Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae. */


fontFamily: 'Noto Sans',
fontStyle: 'normal',
fontWeight: 400,
fontSize: 15,


color: '#494949',


});

const PriceTypography = styled(Typography)({
/* $19 */


fontFamily: 'Noto Sans',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 66,

/* or 111% */
/* leading-trim and text-edge are draft CSS properties.

Read: 'more: https://drafts.csswg.org/css-inline-3/#leading-trim',
*/
leadingTrim: 'both',
textEdge: 'cap',
letterSpacing: '-0.461586px',
lineHeight:"1",
color: '#ED1C24',
  marginBottom: "10px",
  display: "inline-block",
  position: "relative",
  transformOrigin: "left center",
  transition:
    "transform 300ms cubic-bezier(0.22, 1, 0.36, 1), text-shadow 300ms ease, filter 300ms ease",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "4px",
    right: "4px",
    bottom: "4px",
    height: "16px",
    filter: "blur(12px)",
    background: "rgba(237, 28, 36, 0.35)",
    opacity: 0,
    transition: "opacity 300ms ease",
    pointerEvents: "none",
    zIndex: -1,
  },
  "&:hover": {
    transform: "translateY(-4px) scale(1.05) rotate(-1deg)",
    textShadow: "0 12px 20px rgba(237, 28, 36, 0.35)",
    filter: "saturate(1.2)",
  },
  "&:hover::before": {
    opacity: 1,
  },
});
const FeatureTypoWrapper = styled(Box)({
  padding: "34px 0px 38px",
});
const FeatureTypography = styled(Typography)({
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 15,
  color: "#494949",
  display: "flex",
  alignItems: "center",
  gap: "7.6px",
  paddingBottom: "14px",
});


const TickIcon = styled(Box)({
  display: "block",
  flexShrink: 0,
});

const CardContentWrapper = styled(Box)({
  maxWidth: "291px",
  margin: "41px auto 34px",
});

// const PayButton = styled(Button)({
//   /* Subscribe */


// padding:"18px 95px",
// fontFamily: 'Noto Sans',
// fontStyle: 'normal',
// fontWeight: 500,
// fontSize: 16,
// /* identical to box height */
// textTransform: 'uppercase',
// borderRadius: "50px",
// color: '#FFFFFF',


// });
const SubscriptionCard = (props) => {
  // props -> level , desc , price , duration , t1 ,t2 ,t3 ,t4 ,t5 ,t6
  return (
    <StyledCard elevation={1}>
      <CardContentWrapper>

      {/* //1st part */}

      <TopCardContent >
        <LevelTypography>
          {props.level}
        </LevelTypography>
        <DividerTextTypography sx={{padding:"17px 0 20.7px"}}>
          {props.desc}
        </DividerTextTypography>
      </TopCardContent>
        <Line linemaxwidth="275.7px"/>
      {/* 2nd part */}

      <MiddleCardContent>
        <PriceTypography variant="body2">
          {props.price}
        </PriceTypography>
        <DividerTextTypography sx={{padding:""}}>
          {props.duration}
        </DividerTextTypography>
      </MiddleCardContent>
        <Line linemaxwidth="275.7px"/>

      {/* 3rd part */}

        <BottomCardContent>
          <FeatureTypoWrapper>

        <FeatureTypography>
          <TickIcon
            component="img"
            src={tick}
            alt="tick"
          />
          {props.t1}
        </FeatureTypography>
        <FeatureTypography>
          <TickIcon
            component="img"
            src={tick}
            alt="tick"
          />
          {props.t2}
        </FeatureTypography>
        <FeatureTypography>
          <TickIcon
            component="img"
            src={tick}
            alt="tick"
          />
          {props.t3}
        </FeatureTypography>
        <FeatureTypography>
          <TickIcon
            component="img"
            src={tick}
            alt="tick"
          />
          {props.t4}
        </FeatureTypography>
        <FeatureTypography>
          <TickIcon
            component="img"
            src={tick}
            alt="tick"
          />
          {props.t5}
        </FeatureTypography>
        <FeatureTypography sx={{paddingBottom:"0px"}}>
          <TickIcon
            component="img"
            src={tick}
            alt="tick"
          />
          {props.t6}
        </FeatureTypography>
          </FeatureTypoWrapper>
          {/* <PayButton variant="contained" color="secondary">
suscribe
 </PayButton> */}
          <RedButton text="Subscribe" color="secondary" py="18px" px="95px"/>


      </BottomCardContent>
      </CardContentWrapper>
    </StyledCard>
  );
};

export default SubscriptionCard;


