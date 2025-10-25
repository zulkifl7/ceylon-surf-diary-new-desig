import { useState } from 'react';

export default function PackagesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const packages = [
    {
      id: 1,
      name: "Lifestyle Photography",
      subtitle: "(Shoot from Land)",
      price: "$99",
      features: [
        "01 hour coverage (flexible)",
        "High resolution 15 edited images (Digital)",
        "Estimated turnaround: 4-7 days"
      ],
      description: "Perfect for surf lifestyle, beach moments, and candid pre/post-surf shots"
    },
    {
      id: 2,
      name: "Solo Session",
      subtitle: "(Shoot from water)",
      price: "$149",
      features: [
        "01 hour coverage (flexible)",
        "High resolution 15 edited images (Digital)",
        "Estimated turnaround: 4-7 days"
      ],
      description: "Perfect for individual surfers seeking dynamic in-water shots."
    },
    {
      id: 3,
      name: "Group Session",
      subtitle: "(Shoot from water : 2-3 surfers, cost can be shared)",
      price: "$199",
      features: [
        "01 hour coverage (flexible)",
        "High resolution 30 edited images (Digital)",
        "Estimated turnaround: 4-7 days"
      ],
      description: "Ideal for friends or couples who surf together, capturing both individual and group moments"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl py-20 mb-6 font-jedira tracking-wide">
            OUR PACKAGES
          </h1>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="text-left mb-6">
                <h3 className="text-2xl font-poppins font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 font-poppins text-sm mb-4">{pkg.subtitle}</p>
                <div className="text-4xl font-bold text-gray-900 mb-6 font-poppins">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 font-poppins text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 font-poppins text-sm mb-8 leading-relaxed text-left flex-grow">
                {pkg.description}
              </p>

              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-colors mt-auto">
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white p-8">
            <h2 className="text-4xl font-jedira mb-8 text-left">Make it your way!</h2>
            
            <form className="space-y-6">
              {/* Personal Details Section */}
              <div>
                <h3 className="text-xl font-poppins font-normal mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                    <option value="">No of people</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4+ people</option>
                  </select>
                </div>
              </div>

              {/* Photoshoot Details Section */}
              <div>
                <h3 className="text-xl font-poppins font-normal mb-4">Photoshoot Details</h3>
                <div className="space-y-4">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                    <option value="">Photo session type</option>
                    <option value="lifestyle">Lifestyle Photography</option>
                    <option value="solo">Solo Session</option>
                    <option value="group">Group Session</option>
                    <option value="custom">Custom Package</option>
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <textarea
                    placeholder="Special Notes"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-black text-white py-4 px-8 rounded-full font-poppins font-medium hover:bg-gray-800 transition-colors"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white p-8">
            <h2 className="text-4xl font-jedira mb-4 text-left">Frequently Asked Questions</h2>
            <p className="text-gray-600 font-poppins mb-12 text-left">
              Capturing the essence of surf culture and coastal adventures along Sri Lanka's stunning shores.
            </p>
            
            <div className="space-y-0">
              {/* FAQ Item 1 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-poppins font-medium">What's included in each photography package?</h3>
                  <span className="text-2xl font-light transition-transform duration-200 ease-in-out">
                    {openFAQ === 0 ? '×' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      Each package includes professional photography, basic editing, and high-resolution digital images. 
                      The number of edited photos and session duration varies by package. All packages include a pre-shoot 
                      consultation to discuss your vision and preferred locations.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-poppins font-medium">How far in advance should I book?</h3>
                  <span className="text-2xl font-light transition-transform duration-200 ease-in-out">
                    {openFAQ === 1 ? '×' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      We recommend booking at least 2-3 weeks in advance, especially during peak season (December to March). 
                      However, we can sometimes accommodate last-minute bookings depending on availability. 
                      Contact us as soon as you know your travel dates for the best selection of time slots.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-poppins font-medium">What happens if the weather is bad?</h3>
                  <span className="text-2xl font-light transition-transform duration-200 ease-in-out">
                    {openFAQ === 2 ? '×' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      Sri Lanka's tropical climate can be unpredictable, but we work with the conditions to create stunning photos. 
                      Light rain can actually create beautiful atmospheric shots. If weather conditions are severe, 
                      we'll reschedule your session at no extra cost.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(3)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-poppins font-medium">Can you recommend the best locations for photos?</h3>
                  <span className="text-2xl font-light transition-transform duration-200 ease-in-out">
                    {openFAQ === 3 ? '×' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      Absolutely! We know all the best spots along the Sri Lankan coast - from hidden beaches to iconic surf breaks. 
                      During your consultation, we'll suggest locations based on your style preferences, the time of day, 
                      and current conditions to ensure the best possible shots.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(4)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-poppins font-medium">How will I receive my photos?</h3>
                  <span className="text-2xl font-light transition-transform duration-200 ease-in-out">
                    {openFAQ === 4 ? '×' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      Your edited photos will be delivered via a private online gallery within 5-7 business days after your session. 
                      You'll receive high-resolution files perfect for printing and social media-optimized versions. 
                      The gallery link allows easy downloading and sharing with friends and family.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(5)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-poppins font-medium">Do you offer prints or albums?</h3>
                  <span className="text-2xl font-light transition-transform duration-200 ease-in-out">
                    {openFAQ === 5 ? '×' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      Yes! We can arrange professional prints and custom photo albums upon request. 
                      We work with high-quality printing partners to ensure your memories are preserved beautifully. 
                      Print packages and albums are available as add-ons to any photography session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
