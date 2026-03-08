import { useState, useEffect } from 'react';
import BookingModal from '../components/BookingModal';

export default function PackagesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; subtitle: string; price: string } | null>(null);

  // Custom form state
  const [customFormData, setCustomFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    peopleCount: '',
    sessionType: '',
    location: '',
    date: '',
    notes: ''
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = (pkg: { name: string; subtitle: string; price: string }) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCustomFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "94767676197";
    const messageLines = [
      "*CUSTOM QUOTE REQUEST*",
      "",
      `*Session Type:* ${ customFormData.sessionType }`,
      `*Location:* ${ customFormData.location }`,
      `*Date:* ${ customFormData.date }`,
      "",
      "*Client Details:*",
      `- Name: ${ customFormData.firstName } ${ customFormData.lastName }`,
      `- Email: ${ customFormData.email }`,
      `- Phone: ${ customFormData.phone }`,
      `- Country: ${ customFormData.country }`,
      `- People: ${ customFormData.peopleCount }`,
      `- Notes: ${ customFormData.notes || 'None' }`
    ];

    const message = encodeURIComponent(messageLines.join('\n'));
    window.open(`https://wa.me/${ whatsappNumber }?text=${ message }`, '_blank');
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
          <h1
            className={`text-5xl py-20 mb-6 font-jedira tracking-wide transition-all duration-1000 ease-out ${ isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
          >
            OUR PACKAGES
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all flex flex-col h-full ${ isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDuration: '1200ms',
                transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
                transitionDelay: `${ 200 + index * 150 }ms`
              }}
            >
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

              <button
                onClick={() => handleBookNow({ name: pkg.name, subtitle: pkg.subtitle, price: pkg.price })}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-colors mt-auto active:scale-95"
              >
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div
            className={`bg-white p-8 transition-all duration-1000 ease-out ${ isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{
              transitionDelay: '650ms'
            }}
          >
            <h2 className="text-4xl font-jedira mb-8 text-left">Make it your way!</h2>

            <form onSubmit={handleCustomSubmit} className="space-y-6">
              {/* Personal Details Section */}
              <div>
                <h3 className="text-xl font-poppins font-normal mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={customFormData.firstName}
                    onChange={handleCustomFormChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={customFormData.lastName}
                    onChange={handleCustomFormChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={customFormData.email}
                    onChange={handleCustomFormChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={customFormData.phone}
                    onChange={handleCustomFormChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    type="text"
                    name="country"
                    value={customFormData.country}
                    onChange={handleCustomFormChange}
                    placeholder="Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black"
                  />
                  <select
                    required
                    name="peopleCount"
                    value={customFormData.peopleCount}
                    onChange={handleCustomFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm text-gray-500 focus:outline-none focus:border-black"
                  >
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
                  <select
                    required
                    name="sessionType"
                    value={customFormData.sessionType}
                    onChange={handleCustomFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm text-gray-500 focus:outline-none focus:border-black"
                  >
                    <option value="">Photo session type</option>
                    <option value="lifestyle">Lifestyle Photography</option>
                    <option value="solo">Solo Session</option>
                    <option value="group">Group Session</option>
                    <option value="custom">Custom Package</option>
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      name="location"
                      value={customFormData.location}
                      onChange={handleCustomFormChange}
                      placeholder="Location"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black"
                    />
                    <input
                      required
                      type="date"
                      name="date"
                      value={customFormData.date}
                      onChange={handleCustomFormChange}
                      placeholder="Date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black"
                    />
                  </div>
                  <textarea
                    name="notes"
                    value={customFormData.notes}
                    onChange={handleCustomFormChange}
                    placeholder="Special Notes"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-black resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-black text-white py-4 px-8 rounded-full font-poppins font-medium hover:bg-gray-800 transition-colors active:scale-95 shadow-lg shadow-black/10"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div
            className={`bg-white p-8 transition-all duration-1000 ease-out ${ isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{
              transitionDelay: '800ms'
            }}
          >
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
                  <span className={`text-2xl font-light transition-transform duration-300 ease-in-out ${ openFAQ === 0 ? 'rotate-45' : 'rotate-0'
                    }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ openFAQ === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                  <h3 className="text-xl font-poppins font-medium">How do I receive my photos?</h3>
                  <span className={`text-2xl font-light transition-transform duration-300 ease-in-out ${ openFAQ === 1 ? 'rotate-45' : 'rotate-0'
                    }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ openFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      Once editing is complete (typically within 4-7 days), you'll receive a link to a private
                      online gallery where you can view and download your high-resolution images.
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
                  <h3 className="text-xl font-poppins font-medium">Can I request a custom location?</h3>
                  <span className={`text-2xl font-light transition-transform duration-300 ease-in-out ${ openFAQ === 2 ? 'rotate-45' : 'rotate-0'
                    }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ openFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="pb-6">
                    <p className="text-gray-700 font-poppins leading-relaxed">
                      Absolutely! While we have our favorite spots in Weligama, Midigama, and Ahangama,
                      we're happy to travel to your preferred location. Note that travel fees may apply
                      for locations outside our standard coverage area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageDetails={selectedPackage}
      />
    </div>
  );
}