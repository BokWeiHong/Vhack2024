import Navigation from './commponents/navigation/Navigation.jsx';
import Footer from './commponents/footer/Footer.jsx';
import BudgetPlanner from './commponents/budget/Budget.jsx';

const Budget = () => {
    return (
      <div className="budget">
        <Navigation/>
        <BudgetPlanner/>
        <Footer/>
      </div>
    );
  }
  
  export default Budget;