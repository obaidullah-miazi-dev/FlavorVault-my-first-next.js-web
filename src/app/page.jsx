import Banner from '@/components/Banner';
import FeaturesSection from '@/components/FeaturesSection';
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
    </>
  );
};

export default page;