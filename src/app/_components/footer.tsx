import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Apexella GmbH</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Professional IT Solutions<br />
                Tal 44<br />
                80331 Munich, Germany<br />
                <a href="mailto:info@apexella.tech" className="hover:text-blue-600">
                  info@apexella.tech
                </a>
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
                <li><a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a></li>
                <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</a></li>
                <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/impressum" className="hover:text-blue-600 dark:hover:text-blue-400">Legal Notice (Impressum)</a></li>
                <li><a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
                © 2025 Apexella GmbH. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/impressum" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Legal Notice
                </a>
                <span className="text-gray-400">|</span>
                <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Privacy Policy
                </a>
                <span className="text-gray-400">|</span>
                <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
