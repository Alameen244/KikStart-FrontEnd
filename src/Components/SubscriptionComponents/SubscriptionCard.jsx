import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import tick from "./images/tick.png";

const SubscriptionCard = (props) => {
  // props -> level , desc , price , duration , t1 ,t2 ,t3 ,t4 ,t5 ,t6
  return (
    <Card
      elevation={1}
      sx={{
        maxWidth: 345,
        borderRadius: "5px",
      }}
      className="hover:!shadow-2xl transition-all duration-300"
    >
      {/* //1st part */}

      <CardContent
        sx={{
          pl: "35px",
          pt: "35px",
        }}
      >
        <Typography
          sx={{
            color: "myRed",
            bgcolor: "rgb(237 28 36 /0.1)",
            display: "inline-block",
            p: "10px",
            borderRadius: "5px",
            mb: "20px",
            fontWeight: "500",
          }}
        >
          {props.level}
        </Typography>
        <Typography
          sx={{
            borderBottom: "solid #E9E9E9 1px",
            pb: "20px",
            fontWeight: "400",
          }}
        >
          {props.desc}
        </Typography>
      </CardContent>

      {/* 2nd part */}

      <CardContent
        sx={{
          pl: "35px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "myRed",
            display: "inline-block",
            fontSize: "66px",
            fontFamily: "Noto Sans",
            fontWeight: "bold",
          }}
        >
          {props.price}
        </Typography>
        <Typography
          sx={{
            borderBottom: "solid #E9E9E9 1px",
            pb: "20px",
            fontWeight: "400",
          }}
        >
          {props.duration}
        </Typography>
      </CardContent>

      {/* 3rd part */}

      <CardContent
        sx={{
          pl: "35px",
        }}
      >
        <Typography sx={{}}>
          <Box
            component="img"
            src={tick}
            alt="tick"
            sx={{
              display: "inline-block",
              mr: "10px",
              pb: "8px",
            }}
          />
          {props.t1}
        </Typography>
        <Typography sx={{}}>
          <Box
            component="img"
            src={tick}
            alt="tick"
            sx={{
              display: "inline-block",
              mr: "10px",
              pb: "8px",
            }}
          />
          {props.t2}
        </Typography>
        <Typography sx={{}}>
          <Box
            component="img"
            src={tick}
            alt="tick"
            sx={{
              display: "inline-block",
              mr: "10px",
              pb: "8px",
            }}
          />
          {props.t3}
        </Typography>
        <Typography sx={{}}>
          <Box
            component="img"
            src={tick}
            alt="tick"
            sx={{
              display: "inline-block",
              mr: "10px",
              pb: "8px",
            }}
          />
          {props.t4}
        </Typography>
        <Typography sx={{}}>
          <Box
            component="img"
            src={tick}
            alt="tick"
            sx={{
              display: "inline-block",
              mr: "10px",
              pb: "8px",
            }}
          />
          {props.t5}
        </Typography>
        <Typography sx={{}}>
          <Box
            component="img"
            src={tick}
            alt="tick"
            sx={{
              display: "inline-block",
              mr: "10px",
              pb: "8px",
            }}
          />
          {props.t6}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
