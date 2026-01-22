export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">Premium Promotions</h3>
            <p className="text-white/70 leading-relaxed">
              Professional promotional services delivered by experienced industry specialists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => document.getElementById('profiles')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                Meet the Team
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-2 text-white/70">
              <p>
                <a href="mailto:hello@premiumpromotions.com" className="hover:text-white transition-colors">
                  hello@premiumpromotions.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Premium Promotions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
