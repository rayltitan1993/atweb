"use client";

import Container from "@/app/_components/container";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just compose an email link
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@apexella.tech?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            Get in touch with our team to discuss your IT needs
          </p>
        </Container>
      </section>

      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We're here to help you with your IT needs. Whether you have a question 
                about our services, need technical support, or want to discuss a project, 
                we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Company Information</h3>
                  <div className="text-gray-600 dark:text-gray-300 space-y-2">
                    <p><strong>Apexella GmbH</strong></p>
                    <p>Tal 44</p>
                    <p>80331 Munich, Germany</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                  <div className="text-gray-600 dark:text-gray-300 space-y-2">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@apexella.tech" className="text-blue-600 dark:text-blue-400 hover:underline">
                        info@apexella.tech
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a href="https://www.apexella.tech" className="text-blue-600 dark:text-blue-400 hover:underline">
                        www.apexella.tech
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Registration</h3>
                  <div className="text-gray-600 dark:text-gray-300 space-y-2">
                    <p><strong>Managing Director:</strong> Zijian Ding</p>
                    <p><strong>Commercial Register:</strong> HRB 304352</p>
                    <p><strong>District Court:</strong> Munich</p>
                    <p><strong>VAT ID:</strong> DE455910697</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  * Required fields. By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}