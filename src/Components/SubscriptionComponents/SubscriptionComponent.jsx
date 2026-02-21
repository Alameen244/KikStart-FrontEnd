import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SubscriptionCard from "./SubscriptionCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const SubscriptionComponent = () => {
    const subData = [
        {
            level: "BASIC",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
            price: "$19",
            duration: "Per Month",
            t1:"Lorem ipsum dolor sit",
            t2:"Consectetur adipiscing elit",
            t3:"In vehicula quam vitae justo",
            t4:"Nam interdum lectus",
            t5:"Lorem ipsum dolor sit",
            t6:"Consectetur adipiscing elit",


        },
        {
            level: "PROFESSIONAL",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
            price: "$49",
            duration: "Per Month",
            t1:"Lorem ipsum dolor sit",
            t2:"Consectetur adipiscing elit",
            t3:"In vehicula quam vitae justo",
            t4:"Nam interdum lectus",
            t5:"Lorem ipsum dolor sit",
            t6:"Consectetur adipiscing elit",


        },
        {
            level: "ADVANCED",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra et ac vitae.",
            price: "$99",
            duration: "Per Month",
            t1:"Lorem ipsum dolor sit",
            t2:"Consectetur adipiscing elit",
            t3:"In vehicula quam vitae justo",
            t4:"Nam interdum lectus",
            t5:"Lorem ipsum dolor sit",
            t6:"Consectetur adipiscing elit",


        },
    ]
  return (
    <Container maxWidth="lg">
          <Box sx={{
                  py:"80px"
              }}>
                  <Typography variant="h1" color="dark" textAlign="center" sx={{
                      fontSize:'26px'
                  }}>
                      Program Enrolment Package

             </Typography>
                  <Typography variant="body1" color="semiDark"  textAlign="center" sx={{

                  }}>
               Lorem ipsum dolor sit amet consectetur
             </Typography>
              </Box>
          <Grid container sx={{
              p:"20px 0 40px"
          }}>

              {subData.map((items) => (
                  <Grid size={{ lg: 4 }} >
                      <SubscriptionCard level={items.level} desc={items.desc} price={items.price} duration={items.duration}
                      t1={items.t1} t2={items.t2} t3={items.t3} t4={items.t4} t5={items.t5} t6={items.t6}
                      />
                      </Grid>
                  ))}


      </Grid>
    </Container>
  );
};

export default SubscriptionComponent;
