import React, { useState } from 'react';
import './style/invest_style.css';
import no_result from '../../images/image-no-result.png';

export default function Investment() {
    const [inputs, setInputs] = useState({
        initialInvestment: '',
        monthlyContribution: '',
        yearsToGrow: '',
        rateOfReturn: ''
    });

    const [selectedButton, setSelectedButton] = useState({
        initialInvestment: null,
        monthlyContribution: null,
        yearsToGrow: null,
        rateOfReturn: null
    });

    const handleSuggestionClick = (inputName, suggestionValue) => {
        setInputs({
            ...inputs,
            [inputName]: suggestionValue
        });
        setSelectedButton({
            ...selectedButton,
            [inputName]: suggestionValue
        });
    };
    
    const handleInputChange = (e, inputName) => {
        setInputs({
            ...inputs,
            [inputName]: e.target.value
        });
        setSelectedButton({
            ...selectedButton,
            [inputName]: null
        });
    };

    const [showResult, setShowResult] = useState(false);

    const handleCalculate = () => {
        // haven't apply calculation
        setShowResult(true);
    };

    const handleReCalculate = () => {
        setSelectedButton({
            initialInvestment: null,
            monthlyContribution: null,
            yearsToGrow: null,
            rateOfReturn: null
        });
        setShowResult(false);
    };

    return (
        <div className=' w-full flex justify-center'>
            <main className='wrapper py-16'>
                <header>
                    <h3 className='text-3xl text-center md:text-center'>Investment calculator</h3>
                    <h4 className='text-center md:text-center'
                        >Maximize your investment potential with our Investment Calculator, 
                         providing insights into potential returns and growth opportunities to guide your financial decisions.
                    </h4>
                </header>
                
                <section className="calculator-wrapper">
                    <div className="calculator-container">
                        {!showResult ? (
                            <div>
                                <div className="input-container">
                                    <label htmlFor="initialInvestment">Initial Investment:</label>
                                    <div className="suggestion-buttons">
                                    <div className="invest-buttons">
                                    <button 
                                        onClick={() => handleSuggestionClick('initialInvestment', 10000)}
                                        className={selectedButton.initialInvestment === 10000 ? 'selected' : ''}>10,000</button></div>
                                    <div className="invest-buttons">
                                    <button 
                                        onClick={() => handleSuggestionClick('initialInvestment', 20000)}
                                        className={selectedButton.initialInvestment === 20000 ? 'selected' : ''}>20,000</button></div>
                                    <div className="invest-buttons">
                                    <button 
                                        onClick={() => handleSuggestionClick('initialInvestment', 30000)}
                                        className={selectedButton.initialInvestment ===30000 ? 'selected' : ''}>30,000</button></div>
                                    <input
                                        type="number"
                                        id="initialInvestment"
                                        value={inputs.initialInvestment}
                                        onChange={(e) => handleInputChange(e, 'initialInvestment')}
                                        placeholder="Custom"
                                    />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="monthlyContribution">Monthly Contribution:</label>
                                    <div className="suggestion-buttons">
                                    <div className="invest-buttons">
                                    <button 
                                        onClick={() => handleSuggestionClick('monthlyContribution', 100)}
                                        className={selectedButton.monthlyContribution === 100 ? 'selected' : ''}>100</button></div>
                                    <div className="invest-buttons">
                                    <button 
                                        onClick={() => handleSuggestionClick('monthlyContribution', 200)}
                                        className={selectedButton.monthlyContribution === 200 ? 'selected' : ''}>200</button></div>
                                    <div className="invest-buttons">
                                    <button 
                                        onClick={() => handleSuggestionClick('monthlyContribution', 300)}
                                        className={selectedButton.monthlyContribution === 300 ? 'selected' : ''}>300</button></div>
                                    <input
                                        type="number"
                                        id="monthlyContribution"
                                        value={inputs.monthlyContribution}
                                        onChange={(e) => handleInputChange(e, 'monthlyContribution')}
                                        placeholder="Custom"
                                    />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="yearsToGrow">Years to Grow:</label>
                                    <div className="suggestion-buttons">
                                    <div className="invest-button">
                                    <button 
                                        onClick={() => handleSuggestionClick('yearsToGrow', 5)}
                                        className={selectedButton.yearsToGrow === 5 ? 'selected' : ''}>5</button></div>
                                    <div className="invest-button">
                                    <button 
                                        onClick={() => handleSuggestionClick('yearsToGrow', 10)}
                                        className={selectedButton.yearsToGrow === 10 ? 'selected' : ''}>10</button></div>
                                    <div className="invest-button">
                                    <button 
                                        onClick={() => handleSuggestionClick('yearsToGrow', 20)}
                                        className={selectedButton.yearsToGrow === 20 ? 'selected' : ''}>20</button></div>
                                    <input
                                        type="number"
                                        id="yearsToGrow"
                                        value={inputs.yearsToGrow}
                                        onChange={(e) => handleInputChange(e, 'yearsToGrow')}
                                        placeholder="Custom"
                                    />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="rateOfReturn">Rate of Return:</label>
                                    <div className="suggestion-buttons">
                                    <div className="invest-button">
                                    <button
                                        onClick={() => handleSuggestionClick('rateOfReturn', 0.05)}
                                        className={selectedButton.rateOfReturn === 0.05 ? 'selected' : ''}>5%</button></div>
                                    <div className="invest-button">
                                    <button 
                                        onClick={() => handleSuggestionClick('rateOfReturn', 0.07)}
                                        className={selectedButton.rateOfReturn === 0.07 ? 'selected' : ''}>7%</button></div>
                                    <div className="invest-button">
                                    <button 
                                        onClick={() => handleSuggestionClick('rateOfReturn', 0.1)}
                                        className={selectedButton.rateOfReturn === 0.1 ? 'selected' : ''}>10%</button></div>
                                    <input
                                        type="number"
                                        id="rateOfReturn"
                                        value={inputs.rateOfReturn}
                                        onChange={(e) => handleInputChange(e, 'rateOfReturn')}
                                        placeholder="Custom"
                                    />
                                    </div>
                                </div>
                                <div className="calculate-button">
                                    <button onClick={handleCalculate}>Calculate</button>
                                </div>
                            </div>
                    ):(
                    <div className="result-container">
                        <h3 className='text-3xl text-center md:text-center'>Investment Advices</h3>
                        
                        <div className="img-container"><img src={no_result} alt="budget img; format: jpg" /></div>
                        
                        <h4 className='text-center md:text-center'
                            >* Calculation haven't added to the tool, thus no result is shown.
                        </h4>

                        <div className="calculate-button">
                            <button onClick={handleReCalculate}>Re-Calculate</button>
                        </div>
                    </div>
                    )}
                    </div>
                </section>
            </main>
        </div>
   )
}