"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Shared Header */}
      <Header variant="light" />
      <main className="flex-1 flex flex-col items-center px-2 py-10 md:py-16 bg-white">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Contact Us</h1>
          <div className="text-center text-sm text-gray-700 mb-6">
            Email: <a href="mailto:Gracie@misfitzpottery.com" className="underline">Gracie@misfitzpottery.com</a><br />
            Location: Salt Lake City, UT
          </div>
          <hr className="my-6 border-gray-200" />
          <h2 className="text-xl font-semibold mb-2">Sales & Product Inquiries</h2>
          <div className="mb-4 text-gray-800 text-sm">
            For custom ceramics, mugs, bulk orders, or a new product for your home, please email us or use the form below.<br />
            <span className="block mt-2 font-medium">Online Store:</span>
            Our online shop is open 24/7 for handmade ceramics. You can order anytime, or email us for custom requests or questions.
            <span className="block mt-2 font-medium">Studio Info:</span>
            We are based in Salt Lake City, UT. We do not have our own studio yet, so we rent studio space to create all of our pottery. Every sale truly helps us get closer to having our very own studio, so we can catch up on supply and meet the high demand for our work. Please contact us to schedule pickups.
            <span className="block mt-2 font-medium">Order Pickups:</span>
            Available for local customers by appointment. Let us know when you plan to come by and we’ll provide pickup details.
          </div>
          <hr className="my-6 border-gray-200" />
          <h2 className="text-xl font-semibold mb-2">General Questions</h2>
          <div className="mb-6 text-gray-800 text-sm">
            We love hearing from you! Whether you have questions about our process, want to collaborate, or need help with an order, please fill out the form below and we’ll get back to you within 24 hours.
          </div>
          <form action="https://formspree.io/f/xzzvrero" method="POST" className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium text-gray-700">First Name</label>
                <input type="text" name="first_name" required className="w-full border px-3 py-2 rounded" />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium text-gray-700">Last Name</label>
                <input type="text" name="last_name" required className="w-full border px-3 py-2 rounded" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium text-gray-700">Phone Number <span className="text-gray-400 text-xs">(optional)</span></label>
                <input type="tel" name="phone" className="w-full border px-3 py-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Subject</label>
              <input type="text" name="subject" className="w-full border px-3 py-2 rounded" placeholder="How can we help you?" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea name="message" required rows={5} className="w-full border px-3 py-2 rounded" placeholder="Let us know how we can help!" />
            </div>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition w-full font-semibold">Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
} 