import React from 'react';

const Specs = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h2
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className='text-center font-semibold text-6xl my-16'>FAQs</h2>
                <div>
                    {/* 1 */}
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5" >
                        <div class="collapse-title text-xl font-medium " >
                            <p className='font-semibold text-2xl'> How is NOZE different from other air quality monitors?</p>
                        </div>
                        <div class="collapse-content">
                            <p>The technology behind NOZE is based on a digital nose sensor (also known as an e-nose). With this sensor, NOZE can precisely detect a wide range of pollutants and chemicals. In contrast, almost all other air quality monitors on the market today use a bundle of off-the-shelf sensors that are limited in what they can detect and can vary widely in quality, accuracy and reliability.</p>

                        </div>
                    </div>
                    {/* 2 */}
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                        <div class="collapse-title text-xl font-medium">
                            <p className='font-semibold text-2xl'> What is a digital nose?</p>
                        </div>
                        <div class="collapse-content">
                            <p>A digital nose is a breakthrough technology that digitizes the sense of smell. It’s similar to how the camera digitized the sense of sight and the microphone digitized the sense of hearing.</p>

                        </div>
                    </div>
                    {/* 3 */}
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                        <div class="collapse-title text-xl font-medium">
                            <p className='font-semibold text-2xl'> What is the Virus Risk Index?</p>
                        </div>
                        <div class="collapse-content">
                            <p>The Virus Risk Index is an AI-powered tool built into NOZE to help make indoor spaces safer places to live, work, and visit by monitoring the risk of virus transmission (tracking how conducive the air is to spreading the virus) and the risk of virus presence (tracking the likelihood that the virus is in the air).

                                Note: The Virus Risk Index is not intended to be an alternative to precautionary measures or laboratory testing.</p>

                        </div>
                    </div>
                    {/* 7 */}
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 my-5">
                        <div class="collapse-title text-xl font-medium">
                            <p className='font-semibold text-2xl'> How does the Virus Risk Index work?</p>
                        </div>
                        <div class="collapse-content">
                            <p>The Virus Risk Index is a 10 point scale where values between 1 and 8 indicate an increasing risk of virus transmission, while values of 9 and 10 indicate a likelihood that the virus pathogen is present. To calculate this score, our AI analyzes five things: Airborne Volatiles related to the Coronavirus and Influenza, Particulate Matter, Temperature, Humidity and Carbon Dioxide.y</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                        <div class="collapse-title text-xl font-medium">
                            <p className='font-semibold text-2xl'> What space can it cover?</p>
                        </div>
                        <div class="collapse-content">
                            <p>The molecules in every gas and odour have different properties which impact how far they can travel and how fast they can be detected. A good rule of thumb for a typical indoor space is that NOZE can cover an area of up to 800 square feet (80 square meters) without barriers like walls or doors.</p>

                        </div>
                    </div>
                    {/* 5 */}
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                        <div class="collapse-title text-xl font-medium">
                            <p className='font-semibold text-2xl'>How many NOZE devices do I need?</p>
                        </div>
                        <div class="collapse-content">
                            <p>If you want to monitor different rooms at the same time, we suggest that you place one NOZE in each room, depending on the layout. If you only have one NOZE then you should monitor the room where you spend most of your time or are the most concerned about.</p>

                        </div>
                    </div>
                    {/* 6 */}
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                        <div class="collapse-title text-xl font-medium">
                            <p className='font-semibold text-2xl'> What is the Warranty on NOZE?</p>
                        </div>
                        <div class="collapse-content">
                            <p>NOZE comes with a one-year limited warranty.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specs;