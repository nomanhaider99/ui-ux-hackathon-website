import React from 'react';
import { FiPackage } from 'react-icons/fi';
import Button from '../ui/Button';
import Check from '../ui/Check';
import Jogging from '@/public/images/JoggingWear1.png';
import Shoe from '@/public/images/Shoe3.png';

const Checkout = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          {/* Upper Section */}
          <div className="flex flex-col gap-4">
            <div className="text-xl font-medium">
              How would you like to get your order?
            </div>
            <div className="text-sm text-gray-600">
              Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match
              the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC
              will be stored securely and used solely for the purpose of clearing customs (including sharing it with
              customs officials) for all orders and returns. If your KYC does not match your shipping address, please
              click the link for more information. Learn More
            </div>
            <div className="w-full h-[82px] px-4 rounded-xl border-2 border-black flex items-center gap-4">
              <FiPackage size={24} color="#000" />
              <div className="text-sm font-medium">Deliver It</div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col gap-6">
            {/* Address Section */}
            <div>
              <div className="text-xl font-medium">Enter your name and address:</div>
              <div className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                  placeholder="Address Line 1"
                />
                <input
                  type="text"
                  className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                  placeholder="Address Line 2"
                />
                <div className="flex flex-wrap gap-4">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 bg-white border border-gray-300 text-sm placeholder-gray-500 rounded"
                    placeholder="Postal Code"
                  />
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 bg-white border border-gray-300 text-sm placeholder-gray-500 rounded"
                    placeholder="Locality"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="text-xl font-medium">What's your contact information?</div>
              <div className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* PAN Section */}
            <div>
              <div className="text-xl font-medium">What's your PAN?</div>
              <input
                type="text"
                className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded mt-4"
                placeholder="PAN"
              />
            </div>

            {/* Consent */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm text-gray-600">Save PAN details to Nike Profile</span>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" />
                <span className="text-sm text-gray-600">
                  I have read and consent to eShopWorld processing my information in accordance with the{' '}
                  <span className="font-medium underline">Privacy Statement</span> and{' '}
                  <span className="font-medium underline">Cookie Policy</span>. eShopWorld is a trusted Nike partner.
                </span>
              </div>
              <Button text="Continue" className="bg-lightgray w-full mt-4" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex flex-col gap-8">
          <div className="text-xl font-medium">Order Summary</div>
          <div className="flex flex-col gap-4">
            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
            </div>
            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
            </div>
          </div>
          <div className="text-sm font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</div>
          <div className="flex flex-col gap-4">
            <Check
              image={Jogging as any}
              price={3500.0}
              quantity={2}
              size="L"
              title="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
            />
            <Check
              image={Shoe as any}
              price={199.0}
              quantity={1}
              size="12"
              title="Nike Air Max 97 SE Men's Shoes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
