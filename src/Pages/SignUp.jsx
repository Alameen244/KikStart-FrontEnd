import { Box, Container, Grid, styled } from '@mui/material'
import SignUpPic from '../Components/Auth/signUpPic/SignUpPic'
import SignUpForm from '../Components/Auth/SignUpForm/SignUpForm'



const SignUpWrapper = styled(Box)({
})

const ContainerBox = styled(Box)({
    padding: " 30px",
    margin:" 0px"
})
const SignUp = () => {
  return (
      <SignUpWrapper>
          <ContainerBox maxwidht="xl">
              <Grid container>
                  <Grid size={{xl:6}}>
                           <SignUpPic />
                  </Grid>
                  <Grid size={{xl:6}}>
                     <SignUpForm />
                  </Grid>
              </Grid>

          </ContainerBox>
   </SignUpWrapper>
  )
}

export default SignUp
