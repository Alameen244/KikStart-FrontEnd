import Typography from "@mui/material/Typography";

const Para = (props) => {
  return (
    <div>
      <Typography variant="body1" sx={{}}>
        {props.para}{" "}
      </Typography>
    </div>
  );
};

export default Para;
