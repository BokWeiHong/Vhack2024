import Navigation from './commponents/navigation/Navigation.jsx';
import Footer from './commponents/footer/Footer.jsx';
import AcademyArticle from './commponents/academy/AcademyArticle.jsx'; 

const Academy = () => {
    return (
        <div className="academy">
            <Navigation />
            <AcademyArticle /> 
            <Footer />
        </div>
    );
}

export default Academy;
