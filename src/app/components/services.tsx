import { Users, Calendar, Rocket, MapPin, Briefcase, Sparkles } from "lucide-react";
const servicesImage = "/home/server/verkkosivu/src/assets/e04ba332253193060d3da2e1d6b19d1e4e313e15.png";

const services = [
  {
    icon: Users,
    title: "Brand Ambassadors",
    description: "Professional, engaging representatives who embody your brand values and create lasting impressions with your target audience."
  },
  {
    icon: Calendar,
    title: "Event & Festival Promotions",
    description: "Energetic and experienced promoters who drive engagement and visibility at festivals, concerts, and large-scale events."
  },
  {
    icon: Briefcase,
    title: "Corporate & B2B Promotions",
    description: "Polished professionals for trade shows, conferences, and corporate events who understand the nuances of business engagement."
  },
  {
    icon: Rocket,
    title: "Product Launches",
    description: "Strategic promotional support to ensure your new product makes a memorable entrance and reaches the right audience."
  },
  {
    icon: MapPin,
    title: "Street & Guerrilla Marketing",
    description: "Creative, high-impact promotions that capture attention and generate buzz in unexpected places and unique ways."
  },
  {
    icon: Sparkles,
    title: "Custom Promotional Campaigns",
    description: "Tailored solutions designed specifically for your brand's unique needs, goals, and target market."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive promotional solutions tailored to elevate your brand and drive measurable results
          </p>
        </div>

        {/* Feature Image */}
        <div className="mb-16 rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <img
            src={servicesImage}
            alt="Professional promotional services"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}