import Navigation from './commponents/navigation/Navigation.jsx';
import Footer from './commponents/footer/Footer.jsx';
import NewsArticle from './commponents/news_article/NewsArticle.jsx';
import NewsNav from './commponents/news_nav/NewsNav.jsx'

const News = () => {
    return (
      <div className="news">
        <Navigation/>
        <NewsNav/>
        <NewsArticle />
        <Footer/>
      </div>
    );
  }
  
  export default News;