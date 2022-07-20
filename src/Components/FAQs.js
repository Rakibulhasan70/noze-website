import React from 'react';
import faqs from '../../src/assests/NOZE-Hero-7.png'

const FAQs = () => {
    return (
        <div id='Specs'>
            <div className='my-5'>
                <img style={{ width: '100%', height: 'auto', }} src={faqs} alt="" />
            </div>
            <div className='container mx-auto mt-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <h2 className='text-6xl' style={{ fontWeight: '500' }}>Specifications</h2>
                    </div>
                    <div>
                        {/* 1 */}
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5" >
                            <div class="collapse-title text-xl font-medium " >
                                <p style={{ fontWeight: '600', fontSize: '26px' }}> What's in the box?</p>
                            </div>
                            <div class="collapse-content">
                                <p>NOZE Device</p>
                                <p>Power Adaptor</p>
                                <p>Cable</p>
                                <p>Quick Start Guide</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                            <div class="collapse-title text-xl font-medium">
                                <p style={{ fontWeight: '600', fontSize: '26px' }}> Dimensions & Weight</p>
                            </div>
                            <div class="collapse-content">
                                <p>Width: 86mm</p>
                                <p>Depth: 86mm</p>
                                <p>Height: 167 mm</p>
                                <p>Weight: 650g</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                            <div class="collapse-title text-xl font-medium">
                                <p style={{ fontWeight: '600', fontSize: '26px' }}> Power</p>
                            </div>
                            <div class="collapse-content">
                                <p>Input: 100–240 V AC 0.2 A</p>
                                <p>DC Output: 5 V DC 3.0 A</p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                            <div class="collapse-title text-xl font-medium">
                                <p style={{ fontWeight: '600', fontSize: '26px' }}> Connectivity</p>
                            </div>
                            <div class="collapse-content">
                                <p>802.11 a/b/g/n (2.4 GHz) Wi-Fi</p>
                                <p>Bluetooth Low Energy</p>
                            </div>
                        </div>
                        {/* 5 */}
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                            <div class="collapse-title text-xl font-medium">
                                <p style={{ fontWeight: '600', fontSize: '26px' }}>Requirements</p>
                            </div>
                            <div class="collapse-content">
                                <p>Nearby electrical socket</p>
                                <p> WiFi Network</p>
                                <p> Compatible mobile device with iOS 8 or later, or Android 4 or later</p>
                                <p> The free NOZE app</p>
                            </div>
                        </div>
                        {/* 6 */}
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 mt-5">
                            <div class="collapse-title text-xl font-medium">
                                <p style={{ fontWeight: '600', fontSize: '26px' }}> Detection Ranges</p>
                            </div>
                            <div class="collapse-content">
                                <p>Mould Index: 1 to 10</p>
                                <p>    Virus Index: 1 to 10</p>
                                <p>Carbon Dioxide: 0.1 to 2000 ppm</p>
                                <p> Ammonia: 0.1 to 50 ppm</p>
                                <p>  Formaldehyde: 0.1 to 2 ppm</p>
                                <p>Butanal: 0.1 to 50 ppm</p>
                                <p>Nitrogen Dioxide: 0.1 to 5 ppm</p>
                                <p>Ethanol: 1000 ppm to 3000 ppm</p>
                                <p>  Tobacco Odour: Present/Absent</p>
                                <p>PM 2.5: 0 to 1000 μg/m3</p>
                                <p> PM 10: 0 to 1000 μg/m3</p>
                                <p> Humidity: 10% to 80%</p>
                            </div>
                        </div>
                        {/* 7 */}
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box p-3 my-5">
                            <div class="collapse-title text-xl font-medium">
                                <p style={{ fontWeight: '600', fontSize: '26px' }}> Warranty</p>
                            </div>
                            <div class="collapse-content">
                                <p>One-year limited warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;