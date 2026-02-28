import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'
import upCurve from "../../assets/upperCurve.png"
import lowCurve from "../../assets/lowerCurve.png"
import img1 from "../../assets/Rectangle 13.png"
import img2 from "../../assets/Rectangle 13 (1).png"
import img3 from "../../assets/Rectangle 13 (2).png"
import TextOverCard from '../TextOverCard/TextOverCard'
import Headings from '../Heading/Headings'
import MainButton from '../RedButton/MainButton'
const Outer = styled(Box) ({
    backgroundColor : "#FFFCF3",
    margin:"48px 0 "
})
const ChildrenFitnessWrapper = styled(Container) ({
    
})
const UpCurveImg = styled(Box) ({

})
const LowCurveImg = styled(Box) ({

})
const GridWrapper = styled(Grid)({
    alignItems:"center",
    marginTop:"45px"
})
const ButtonWrapper = styled(Box) ({
    textAlign:"center",
    marginTop:"40px"
})

function ChildrenFitness() {
    const data = [
        {
            image : img1,
            para : "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu..."
        },
        {
            image : img2,
            para : "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu..."
        },
        {
            image : img3,
            para : "Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu..."
        }
    ]
  return (
    <Outer>
        <UpCurveImg component = 'img' src = {upCurve}/>
        <ChildrenFitnessWrapper maxWidth = "lg" >
        
        <Headings subHeading = "SERVICES" heading = "Children’s Fitness Programs" align = "center" />

            <GridWrapper container spacing={4} >
                {
                data.map((items , index) => (
                    <Grid item size = {{lg : 4}} >
                        <TextOverCard image = {items.image} heading = {`Program Number ${index+1}`} para = {items.para} />
                    </Grid>
                ))
            }
            </GridWrapper>

        <ButtonWrapper>
            <MainButton bgColor = "secondary" text = "VIEW ALL" />
        </ButtonWrapper>

        
        
    </ChildrenFitnessWrapper>
    <LowCurveImg component = 'img' src = {lowCurve}/>
    </Outer>
  )
}

export default ChildrenFitness