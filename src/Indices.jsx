import Navigation from './commponents/navigation/Navigation.jsx';
import IndicesArticle from './commponents/indices/IndicesArticle.jsx';
import Footer from './commponents/footer/Footer.jsx';

const Indices = () => {
  return (
    <div className="indices">
        <Navigation/>
        <IndicesArticle/>
        <Footer/>
    </div>
  );
}

export default Indices;