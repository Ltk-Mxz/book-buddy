import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import BookCard from '../components/BookCard';

const SAMPLE_BOOKS = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "The story of young Scout Finch and her father Atticus in a racially divided Southern town.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale about totalitarianism.",
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2488&ixlib=rb-4.0.3"
  }
];

export default function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Search books"
            placeholder="Enter title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Input
            label="Location"
            placeholder="Enter your location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button className="mt-4">
          <Search className="w-4 h-4 mr-2" />
          Search Books
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_BOOKS.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            imageUrl={book.imageUrl}
            actionLabel="Request Book"
            onAction={() => alert(`Requested: ${book.title}`)}
          />
        ))}
      </div>
    </div>
  );
}