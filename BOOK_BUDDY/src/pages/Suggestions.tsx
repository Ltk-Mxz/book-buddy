import React from 'react';
import { UserCircle2 } from 'lucide-react';
import BookCard from '../components/BookCard';
import Button from '../components/Button';

const SUGGESTIONS = [
  {
    id: 1,
    user: {
      name: "Sarah Wilson",
      location: "Brooklyn, NY",
      rating: 4.8
    },
    hasBook: {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A mystical story about following your dreams.",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3"
    },
    wantsBook: {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A romantic novel of manners.",
      imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2488&ixlib=rb-4.0.3"
    }
  }
];

export default function Suggestions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Exchange Suggestions</h1>
      
      {SUGGESTIONS.map((suggestion) => (
        <div key={suggestion.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-6">
            <UserCircle2 className="h-12 w-12 text-emerald-600" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{suggestion.user.name}</h3>
              <p className="text-sm text-gray-500">
                {suggestion.user.location} • Rating: {suggestion.user.rating}⭐
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">They have:</h4>
              <BookCard {...suggestion.hasBook} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">They want:</h4>
              <BookCard {...suggestion.wantsBook} />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <Button variant="outline">Message</Button>
            <Button>Propose Exchange</Button>
          </div>
        </div>
      ))}
    </div>
  );
}