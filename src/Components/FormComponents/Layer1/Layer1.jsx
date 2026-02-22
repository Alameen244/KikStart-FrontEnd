import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import React from 'react'
import Grid from '@mui/material/Grid'
import Stepper from './Stepper'
import ChildrenForm from './ChildrenForm'

export default function Layer1() {
  return (
    <div>
      <Container>
        <Box sx={{ mt: 4,  justifyContent: 'center' ,display: "flex",border: "1px solid #E5E5E5", borderRadius: "30px", padding: "20px" }}>
          <Grid container spacing={4}>
            
            {/* Stepper - 4 columns */}
            <Grid item xs={12} md={4}>
              <Stepper activeStep={0} />
            </Grid>

            {/* Children Form - 8 columns */}
            <Grid item xs={12} md={8}>
              <ChildrenForm />
            </Grid>

          </Grid>
        </Box>
      </Container>
    </div>
  )
}
