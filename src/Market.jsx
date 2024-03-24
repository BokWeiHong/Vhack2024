import Navigation from './commponents/navigation/Navigation.jsx';
import Footer from './commponents/footer/Footer.jsx';
import MarketNav from './commponents/market_nav/market_nav.jsx';
import MarketArticle from './commponents/market_article/MarketArticle.jsx';

const Market = () => {
    return (
      <div className="market">
        <Navigation/>
        <MarketNav />
        <MarketArticle />
        <Footer/>
      </div>
    );
  }
  
  export default Market;