import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Premium, Hand-Picked Promoters",
    description: "We carefully select and train our team to ensure every brand ambassador represents your company with professionalism and enthusiasm."
  },
  {
    title: "Professional & Reliable Service",
    description: "Punctuality, preparation, and attention to detail are non-negotiable. We treat every campaign as if it were our own brand on the line."
  },
  {
    title: "Strong Client Communication",
    description: "You'll never be left wondering. We provide regular updates, detailed reporting, and are always available when you need us."
  },
  {
    title: "Flexible & Tailored Campaigns",
    description: "No two brands are alike. We customize our approach to fit your specific goals, budget, and target audience perfectly."
  },
  {
    title: "Multi-Industry Experience",
    description: "From tech to fashion, FMCG to automotive, we've successfully delivered campaigns across diverse industries and markets."
  },
  {
    title: "Results-Focused Approach",
    description: "We don't just execute—we measure, optimize, and ensure your promotional investment delivers tangible business outcomes."
  }
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 sm:py-28 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6">Why Choose Premium Promotions</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We combine professionalism, creativity, and proven results to deliver exceptional promotional experiences
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl mb-2">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-white/90 mb-6">
            Ready to elevate your next campaign?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
