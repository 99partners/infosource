import React from 'react'
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";

const PartnerOpportunity = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto py-24 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Partner Opportunity</h1>
          <p className="text-lg text-muted-foreground">Learn about partnership opportunities with Infosource.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PartnerOpportunity;