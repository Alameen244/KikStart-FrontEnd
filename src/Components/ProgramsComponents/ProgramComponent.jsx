import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'

import styled from '@emotion/styled'
import TextOverCard from "../TextOverCard/TextOverCard";
import Banner from "../Banner/Banner";

import { useNavigate } from "react-router-dom";
import { programsData } from "../../data/programsData";



const ProgramComponentWrapper = styled(Box) ({

})
const GridWrapper = styled(Grid)({
    alignItems:"center",
    marginTop:"45px"
})


const ProgramComponent = () => {

    const navigate = useNavigate()


  return (
    <ProgramComponentWrapper>


        <Banner heading = "Programs" subHeading = "Programs" />

        {/* pagination */}
        <Container maxWidth="lg" sx={{py:'80px'}}>

                    <GridWrapper container spacing={4} >
                {
                programsData.map((items ) => (
                <Grid  item size = {{lg : 4}} key={items.id} onClick={() => navigate(`/program/${items.id}`,{state: items})} sx = {{cursor:"pointer"}} >
                        <TextOverCard image = {items.image} heading = {items.heading} para = {items.description} />
                    </Grid>
                ))
            }
        </GridWrapper>

        <Stack spacing={2} sx={{
              mt: "30px",

          }}
          alignItems="center">

              <Pagination count={2} variant="outlined" shape="rounded" color="secondary" />
        </Stack>


        </Container>
    </ProgramComponentWrapper>

  )
}

export default ProgramComponent
