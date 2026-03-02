import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Program2 from '../../assets/Program2 copy.png'
import Program3 from '../../assets/Program3 copy.png'
import Program4 from '../../assets/Program4 copy.png'
import Program1 from '../../assets/Program1 copy.png'
import Program5 from '../../assets/Program5 copy.png'
import Program6 from '../../assets/Program6 copy.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'

import styled from '@emotion/styled'
import TextOverCard from "../TextOverCard/TextOverCard";
import Banner from "../Banner/Banner";

import { useNavigate } from "react-router-dom";



const ProgramComponentWrapper = styled(Box) ({

})
const GridWrapper = styled(Grid)({
    alignItems:"center",
    marginTop:"45px"
})


const ProgramComponent = () => {

    const navigate = useNavigate()

    const data = [

        {
            id: "program-1",
            image: Program1,
            heading : "Program Name 1",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
            details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }
        },
        {
            id: "program-2",
            image: Program2,
            heading : "Program Name 2",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
            details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }

        },
        {
            id: "program-3",
            image: Program3,
            heading : "Program Name 3",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
            details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }
        },
        {
            id: "program-4",
            image: Program4,
            heading : "Program Name 4",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
            details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }
        },
        {
            id: "program-5",
            image: Program5,
            heading : "Program Name 5",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
           details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }
        },
        {
            id: "program-6",
            image: Program6,
            heading : "Program Name 6",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
           details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }
        },
        {
            id: "program-7",
            image: Program1,
            heading : "Program Name 7",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
           details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }
        },
        {
            id: "program-8",
            image: Program6,
            heading : "Program Name 8",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
            details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }

        },
        {
            id: "program-9",
            image: Program3,
            heading : "Program Name 9",
            cardPara:"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu... ",
            shortDescription : "Lorem ipsum dolor sit amet consectetur. Maecenas lectus odio ut ut neque egestas luctus. Facilisis id pellentesque ultrices massa pellentesque ut. Sed sit suspendisse quam diam tellus sodales consequat amet ac. Sed eget varius luctus risus mauris ut ultricies. ",
            details: {

                    upDetail:"Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas. Ut congue ut amet commodo eget. Nam eu duis imperdiet morbi orci ac tellus aenean. A pharetra at sodales praesent commodo nibh. At ac lacus morbi consectetur nisi. Vel pharetra viverra hendrerit odio eu amet elementum quam dui. Tincidunt sit ac ac interdum.",


                    midDetail:"Velit auctor eros egestas nunc suspendisse amet fermentum lectus. Sed tellus nulla elit proin. Sit nibh urna elit amet netus nam convallis. Diam id auctor fermentum aliquam aliquet elit in suspendisse pellentesque. Quam fusce nec enim turpis nisl. Ac nec dictumst aliquet vivamus vel orci. Iaculis aenean accumsan tortor in et id ullamcorper aenean enim. At gravida nibh ornare commodo luctus gravida pretium fermentum volutpat. Eget integer sed nunc sit.",



                    lowDetail:"Lorem faucibus egestas tortor id nibh hendrerit massa tortor mi. Scelerisque nunc quis risus nunc in. Vitae at purus sit nec suspendisse donec enim senectus scelerisque. In sed risus nisl posuere molestie. Vel massa augue in fermentum.",

            }
        }

]


  return (
    <ProgramComponentWrapper>


        <Banner heading = "Programs" subHeading = "Programs" />

        {/* pagination */}
        <Container maxWidth="lg" sx={{py:'80px'}}>

                    <GridWrapper container spacing={4} >
                {
                data.map((items ) => (
                <Grid  item size = {{lg : 4}} key={items.id} onClick={() => navigate(`/program/${items.id}`,{state: items})} sx = {{cursor:"pointer"}} >
                        <TextOverCard image = {items.image} heading = {items.heading} para = {items.cardPara} />
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
/*  State : items passing the hole object */
