'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";




export default function Header() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <nav className='w-full flex flex-row gap-9 p-4 bg-white '>
        <div className=" w-[20%] ">
          <h1 className='font-bold text-3xl '>FavorShopping</h1>
        </div>
        <div className="nav-routes w-[70%] p-2 ">
          <ul className='flex flex-row gap-3xl gap-8'>
            <li>
              <Link href="/Favour"> Fayor chandelier</Link>
            </li>
            <li>
              <Link href="./staircase"> staircase chandelier</Link>
            </li>
            <li>
              <Link href="/Livingroom"> Livingroom chandelier</Link>
            </li>
            <li>
              <Link href="/Modern"> Modern chandelier</Link>
            </li>
          </ul>
        </div>
        <div className="icons w-[10%] flex flex-row gap-7 p-2 ">
          <CiSearch size={30} />
          <FaRegUser size={25} />
          <AiOutlineShoppingCart size={30} />

        </div>
      </nav>

      <div data-aos="fade-left" className='container-main flex flex-row justify-between p-6 items-center '>
        <div className="content pl-80 items-center">
          <h1 className='text-6xl  pb-2 font-semibold text-white hover:text-purple-400'>Welcome To FavorShopping</h1>
          <p className='text-2xl text-center text-white font-medium hover:text-red-400 hover:font-extrabold'>Modern Chandelier | High Quality | Affordable Price</p>
        </div>

      </div>

      <div data-aos="fade-down" className="div">
        <h1 className='p-4 text-4xl  pt-15 pl-7'>Explore Who We Are</h1>
        <p className='p-4 pt-3 pl-7 text-lg font-light'>FavoerShopping is a modern lighting brand providing personalized technology that combines solid construction, soft light, and luxury design. All our <br />products are made out of high-end materials. By offering a wide range of contemporary and vintage options, we allow our customers to fully meet their <br />interior decoration design needs and create their pieces of art.</p>
        <p className='p-4 pt-3 pl-7 text-lg'>Our stylish designer-picks are curated in an easy-to-browse way, allowing you quick and easy access to search all of our styles in the comfort of your home. <br />It gives you the luxury of comparing chandelier options and measuring what will fit your space with delivery right to your door! We carry high-end, <br />high-value, and everything in between.</p>
      </div>
      <div className="card pt-6" data-aos="fade-down-right">
        <img src="/assets/card-1.jpg" alt="" />
      </div>
      <div>
        <div className="div" data-aos="fade-down-right">
          <h1 className='p-4 text-4xl  pt-15 pl-7'>Customer Focus
          </h1>
          <p className='p-4 pt-3 pl-7 text-lg font-light font-serif'>To fully meet your demand to ensure that you are beyond satisfied when you trade with us, FavorShopping not only supports you directly to make orders <br />online but also welcomes your wholesale offline orders.
          </p>
          <p className='p-4 pt-3 pl-7 text-lg font-light font-serif '>As an emerging business in the world of e-commerce, we are wholly specializing in giving you the chance to encounter the best shopping experience. It is, <br />therefore, of extreme value to us when you communicate with us without bias. We encourage you to contact us in case of any problems you encounter with <br />our products.</p>
        </div>
        <div className="div" data-aos="fade-down-right">
          <h1 className='p-4 text-4xl  pt-15 pl-7'>Our Values</h1>
          <p className='p-4 pt-3 pl-7 text-lg font-light font-serif'>We have our own factory and sell it directly to customers without any middlemen. Therefore, we offer the most favorable price. Also, provide customized <br />product service. According to different customers' requirements, to evaluate customized product projects and design product structure. Try our best to <br />provide the best quality products for you.</p>
          <p className='p-4 pt-3 pl-7 text-lg font-light font-serif'>
            FavorShopping is committed to providing the best quality products and the best chandelier experience for every customer. Enjoy your shopping <br />with FavorShopping, and get our Favor!</p>

        </div>

      </div>
      <div className='  main-card'>
        <div className="card-1" data-aos="fade-left">
          <div className='image-1 '>
            <img src="assets/card1.webp" alt="" />
          </div>
          <div className='heading-1'>
            <h1 className='head'>
              Follow us on Pinterest

            </h1>
            <p className='paragraph'>Shop designer lighting brands! See what's new!</p>
          </div>
        </div>
        <div className="card-1" data-aos="fade-left">
          <div className='image-2 '>
            <img src="assets/card2.webp" alt="" />
          </div>
          <div className='heading-2'>
            <h2 className='heading'>Follow us on Instagram
            </h2>
            <p className='paragraph'>Get inspired from our fresh styles of bubble <br />chandelier, black chandelier, two story foyer <br />chandelier</p>

          </div>
        </div>
        <div className="card-1" data-aos="fade-left">
          <div className='image-3 '>
            <img src="assets/card3.webp" alt="" />
          </div>
          <div className='heading-3'>
            <h1 className='head'>Follow us on Facebook
            </h1>
            <p className='paragraph'>Find the perfect modern chandelier for every room <br />of the house.</p>
          </div>
        </div>

      </div>

      <div className='main-footer'>
        <div className="sub-footer">
          <div className="footer-1">
            <h1>Company Information</h1>
            <p>About us</p>
            <p>Contact us</p>
            <p>FAQs</p>
            <p>Our Blog</p>
            <p>Create VIP Account</p>
          </div>
          <div className="footer-2">
            <h1>Customer Services</h1>
            <p>Order Tracking</p>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms Of Services</p>
            <p>Security And Payment</p>
            <p>Customs And Taxes</p>
          </div>
          <div className="footer-3">
            <div className="f-2">
              <h1>Get In Touch</h1>
              <div className="f-n">
                <FaPhoneAlt />
                1-925-526-5778

              </div>
              <div className="f-e">
                <TfiEmail />
                Email us
              </div>
            </div>
            <div className="f-3">
              <div className="f-h">
                <h1>Follow Us</h1>
              </div>
              <div className="f-i">
                <FaFacebook size={25} />
                <IoLogoYoutube size={25} />
                <FaPinterest size={25} />

              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}
