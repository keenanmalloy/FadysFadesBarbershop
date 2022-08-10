import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-scroll";
import { Reviews } from "../Reviews";
import Image from "next/image";
import { Helmet } from "react-helmet";
import { Modal } from "../Modal";
import ContactForm from "../ContactForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState(false);

  if (typeof window === "undefined") {
    console.log("Oops, `window` is not defined");
  } else {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);
  }

  return (
    <div className="App">
      {showModal && (
        <Modal setShowModal={setShowModal} className="overflow-hidden" />
      )}
      <div className="bg-[#1B1F34] font-sans">
        <section className="h-screen">
          <header
            className=
              
                
                 "flex justify-between  px-3 items-center text-white mx-auto container fixed z-50 top-0 right-0 left-0 bg-transparent"
            
          >
            <Link
              href="#home
          "
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {!showModal ? (
                <h2 className="text-2xl  font-Dela">Fady's Fades Barbershop</h2>
              ) : (
                <h2 className="hidden">Fady's Fades Barbershop</h2>
              )}
            </Link>
            <nav>
              <button
                onClick={
                  !showModal
                    ? () => setShowModal(true)
                    : () => setShowModal(false)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={"w-8 h-8 md:hidden fixed top-7 right-2"}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <ul className="hidden md:flex space-x-4 xl:space-x-6 items-center">
                <button className="hover:text-[#f2ae1b]">
                  <Link
                    href="#home"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <li>Home</li>
                  </Link>
                </button>
                <button className="hover:text-[#f2ae1b]">
                  <Link
                    href="#about"
                    className="hover:text-[#f2ae1b]"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <li>About</li>
                  </Link>
                </button>
                <button className="hover:text-[#f2ae1b]">
                  <Link
                    href="#services"
                    className="hover:text-[#f2ae1b]"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <li>Services</li>
                  </Link>
                </button>
                <button className="hover:text-[#f2ae1b]">
                  <Link
                    href="#barbers"
                    to="barbers"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="hover:text-[#f2ae1b]"
                  >
                    <li>Barbers</li>
                  </Link>
                </button>
                <button className="hover:text-[#f2ae1b]">
                  <Link
                    href="#reviews"
                    className="hover:text-[#f2ae1b]"
                    to="reviews"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <li>Reviews</li>
                  </Link>
                </button>
                <button className="hover:text-[#f2ae1b]">
                  <Link
                    href="#contact"
                    className="hover:text-[#f2ae1b]"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <li>Contact</li>
                  </Link>
                </button>
                <Link
                  href="#book"
                  to="book"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <button>
                    <li className="border-[#f2ae1b] border-solid border-2 text-[#f2ae1b] px-5 py-3 hover:bg-[#f2ae1b] hover:text-black font-Dela text-xs">
                      Book Now
                    </li>
                  </button>
                </Link>
              </ul>
            </nav>
          </header>

          <div className="absolute bg-gradient-to-r from-[#1B1F34] to-[#575045] w-full ">
            <img
              src="/images/fadysfadesowner2.PNG"
              className=" mix-blend-overlay h-screen object-cover w-full object-left"
              alt="fadysfades"
            />
          </div>

          <div
            className="relative text-white pt-[160px] pb-[160px] pl-3 container mx-auto "
            id="home"
          >
            <h1 className="text-4xl sm:text-6xl font-Dela leading-normal">
              Burnaby's Best <br /> Barbershop
              <span className="text-[#f2ae1b] text-4xl">.</span>
            </h1>
            {/* <p className="pt-5 pb-5 leading-7  text-[#959DCC]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p> */}

            <button className="px-5 py-3 mt-10 bg-[#f2ae1b] text-black font-bold hover:bg-[#15182B] hover:text-[#f2ae1b] border-solid border border-[#f2ae1b]">
              <Link href="#book">Book Appointment</Link>
            </button>
          </div>
        </section>
        <section
          className="relative after:w-1/4 after:h-full after:bg-[#f2ae1b] after:absolute after:top-0 after:left-0"
          id="about"
        >
          <div className="lg:ml-36 xl:ml-52 2xl:ml-80 py-32">
            <div className="flex flex-col sm:flex-row leading-loose lg:space-x-20">
              <div className="flex justify-center px-5 z-10">
                <img
                  src="images/fadysfadesowner.jpg"
                  alt=""
                  className="grayscale object-cover"
                />
              </div>
              <div className="flex flex-col pt-20 px-5 items-center sm:items-start z-10">
                <h3 className="text-[#f2ae1b] font-bold">About us</h3>
                <h2 className="text-white font-Dela text-3xl pb-5">
                  About Fady's Fades
                </h2>
                <p className="text-[#959DCC] w-80 px-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa laborum omnis, eveniet cumque a accusamus, nisi illo
                  voluptate commodi ab nobis quidem. Nulla, atque incidunt
                  ratione adipisci iure suscipit id. <br /> <br /> Quibusdam
                  dolores atque rem perspiciatis amet sequi praesentium
                  cupiditate voluptas? Unde accusamus necessitatibus amet
                  placeat doloribus ab temporibus quia. Quam minima veritatis
                  alias ratione atque aspernatur quidem ipsa unde cumque.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#15182B]">
          <div
            className="text-center space-y-2 pt-24 sm:pt-14 pb-16 flex flex-col "
            id="services"
          >
            <h3 className="text-[#f2ae1b] font-Dela">What we offer?</h3>
            <h2 className="text-white font-Dela text-4xl pb-5">Our Services</h2>
            {/* <p className="text-[#959DCC] leading-relaxed lg:px-80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nostrum, inventore ducimus temporibus doloribus incidunt, porro
              ullam obcaecati quo nisi fugiat nemo id minima perspiciatis
              recusandae placeat natus modi reprehenderit.
            </p> */}
          </div>
          {/* REACT COMPONENT SERVICES */}
          <div className="lg:flex">
            <div className="text-center space-y-2 flex flex-col lg:w-1/3">
              <div className="flex items-center justify-center">
                <img
                  src="images/fadysfadescut2.PNG"
                  alt=""
                  className="max-w-xs"
                />
              </div>
              <h2 className="text-white font-Dela text-xl py-5">
                Hair Cutting
              </h2>
              <p className="text-[#f2ae1b] leading-relaxed lg:px-5">24$</p>
              {/* <div className="py-7 flex justify-center">
                <button className="text-[#959DCC] font-bold flex items-center text-sm hover:text-[#f2ae1b]">
                  KNOW MORE <AiOutlineArrowRight />
                </button>
              </div> */}
            </div>
            <div className="text-center space-y-2 lg:w-1/3">
              <div className="flex items-center justify-center">
                <img
                  src="images/fadysfadescut3.PNG"
                  alt=""
                  className="max-w-xs"
                />
              </div>
              <h2 className="text-white font-Dela text-xl py-5">
                Beard Trimming
              </h2>
              <p className="text-[#f2ae1b] leading-relaxed lg:px-5">21$</p>
              {/* <div className="py-7 flex justify-center ">
                <button className="text-[#959DCC] font-bold flex items-center text-sm hover:text-[#f2ae1b]">
                  KNOW MORE <AiOutlineArrowRight />
                </button>
              </div> */}
            </div>
            <div className="text-center space-y-2 lg:w-1/3">
              <div className="flex items-center justify-center">
                <img
                  src="images/fadysfadescut4.PNG"
                  alt=""
                  className="max-w-xs"
                />
              </div>
              <h2 className="text-white font-Dela text-xl py-5">Cold Shave</h2>
              <p className="text-[#f2ae1b] leading-relaxed lg:px-5">25$</p>
              {/* <div className="py-7 flex justify-center">
                <button className="text-[#959DCC] font-bold flex items-center text-sm hover:text-[#f2ae1b]">
                  KNOW MORE <AiOutlineArrowRight />
                </button>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 lg:pt-10 lg:pb-32">
            <div className="bg-[#f2ae1b] w-40 h-12 font-Dela flex justify-center hover:bg-[#15182B] hover:text-[#f2ae1b] border-solid border border-[#f2ae1b]">
              <Link href="#book">
                <button>Appointment</button>
              </Link>
            </div>
            <div className="text-[#f2ae1b] border-solid border border-[#f2ae1b] w-40 h-12 font-Dela flex justify-center  hover:bg-[#f2ae1b] hover:text-[black]">
              <Link href="#contact">
                <button>Get in touch</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full pt-20 bg-[#15182B]">
          <div>
            <Carousel
              className="flex flex-col justify-center items-center"
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}
              width="80%"
            >
              <img src="/images/fadysfadescut5.PNG" alt="" />

              <img src="/images/fadysfadescut6.PNG" alt="" />

              <img src="/images/fadysfadescut7.PNG" alt="" />

              <img src="/images/fadysfadescut8.PNG" alt="" />

              <img src="/images/fadysfadescut9.PNG" alt="" />

              <img src="/images/fadysfadescut10.PNG" alt="" />

              <img src="/images/fadysfadescut11.PNG" alt="" />

              <img src="/images/fadysfadescut1.jpg" alt="" />
              <img src="/images/fadysfadescut2.PNG" alt="" />
              <img src="/images/fadysfadescut3.PNG" alt="" />
              <img src="/images/fadysfadescut4.PNG" alt="" />
            </Carousel>
          </div>
        </section>
        <section className="bg-[#15182B]" id="barbers">
          <div className="text-center space-y-2 pt-16  flex flex-col ">
            <h3 className="text-[#f2ae1b] font-Dela">Barbers</h3>
            <h2 className="text-white font-Dela text-4xl pb-5">
              Meet Our Barbers
            </h2>
          </div>
          {/* REACT COMPONENT SERVICES */}
          <div className="lg:flex flex justify-center">
            <div className="text-center flex flex-col lg:w-1/3">
              <div className="flex items-center justify-center">
                <img
                  src="images/fadysfadesowner.jpg"
                  alt=""
                  className="max-w-xs"
                />
              </div>
              <h2 className="text-white font-Dela text-xl py-5">
                Danny Barber
              </h2>
              <p className="text-[#959DCC] leading-relaxed lg:px-5 pb-10">
                Hair Cutter
              </p>
            </div>
            {/* <div className="text-center space-y-2 flex flex-col lg:w-1/3">
              <div className="flex items-center justify-center">
                <img
                  src="images/fadysfadesowner.jpg"
                  alt=""
                  className="max-w-xs"
                />
              </div>
              <h2 className="text-white font-Dela text-xl py-5">
                Danny Barber
              </h2>
              <p className="text-[#959DCC] leading-relaxed lg:px-5 pb-10">
                Hair Cutter
              </p>
            </div> */}
            {/* <div className="text-center space-y-2 flex flex-col lg:w-1/3">
              <div className="flex items-center justify-center">
                <img
                  src="images/fadysfadesowner.jpg"
                  alt=""
                  className="max-w-xs"
                />
              </div>
              <h2 className="text-white font-Dela text-xl py-5">
                Danny Barber
              </h2>
              <p className="text-[#959DCC] leading-relaxed lg:px-5 pb-10">
                Hair Cutter
              </p>
            </div> */}
          </div>
        </section>
        <section className="bg-[#1B1F34]" id="reviews">
          <div>
            <div className="text-center space-y-2 pt-24 pb-16 flex flex-col ">
              <h3 className="text-[#f2ae1b] font-Dela">Reviews</h3>
              <h2 className="text-white font-Dela text-4xl pb-5">
                What our customers say about us
              </h2>
              <h3 className="text-[#f2ae1b] font-Dela leading-relaxed lg:px-80">
                Over 90 5 star reviews from our customers!
              </h3>
            </div>
          </div>
          <Reviews />
          <div className="flex items-center justify-center  py-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7609568201915!2d-123.01519768255615!3d49.280926599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548670ced588d327%3A0xcd18ef84e325ef15!2sFady%E2%80%99s%20Fades%20Barber%20Shop%20%26%20Hairstyling!5e0!3m2!1sen!2sca!4v1660150404766!5m2!1sen!2sca"
              width="800"
              height="600"
              className="border-0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        {/* <!-- Calendly inline widget begin --> */}

        <section id="book" className="bg-[#15182B] py-40">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/malloyrkeenan"
            style={{ minWidth: "320px", height: "630px" }}
          ></div>
          <Helmet>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
          </Helmet>
        </section>
        {/* <!-- Calendly inline widget end --> */}
        <section className="bg-[#15182B] pb-24" id="contact">
          <div className="text-center space-y-2 pt-24 pb-16 flex flex-col ">
            <h3 className="text-white font-Dela text-4xl">Contact Us</h3>
          </div>

          <ContactForm />
        </section>

        <footer className="text-[#959DCC] leading-relaxed flex flex-col md:flex-row text-center space-x-5 justify-center p-10  bg-[#15182B] ">
          <div className="flex-1 pb-5">
            <Image src="/images/fadyslogo.jpg" height={200} width={200} />
            {/* <h3 className="text-white font-Dela text-2xl pb-5">Fady's Fades Barbershop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid minus error perferendis illo. Id nemo commodi repellendus culpa nihil facere reiciendis? Adipisci iure ducimus ut ad, enim excepturi architecto.
            </p> */}
          </div>
          <div className="flex-1 pb-5">
            <h3 className="text-white font-Dela text-2xl pb-5">
              Working Hours
            </h3>
            <h4 className="text-white font-Dela pb-5">Monday-Sunday</h4>
            <div className="space-y-2">
              <p>Monday, 9a.m.–7p.m.</p>
              <p>Tuesday, 9a.m.–7p.m.</p>
              <p>Wednesday, 9a.m.–7p.m.</p>
              <p>Thursday, 9a.m.–7p.m.</p>
              <p>Friday, 9a.m.–7p.m.</p>
              <p>Saturday, 8a.m.–7p.m.</p>
              <p>Sunday, 10a.m.–5p.m.</p>
            </div>
          </div>
          <div className="flex-1 pb-5">
            <h3 className="text-white font-Dela text-2xl pb-5">Contact Us</h3>
            <p>4138 Hastings St, Burnaby, BC V5C 2J4</p>
            <Link href="tel:+16045665241">+16045665241</Link>
            <p>fadysfades@hotmail.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
