import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='flex justify-between items-center w-10/12 mx-auto mt-20 gap-36'>
            {/* banner content */}
            <div>
                <h1 className='text-7xl font-extrabold mb-5'>Your Kitchen <span className='text-orange-600'>Companion</span> <br /> for Every <span className='text-orange-600'>Recipe</span></h1>
                <p className='text-xl text-nowrap mb-5'>Explore curated recipes, read details, and manage your own cooking collection.</p>
                <Link href='/recipes'><Button className={`rounded-xl`}>Explore Recipes</Button></Link>
            </div>

            {/* banner image  */}
            <div>
                <Image src="/images/BannerImage.png" alt="logo" width={800} height={800} />
            </div>
        </div>
    );
};

export default Banner;