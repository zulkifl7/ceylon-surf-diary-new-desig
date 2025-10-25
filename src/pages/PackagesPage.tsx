export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      name: "Lifestyle Photography",
      subtitle: "Lifestyle (casual)",
      price: "$99",
      duration: "1 hour",
      features: [
        "1 hour coverage (flexible)",
        "30 edited high-resolution photos",
        "Online gallery for easy sharing",
        "Perfect for surf lifestyle and beach moments",
        "Turnaround: 4-7 days"
      ]
    },
    {
      id: 2,
      name: "Solo Session",
      subtitle: "Solo (just yourself)",
      price: "$149",
      duration: "1 hour",
      features: [
        "1 hour coverage (flexible)",
        "30 edited high-resolution photos",
        "Online gallery for easy sharing",
        "Dynamic in-water action shots",
        "Turnaround: 4-7 days"
      ]
    },
    {
      id: 3,
      name: "Group Session",
      subtitle: "Group photo session 2-3 surfers",
      price: "$199",
      duration: "1 hour",
      features: [
        "1 hour coverage (flexible)",
        "30 edited high-resolution photos",
        "Online gallery for easy sharing",
        "Individual and group moments",
        "Cost can be shared",
        "Turnaround: 4-7 days"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 font-jedira tracking-wide">
            PACKAGES
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto font-poppins text-lg" style={{ lineHeight: '1.8' }}>
            Choose the perfect photography package for your surf adventure. 
            Each session is tailored to capture your unique moments on the waves of Sri Lanka.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-jedira mb-2">{pkg.name}</h3>
                <p className="text-gray-600 font-poppins text-sm mb-3">{pkg.subtitle}</p>
                <div className="text-3xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                <div className="text-gray-600 font-poppins">{pkg.duration}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-poppins text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-jedira mb-4">Make it your way!</h3>
            <p className="text-gray-700 font-poppins mb-6" style={{ lineHeight: '1.8' }}>
              Need something different? We offer custom photography packages tailored to your specific needs. 
              Whether it's a surf competition, wedding shoot by the beach, or commercial project, let's create something unique together.
            </p>
            <button className="bg-black text-white py-3 px-8 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
