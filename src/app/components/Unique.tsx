'use client';
import Link from 'next/link';
import Image from 'next/image';


function Unique() {
  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="relative flex justify-center items-center">

          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/images/pink.png"
              alt="Background"
              layout="fill"
              className="object-cover"
            />
          </div>

          <Image
            src="/images/sofa2.jpg"
            alt="Sofa"
            width={400}
            height={400}
            className="relative z-10 object-contain"
          />
        </div>

        <div className="px-4 md:px-0">

          <h2 className="text-[#3F509E] text-3xl font-bold mb-6">
            Unique Features Of Latest & Trending Products
          </h2>

          <ul className="space-y-4 mb-8">

            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">
                All frames constructed with hardwood solids and laminates.
              </p>
            </li>

            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#3F509E] flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">
                Reinforced with double wood dowels, glue, screw-nails, corner
                blocks, and machine nails.
              </p>
            </li>

            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">
                Arms, backs, and seats are structurally reinforced.
              </p>
            </li>
          </ul>

          <div className="flex items-center gap-4">

      <Link href="/cart">
        <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors">
          Add To Cart
        </button>
      </Link>

            <div>
              <p className="text-[#3F509E] font-semibold text-sm">B&B Italian Sofa</p>
              <p className="text-[#3F509E] font-bold text-sm">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unique;