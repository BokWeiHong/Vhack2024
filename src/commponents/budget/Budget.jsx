import React, { useState} from 'react';
import Chart from 'chart.js/auto';
import './style/budget_style.css';

import needsImage from '../../images/image-needs.png';
import wantsImage from '../../images/image-wants.png';
import savingsImage from '../../images/image-savings.png';

export default function BudgetPlanner() {
    
    const chartRef = React.createRef();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    React.useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Needs', 'Wants', 'Savings'],
                datasets: [{
                    data: [50, 30, 20],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                return `${label}: ${value}%`;
                            }
                        }
                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        };
    }, [chartRef]);

    const toInputSection = () => {
        const inputSection = document.getElementById('input-section');
        
        if (inputSection) {
            inputSection.scrollIntoView({ behavior:'smooth' });
        }
    };

    const selectCategory = (category) => {
        setIsExpanded(!isExpanded);

        if (selectedCategory === category) {
            setSelectedCategory(null); 
        } else {
            setSelectedCategory(category);
            setIsExpanded(true);
        }
    };

    return (
        <div className=' w-full flex justify-center'>
            <main className='wrapper py-16'>
                <header>
                    <h3 className='text-3xl text-center md:text-center'>Budget Planner</h3>
                    <h4 className='text-center md:text-center'
                        >Provides a comprehensive solution for managing finances, offering features such as expense categorization, 
                        spending tracking, and goal setting to facilitate effective financial management and planning.
                    </h4>
                </header>
                
                <section className="budget-rule">
                    <div className="pie-chart-section">
                        <canvas ref={chartRef}></canvas>
                    </div>
                    <div className="rule-text">
                        <h3 className="rule-title">Introduce To You: 50-30-20 Rule</h3>
                        <p className="rule-description">
                            The 50-30-20 rule is a simple budgeting technique that divides your after-tax income into three categories: 
                            <strong> 50% for needs,</strong> <strong>30% for wants,</strong> and <strong>20% for savings.</strong>
                        </p>
                        <button onClick={toInputSection} className="budget-button"><u><i>Let's Try It</i></u></button>
                    </div>
                </section>

                <section className="budget-input" id="input-section">
                    <div>
                        <h4 className='text-center md:text-center'
                            ><strong>Select a category to continue the budget planning</strong>
                        </h4>
                    </div>

                    <div className='category-cards' >
                        <CategoryCard category='Needs' onClick={() => selectCategory('Needs')} image={needsImage} />
                        <CategoryCard category='Wants' onClick={() => selectCategory('Wants')} image={wantsImage} />
                        <CategoryCard category='Savings' onClick={() => selectCategory('Savings')} image={savingsImage} />
                    </div>

                    <div className={`category-forms ${isExpanded ? 'block' : 'none'}`}>
                        <div className="forms-container">
                        {selectedCategory && 
                            <ExpenseForm title={`${selectedCategory} Expense Form`} />}
                        </div>
                    </div>
                </section>

                <section className="expense-tracker">
                    <h2 className="text-center">Expense Tracker</h2>
                    <div className="expense-list">
                        <div className="expense-item">
                            <div className="expense-details">
                                <span className="expense-name">Food</span>
                                <span className="expense-date">March 22, 2024</span>
                                <span className="expense-info">Bought groceries</span>
                            </div>
                            <span className="expense-amount">RM 50</span>
                        </div>
                        <div className="expense-item">
                            <div className="expense-details">
                                <span className="expense-name">Transportation</span>
                                <span className="expense-date">March 21, 2024</span>
                                <span className="expense-info">Bus fare</span>
                            </div>
                            <span className="expense-amount">RM 30</span>
                        </div>
                        <div className="expense-item">
                            <div className="expense-details">
                                <span className="expense-name">Entertainment</span>
                                <span className="expense-date">March 20, 2024</span>
                                <span className="expense-info">Movie tickets</span>
                            </div>
                            <span className="expense-amount">RM 20</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
   )
}

function CategoryCard({ category, onClick, image }) {
    return (
        <div className='category-card' onClick={onClick}>
            <img src={image} alt={category} />
            <h3>{category}</h3>
        </div>
    );
}

function ExpenseForm({ title }) {
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseCategory, setExpenseCategory] = useState('');

    const handleExpenseNameChange = (event) => {
        setExpenseName(event.target.value);
    };

    const handleExpenseAmountChange = (event) => {
        setExpenseAmount(event.target.value);
    };

    const handleExpenseCategoryChange = (event) => {
        setExpenseCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Expense Name:', expenseName);
        console.log('Expense Amount:', expenseAmount);
        console.log('Expense Category:', expenseCategory);
    };

    return (
        <div className="expense-form">
            <h3>{title}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input
                        type="text"
                        id="expenseName"
                        value={expenseName}
                        onChange={handleExpenseNameChange}
                        placeholder="Enter expense name"
                    />
                </div>
                <div>
                    <label htmlFor="expenseAmount">Expense Amount:</label>
                    <input
                        type="number"
                        id="expenseAmount"
                        value={expenseAmount}
                        onChange={handleExpenseAmountChange}
                        placeholder="Enter expense amount"
                    />
                </div>
                <div>
                    <label htmlFor="expenseCategory">Expense Category:</label>
                    <select
                        id="expenseCategory"
                        value={expenseCategory}
                        onChange={handleExpenseCategoryChange}
                    >
                        <option value="">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}