'use client';

import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function CreatorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f9f9f9] py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8">
 
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/profile.png"
                alt="Muqaddas Fatima"
                width={150}
                height={150}
                className="rounded-full shadow-lg-[#1D3178]"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1D3178] flex items-center gap-2">
                About the Creator
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Hi, I’m <span className="font-semibold">Hassan Khan</span>, a developer exploring the limitless
                opportunities in <span className="font-semibold">Generative AI</span>, <span className="font-semibold">Metaverse</span>, and <span className="font-semibold">WEB 3.0</span>. I specialize in creating interactive and innovative web solutions while staying ahead of cutting-edge trends.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                When I’m not coding, you’ll find me studing and improving my skills.
              </p>
            </div>
          </div>


          <div className="border-t border-gray-200"></div>

          <div className="bg-[#FEE5E5] sm:bg-[#EDEFFB] p-6 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#FB2E86] flex items-center justify-center gap-2">
              Feel Free to <span className="text-[#1D3178]">Knock</span> <FaHandshake className="text-[#FB2E86]" />
            </h2>
            <div className="mt-6 flex justify-center space-x-8 text-center text-2xl text-[#1D3178]">

              <a
                href="mailto:khassaan139@gmail.com"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>


              <a
                href="https://www.instagram.com/itx_khan_btw"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/HK-Adventures"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hassan-khan-b9a0632b5/"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreatorPage;