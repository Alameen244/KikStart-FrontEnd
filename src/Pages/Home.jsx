



import Slider from '../Components/Slider/Slider'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import GymCard from '../Components/GymCard/GymCard'
import GymcardComponent from '../Components/GymcardComponent/GymcardComponent'
import TextOverCard from '../Components/TextOverCard/TextOverCard'
import ChildrenFitness from '../Components/ChildrenFitnessComponent/ChildrenFitness'
import FAQ from '../Components/FAQComponent/FAQ'
import HomeFaq from '../Components/HomeFaq/HomeFaq'
import FAQs from './FAQs'
import HomeWhoComponent from '../Components/HomeWhoComponent/HomeWhoComponent'



const Home = () => {
  return (
    <div>
      <HomeBanner/>
      {/* <Layer2/> */}
      <HomeWhoComponent/>
      <GymcardComponent/>
      {/* <TextOverCard/> */}
      <ChildrenFitness/>
      {/* <Layer4/> */}
      <Slider/>
      <HomeFaq/>
      {/* <FAQs/> */}



    </div>
  )
}

export default Home
