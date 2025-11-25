import { Mail, ChefHat } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
            <Mail className="w-10 h-10 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Stay Updated with New Recipes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the freshest recipes delivered to your inbox every week, 
            handpicked just for you!
          </p>
        </div>

        {/* Email Form just ui */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-8 py-5 rounded-full border border-gray-300 bg-white text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition shadow-sm placeholder-gray-400"
            />
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-10 py-5 rounded-full transition transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center"
            >
              <ChefHat className="w-6 h-6" />
              Subscribe
            </button>
          </div>

          {/* Trust text */}
          <p className="text-sm text-gray-500 mt-6">
            Join 25,000+ home cooks • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}