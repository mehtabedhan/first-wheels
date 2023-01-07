import React from 'react'
import { companyName, images, socials } from '../data'
import LandingSection from './LandingSection'
import Link from 'next/link'
import {FaInstagram,FaYoutube,FaLinkedin, FaFacebook} from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
  

    <footer className="p-4 bg-text-primary sm:p-6">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0 flex items-center cursor-pointer">
                    <Link href="/">
                    <div className=''>
                 <Image width='100' height='100' src={images['companyLogo2']} className="ml-2 lg:ml-5" alt="Jungle Tales Logo" />

                           </div>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-bg-primary uppercase">Resources</h2>
                        <ul className="text-bg-secondary">
                            <li className="mb-4">
                                <Link href="/contact" className="hover:underline">Contact us</Link>
                            </li>
                        
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-bg-primary uppercase flex items-center justify-center">Follow us</h2>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <Link href="https://www.instagram.com/jungle__tales" target='_blank' rel='noopener' className="text-bg-secondary hover:text-bg-primary">
                    <FaInstagram/>
                    </Link>
                    <Link href="https://www.youtube.com/jungle__tales" target='_blank' rel='noopener' className="text-bg-secondary hover:text-bg-primary">
                        <FaYoutube/>
                    </Link>

                    <Link href="https://www.facebook.com/jungle__tales" target='_blank' rel='noopener' className="text-bg-secondary hover:text-bg-primary">
                        <FaFacebook/>
                    </Link>
                    <Link href="https://www.linkedin.com/jungle__tales" target='_blank' rel='noopener' className="text-bg-secondary hover:text-bg-primary">
                        <FaLinkedin/>
                    </Link>
                   
                </div>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-bg-primary uppercase">Legal</h2>
                        <ul className="text-bg-secondary">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-4 border-gray-200 sm:mx-auto" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-bg-secondary sm:text-center">© {new Date().getFullYear()}
                <Link href="/" className="hover:underline">{" "+companyName}</Link>. All Rights Reserved.
                </span>
              
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer