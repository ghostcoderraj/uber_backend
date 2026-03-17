import React from 'react'
import Hero from '../features/home/components/hero'
import Suggestions from '../features/home/components/suggestions'
import PromoSection from '../features/home/components/promoSection'
import BusinessPromo from '../features/home/components/businessPromo'
import AppPromo from '../features/home/components/appPromo'
import FaqSection from '../features/home/components/faq'

const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Suggestions />

      {/* Drive Promo */}
      <PromoSection
        title="Drive when you want, make what you need"
        description="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
        image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2069&q=80"
        ctaPrimary="Get started"
        ctaSecondary="Already have an account? Sign in"
        imageLeft={false}
      />

      {/* Business Promo */}
      <BusinessPromo />

      {/* App Promo Cards */}
      <AppPromo />

      {/* FAQ Section */}
      <FaqSection />

    </div>
  )
}

export default Home