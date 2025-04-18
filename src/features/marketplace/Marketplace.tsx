import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

interface CulturalItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  currency: 'ETH' | 'USD';
  owner: string;
  creator: string;
  category: 'artifact' | 'experience' | 'education';
  metadata: {
    provenance: string[];
    authenticity: string;
    culturalSignificance: string;
    creationDate: string;
  };
}

interface MarketplaceProps {
  provider?: Web3Provider;
  onConnectWallet?: () => Promise<void>;
  onPurchase?: (item: CulturalItem) => Promise<void>;
  onList?: (item: Omit<CulturalItem, 'id' | 'owner'>) => Promise<void>;
}

export function Marketplace({
  provider,
  onConnectWallet,
  onPurchase,
  onList
}: MarketplaceProps) {
  const [items, setItems] = useState<CulturalItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'artifact' | 'experience' | 'education'>('all');
  const [sortBy, setSortBy] = useState<'price' | 'date' | 'name'>('date');

  useEffect(() => {
    if (provider) {
      checkConnection();
    }
  }, [provider]);

  const checkConnection = async () => {
    if (!provider) return;
    try {
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        setConnected(true);
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error('Error checking connection:', error);
    }
  };

  const loadItems = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      const mockItems: CulturalItem[] = [
        {
          id: '1',
          name: 'Ancient Greek Vase',
          description: 'A beautifully preserved amphora from 500 BCE',
          imageUrl: '/images/vase.jpg',
          price: '0.5',
          currency: 'ETH',
          owner: '0x123...abc',
          creator: '0x456...def',
          category: 'artifact',
          metadata: {
            provenance: ['Athens Museum', 'Private Collection'],
            authenticity: 'Verified by Cultural Heritage Institute',
            culturalSignificance: 'High',
            creationDate: '500 BCE'
          }
        },
        // Add more mock items
      ];
      setItems(mockItems);
    } catch (error) {
      setError('Failed to load marketplace items');
      console.error('Error loading items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (item: CulturalItem) => {
    if (!connected) {
      if (onConnectWallet) {
        await onConnectWallet();
      }
      return;
    }

    if (onPurchase) {
      try {
        await onPurchase(item);
        // Refresh items after purchase
        await loadItems();
      } catch (error) {
        console.error('Error purchasing item:', error);
      }
    }
  };

  const handleList = async (item: Omit<CulturalItem, 'id' | 'owner'>) => {
    if (!connected) {
      if (onConnectWallet) {
        await onConnectWallet();
      }
      return;
    }

    if (onList) {
      try {
        await onList(item);
        // Refresh items after listing
        await loadItems();
      } catch (error) {
        console.error('Error listing item:', error);
      }
    }
  };

  const filteredItems = items.filter(item => 
    filter === 'all' ? true : item.category === filter
  ).sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(b.price) - parseFloat(a.price);
      case 'name':
        return a.name.localeCompare(b.name);
      case 'date':
        return new Date(b.metadata.creationDate).getTime() - new Date(a.metadata.creationDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <h1>Cultural Marketplace</h1>
        <div className="controls">
          <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
            <option value="all">All Items</option>
            <option value="artifact">Artifacts</option>
            <option value="experience">Experiences</option>
            <option value="education">Education</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
            <option value="date">Newest First</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          {!connected && (
            <button onClick={onConnectWallet} className="connect-wallet">
              Connect Wallet
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading marketplace items...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="items-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="marketplace-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price">
                  {item.price} {item.currency}
                </div>
                <div className="metadata">
                  <p>Creator: {item.creator}</p>
                  <p>Owner: {item.owner}</p>
                  <p>Category: {item.category}</p>
                </div>
                <button
                  onClick={() => handlePurchase(item)}
                  disabled={!connected || item.owner === account}
                >
                  {item.owner === account ? 'Your Item' : 'Purchase'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {connected && (
        <div className="list-item-form">
          <h2>List New Item</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleList({
              name: formData.get('name') as string,
              description: formData.get('description') as string,
              imageUrl: formData.get('imageUrl') as string,
              price: formData.get('price') as string,
              currency: formData.get('currency') as 'ETH' | 'USD',
              creator: account!,
              category: formData.get('category') as 'artifact' | 'experience' | 'education',
              metadata: {
                provenance: [],
                authenticity: formData.get('authenticity') as string,
                culturalSignificance: formData.get('culturalSignificance') as string,
                creationDate: formData.get('creationDate') as string
              }
            });
          }}>
            <input type="text" name="name" placeholder="Item Name" required />
            <textarea name="description" placeholder="Description" required />
            <input type="text" name="imageUrl" placeholder="Image URL" required />
            <input type="number" name="price" placeholder="Price" required />
            <select name="currency" required>
              <option value="ETH">ETH</option>
              <option value="USD">USD</option>
            </select>
            <select name="category" required>
              <option value="artifact">Artifact</option>
              <option value="experience">Experience</option>
              <option value="education">Education</option>
            </select>
            <input type="text" name="authenticity" placeholder="Authenticity Verification" required />
            <input type="text" name="culturalSignificance" placeholder="Cultural Significance" required />
            <input type="date" name="creationDate" required />
            <button type="submit">List Item</button>
          </form>
        </div>
      )}
    </div>
  );
} 