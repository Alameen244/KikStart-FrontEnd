
import Layer3 from '../Components/HomeComponents/Layer3/Layer3'
import Layer4 from '../Components/HomeComponents/Layer4/Layer4'
import Layer2 from '../Components/HomeComponents/Layer2/Layer2'
import Slider from '../Components/Slider/Slider'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const SliderWrapper = styled(Box)({
  padding:"23px 0 121px",
});
const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <Layer2/>
      <Layer3/>
      <Layer4/>
      <SliderWrapper>
      <Slider />
      </SliderWrapper>



    </div>
  )
}

export default Home
