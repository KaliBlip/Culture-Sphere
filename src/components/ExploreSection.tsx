import { useInView } from 'react-intersection-observer';
import { Compass, Globe, Book, Users } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function CategoryCard({ icon, title, description, delay }: CategoryCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function ExploreSection() {
  const categories = [
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Virtual Tours",
      description: "Experience immersive 3D tours of cultural heritage sites from around the world."
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Learn & Discover",
      description: "Access educational resources and expert insights about global cultural heritage."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Connect with cultural enthusiasts and experts from diverse backgrounds."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Contribute",
      description: "Share your knowledge and help preserve cultural heritage for future generations."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Culture Sphere</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover different ways to engage with and preserve cultural heritage
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}