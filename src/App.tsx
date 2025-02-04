
import Process from "./components/Process.tsx"
import FeatureSection from "./components/FeaturesSection.tsx"
import HeroSection from "./components/Hero.tsx"
import Navbar from "./components/Navbar.tsx"
import Pricing from "./components/Pricing.tsx"
import Testimonials from "./components/Testimonials.tsx"
import Footer from "./components/Footer.tsx"

function App() {


  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Process />
        <Pricing />
        <Testimonials />
        <Footer />
        

      </div>
      
    </>
  )
}

export default App
