import Image from "next/image";
import Head from "next/head";
import Footer from "./components/Footer";
import HeroSlideshow from "./components/HeroSlideshow";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#d32f2f] via-[#f5f5f5] to-[#616161]">
      {/* Head */}
      <Head>
        <title>Misfitz Pottery | Handmade Pottery & Ceramics</title>
        <meta name="description" content="Handmade ceramics and pottery. Contact us for custom orders or questions." />
      </Head>

      {/* Shared Header */}
      <Header variant="dark" />

      {/* Hero Section */}
      <HeroSlideshow />
      {/* Welcome Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Welcome to Misfitz Pottery</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-800 space-y-6">
          <p>
            Misfitz Pottery is a creative studio based in Salt Lake City, UT, dedicated to crafting unique, high-quality ceramics that bring warmth and artistry to your home. Every piece is handmade with care, reflecting our passion for pottery and our commitment to the local arts community.
          </p>
          <p>
            Our mission is to celebrate individuality and creativity through functional art. We believe that every mug, bowl, and vase should be as unique as the person who uses it. Whether you’re looking for a special gift or a new favorite piece for your kitchen, we hope you find something that speaks to you.
          </p>
          <p>
            We invite you to explore our gallery, follow us on Instagram for the latest creations, or reach out for custom orders and collaborations. Thank you for supporting local, handmade art!
          </p>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="flex justify-center py-8 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full max-w-2xl mx-auto">
          <a href="/products" className="relative col-span-2 row-span-2 aspect-square md:aspect-auto">
            <img src="/images/Screenshot 2025-07-25 000423-topaz-enhance-3.8x-faceai.jpeg" alt="Artist Creations" className="w-full h-full object-cover rounded" />
            <span className="absolute bottom-2 left-2 text-white text-base md:text-xl font-bold drop-shadow">Artist Creations</span>
          </a>
          <a href="/products" className="relative aspect-square">
            <img src="/images/misfitzlogo.png" alt="Home" className="w-full h-full object-cover rounded" />
            <span className="absolute bottom-2 left-2 text-white text-base md:text-xl font-bold drop-shadow">Home</span>
          </a>
          <a href="/products" className="relative aspect-square">
            <img src="images\SnapInsta.to_495530066_17930523618045147_873500654778066379_n-topaz-enhance-2.9x.jpeg" alt="Custom Mugs" className="w-full h-full object-cover rounded" />
            <span className="absolute bottom-2 left-2 text-white text-base md:text-xl font-bold drop-shadow">Mugs</span>
          </a>
          <a href="/products" className="relative aspect-square">
            <img src="images\SnapInsta.to_521166626_17939004015045147_2794291604490061666_n-topaz-enhance-2.9x.jpeg" alt="Custom Ceramic Planters" className="w-full h-full object-cover rounded" />
            <span className="absolute bottom-2 left-2 text-white text-base md:text-xl font-bold drop-shadow">Planters</span>
          </a>
          <a href="/products" className="relative aspect-square">
            <img src="images\Screenshot 2025-07-25 000602-topaz-enhance-3.9x.jpeg" alt="All Products" className="w-full h-full object-cover rounded" />
            <span className="absolute bottom-2 left-2 text-white text-base md:text-xl font-bold drop-shadow">All Products</span>
          </a>
          <a href="/products" className="relative aspect-square">
            <img src="images\SnapInsta.to_495729772_17930523627045147_1427442616563115144_n-topaz-enhance-2.9x.jpeg" alt="On Sale" className="w-full h-full object-cover rounded" />
            <span className="absolute bottom-2 left-2 text-white text-base md:text-xl font-bold drop-shadow">On Sale</span>
          </a>
        </div>
      </section>

      {/* Unique Handcrafted Plant Feeders & More Section */}
      <section className="py-20 px-4 flex flex-col md:flex-row items-center justify-center bg-white max-w-7xl mx-auto mt-8 md:mt-16">
        {/* Overlapping images on the left */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0 min-h-[340px]">
          <video
            src="/images/SnapInsta.to_AQNMJgavpubJAMPd959ER3hoaXvk5tKxl9aFDiJpSKaXhpacQ1riQJUVgHLwJNOBOwvkd4UB9WzL8EuF3tOcAVIMvRMscrKPIy0RbGo.mp4"
            className="w-full max-w-2xl aspect-square sm:aspect-video object-cover rounded-lg shadow-xl z-40"
            style={{ background: '#fff' }}
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>
        {/* Text and CTA on the right */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unique Handcrafted Plant Feeders & More</h2>
          <p className="text-lg text-gray-800 mb-6 max-w-xl">
            Discover our one-of-a-kind handcrafted plant feeders, designed to bring both beauty and function to your home or garden. Each piece is made with care and creativity, ensuring no two are exactly alike. Explore our collection of unique ceramics, from whimsical planters to innovative feeders and accent pieces—perfect for plant lovers and anyone seeking something truly special.
          </p>
          <a href="/products" className="bg-[#d32f2f] text-white px-6 py-3 rounded font-semibold hover:bg-[#b71c1c] transition">Shop Unique Items</a>
        </div>
      </section>
      {/* Mission/Action Section with Video */}
      <section className="py-16 px-4 bg-white flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pottery in Action</h2>
          <p className="text-lg text-gray-800 max-w-xl mx-auto md:mx-0">
            At Misfitz Pottery, we believe in the beauty of the process. Our studio is a place where creativity comes to life—where clay is shaped, glazed, and fired into one-of-a-kind pieces. Watch our artists at work and see the passion that goes into every creation.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <video
            src="/images/potteryinaction.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>
      </section>


      {/* Transform Your Space Section */}
      <section className="relative w-full h-[520px] flex items-center justify-bottom overflow-hidden border-b">
        <img
          src="/images/Screenshot 2025-07-25 000423-topaz-enhance-3.8x-faceai.jpeg"
          alt="Pottery background"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
          style={{ objectPosition: 'center bottom', transform: 'translateY(0%)' }}
        />
        <div className="absolute inset-0 bg-white/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">Experience the Art of Misfitz Pottery</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-800/90 drop-shadow">
            Each piece at Misfitz Pottery is a celebration of creativity and craftsmanship. Our handmade ceramics are designed to bring warmth, beauty, and a touch of whimsy to your home. Whether you’re searching for a one-of-a-kind mug, a statement bowl, or a heartfelt gift, discover how our unique creations can transform your everyday moments into something truly special.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 text-center bg-gray-50 border-t">
        <h4 className="text-xl font-semibold mb-2">Interested in a Piece?</h4>
        <p className="mb-4 text-gray-700">Contact us for questions, or custom orders.</p>
        <a href="/contact" className="bg-[#d32f2f] text-white px-6 py-2 rounded hover:bg-[#b71c1c] transition">Contact Form</a>
      </section>

      <Footer />
    </div>
  );
}
