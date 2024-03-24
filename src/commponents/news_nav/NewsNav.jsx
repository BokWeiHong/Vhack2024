import React from 'react';
import './style/news_nav.css';

export default function NewsNav() {

  return (
    <div className="news_nav flex justify-center">
        <div className="join">
            <button className="btn join-item btn-sm">Companies</button>
            <button className="btn join-item btn-sm">Earnings</button>
            <button className="btn join-item btn-sm">CD Rates</button>
            <button className="btn join-item btn-sm">Economy</button>
            <button className="btn join-item btn-sm">Government</button>
            <button className="btn join-item btn-sm">ETFs</button>
            <button className="btn join-item btn-sm">Crypto</button>
            <button className="btn join-item btn-sm">Personal Finance</button>
        </div>
    </div>
  )
}