import React from 'react';
import bgImg from '../assets/img2.jpg';
import './page.css';

const Home = () => {
    return (
        <section>
        <div className="register">
            <div className="col-1">
                <h2>Create Bank Account</h2>
                <span>create account and transfer money</span>

                <form id='form' className='flex flex-col'>
                    <input type="number" placeholder='Account Number' />
                    <input type="text" placeholder='Account Name' />
                    <input type="text" placeholder='Account Type' />
                    <input type="text" placeholder='Account Balance' />
                    <input type="text" placeholder='Account Currency' />
                    <input type="text" placeholder='Owner Name' />
                    <button className='btn'>Create Bank Account</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
    );
};

export default Home;