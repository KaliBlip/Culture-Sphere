import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Globe, Camera, Users, Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PanoramaTourPage } from './pages/PanoramaTourPage';
import { VirtualToursPage } from './pages/VirtualToursPage';
import { VirtualTourDetailPage } from './pages/VirtualTourDetailPage';
import { HeritageSitesPage } from './pages/HeritageSitesPage';
import { HeritageSiteDetailPage } from './pages/HeritageSiteDetailPage';
import { ContentViewerDemo } from './pages/ContentViewerDemo';

function NavLink({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
        ${isActive 
          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md' 
          : 'text-gray-700 hover:bg-blue-50'
        }`}
    >
      <div className={`p-2 rounded-lg transition-colors duration-200
        ${isActive 
          ? 'bg-white/20' 
          : 'bg-blue-50 group-hover:bg-blue-100'
        }`}>
        <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
      </div>
      <span className="font-medium">{children}</span>
    </Link>
  );
}

function NavGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {title}
      </h3>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-xl bg-white shadow-lg hover:bg-gray-50 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 z-40 overflow-y-auto
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="h-full flex flex-col">
            {/* Logo Section */}
            <div className="p-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Culture Sphere</h1>
                  <p className="text-sm text-gray-500">Explore Cultural Heritage</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4">
              <NavGroup title="Main">
                <NavLink to="/" icon={Home}>Home</NavLink>
                <NavLink to="/about" icon={Users}>About</NavLink>
              </NavGroup>

              <NavGroup title="Explore">
                <NavLink to="/virtual-tours" icon={Globe}>Virtual Tours</NavLink>
                <NavLink to="/heritage-sites" icon={Camera}>Heritage Sites</NavLink>
                <NavLink to="/panorama/1" icon={Camera}>Panorama Tour</NavLink>
              </NavGroup>

              <NavGroup title="Interactive">
                <NavLink to="/content-viewer" icon={BookOpen}>Content Viewer</NavLink>
              </NavGroup>

              <NavGroup title="Support">
                <NavLink to="/contact" icon={Phone}>Contact</NavLink>
              </NavGroup>
            </nav>

            {/* Footer Section */}
            <div className="p-6 border-t border-gray-100">
              <div className="flex items-center space-x-3 px-4 py-3 bg-blue-50 rounded-xl">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Community</p>
                  <p className="text-xs text-gray-500">Join our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="lg:ml-72">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/virtual-tours" element={<VirtualToursPage />} />
            <Route path="/virtual-tours/:id" element={<VirtualTourDetailPage />} />
            <Route path="/heritage-sites" element={<HeritageSitesPage />} />
            <Route path="/heritage-sites/:id" element={<HeritageSiteDetailPage />} />
            <Route path="/content-viewer" element={<ContentViewerDemo />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/panorama/:tourId" element={<PanoramaTourPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;