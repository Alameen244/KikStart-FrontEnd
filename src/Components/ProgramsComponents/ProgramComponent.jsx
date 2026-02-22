import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OverCard from "../HomeComponents/Layer4/OverCard";
import Program2 from '../../assets/Program2.png'
import Program3 from '../../assets/Program3.png'
import Program4 from '../../assets/Program4.png'
import Program1 from '../../assets/Program1.png'
import Program5 from '../../assets/Program5.png'
import Program6 from '../../assets/Program6.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const ProgramComponent = () => {
    const cardData = [

        {
            image: Program1,
            heading: "Program Name 1",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... "
    },
        {
            image: Program2,
            heading: "Program Name 2",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... "
    },
        {
            image: Program3,
            heading: "Program Name 3",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... "
    },
        {
            image: Program4,
            heading: "Program Name 4",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... "
    },
        {
            image: Program5,
            heading: "Program Name 5",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... "
    },
        {
            image: Program6,
            heading: "Program Name 6",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... "
    },
]


  return (
      <Container maxWidth="lg" sx={{py:'80px'}}>
          <Grid container spacing={{ lg:6 }}>
              {cardData.map((items) => (
                  <Grid size={{ lg:4 }}>
                      <OverCard image={items.image} heading ={items.heading} cardPara={items.cardPara} />
                  </Grid>
              ))}
          </Grid>
          <Stack spacing={2} sx={{
              mt: "30px",

          }}
          alignItems="center">

              <Pagination count={2} variant="outlined" shape="rounded" color="secondary" />
    </Stack>


 </Container>
  )
}

export default ProgramComponent
