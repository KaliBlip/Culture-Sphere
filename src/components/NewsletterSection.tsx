import { useState } from 'react';
import { Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';

interface SubscriptionState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscription, setSubscription] = useState<SubscriptionState>({
    status: 'idle',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setSubscription({
        status: 'error',
        message: 'Please enter your email address',
      });
      return;
    }

    setSubscription({
      status: 'loading',
      message: 'Subscribing...',
    });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubscription({
        status: 'success',
        message: 'Thank you for subscribing! Please check your email for confirmation.',
      });
      setEmail('');
    } catch (error) {
      setSubscription({
        status: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Mail className="h-48 w-48 text-indigo-500 opacity-10" />
          </div>
          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-white">Stay Connected</h2>
            <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for updates on new cultural heritage discoveries,
              virtual exhibitions, and community events.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center max-w-xl mx-auto">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full rounded-l-full border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  disabled={subscription.status === 'loading'}
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  disabled={subscription.status === 'loading'}
                  className="block w-full rounded-r-full bg-indigo-500 px-4 py-3 font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscription.status === 'loading' ? (
                    <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
            </form>
            
            {subscription.status !== 'idle' && (
              <div
                className={`mt-4 flex items-center justify-center space-x-2 ${
                  subscription.status === 'success' ? 'text-green-300' : 'text-red-300'
                }`}
              >
                {subscription.status === 'success' ? (
                  <CheckCircle className="h-5 w-5" />
                ) : subscription.status === 'error' ? (
                  <XCircle className="h-5 w-5" />
                ) : null}
                <p>{subscription.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}