import Navigation from './commponents/navigation/Navigation.jsx';
import Footer from './commponents/footer/Footer.jsx';
import Investment from './commponents/invest/Invest.jsx';

const Invest = () => {
    return (
      <div className="invest">
        <Navigation/>
        <Investment/>
        <Footer/>
      </div>
    );
  }
  
  export default Invest;