import Container from "@/app/_components/container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Apexella GmbH
          </h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            Professional | Passion - Your trusted technology partner since establishment
          </p>
        </Container>
      </section>

      <Container>
        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Apexella GmbH was founded with a clear vision: to provide exceptional IT solutions 
                that empower businesses to thrive in the digital age. Based in Munich, Germany, 
                we have established ourselves as a reliable partner for companies seeking 
                innovative technology solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our journey began with a commitment to excellence and a passion for technology. 
                Today, we serve clients across various industries, helping them navigate the 
                complexities of digital transformation and achieve their business objectives.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To be the leading provider of innovative IT solutions in Europe, recognized for 
                our technical expertise, customer-centric approach, and commitment to delivering 
                measurable business value through technology.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We empower businesses through cutting-edge technology solutions that drive growth, 
                improve efficiency, and enable digital transformation. Our mission is to bridge 
                the gap between business needs and technological possibilities, delivering solutions 
                that are not just technically sound but also strategically aligned with our 
                clients' goals.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Business Scope</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Apexella GmbH specializes in:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    IT consulting and strategic technology planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Custom software development and application modernization
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Import and distribution of computer hardware
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Comprehensive software testing and quality assurance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Import of automation systems and electrical devices
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Installation and commissioning of systems and equipment
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Leadership</h2>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Zijian Ding</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">Managing Director (Geschäftsführer)</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Leading Apexella GmbH with a clear vision for technological innovation and service excellence.
                   Drawing on extensive experience in both technology and business management, Zijian Ding sets the company’s 
                   strategic course, cultivates client relationships, and drives business growth. Under his leadership, Apexella GmbH 
                   consistently delivers high-quality, future-ready IT solutions tailored to client needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Zhuoxiao Meng</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">CTO</p>
                <p className="text-gray-600 dark:text-gray-300">
                  As CTO of Apexella GmbH, Zhuoxiao Meng leads our technology vision, product development, 
                  and technical operations. With deep expertise in software engineering and system architecture, 
                  Zhuoxiao ensures that our solutions are robust, scalable, and aligned with the latest industry standards. 
                  He fosters a culture of innovation within the engineering team and is committed to driving continuous 
                  technological advancement, enabling Apexella GmbH to deliver cutting-edge value to our clients.
                </p>
              </div>

            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Professional Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We maintain the highest standards of professionalism in everything we do, 
                    from client interactions to technical implementations.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Passionate Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our passion for technology drives us to continuously innovate and deliver 
                    cutting-edge solutions that exceed expectations.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Client-Centric Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We put our clients first, understanding their unique needs and delivering 
                    tailored solutions that create real value.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Integrity & Trust</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We build lasting relationships based on trust, transparency, and ethical 
                    business practices.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Discover how Apexella GmbH can help transform your business with innovative IT solutions.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}