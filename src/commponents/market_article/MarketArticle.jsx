import React from 'react';
import './style/market_article.css';

import chart1 from '../../images/chart1.png'
import chart2 from '../../images/chart2.png'
import chart3 from '../../images/chart3.png'
import chart4 from '../../images/chart4.png'
import chart5 from '../../images/chart5.png'

export default function MarketArticle() {

  return (
    <div className="world-chart">
      <div className="financial-market hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">World Financial Markets</h1>
            <p className="py-6">Unlock Investment Opportunities: Stay informed about global market trends and make smarter investment decisions.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full lg:flex-row p-6">
        <div class="grid flex-grow h-32 bg-base-300">
          <p class="yellow-text"><b>S&P 500</b></p>
          <p>5,224.62</p>
          <div class="chart w-full">
            <img src={chart1} alt="chart img; format: png" />
          </div>
        </div> 
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid flex-grow h-32 bg-base-300">
          <p class="yellow-text"><b>DAX</b></p>
          <p>18,100.46</p>
          <div class="chart w-full">
            <img src={chart2} alt="chart img; format: png" />
          </div>
        </div>
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid flex-grow h-32 bg-base-300">
          <p class="yellow-text"><b>FTSE 100</b></p>
          <p>7.808.62</p>
          <div class="chart w-full">
            <img src={chart3} alt="chart img; format: png" />
          </div>
        </div>
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid flex-grow h-32 bg-base-300">
          <p class="yellow-text"><b>Nikkei 225</b></p>
          <p>40,835.00</p>
          <div class="chart w-full">
            <img src={chart4} alt="chart img; format: png" />
          </div>
        </div>
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid flex-grow h-32 bg-base-300">
          <p class="yellow-text"><b>Gold</b></p>
          <p>2,208.15</p>
          <div class="chart w-full">
            <img src={chart5} alt="chart img; format: png" />
          </div>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-bordered p-5">
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Overview"/>
        <div role="tabpanel" className="tab-content p-5">
          <div className="overflow-x-auto">

            <p className="text p-3"><b>World Indices</b></p>
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th> 
                  <th>Name</th> 
                  <th>Last</th> 
                  <th>Change</th> 
                  <th>Chg. %</th> 
                  <th>Market Overview</th> 
                  <th>Advantage</th>
                  <th>Disadvantage</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <th>1</th> 
                  <td>Dow Jones</td> 
                  <td>39,512.13</td> 
                  <td>+401.37</td> 
                  <td>+1.03%</td> 
                  <td><progress className="progress progress-success w-1/2" value="90" max="100"></progress></td> 
                  <td class="green-text">28</td>
                  <td class="red-text">2</td>
                </tr>
                <tr>
                  <th>2</th> 
                  <td>Dax</td> 
                  <td>18,080.85</td> 
                  <td>+68.92</td> 
                  <td>+0.38%</td> 
                  <td><progress className="progress progress-success w-1/2" value="70" max="100"></progress></td> 
                  <td class="green-text">28</td>
                  <td class="red-text">12</td>
                </tr>
                <tr>
                  <th>3</th> 
                  <td>Nasdaq 100</td> 
                  <td>18,240.11</td> 
                  <td>+207.90</td> 
                  <td>+1.15%</td> 
                  <td><progress className="progress progress-success w-1/2" value="80" max="100"></progress></td> 
                  <td class="green-text">82</td>
                  <td class="red-text">19</td>
                </tr>
                <tr>
                  <th>4</th> 
                  <td>Nikkei 225</td> 
                  <td>40,432.16</td> 
                  <td>+831.40</td> 
                  <td>+2.08%</td> 
                  <td><progress className="progress progress-success w-1/2" value="85" max="100"></progress></td> 
                  <td class="green-text">187</td>
                  <td class="red-text">37</td>
                </tr>
                <tr>
                  <th>5</th> 
                  <td>FTSE 100</td> 
                  <td>7,870.47</td> 
                  <td>+133.82</td> 
                  <td>+1.72%</td> 
                  <td><progress className="progress progress-success w-1/2" value="88" max="100"></progress></td> 
                  <td class="green-text">85</td>
                  <td class="red-text">14</td>
                </tr>
              </tbody>
            </table>

            <br/>

            <p className="text p-3"><b>World Stocks</b></p>
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th> 
                  <th>Name</th> 
                  <th>Last</th> 
                  <th>Previous</th> 
                  <th>High</th> 
                  <th>Low</th> 
                  <th>Chg. %</th>
                  <th>Volume</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <th>1</th> 
                  <td>Intel</td> 
                  <td>43.48</td> 
                  <td>42.05</td> 
                  <td>43.60</td> 
                  <td>42.75</td> 
                  <td class="green-text">+3.23%</td> 
                  <td>7.03M</td>
                </tr>
                <tr>
                  <th>2</th> 
                  <td>Apple</td> 
                  <td>176.63</td> 
                  <td>176.08</td> 
                  <td>177.49</td> 
                  <td>176.38</td> 
                  <td class="red-text">-1.20%</td> 
                  <td>7.09M</td>
                </tr>
                <tr>
                  <th>3</th> 
                  <td>Amazon.com</td> 
                  <td>179.54</td> 
                  <td>175.90</td> 
                  <td>181.41</td> 
                  <td>179.26</td> 
                  <td class="green-text">+0.77%</td>
                  <td>7.10M</td>
                </tr>
                <tr>
                  <th>4</th> 
                  <td>Cisco</td> 
                  <td>49.94</td> 
                  <td>49.14</td> 
                  <td>50.03</td> 
                  <td>49.56</td> 
                  <td class="green-text">+0.81%</td>
                  <td>4.42M</td>
                </tr>
                <tr>
                  <th>5</th> 
                  <td>Microsoft</td> 
                  <td>428.92</td> 
                  <td>421.41</td> 
                  <td>427.66</td> 
                  <td>430.82</td> 
                  <td class="green-text">+0.83%</td>
                  <td>4.46M</td>
                </tr>
              </tbody>
            </table>

            <br/>

            <p className="text p-3"><b>Indices Futures</b></p>
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th> 
                  <th>Name</th> 
                  <th>Last</th> 
                  <th>Change</th> 
                  <th>Chg. %</th> 
                  <th>Market Overview</th> 
                  <th>Advantage</th>
                  <th>Disadvantage</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <th>1</th> 
                  <td>Dow Jones</td> 
                  <td>39,512.13</td> 
                  <td>+401.37</td> 
                  <td>+1.03%</td> 
                  <td><progress className="progress progress-success w-1/2" value="90" max="100"></progress></td> 
                  <td class="green-text">28</td>
                  <td class="red-text">2</td>
                </tr>
                <tr>
                  <th>2</th> 
                  <td>Dax</td> 
                  <td>18,080.85</td> 
                  <td>+68.92</td> 
                  <td>+0.38%</td> 
                  <td><progress className="progress progress-success w-1/2" value="70" max="100"></progress></td> 
                  <td class="green-text">28</td>
                  <td class="red-text">12</td>
                </tr>
                <tr>
                  <th>3</th> 
                  <td>Nasdaq 100</td> 
                  <td>18,240.11</td> 
                  <td>+207.90</td> 
                  <td>+1.15%</td> 
                  <td><progress className="progress progress-success w-1/2" value="80" max="100"></progress></td> 
                  <td class="green-text">82</td>
                  <td class="red-text">19</td>
                </tr>
                <tr>
                  <th>4</th> 
                  <td>Nikkei 225</td> 
                  <td>40,432.16</td> 
                  <td>+831.40</td> 
                  <td>+2.08%</td> 
                  <td><progress className="progress progress-success w-1/2" value="85" max="100"></progress></td> 
                  <td class="green-text">187</td>
                  <td class="red-text">37</td>
                </tr>
                <tr>
                  <th>5</th> 
                  <td>FTSE 100</td> 
                  <td>7,870.47</td> 
                  <td>+133.82</td> 
                  <td>+1.72%</td> 
                  <td><progress className="progress progress-success w-1/2" value="88" max="100"></progress></td> 
                  <td class="green-text">85</td>
                  <td class="red-text">14</td>
                </tr>
              </tbody>
            </table>

            <br/>

            <p className="text p-3"><b>Real Time Commodities</b></p>
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th> 
                  <th>Name</th> 
                  <th>Last</th> 
                  <th>Previous</th> 
                  <th>High</th> 
                  <th>Low</th> 
                  <th>Chg. %</th>
                  <th>Volume</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <th>1</th> 
                  <td>Intel</td> 
                  <td>43.48</td> 
                  <td>42.05</td> 
                  <td>43.60</td> 
                  <td>42.75</td> 
                  <td class="green-text">+3.23%</td> 
                  <td>7.03M</td>
                </tr>
                <tr>
                  <th>2</th> 
                  <td>Apple</td> 
                  <td>176.63</td> 
                  <td>176.08</td> 
                  <td>177.49</td> 
                  <td>176.38</td> 
                  <td class="red-text">-1.20%</td> 
                  <td>7.09M</td>
                </tr>
                <tr>
                  <th>3</th> 
                  <td>Amazon.com</td> 
                  <td>179.54</td> 
                  <td>175.90</td> 
                  <td>181.41</td> 
                  <td>179.26</td> 
                  <td class="green-text">+0.77%</td>
                  <td>7.10M</td>
                </tr>
                <tr>
                  <th>4</th> 
                  <td>Cisco</td> 
                  <td>49.94</td> 
                  <td>49.14</td> 
                  <td>50.03</td> 
                  <td>49.56</td> 
                  <td class="green-text">+0.81%</td>
                  <td>4.42M</td>
                </tr>
                <tr>
                  <th>5</th> 
                  <td>Microsoft</td> 
                  <td>428.92</td> 
                  <td>421.41</td> 
                  <td>427.66</td> 
                  <td>430.82</td> 
                  <td class="green-text">+0.83%</td>
                  <td>4.46M</td>
                </tr>
              </tbody>
            </table>

            <br />

            <div role="alert" className="alert alert-warning">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>Warning: The data provided in the tables is invalid. Please do not take as referance.</span>
            </div>
          </div>
        </div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Indices"  />
        <div role="tabpanel" className="tab-content p-10">In progress ...</div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Stocks" />
        <div role="tabpanel" className="tab-content p-10">In progress ...</div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="ETFs" />
        <div role="tabpanel" className="tab-content p-10">In progress ...</div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Futures" />
        <div role="tabpanel" className="tab-content p-10">In progress ...</div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Currencies" />
        <div role="tabpanel" className="tab-content p-10">In progress ...</div>
      </div>

    </div>

  )
}