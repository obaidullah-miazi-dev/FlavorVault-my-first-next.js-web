import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-between items-center w-10/12 mx-auto mt-20 xl:gap-36 gap-12'>
            {/* banner content */}
            <div className='flex flex-col xl:items-start items-center flex-1'>
                <h1 className='xl:text-7xl text-4xl text-center xl:text-left font-extrabold mb-5'>Your Kitchen <span className='text-orange-600'>Companion</span> <br /> for Every <span className='text-orange-600'>Recipe</span></h1>
                <p className='text-xl xl:text-nowrap text-center xl:text-left mb-5'>Explore curated recipes, read details, and manage your own cooking collection.</p>
                <Link href='/recipes'><Button className={`rounded-xl`}>Explore Recipes</Button></Link>
            </div>

            {/* banner image  */}
            <div className='flex-1'>
                <Image src="/images/BannerImage.png" alt="logo" width={800} height={800} className='mx-auto'/>
            </div>
        </div>
    );
};

export default Banner;