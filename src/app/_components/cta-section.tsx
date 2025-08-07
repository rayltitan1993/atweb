export function CTASection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-lg my-16">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Let's discuss how our IT solutions can help you achieve your goals.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}