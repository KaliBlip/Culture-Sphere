import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Globe, ArrowLeft, Camera, Info } from 'lucide-react';

// This would typically come from an API or database
const heritageSites = [
  {
    id: 1,
    title: "Taj Mahal",
    location: "Agra, India",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
    category: "UNESCO World Heritage",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
    yearBuilt: "1632-1653",
    virtualTourAvailable: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1572868349872-63aa43c6a082?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 2,
    title: "Petra",
    location: "Ma'an, Jordan",
    image: "https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800",
    category: "World Wonder",
    description: "Petra is a historic and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system. It was established possibly as early as 312 BCE as the capital city of the Nabataean Kingdom.",
    yearBuilt: "312 BCE",
    virtualTourAvailable: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 3,
    title: "Machu Picchu",
    location: "Cusco, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
    category: "Archaeological Site",
    description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar.",
    yearBuilt: "1450",
    virtualTourAvailable: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export function HeritageSiteDetailPage() {
  const { id } = useParams();
  const site = heritageSites.find(site => site.id === Number(id));

  if (!site) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-16 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Heritage Site Not Found</h1>
        <p className="text-gray-600 mb-8">The heritage site you're looking for doesn't exist.</p>
        <Link
          to="/heritage-sites"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Heritage Sites
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh]">
        <img
          src={site.image}
          alt={site.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {site.title}
              </h1>
              <div className="flex items-center text-white/90 text-lg">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{site.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 mb-6">{site.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Built: {site.yearBuilt}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Category: {site.category}</span>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {site.additionalImages.map((image, index) => (
                  <div key={index} className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${site.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Virtual Tour Card */}
            {site.virtualTourAvailable && (
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Virtual Tour</h3>
                  <Camera className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-4">
                  Experience {site.title} through our immersive virtual tour.
                </p>
                <Link
                  to={`/virtual-tours/${site.id}`}
                  className="w-full inline-block bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Start Virtual Tour
                </Link>
              </div>
            )}

            {/* Information Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-32">Best Time to Visit</span>
                  <span className="font-medium">October - March</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-32">Duration</span>
                  <span className="font-medium">2-3 hours</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-32">Accessibility</span>
                  <span className="font-medium">Wheelchair accessible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link
          to="/heritage-sites"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Heritage Sites
        </Link>
      </div>
    </div>
  );
} 