import Container from "@/app/_components/container";

export default function ServicesPage() {
  const services = [
    {
      title: "IT Consulting",
      description: "Our IT consulting services provide strategic technology guidance tailored to your business needs. We help organizations optimize their digital infrastructure, implement best practices, and make informed technology decisions that drive growth and efficiency.",
      features: [
        "Technology strategy development",
        "Digital transformation roadmaps",
        "Infrastructure assessment and optimization",
        "Security and compliance consulting",
        "Cloud migration planning"
      ]
    },
    {
      title: "Software Development",
      description: "We deliver custom software solutions designed to meet your unique business challenges. Our experienced development team uses modern technologies and agile methodologies to create scalable, maintainable applications.",
      features: [
        "Custom web and mobile applications",
        "Enterprise software solutions",
        "API development and integration",
        "Database design and optimization",
        "Legacy system modernization"
      ]
    },
    {
      title: "Computer Hardware Import",
      description: "As a trusted hardware import partner, we source and deliver high-quality computer equipment for businesses. We ensure you get the right hardware solutions at competitive prices with reliable support.",
      features: [
        "Enterprise-grade servers and workstations",
        "Networking equipment",
        "Storage solutions",
        "Specialized computing hardware",
        "Warranty and support services"
      ]
    },
    {
      title: "Automation Systems Integration",
      description: "We specialize in the integration and commissioning of advanced automation systems. Our expertise ensures seamless implementation of automated solutions that improve operational efficiency and reduce costs.",
      features: [
        "Industrial automation solutions",
        "Process automation design",
        "System integration and testing",
        "PLC programming and configuration",
        "SCADA systems implementation"
      ]
    },
    {
      title: "Software Testing",
      description: "Our comprehensive software testing services ensure your applications meet the highest quality standards. We employ various testing methodologies to identify and resolve issues before deployment.",
      features: [
        "Functional and regression testing",
        "Performance and load testing",
        "Security testing",
        "User acceptance testing",
        "Test automation development"
      ]
    },
    {
      title: "Electrical Systems Installation",
      description: "We provide professional installation and commissioning services for electrical devices and systems. Our certified technicians ensure safe, efficient, and compliant installations.",
      features: [
        "Electrical system design and planning",
        "Equipment installation and setup",
        "System commissioning and testing",
        "Maintenance and support services",
        "Compliance and safety certification"
      ]
    }
  ];

  return (
    <main>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            Comprehensive IT solutions and professional services to help your business thrive in the digital age
          </p>
        </Container>
      </section>
      
      <Container>
        <div className="py-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="mb-16 pb-16 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="py-16 text-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Contact us today to discuss how we can help your business succeed.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </Container>
    </main>
  );
}