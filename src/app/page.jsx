import Banner from '@/components/Banner';
import FeaturesSection from '@/components/FeaturesSection';
import NewsletterSection from '@/components/NewsletterSection';
import RecentRecipesSection from '@/components/RecentRecipes';
import TestimonialSection from '@/components/TestimonialSection';
import React from 'react';

export const metadata = {
  title: "Flavorvault",
  description: "Recipes collection website",
  icons: {
    icon: "/Logo.png",
  },
};

const page = () => {
  return (
    <>
      <Banner />
      <RecentRecipesSection />
      <FeaturesSection />
      <TestimonialSection />
      <NewsletterSection />
    </>
  );
};

export default page;