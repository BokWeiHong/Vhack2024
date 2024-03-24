import React, { useState, useEffect,useRef } from 'react';
import Chart from 'chart.js/auto';
import './style/retire_style.css';

export default function Retirement() {
    const [currentAge, setCurrentAge] = useState(25);
    const [retireAge, setRetireAge] = useState(60);
    const [income, setIncome] = useState(75);
    const [currentSaving, setCurrentSaving] = useState(30);
    const [retireSaving, setRetireSaving] = useState(10);
    const [expectIncome, setExpectIncome] = useState(5);
    const [incomeRequired, setIncomeRequired] = useState(100);
    const [year, setYear] = useState(30);

    const handleCurrentAgeChange = (e) => {
        setCurrentAge(e.target.value);
    };

    const handleRetireAgeChange = (e) => {
        setRetireAge(e.target.value);
    };

    const handleIncomeChange = (e) => {
        setIncome(e.target.value);
    };

    const handleCurrentSavingChange = (e) => {
        setCurrentSaving(e.target.value);
    };

    const handleRetireSavingChange = (e) => {
        setRetireSaving(e.target.value);
    };

    const handleExpectIncomeChange = (e) => {
        setExpectIncome(e.target.value);
    };

    const handleIncomeRequiredChange = (e) => {
        setIncomeRequired(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const formattedIncome = income * 1000;
    const formattedRetireSaving = retireSaving * 1000;
    const formattedCurrentSaving = `${currentSaving}%`;
    const formattedExpectIncome = `${expectIncome}%`;
    const formattedIncomeRequired = `${incomeRequired}%`;
    const [showDefinitions, setShowDefinitions] = useState(false);

    const chartRef = useRef(null);

    const toggleDefinitions = () => {
        setShowDefinitions(!showDefinitions);

        const definitionSection = document.getElementById('definition-section');
        
        if (definitionSection && !showDefinitions) {
            definitionSection.scrollIntoView({ behavior: 'smooth' });
        } 
        else {
            const inputSection = document.getElementById('input-section');
        
            if (inputSection) {
                inputSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleCalculate = () => {
        const graphSection = document.getElementById('graph-section');

        if (graphSection) {
            graphSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (chartRef.current !== null) {
            chartRef.current.destroy();
        }
        updateChart();
    };

    const updateChart = () => {
        const canvas = document.getElementById('retirementChart');
        const existingChart = Chart.getChart(canvas);

        if (existingChart) {
            existingChart.destroy();
        }

        const years = [2020, 2021, 2022, 2023, 2024];
        const savings = [50000, 60000, 70000, 80000, 90000]; 

        canvas.width = 400;
        canvas.height = 300;

        const ctx = document.getElementById('retirementChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Savings for Retirement',
                    data: savings,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                }]
            },
            options: {
                responsive: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year',
                            color: 'black',
                            font: {
                                size: 16
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Savings ($)',
                            color: 'black',
                            font: {
                                size: 16
                            }
                        }
                    }
                }
            }
        });
    };

    useEffect(() => {
        updateChart();
    }, []);

    return (
        <div className='article_container w-full flex justify-center'>
            <main className='wrapper py-16'>
                <header>
                    <h3 className='text-3xl text-center md:text-center'>Retirement Saving calculator</h3>
                    <h4 className='text-center md:text-center'
                        >Plan your financial future with confidence using our Retirement Saving Calculator, 
                        designed to help you determine how much you need to save to retire comfortably.
                    </h4>
                </header>
                
                <section className='container' id="input-section">
                    <div className='calculator_container w-full flex justify-center'>
                        <h3 className='text-3xl text-center md:text-center'>Retirement Plan Inputs</h3>

                        <div className="input_container flex flex-row">
                            <label htmlFor="current-age" className="input_title">Current Age:</label>
                            <div className="input-with-slider">
                                <input
                                type="number"
                                id="current-age"
                                name="current-age"
                                className="py-1 px-1 border rounded-lg"
                                value={currentAge} 
                                onChange={(e) => setCurrentAge(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="current-age-slider"
                                name="current-age-slider"
                                min="18"
                                max="100"
                                value={currentAge} 
                                onChange={handleCurrentAgeChange}
                                />
                            </div>
                        </div>

                        <div className="input_container flex flex-row">
                            <label htmlFor="retire-age" className="input_title">Age of retirement :</label>
                            <div className="input-with-slider">
                                <input
                                type="number"
                                id="retire-age"
                                name="retire-age"
                                className="py-1 px-1 border rounded-lg"
                                value={retireAge} 
                                onChange={(e) => setRetireAge(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="retire-age-slider"
                                name="retire-age-slider"
                                min="18"
                                max="100"
                                value={retireAge} 
                                onChange={handleRetireAgeChange}
                                />
                            </div>
                        </div>

                        <div className="input_container flex flex-row">
                            <label htmlFor="income" className="input_title">Annual household income :</label>
                            <div className="input-with-slider">
                                <input
                                type="number"
                                id="income"
                                name="income"
                                className="py-1 px-1 border rounded-lg"
                                value={formattedIncome} 
                                onChange={(e) => setIncome(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="income-slider"
                                name="income-slider"
                                min="0"
                                max="150"
                                value={income} 
                                onChange={handleIncomeChange}
                                />
                            </div>
                        </div>

                        <div className="input_container flex flex-row">
                            <label htmlFor="current-saving" className="input_title">Annual retirement savings :</label>
                            <div className="input-with-slider">
                                <input
                                type="text"
                                id="current-saving"
                                name="current-saving"
                                className="py-1 px-1 border rounded-lg"
                                value={formattedCurrentSaving} 
                                onChange={(e) => setCurrentSaving(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="current-saving-slider"
                                name="current-saving-slider"
                                min="0"
                                max="100"
                                value={currentSaving} 
                                onChange={handleCurrentSavingChange}
                                />
                            </div>
                        </div>  

                        <div className="input_container flex flex-row">
                            <label htmlFor="retire-saving" className="input_title">Current retirement savings :</label>
                            <div className="input-with-slider">
                                <input
                                type="number"
                                id="retire-saving"
                                name="retire-saving"
                                className="py-1 px-1 border rounded-lg"
                                value={formattedRetireSaving} 
                                onChange={(e) => setRetireSaving(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="retire-saving-slider"
                                name="retire-saving-slider"
                                min="0"
                                max="150"
                                value={retireSaving} 
                                onChange={handleRetireSavingChange}
                                />
                            </div>
                        </div>

                        <div className="input_container flex flex-row">
                            <label htmlFor="expect-income" className="input_title">Expected income increase :</label>
                            <div className="input-with-slider">
                                <input
                                type="text"
                                id="expect-income"
                                name="expect-income"
                                className="py-1 px-1 border rounded-lg"
                                value={formattedExpectIncome} 
                                onChange={(e) => setExpectIncome(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="expect-income-slider"
                                name="expect-income-slider"
                                min="0"
                                max="20"
                                value={expectIncome} 
                                onChange={handleExpectIncomeChange}
                                />
                            </div>
                        </div>

                        <div className="input_container flex flex-row">
                            <label htmlFor="income-required" className="input_title">Income required at retirement :</label>
                            <div className="input-with-slider">
                                <input
                                type="text"
                                id="income-required"
                                name="income-required"
                                className="py-1 px-1 border rounded-lg"
                                value={formattedIncomeRequired} 
                                onChange={(e) => setIncomeRequired(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="income-required-slider"
                                name="income-required-slider"
                                min="50"
                                max="200"
                                value={incomeRequired} 
                                onChange={handleIncomeRequiredChange}
                                />
                            </div>
                        </div>

                        <div className="input_container flex flex-row">
                            <label htmlFor="year" className="input_title">Year of retirement income :</label>
                            <div className="input-with-slider">
                                <input
                                type="number"
                                id="year"
                                name="current-age"
                                className="py-1 px-1 border rounded-lg"
                                value={year} 
                                onChange={(e) => setYear(e.target.value)} 
                                />
                                <input
                                type="range"
                                id="year-slider"
                                name="year-slider"
                                min="1"
                                max="100"
                                value={year} 
                                onChange={handleYearChange}
                                />
                            </div>
                        </div>

                        <div className="calculate_button">
                            <button onClick={handleCalculate}>Calculate</button>
                        </div>
                    </div>
                </section>
                
                <section className='container' id="definition-section">
                    <div className="input_definitions_container">
                        <button className="toggle_definitions_button" onClick={toggleDefinitions}>
                            What does the inputs mean?
                        </button>
                        <div className="input_definitions_content" style={{ display: showDefinitions ? 'block' : 'none' }}>
                            <div className="input_definition">
                                <span className="input_definition_label">Current Age: </span>
                                <span className="input_definition_text">your current age to start planning for your retirement</span>
                            </div>
                            <div className="input_definition">
                                <span className="input_definition_label">Age of retirement: </span>
                                <span className="input_definition_text">the age at which you intend to retire. *Your last contribution occurs one year before your retirement age</span>
                            </div>
                            <div className="input_definition">
                                <span className="input_definition_label">Annual household income: </span>
                                <span className="input_definition_text">your total household income, including your spouse's income if applicable</span>
                            </div>
                            <div className="input_definition">
                                <span className="input_definition_label">Annual retirement savings: </span>
                                <span className="input_definition_text">percentage of your annual income you plan to contribute to your retirement savings, including any employer contributions and retirement accounts</span>
                            </div>
                            <div className="input_definition">
                                <span className="input_definition_label">Current retirement savings: </span>
                                <span className="input_definition_text">total amount currently saved toward your retirement, including all retirement accounts such as 401(k)s, IRAs, and annuities</span>
                            </div>
                            <div className="input_definition">
                                <span className="input_definition_label">Expected income increase: </span>
                                <span className="input_definition_text">annual percentage increase you expect in your household income</span>
                            </div>
                            <div className="input_definition">
                                <span className="input_definition_label">Income required at retirement: </span>
                                <span className="input_definition_text">percentage of your pre-retirement household income you anticipate needing in retirement</span>
                            </div>
                            <div className="input_definition">
                                <span className="input_definition_label">Year of retirement income: </span>
                                <span className="input_definition_text">total number of years you expect to rely on your retirement income</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='graph_container' id="graph-section">
                    <h3 className='text-xl text-center md:text-center'>Generated Graph</h3>
                    <canvas id="retirementChart"></canvas>
                    <p>*This graph is only for reference purpose, it doesn't apply any calculation.</p>
                </section>
            </main>
        </div>
    )
    }
