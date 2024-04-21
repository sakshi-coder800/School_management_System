import logo from './logo.svg';
import './App.css';
import AboutCourses from './components/AboutCourses/AboutCourses';
import Categories from './components/Category/Categories';
import Hero_Banner from './components/Hero-Banner/Hero_Banner';
import Upcoming_Events from './components/Upcoming_Events//Upcoming_Events';
import Footer from './components/footer/Footer';
import Cta from './components/call_to_action/Cta';
import Blog from './components/Blog/Blog.jsx';
import CountDownArea from './components/CountDownArea/CountDownArea.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Header from './components/Header/Header.jsx';
function App() {
  return (
    
    <>
    <Header/>
    <Hero_Banner/>
    <Categories/>
    <AboutCourses/>
    <Upcoming_Events/>

    <Testimonial/>

    <CountDownArea/>
    <Blog/>
    <Cta/>
    <Footer/>

    </>
    

  );
}

export default App;
