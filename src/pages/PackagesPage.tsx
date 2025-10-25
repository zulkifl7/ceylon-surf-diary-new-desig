export default function PackagesPage() {
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
      </div>
    </div>
  );
}
