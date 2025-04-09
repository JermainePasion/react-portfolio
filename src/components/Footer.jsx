import React from 'react'
import instagram from "../assets/icons/instagram.gif";
import shopee from "../assets/icons/shopee.png";
import facebook from "../assets/icons/facebook.gif";

export default function Footer() {
  return (
    

<footer class="bg-[#ffffff] rounded-lg shadow-sm dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
            <div className="flex flex-wrap justify-center items-center gap-10">
                    <img src={instagram} alt="instagram" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"/>
                    <img src={shopee} alt="shopee" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />
                    <img src={facebook} alt="instagram" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-xs sm:text-sm md:text-base text-gray-500 text-center dark:text-gray-400">
            © 2025 Squirkle Printing Services. All Rights Reserved.
        </span>
    </div>
</footer>


  )
}
