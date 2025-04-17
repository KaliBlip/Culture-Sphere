import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about cultural heritage? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@culturesphere.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Cultural Heritage Street<br />
                      Heritage City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Globe className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Global</h4>
                    <p className="text-sm text-gray-500">Worldwide Support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-rose-100 rounded-lg">
                    <Clock className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">24/7</h4>
                    <p className="text-sm text-gray-500">Online Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 