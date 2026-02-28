import React, { useState } from 'react'
import FAQ from '../Components/FAQComponent/FAQ'
import Container from '@mui/material/Container'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'


const FAQWrapper = styled(Container) ({
    marginTop:"35px"
})
const FaqWrapper = styled(Box) ({

})
const MainFAQWrapper = styled(Box) ({

})
function FAQs() {
    const data = [
        {
            id:1,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        },
        {
            id:2,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        },
        {
            id:3,
            question:"Lorem ipsum dolor sit amet consectetur. Pellentesque gravida amet aliquet?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        },
        {
            id:4,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        },
        {
            id:5,
            question:"Lorem ipsum dolor sit amet consectetur. Elementum sed?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        },
        {
            id:6,
            question:"Vel nisl adipiscing nunc viverra integer turpis?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        },
        {
            id:7,
            question:"Lorem ipsum dolor sit amet consectetur. Pellentesque gravida amet aliquet?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        },
        {
            id:8,
            question:"Lorem ipsum dolor sit amet consectetur?",
            ans:"Lorem ipsum dolor sit amet consectetur. Ut felis quis consectetur lacus ridiculus sit arcu. Sagittis etiam odio massa sollicitudin a in amet quis orci. Etiam dolor aenean a neque integer leo libero. Tellus dictum blandit mi tempus. Vivamus sed dolor semper posuere integer. Non ultricies nulla in elit enim commodo. Magna lorem donec cursus at.",
        }
    ]
    const [openIndex, setOpenIndex] = useState(null)
        const handleToggle = (index) => {
            setOpenIndex( openIndex === index ? null : index )
        }
  return (
    <MainFAQWrapper>
        <Header/>
        <Banner heading = "FAQs" subHeading = "Home / FAQs" />
        
    <FAQWrapper maxWidth = 'lg' >
        
        <FaqWrapper>
                
                
            {
                data.map((faq , index) => (
                    <FAQ key={faq.id} question={faq.question} answer={faq.ans} open={ openIndex === index } onclick={() => handleToggle(index) } />
                ))
            }
            
        </FaqWrapper>
    </FAQWrapper>
    
    <Footer/>
    </MainFAQWrapper>
            
  )
}

export default FAQs