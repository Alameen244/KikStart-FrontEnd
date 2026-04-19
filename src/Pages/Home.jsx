



import Slider from '../Components/Slider/Slider'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

import GymcardComponent from '../Components/GymcardComponent/GymcardComponent'

import ChildrenFitness from '../Components/ChildrenFitnessComponent/ChildrenFitness'

import HomeFaq from '../Components/HomeFaq/HomeFaq'

import HomeWhoComponent from '../Components/HomeWhoComponent/HomeWhoComponent'



const SliderWrapper = styled(Box)({
  padding:"23px 0 121px",
});
const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeWhoComponent/>
      <GymcardComponent/>
      <ChildrenFitness/>
      <Slider/>
      <HomeFaq/>




    </div>
  )
}

export default Home
