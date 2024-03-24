import React from 'react';
import './style/tool_list_style.css';
import retire from '../../images/image-retire.jpg';
import budget from '../../images/image-budget.jpeg';
import invest from '../../images/image-invest.jpg';

export default function ToolList() {
  return (
    <div className='tool_container w-full flex justify-center'>
        <main className='wrapper py-16'>
            <header>
                <h3 className='text-3xl text-center md:text-center'>Trading and Investment Tools</h3>
                <h4 className='text-center md:text-center'
                    >Let explore our range of calculators including retirement savings, compound interest, 
                     and budget planner to make informed decisions and achieve your financial goals
                </h4>
            </header>

            <section className='tool grid grid-cols-1 xl:grid-cols-3 grid-rows-3 xl:grid-rows-1 md:justify-between'>
                <a  href='tools/retire' className='tool_card mb-12 xl:mb-0 sm:flex sm:flex-col sm:items-start '>
                    <div className='card_header'>
                        <img src={retire} alt="retirement img; format: jpg" />
                    </div>
                    <div className="card_body">
                        <h4>Retirement Saving  Calculator</h4>
                        <p>
                        This calculator provides personalized projections tailored to your unique circumstances, ensuring a comfortable and secure retirement.
                        </p>
                    </div>
                </a>

                <a href='tools/invest' className='tool_card'>
                    <div className='card_header'>
                        <img src={invest} alt="investment img; format: jpg" />
                    </div>
                    <div className="card_body">
                        <h4 className='text-xl'>Investment Calculator</h4>
                        <p>
                        This calculator is used to analyze potential returns, estimate future portfolio values, and assess the impact of different investment strategies. 
                        </p>
                    </div>
                </a>

                <a href='tools/budget' className='tool_card'>
                    <div className='card_header'>
                        <img src={budget} alt="budget img; format: jpg" />
                    </div>
                    <div className="card_body">
                        <h4 className='text-xl'>Budget Planner</h4>
                        <p>
                        This planner is used to track your income, expenses, and savings effortlessly to stay on top of your financial goals. 
                        </p>
                    </div>
                </a>
                
            </section>
        </main>
    </div>

  )
}
