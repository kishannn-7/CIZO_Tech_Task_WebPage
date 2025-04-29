import React from 'react';
import { FbIcon, InstaIcon, XIcon, LinkedinIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600">
            <div className=" max-w-screen  mx-10 md:mx-30 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section */}
                <div>
                    <img src="/src/assets/logo.png" alt="Logo" className="mb-4 h-6" />
                    <p className="text-lg mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/google.png" alt="Google" className="h-9" />
                    </div>
                </div>

                {/* Center Section - Links */}
                <div className="pl-10">
                    <h3 className="font-bold mb-4 text-gray-700 max-w-50">Links</h3>
                    <ul className="space-y-2 text-base">
                        <li className='hover:text-gray-800 cursor-pointer'>About Us</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Services</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Case Studies</li>
                        <li className='hover:text-gray-800 cursor-pointer'>How it works</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Blog</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Careers</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Areas We Serve</li>
                    </ul>
                </div>

                {/* Right Section - Contact */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-700">Contact us</h3>
                    <p className="text-lg mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-base mb-4">+923183561921</p>
                </div>
                <div className='flex flex-col item-center justify-end w-full'>
                <div className="flex flex-row justify-end md:flex-col md:items-end lg:flex-row text-gray-500">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='w-fit'>
                        <FbIcon />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='w-fit'>
                        <InstaIcon />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='w-fit'>
                        <XIcon />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='w-fit'>
                        <LinkedinIcon />
                    </a>
                </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="font-normal text-center text-sm py-4 border-t-1 border-gray-400 text-gray-700">
                © 2023 Copyright by IK Developers. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
