import React from 'react';
import './style/news_article.css'

import news1 from '../../images/news1.webp'
import news2 from '../../images/news2.webp'
import news3 from '../../images/news3.webp'
import news4 from '../../images/news4.webp'
import news5 from '../../images/news5.webp'

export default function NewsArticle() {

  return (
    <div className="news-article">
        <div className="news-header mb-2 text-3xl p-5">
            <h1>Latest News</h1>
        </div>

        <div className="grid-cols-1 sm:grid md:grid-cols-2">
            <div className="headline p-3">
                <div className="flex flex-col w-full">
                    <div className="grid rounded-box">
                        <div class="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row ">
                            <img
                                class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                                src={news5} alt="news img; format: webp" />
                            <div class="flex flex-col justify-start p-6">
                                <h5 class="mb-2 text-xl font-medium">5 Things to Know Before the Stock Market Opens</h5>
                                <p class="mb-4 text-base">
                                News
                                </p>
                                <p class="text-xs text-surface/75 dark:text-neutral-300">
                                By <b>No Name</b> - Published March 21, 2024
                                </p>
                            </div>
                        </div>
                    </div> 

                    <div className="divider"></div> 

                    <div className="grid rounded-box">
                        <div class="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row ">
                            <img
                                class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                                src={news5} alt="news img; format: webp" />
                            <div class="flex flex-col justify-start p-6">
                                <h5 class="mb-2 text-xl font-medium">5 Things to Know Before the Stock Market Opens</h5>
                                <p class="mb-4 text-base">
                                News
                                </p>
                                <p class="text-xs text-surface/75 dark:text-neutral-300">
                                By <b>No Name</b> - Published March 21, 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="news-video embed-responsive embed-responsive-4by3 relative w-full overflow-hidden">
                <iframe
                    class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    allowfullscreen=""
                    data-gtm-yt-inspected-2340190_699="true"
                    id="240632615"></iframe>
            </div>
        </div>
        
        <br />

        <div role="tablist" className="tabs tabs-bordered">
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="All" />
            <div role="tabpanel" className="tab-content">
                <div class="grid-cols-2 sm:grid md:grid-cols-4">
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news1} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Inflation Remained Higher Than Economists Had Expected in February</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 01, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news2} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Economy News Today: You Won't Hear From Fed Members on Tomorrow's Inflation Report</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 13, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news3} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">What To Expect in the Markets This Week</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 17, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news4} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">Rising Cocoa Prices Make Chocolate More Expensive This Valentine's Day</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 20, 2024</small>
                        </div>
                    </div>
                </div>

                <div class="grid-cols-2 sm:grid md:grid-cols-4">
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news1} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Inflation Remained Higher Than Economists Had Expected in February</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 01, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news2} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Economy News Today: You Won't Hear From Fed Members on Tomorrow's Inflation Report</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 13, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news3} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">What To Expect in the Markets This Week</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 17, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news4} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">Rising Cocoa Prices Make Chocolate More Expensive This Valentine's Day</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 20, 2024</small>
                        </div>
                    </div>
                </div>

                <div class="grid-cols-2 sm:grid md:grid-cols-4">
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news1} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Inflation Remained Higher Than Economists Had Expected in February</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 01, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news2} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Economy News Today: You Won't Hear From Fed Members on Tomorrow's Inflation Report</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 13, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news3} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">What To Expect in the Markets This Week</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 17, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news4} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">Rising Cocoa Prices Make Chocolate More Expensive This Valentine's Day</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 20, 2024</small>
                        </div>
                    </div>
                </div>

                <div class="grid-cols-2 sm:grid md:grid-cols-4">
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news1} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Inflation Remained Higher Than Economists Had Expected in February</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 01, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news2} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">US Economy News Today: You Won't Hear From Fed Members on Tomorrow's Inflation Report</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 13, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news3} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">What To Expect in the Markets This Week</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 17, 2024</small>
                        </div>
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                        <img class="rounded-t-lg" src={news4} alt="news img; format: webp" />
                        </a>
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">Rising Cocoa Prices Make Chocolate More Expensive This Valentine's Day</h5>
                        <p class="mb-4 text-base">
                            News
                        </p>
                        </div>
                        <div
                        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
                        <small>By <b>No Name</b> Feb 20, 2024</small>
                        </div>
                    </div>
                </div>

                <div className="p-5">
                    <div role="alert" className="alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>Warning: The news provided above are not real. Please do not take as referance.</span>
                    </div>
                </div>
                
            </div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Companies" />
            <div role="tabpanel" className="tab-content p-10">In progress ...</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Earnings" />
            <div role="tabpanel" className="tab-content p-10">In progress ...</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Economy" />
            <div role="tabpanel" className="tab-content p-10">In progress ...</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Government" />
            <div role="tabpanel" className="tab-content p-10">In progress ...</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="ETFs" />
            <div role="tabpanel" className="tab-content p-10">In progress ...</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Crypto" />
            <div role="tabpanel" className="tab-content p-10">In progress ...</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="More" />
            <div role="tabpanel" className="tab-content p-10">In progress ...</div>
        </div>
        

    </div>
    ) 
}
