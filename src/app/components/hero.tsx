import { ArrowRight } from "lucide-react";
import heroImage from "figma:asset/437e46ef67ab27ef8b3f9e7f658af686d123cadb.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Event promotion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Logo/Brand Name */}
          <div className="inline-block">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
              Premium Promotions
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/90 max-w-3xl mx-auto">
            Elevate Your Brand with Premium Promotional Services
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Professional brand ambassadors and experiential marketing solutions delivered by experienced industry specialists. 
            We bring your campaigns to life with precision, creativity, and proven results.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 sm:gap-12 text-white/70">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-1">500+</div>
              <div className="text-sm uppercase tracking-wider">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-1">50+</div>
              <div className="text-sm uppercase tracking-wider">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-1">100%</div>
              <div className="text-sm uppercase tracking-wider">Professional</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}