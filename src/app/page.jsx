import Banner from '@/components/Banner';
import FeaturesSection from '@/components/FeaturesSection';
import NewsletterSection from '@/components/NewsletterSection';
import RecentRecipesSection from '@/components/RecentRecipes';
import React from 'react';

export const metadata = {
  title: "Flavorvault",
  description: "Recipes collection website",
};

const page = () => {
  return (
    <>
      <Banner />
      <RecentRecipesSection />
      <FeaturesSection />
      <NewsletterSection />
    </>
  );
};

export default page;