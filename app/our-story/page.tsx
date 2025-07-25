import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function OurStory() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#d32f2f] via-[#f5f5f5] to-[#616161]">
      {/* Shared Header */}
      <Header variant="light" />
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/SnapInsta.to_502403181_17933027205045147_1719035383281541897_n-topaz-enhance-3.2x-faceai.jpeg"
          alt="Misfitz Pottery Studio Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Our Story</h1>
          <p className="text-xl sm:text-2xl text-white drop-shadow max-w-2xl mx-auto">
            Handmade with love in Salt Lake City, Utah
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-800 mb-4">
            At Misfitz Pottery, our mission is to celebrate individuality and creativity through functional art. We believe that every mug, bowl, and vase should be as unique as the person who uses it. Our handmade ceramics are designed to bring warmth, beauty, and a touch of whimsy to your home.
          </p>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">A Few Moments from Our Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/SnapInsta.to_501984526_17933027214045147_6189206064782373481_n.jpg" alt="Dogs in the yard" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/SnapInsta.to_501818735_17933027226045147_8048000502865528659_n.jpg" alt="Studio table" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/SnapInsta.to_501597291_17933027244045147_5452261527944224322_n.jpg" alt="White dog" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/SnapInsta.to_502069200_17933027235045147_6300312655365275531_n.jpg" alt="Pottery photo shoot" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/SnapInsta.to_495761917_17930523579045147_4789381390539970632_n-topaz-enhance-2.9x.jpeg" alt="Pottery display" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/SnapInsta.to_495530066_17930523618045147_873500654778066379_n-topaz-enhance-2.9x.jpeg" alt="Pottery market" className="object-cover w-full h-full" />
            </div>
          </div>
          <p className="text-center text-gray-600 mt-2 text-sm">See more on our <a href="https://www.instagram.com/misfitzpottery/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>!</p>
        </section>

        {/* Cool & Creative Products Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cool & Creative Products</h2>
          <p className="text-gray-800 mb-4">
            We love to experiment and invent! Some of our favorite creations include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><b>Auto Plant Feeders:</b> Place a ceramic mug or pot over your plant on a banister and it automatically waters your plant—no more forgetting to water!</li>
            <li><b>Key Holders:</b> Whimsical, hand-built ceramic key holders that add personality to your entryway.</li>
            <li><b>Dog Bowls:</b> Unique, sturdy, and fun bowls for your furry friends.</li>
            <li><b>Ceramic Charcuterie Trays:</b> Serve up style with one-of-a-kind boards for your next gathering.</li>
            <li>And so much more—mugs, planters, vases, and creative pieces you won’t find anywhere else!</li>
          </ul>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img src="/images/SnapInsta.to_495873908_17930523645045147_7667680849112415398_n-topaz-enhance-2.9x.jpeg" alt="Auto plant feeder" className="rounded-lg object-cover w-full h-40" />
            <img src="/images/SnapInsta.to_496444560_17930523672045147_7012296397081082642_n-topaz-enhance-2.9x.jpeg" alt="Key holder" className="rounded-lg object-cover w-full h-40" />
            <img src="/images/SnapInsta.to_521166626_17939004015045147_2794291604490061666_n-topaz-enhance-2.9x.jpeg" alt="Dog bowl" className="rounded-lg object-cover w-full h-40" />
            <img src="/images/SnapInsta.to_521612573_17939004024045147_439335278235965985_n-topaz-enhance-2.9x.jpeg" alt="Charcuterie board" className="rounded-lg object-cover w-full h-40" />
            <img src="/images/SnapInsta.to_520981405_17939004033045147_2041908558560135455_n-topaz-enhance-2.9x.jpeg" alt="Creative mug" className="rounded-lg object-cover w-full h-40" />
            <img src="/images/SnapInsta.to_521988096_17939004042045147_487159259289668255_n-topaz-enhance-2.9x.jpeg" alt="Whimsical planter" className="rounded-lg object-cover w-full h-40" />
          </div>
          <p className="text-center text-gray-600 mt-2 text-sm">Follow us on <a href="https://www.instagram.com/misfitzpottery/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a> for the latest creative drops and behind-the-scenes fun!</p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Our Process</h2>
          <p className="text-gray-800 mb-4">
            Each item is carefully shaped and glazed by hand. We rent studio space to create our pottery, which means every sale helps us get closer to having our very own studio. This allows us to keep up with demand and continue sharing our passion for ceramics with you.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Why Your Support Matters</h2>
          <p className="text-gray-800 mb-4">
            We don’t have our own studio yet, so every purchase directly supports our journey to one day open a dedicated space for Misfitz Pottery. Your support helps us grow, create more art, and bring more creative beauty into the world. Thank you for being part of our story!
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Get in Touch</h2>
          <p className="text-gray-800 mb-2">
            Have questions, want to collaborate, or just want to say hello? We’d love to hear from you! Email us at <a href="mailto:Gracie@misfitzpottery.com" className="underline">Gracie@misfitzpottery.com</a> or use our <a href="/contact" className="underline">contact form</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
} 