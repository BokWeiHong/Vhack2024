import Navigation from './commponents/navigation/Navigation.jsx';
import Footer from './commponents/footer/Footer.jsx';
import ToolList from './commponents/tool_list/ToolList.jsx';

const Tools = () => {
    return (
      <div className="tools">
        <Navigation/>
        <ToolList/>
        <Footer/>
      </div>
    );
  }
  
  export default Tools;