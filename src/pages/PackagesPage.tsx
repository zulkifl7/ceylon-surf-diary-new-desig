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
            <div key={pkg.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-jedira mb-2">{pkg.name}</h3>
                <p className="text-gray-600 font-poppins text-sm mb-4">{pkg.subtitle}</p>
                <div className="text-4xl font-bold text-gray-900 mb-6">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 font-poppins text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 font-poppins text-sm mb-8 leading-relaxed">
                {pkg.description}
              </p>

              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-colors">
                BOOK NOW
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
