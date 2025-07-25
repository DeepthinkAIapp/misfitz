"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import React, { useState } from "react";
import OrderModal from "../components/OrderModal";
import Header from "../components/Header";

const products = [
  // Holders
  { src: "/images/Products/holders/Screenshot 2025-07-25 000527.png", title: "Holder" },
  { src: "/images/Products/holders/Screenshot 2025-07-25 000626.png", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_495761917_17930523579045147_4789381390539970632_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_496444560_17930523672045147_7012296397081082642_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_521166626_17939004015045147_2794291604490061666_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_521369050_17939003985045147_6988866805408234803_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_521588944_17939003958045147_6343283875887200616_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_521660894_17939003934045147_3327018066391835595_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_521988096_17939004042045147_487159259289668255_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_522066429_17939003943045147_8570950498396559222_n.jpg", title: "Holder" },
  { src: "/images/Products/holders/SnapInsta.to_522136524_17939003967045147_3117655373282616857_n.jpg", title: "Holder" },

  // Misc
  { src: "/images/Products/misc/SnapInsta.to_495729772_17930523627045147_1427442616563115144_n.jpg", title: "Misc" },
  { src: "/images/Products/misc/SnapInsta.to_495873908_17930523645045147_7667680849112415398_n.jpg", title: "Misc" },
  { src: "/images/Products/misc/SnapInsta.to_501818735_17933027226045147_8048000502865528659_n.jpg", title: "Misc" },
  { src: "/images/Products/misc/SnapInsta.to_522063582_17938853241045147_1490837048650718865_n.jpg", title: "Misc" },
  { src: "/images/Products/misc/SnapInsta.to_522239398_17939003976045147_5403783687691985355_n.jpg", title: "Misc" },

  // Mugs
  { src: "/images/Products/mugs/SnapInsta.to_491451854_17930523654045147_1678070324711418194_n.jpg", title: "Mug" },
  { src: "/images/Products/mugs/SnapInsta.to_496103429_17930523597045147_7258907267138566507_n.jpg", title: "Mug" },
  { src: "/images/Products/mugs/SnapInsta.to_521430966_17939003922045147_4371408726802426104_n.jpg", title: "Mug" },
  { src: "/images/Products/mugs/SnapInsta.to_521478428_17939003901045147_5221800506495957957_n.jpg", title: "Mug" },
  { src: "/images/Products/mugs/SnapInsta.to_521582862_17939003910045147_4409054352803423447_n.jpg", title: "Mug" },
  { src: "/images/Products/mugs/SnapInsta.to_523051933_17939003892045147_1362728783197226140_n.jpg", title: "Mug" },

  // Planters
  { src: "/images/Products/planters/SnapInsta.to_363901328_272647342137650_5866524259232774675_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_364034879_279670431336325_6361632569066065562_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_364059903_1021720798997379_2953573381832757337_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_364264959_958147031910348_2366579540530680067_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_521165340_17939003994045147_1547095563085001958_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_521588736_17939003871045147_8829306380544185518_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522002028_17939003862045147_3923524711723245949_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522400039_17939003841045147_644689799102768365_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522508901_17939003787045147_7794383777377022244_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522582135_17939004003045147_7406834460613245752_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522635389_17939003850045147_7955975472084236362_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522643709_17939003883045147_8160721528792721675_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522648377_17939003832045147_3464744723403811917_n.jpg", title: "Planter" },
  { src: "/images/Products/planters/SnapInsta.to_522650911_17939003763045147_859190688258701727_n.jpg", title: "Planter" },

  // Trays
  { src: "/images/Products/trays/SnapInsta.to_470902955_3844522569127151_2425783382632190870_n.jpg", title: "Tray" },
  { src: "/images/Products/trays/SnapInsta.to_470957158_1138141587153607_496156577072697073_n.jpg", title: "Tray" },
  { src: "/images/Products/trays/SnapInsta.to_470957664_521300524250510_2366446970140599240_n.jpg", title: "Tray" },
  { src: "/images/Products/trays/SnapInsta.to_520981405_17939004033045147_2041908558560135455_n.jpg", title: "Tray" },
  { src: "/images/Products/trays/SnapInsta.to_521612573_17939004024045147_439335278235965985_n.jpg", title: "Tray" },
];

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Shared Header */}
      <Header variant="light" />
      <main className="flex-1 p-8 flex flex-col items-center pt-24">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Pottery Gallery</h1>
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {products.map((product, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 transition hover:shadow-lg">
                <Image src={product.src} alt={product.title} width={240} height={240} className="rounded mb-3 object-cover w-full h-60" />
                <h2 className="font-medium text-base text-gray-900 text-center mb-2 min-h-[2.5rem] flex items-center justify-center">{product.title}</h2>
                <button
                  className="text-xs px-4 py-2 bg-gradient-to-r from-[#fefefd] to-[#e0e7ff] text-gray-700 border border-gray-200 rounded shadow hover:from-[#f8fafc] hover:to-[#fefefd] hover:text-indigo-600 transition font-semibold mt-1"
                  onClick={() => setModalOpen(true)}
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
      <Footer />
    </div>
  );
} 