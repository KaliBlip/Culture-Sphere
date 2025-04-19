import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Box, Video, Upload, Wallet, Globe, Award, Calendar } from 'lucide-react';
import { ContentViewer } from '../components/ContentViewer';
import '../pages/styles/HomePage.css';

// Add MetaMask window.ethereum type declaration
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
    };
  }
}

interface Artifact {
  id: string;
  type: 'image' | '3d' | 'video';
  title: string;
  description: string;
  url: string;
  gallery?: string[];
  location?: string;
  year?: string;
  status?: string;
  owner: string;
  price: string;
}

export function MarketplacePage() {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // Check if MetaMask is installed
  useEffect(() => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to use the marketplace');
    }
  }, []);

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  // Handle artifact upload
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    setIsUploading(true);
    const file = event.target.files[0];
    const fileType = file.type.split('/')[0];

    // Here you would typically upload to IPFS or your preferred storage solution
    // For demo purposes, we'll create a mock artifact
    const newArtifact: Artifact = {
      id: Date.now().toString(),
      type: fileType === 'image' ? 'image' : fileType === 'video' ? 'video' : '3d',
      title: file.name,
      description: 'Uploaded artifact',
      url: URL.createObjectURL(file),
      owner: account,
      price: '0.1 ETH'
    };

    setArtifacts(prev => [...prev, newArtifact]);
    setIsUploading(false);
  };

  return (
    <div className="vr-gradient min-h-screen text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="vr-heading text-4xl mb-4">Cultural Artifacts Marketplace</h1>
            <p className="vr-subheading text-xl text-gray-300">
              Buy, sell, and explore unique cultural artifacts
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {!isConnected ? (
              <button
                onClick={connectWallet}
                className="vr-button flex items-center"
              >
                <Wallet className="h-5 w-5 mr-2" />
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-blue-400">
                  {account.slice(0, 6)}...{account.slice(-4)}
                </span>
                <label className="vr-button flex items-center cursor-pointer">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Artifact
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,video/*,.glb,.gltf"
                    onChange={handleUpload}
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {isUploading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-white">Uploading artifact...</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedArtifact(artifact)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="h-64 bg-gray-800/50 flex items-center justify-center">
                  {artifact.type === 'image' && <Image className="h-20 w-20 text-blue-400" />}
                  {artifact.type === '3d' && <Box className="h-20 w-20 text-blue-400" />}
                  {artifact.type === 'video' && <Video className="h-20 w-20 text-blue-400" />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-blue-400">{artifact.location || 'Unknown Location'}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-blue-400">{artifact.status || 'Cultural Artifact'}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="vr-heading text-xl mb-2">{artifact.title}</h2>
                <p className="text-gray-300 line-clamp-2 mb-4">{artifact.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400">{artifact.price}</span>
                  <span className="text-sm text-gray-400">
                    Owner: {artifact.owner.slice(0, 6)}...{artifact.owner.slice(-4)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedArtifact && (
          <ContentViewer
            type={selectedArtifact.type}
            content={{
              url: selectedArtifact.url,
              title: selectedArtifact.title,
              description: selectedArtifact.description
            }}
            gallery={selectedArtifact.gallery}
            onClose={() => setSelectedArtifact(null)}
          />
        )}
      </div>
    </div>
  );
} 