import React from 'react';
import './style/market_nav.css';
import { Link } from 'react-router-dom';
export default function MarketNav() {

  return (
    <div className="market_nav flex justify-center">
        <div className="join">
            <button className="btn join-item btn-sm"><Link to="/market/indices">Indices</Link></button>
            <button className="btn join-item btn-sm">Stocks</button>
            <button className="btn join-item btn-sm">Commodities</button>
            <button className="btn join-item btn-sm">Cyptocurrrency</button>
            <button className="btn join-item btn-sm">Currencies</button>
            <button className="btn join-item btn-sm">ETFs</button>
            <button className="btn join-item btn-sm">Funds</button>
        </div>
    </div>
  )
}