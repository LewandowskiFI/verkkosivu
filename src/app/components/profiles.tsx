import { Award, Briefcase, Star } from "lucide-react";
import profile1Image from "figma:asset/3dbbbc5bbc26a65be7e19642f5b174696d4b0deb.png";
import profile2Image from "figma:asset/82aab003f739cade327fd47fa8595301268581db.png";

const profiles = [
  {
    name: "Sarah Mitchell",
    role: "Co-Founder & Lead Promoter",
    image: profile1Image,
    bio: "With over 8 years in promotional marketing, Sarah brings unmatched energy and strategic insight to every campaign. Her background spans luxury fashion, tech launches, and festival activations for major brands including global beverage companies and lifestyle brands.",
    highlights: [
      "8+ years industry experience",
      "Led 200+ successful campaigns",
      "Expert in luxury & lifestyle brands"
    ]
  },
  {
    name: "Jessica Reynolds",
    role: "Co-Founder & Brand Strategist",
    image: profile2Image,
    bio: "Jessica's background in corporate events and B2B marketing brings a polished, professional edge to Premium Promotions. She specializes in trade shows, product launches, and creating seamless brand experiences for corporate clients across multiple industries.",
    highlights: [
      "Corporate & B2B specialist",
      "Product launch expert",
      "Strong client relationship focus"
    ]
  }
];

export function Profiles() {
  return (
    <section id="profiles" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6">Meet the Team</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experienced professionals dedicated to bringing your brand vision to life
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl mb-1">{profile.name}</h3>
                  <p className="text-foreground/60">{profile.role}</p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {profile.bio}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4">
                  {profile.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-foreground/70">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="w-10 h-10 mx-auto mb-4 text-black" />
              <h4 className="mb-2">Award-Winning</h4>
              <p className="text-sm text-foreground/70">Industry recognition</p>
            </div>
            <div>
              <Star className="w-10 h-10 mx-auto mb-4 text-black" />
              <h4 className="mb-2">5-Star Rated</h4>
              <p className="text-sm text-foreground/70">Client satisfaction</p>
            </div>
            <div>
              <Briefcase className="w-10 h-10 mx-auto mb-4 text-black" />
              <h4 className="mb-2">Proven Track Record</h4>
              <p className="text-sm text-foreground/70">Hundreds of campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}