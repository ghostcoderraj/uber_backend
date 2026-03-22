import React from 'react'
import Hero from '../features/home/components/hero'
import Suggestions from '../features/home/components/suggestions'
import PromoSection from '../features/home/components/promoSection'
// import BusinessPromo from '../features/home/components/businessPromo'
import AppPromo from '../features/home/components/appPromo'
import FaqSection from '../features/home/components/faq'
import LoginPromo from '../features/home/components/loginPromo'
import PlanForLater from '../features/home/components/planForLater'
import GetawayPromo from '../features/home/components/getawayPromo'

const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Suggestions />

      {/* Login Promo */}
      <LoginPromo />

      {/* Plan For Later */}
      <PlanForLater />

      {/* Getaway Promo */}
      <GetawayPromo />

      {/* Drive Promo */}
      <PromoSection
        title="Drive when you want, make what you need"
        description="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
        image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2069&q=80"
        ctaPrimary="Get started"
        hrefPrimary="/login?type=captain"
        ctaSecondary="Already have an account? Sign in"
        hrefSecondary="/login?type=captain"
        imageLeft={true}
      />

      {/* Uber for Business */}
      <PromoSection
        title="The Uber you know, reimagined for business"
        description="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size"
        image="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=576/height=324/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9kNjQ4ZjViNi1iYjVmLTQ1MGUtODczMy05MGFlZmVjYmQwOWUuanBn"
        ctaPrimary="Get started"
        hrefPrimary="/login?type=user"
        ctaSecondary="Check out our solutions"
        hrefSecondary="/login?type=user"
        imageLeft={false}
      />

      {/* Make money by renting out your car */}
      <PromoSection
        title="Make money by renting out your car"
        description="Connect with thousands of drivers and earn more per week with Uber's free fleet management tools."
        image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070"
        ctaPrimary="Get started"
        hrefPrimary="/login?type=captain"
        imageLeft={true}
      />

      {/* App Promo Cards */}
      <AppPromo />

      {/* FAQ Section */}
      <FaqSection />

    </div>
  )
}

export default Home