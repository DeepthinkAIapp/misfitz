import React from "react";

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Order Inquiry</h2>
        <form action="https://formspree.io/f/xzzvrero" method="POST" className="flex flex-col gap-4">
          <label className="flex flex-col text-sm font-medium text-gray-700">
            What products are you interested in?
            <input
              type="text"
              name="product_interest"
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Your email:
            <input
              type="email"
              name="email"
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Your message:
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 rounded bg-gradient-to-r from-[#fefefd] to-[#e0e7ff] text-gray-700 border border-gray-200 shadow hover:from-[#f8fafc] hover:to-[#fefefd] hover:text-indigo-600 transition font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal; 