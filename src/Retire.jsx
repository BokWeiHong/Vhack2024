import Navigation from './commponents/navigation/Navigation.jsx';
import Footer from './commponents/footer/Footer.jsx';
import Retirement from './commponents/retire/Retire.jsx';

const Retire = () => {
    return (
      <div className="retire">
        <Navigation/>
        <Retirement/>
        <Footer/>
      </div>
    );
  }
  
  export default Retire;