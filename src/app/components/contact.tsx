import { useState } from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
const contactImage = "/home/server/verkkosivu/src/assets/a76ae0eebf926565236229bfa7db14221afb9e5b.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(data.error || "Lähetys epäonnistui.");
      }
    } catch (error) {
      setErrorMessage("Yhteysvirhe palvelimeen.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6">Get in Touch</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to bring your next campaign to life?
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Let's Start a Conversation</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                We'd love to hear from you.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Email Us</h4>
                  <a href="mailto:hello@premiumpromotions.com" className="text-foreground/70 hover:text-black transition-colors">hello@premiumpromotions.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Your Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2">Company</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your Company Name" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>
                
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                <button type="submit" disabled={isLoading} className="w-full bg-black text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg disabled:opacity-50">
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                  {!isLoading && <Send className="w-5 h-5" />}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl mb-2">Thank You!</h3>
                <p className="text-foreground/70">We've received your message.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}