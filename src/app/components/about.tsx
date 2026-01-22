import aboutImage from "figma:asset/9c6801b56c09937c432af13fa7e7a639c26bd65e.png";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6">About Premium Promotions</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>

          {/* Feature Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={aboutImage}
              alt="Premium promotional event"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Premium Promotions is a boutique promotional services agency founded and operated by two experienced 
              female professionals with a passion for creating memorable brand experiences.
            </p>
            
            <p>
              With years of hands-on experience in the promotional industry, we understand what it takes to make 
              campaigns successful. We don't just show up—we bring strategic thinking, professional execution, 
              and genuine enthusiasm to every activation.
            </p>

            <p>
              Our approach is built on three core principles: <strong>quality over quantity</strong>, 
              <strong> personalized service</strong>, and <strong>measurable results</strong>. We work closely 
              with each client to understand their unique needs and deliver promotional solutions that exceed expectations.
            </p>

            <p>
              Whether you're launching a new product, activating at a major event, or building long-term brand 
              awareness, we bring the professionalism, reliability, and creative energy your campaign deserves.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="mb-2">Experienced</h3>
              <p className="text-sm text-foreground/70">Years of industry expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="mb-2">Reliable</h3>
              <p className="text-sm text-foreground/70">Professional and punctual</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="mb-2">Results-Driven</h3>
              <p className="text-sm text-foreground/70">Focused on campaign success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}