import Navigation from './commponents/navigation/Navigation.jsx';
import Hero from './commponents/hero/Hero.jsx';
import ValueService from './commponents/valueService/ValueService.jsx';
import Articles from './commponents/articles/Articles.jsx';
import Footer from './commponents/footer/Footer.jsx';
import Testimonial from './commponents/testimonial/Testimonial.jsx';

const Home = () => {
  return (
    <div className="home">
      <Navigation/>
      <Hero/>
      <ValueService/>
      <Articles/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default Home;