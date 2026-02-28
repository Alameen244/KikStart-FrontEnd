import React, { useState } from 'react'
import FAQ from '../FAQComponent/FAQ'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import bigLogoImage from '../../assets/BigLogoHome.png'
import Headings from '../Heading/Headings'


const HomeFaqWrapper = styled(Container) ({

    marginBottom:"31px",
    marginTop:"124px"

})
const GridWrapper = styled(Grid) ({
    // alignItems:"center"
    justifyContent:"space-between"
})
const KikLogoWrapper = styled(Box) ({
    
})
const FaqWrapper = styled(Box) ({

})
function HomeFaq() {
    const data = [
        {
            id:1,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Diam molestie egestas eget dolor a. Tellus aliquam adipiscing ligula nulla ullamcorper quisque egestas ac. Amet morbi diam eu.",
        },
        {
            id:2,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Diam molestie egestas eget dolor a. Tellus aliquam adipiscing ligula nulla ullamcorper quisque egestas ac. Amet morbi diam eu..",
        },
        {
            id:3,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Diam molestie egestas eget dolor a. Tellus aliquam adipiscing ligula nulla ullamcorper quisque egestas ac. Amet morbi diam eu.",
        },
        {
            id:4,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Diam molestie egestas eget dolor a. Tellus aliquam adipiscing ligula nulla ullamcorper quisque egestas ac. Amet morbi diam eu..",
        },
        {
            id:5,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Diam molestie egestas eget dolor a. Tellus aliquam adipiscing ligula nulla ullamcorper quisque egestas ac. Amet morbi diam eu.",
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)
    const handleToggle = (index) => {
        setOpenIndex( openIndex === index ? null : index )
    }

  return (

    
    <HomeFaqWrapper maxWidth= 'lg' >
        
        <GridWrapper container spacing={8} >
            
            <Grid item size ={{lg:6}} >
                <FaqWrapper>
                <Headings subHeading = "FAQ S" heading = "Have Question" />
                
            {
                data.map((faq , index) => (
                    <FAQ key={faq.id} question={faq.question} answer={faq.ans} open={ openIndex === index } onclick={() => handleToggle(index) } />
                ))
            }
            
            </FaqWrapper>
            </Grid>
            <Grid item size ={{lg:6}}>

                <KikLogoWrapper>
                    <img src={bigLogoImage} alt="" />
                </KikLogoWrapper>

            </Grid>
        </GridWrapper>
        
    </HomeFaqWrapper>
  )
}

export default HomeFaq