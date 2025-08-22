import React from 'react'
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";

const WhyPartner = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto py-24 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Why Partner With Us</h1>
          <p className="text-lg text-muted-foreground">Discover the advantages of partnering with Infosource for digital transformation and innovation.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default WhyPartner;