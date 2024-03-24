import React from 'react';
import'./style/valueService_style.css';
import online from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import onboarding from '../../images/icon-onboarding.svg';
import api from '../../images/icon-api.svg';


export default function ValueService() {
  return (
    <div className='valueService_container w-full flex justify-center'>
        <main className='wrapper py-16'>
            <div>
                <h3 className='text-3xl text-center md:text-left'>Why choose Bee4Invest?</h3>
                <p className='my-8 text-lg text-center md:text-left'>
                    <b>Transform your bank account into your investment launchpad.</b>
                    <br />
                    Bee4Invest makes investing seamless.
                </p>
            </div>
            
            <div class="grid-cols-2 sm:grid md:grid-cols-4">
                <div
                    class="service mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                    <img class="rounded-t-lg p-1" src={online} alt="news img; format: webp" />
                    </a>
                    <h5 class="mb-2 text-xl font-medium leading-tight">Online Banking</h5>
                    <p class="mb-4 text-base">
                    Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                    </p>
                </div>

                <div
                    class="service mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                    <img class="rounded-t-lg p-1" src={budgeting} alt="news img; format: webp" />
                    </a>
                    <h5 class="mb-2 text-xl font-medium leading-tight">Simple Budgeting</h5>
                    <p class="mb-4 text-base">
                        See exctly where your money goes each month. Receieve notificatons when you close to hitting your limits.
                    </p>
                </div>

                <div
                    class="service mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                    <img class="rounded-t-lg p-1" src={onboarding} alt="news img; format: webp" />
                    </a>
                    <h5 class="mb-2 text-xl font-medium leading-tight">Fast Onboarding</h5>
                    <p class="mb-4 text-base">
                        We don't do branches. Open your account in minutes online and start taking control of your finances right away.
                    </p>
                </div>

                <div
                    class="service mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                    <img class="rounded-t-lg p-1" src={api} alt="news img; format: webp" />
                    </a>
                    <h5 class="mb-2 text-xl font-medium leading-tight">Open API</h5>
                    <p class="mb-4 text-base">
                        Manage your savings, investments, pension and much more from one account. Tracking your money has never ben easier.
                    </p>
                </div>
            </div>
        </main>
    </div>
  )
}
