import React from 'react'
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images/9.png';
import img1 from './images/image.png';
import img2 from './images/image2.png';
import img3 from './images/image3.png';
import img4 from './images/image4.png';
import img5 from './images/image5.png';
import img6 from './images/image6.png';
import img7 from './images/image7.png';
import img8 from './images/image8.png';
import img9 from './images/image9.png';


const CardData = [
    {
      image: img1,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img2,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img3,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img4,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img5,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img6,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img7,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img8,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img9,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img1,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img2,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img3,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img4,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img5,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    },
    {
      image: img6,
      title : "Topsail Elementary school",
      text :"Lorem ipsum dolor sit amet consectetur. Nunc id adipiscing at interdum eu...",
      secimg : img,
      text2 : "Coach",
      text3 : "Jane Cooper"
    }
  ]


function Cards() {

  const [page, setPage] = useState(1);

  const cardsPerPage = 9;

  const handleChange = (event, value) => {
    setPage(value);
  };

  // Calculate displayed cards
  const startIndex = (page - 1) * cardsPerPage;
  const selectedCards = CardData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const totalPages = Math.ceil(CardData.length / cardsPerPage);


  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {selectedCards.map((items, index) =>(
          <Col 
            key={index} 
            xs={12} 
            sm={6} 
            md={4} 
            className="mb-4 d-flex justify-content-center"
          >
            <Card style={{ width: '100%', maxWidth: '364px', border: "none",boxShadow: "0px 17px 44px 0px rgba(0,0,0,0.08)", borderRadius: "30px" }}>
              <Card.Img variant="top" src={items.image} />
              <Card.Body style={{ padding: "15px" }} className="d-flex flex-column">
                <Typography variant="subtitle2" color="dark">
                  {items.title}
                </Typography>

                <Typography variant="body1" color="semiDark" sx={{}}>
                  {items.text}
                </Typography>

                <div className="d-flex align-items-center mt-auto">
                  <img
                    src={items.secimg}
                    alt="coach"
                    style={{
                      margin: "10px 10px 10px 0px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover"
                    }}
                  />

                  <div>
                    <Typography variant="h3" fontSize={10} color="semiDark">
                      {items.text2}
                    </Typography>

                    <Typography variant="body1" fontSize={12} fontWeight={600} color="dark">
                      {items.text3}
                    </Typography>
                  </div>
                </div>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
       {/* Pagination */}
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          padding: "10px 15px",
          borderRadius: "6px",
          width: "fit-content",
          margin: "40px auto"
        }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                borderRadius: "6px",
                minWidth: "36px",
                height: "36px",
                border: "1px solid #ddd",
                backgroundColor: "#ffffff",
                "&.Mui-selected": {
                  backgroundColor: "#ffffff",
                  border: "1px solid #ff0000",
                  color: "#ff0000",
                  fontWeight: "bold"
                }
              }}
            />
          )}
        />
      </Stack>
    </Container>
  )
}

export default Cards