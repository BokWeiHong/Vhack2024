import React from 'react';
import './style/indices.css';
import indices1 from '../../images/indices1.jpg'
import indices2 from '../../images/indices2.jpg'
import indices3 from '../../images/indices3.jpg'
import indices4 from '../../images/indices4.jpg'

export default function IndicesArticle() {

  return (
    <div className="indices">
        <div className="indices-article hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={indices1} className="max-w-sm rounded-lg shadow-2xl" alt="indices format: jpg"/>
                <div className="p-5">
                    <div className="breadcrumbs text-sm p-5">
                        <ul>
                            <li><a href="/#">Home</a></li> 
                            <li><a href="/#">Market</a></li> 
                            <li>Indices</li>
                        </ul>
                    </div>
                    <h1 className="text-5xl font-bold">Indices</h1>
                    <p className="desc text-xl py-6">An index is a basket of securities (stocks, bonds, etc.) that represents a specific market segment, allowing investors to track its overall performance. </p>
                </div>
            </div>
        </div>


        <div class="grid-cols-1 sm:grid md:grid-cols-3 p-3">
            <div
                class="indices-card mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                <a href="#!">
                <img class="rounded-t-lg" src={indices2} alt="news img; format: webp" />
                </a>
                <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight">Introduction to Indices</h5>
                <p class="mb-4 text-base">
                    Reflect market performance and help investors gauge portfolio health or choose diversified investments.
                </p>
                </div>
                <div
                class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
                <button className="btn btn-primary">Explore</button>
                </div>
            </div>

            <div
                class="indices-card mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                <a href="#!">
                <img class="rounded-t-lg" src={indices3} alt="news img; format: webp" />
                </a>
                <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight">How does indices work?</h5>
                <p class="mb-4 text-base">
                    Investors use indices to gauge market health and portfolio performance.
                </p>
                </div>
                <div
                class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
                <button className="btn btn-primary">Explore</button>
                </div>
            </div>

            <div
                class="indices-card mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                <a href="#!">
                <img class="rounded-t-lg" src={indices4} alt="news img; format: webp" />
                </a>
                <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight">Invest like a pro: Indices</h5>
                <p class="mb-4 text-base">
                    Indices guide market sectors, track performance, and offer diversified, low-cost exposure through index funds
                </p>
                </div>
                <div
                class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
                <button className="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>

        <div className="question p-2">
            <b className="text-2xl p-2">Frequently asked questions</b>

            <div className='p-1'>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        What are indices used for in finance?
                    </div>
                    <div className="collapse-content"> 
                        <p>An index measures the price performance of a basket of securities using a standardized metric and methodology. Indexes in financial markets are often used as benchmarks to evaluate an investment's performance against.</p>
                    </div>
                </div>
            </div>
            
            <div className='p-1'>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        Do billionaires invest in index funds?
                    </div>
                    <div className="collapse-content"> 
                        <p>It's easy to see why S&P 500 index funds are so popular with the billionaire investor class. The S&P 500 has a long history of delivering strong returns, averaging 9% annually over 150 years. In other words, it's hard to find an investment with a better track record than the U.S. stock market.</p>
                    </div>
                </div>
            </div>
            
            <div className="p-1">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        Is it worth investing in indices?
                    </div>
                    <div className="collapse-content"> 
                        <p>Over the long term, index funds have generally outperformed other types of mutual funds. Other benefits of index funds include low fees, tax advantages (they generate less taxable income), and low risk (since they're highly diversified).</p>
                    </div>
                </div>
            </div>
            
            <div className="p-1">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        Are indices risky?
                    </div>
                    <div className="collapse-content"> 
                        <p>Since index funds track a market index and are passively managed, they are less volatile than the actively managed equity funds. Hence, the risks are lower.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ) 
}
