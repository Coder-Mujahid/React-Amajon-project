import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Products from './component/products'

function App() {
  

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Products></Products>
      
    </>
  )
}

export default App
