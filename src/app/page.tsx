import HeaderWidget from '../components/header-widget'
import { Navigation } from "../components/navigation"
import HomeWidgets from "../components/home-widgets"
import BestDeals from "../components/home-best-deals"
import Categorys from "../components/category"
import Featured from "../components/home-featured"
import HomeBanner from "../components/banner"
import HomeAccess from "../components/home-acc"
import BottomBanner from "../components/bottom-banner"
import HomeProducts from "../components/home-products"
import LatestNews from "../components/latest-news"
import Newsletter from "../components/news-letter"
import Footer from "../components/footer"

export default function Home() {
  return (
    <>
      <HeaderWidget/>
      <Navigation/>
      <HomeWidgets/>
      <BestDeals/>
      <Categorys/>
      <Featured/>
      <HomeBanner/>
      <HomeAccess/>
      <BottomBanner/>
      <HomeProducts/>
      <LatestNews/>
      <Newsletter/>
      <Footer/>
    </>
  )
}
