import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="w-10/12 mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">Stay Connected</h2>
                    <p className="text-sm text-gray-400 mb-6">
                        Follow us on social media and stay updated with the latest posts.
                    </p>
                    <div className="flex justify-center space-x-6 text-2xl">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-400"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-400"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-400"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-400"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} AK_Blogs. All Rights Reserved.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Designed by Abu Kalam</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
