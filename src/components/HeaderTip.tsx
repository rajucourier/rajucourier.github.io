import React from 'react'
import { FaFacebook, FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

export default function HeaderTip() {
    return (
        <div className="bg-sky-100 py-4">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="https://facebook.com" className="hover:text-blue-600">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://twitter.com" className="hover:text-blue-400">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://instagram.com/Raju_COURIER" className="hover:text-blue-400">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://youtube.com/@RajuCourierHyd" className="hover:text-blue-400">
                        <FaYoutube size={20} />
                    </a>
                    <a href="mailto:rajucourier1@gmail.com" className="hover:text-red-500">
                        <MdEmail size={20} />
                    </a>
                    <a href="tel:+918886253456" className="hover:text-green-500">
                        <MdPhone size={20} />
                    </a>
                </div>

                {/* Contact Information */}
                <div className="flex gap-6 text-sm">
                  <a href="/shipping-calculator" className="hover:text-red-500 font-semibold">
                       Shipping Caluclator
                    </a>
                    <a href="/personal-shopper" className="hover:text-red-500 font-semibold">
                       Personal Shopper
                    </a>
                </div>
            </div>
        </div>
    )
}
