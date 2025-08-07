export function ServicesOverview() {
  const services = [
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to optimize your business operations and digital infrastructure.",
      icon: "💡"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and challenges.",
      icon: "💻"
    },
    {
      title: "Automation Systems",
      description: "Integration and commissioning of advanced automation systems for improved efficiency.",
      icon: "⚙️"
    },
    {
      title: "Hardware Solutions",
      description: "Computer hardware import and deployment for enterprise-grade infrastructure.",
      icon: "🖥️"
    },
    {
      title: "Software Testing",
      description: "Comprehensive testing services to ensure quality and reliability of your applications.",
      icon: "✅"
    },
    {
      title: "System Integration",
      description: "Seamless integration of electrical devices and automation systems.",
      icon: "🔧"
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Comprehensive IT solutions to drive your business forward
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="/services"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More About Our Services
        </a>
      </div>
    </section>
  );
}