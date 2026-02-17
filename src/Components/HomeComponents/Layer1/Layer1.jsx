import Container from "@mui/material/Container";
import Headings from "./Headings";
import Para from "./Para";
import MainButton from "./MainButton";


const Layer1 = () => {
  return (
    <Container
      sx={{
              // bgcolor: "#FFFAFA",
          bgcolor:'yellow'
      }}
      maxWidth="lg"
      >
         <Headings heading="hi" subHeading="hello" />
          <Headings heading="hitggh" subHeading="helldhhdhsho" />
          <MainButton text="click me" />
          testing.....................

    </Container>
  );
};

export default Layer1;
