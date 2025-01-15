import React, { useState } from 'react';
import { User, BookOpen, BookPlus } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import BookCard from '../components/BookCard';

const MY_BOOKS = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel of manners that follows the character development of Elizabeth Bennet.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "The story of teenage protagonist Holden Caulfield and his experiences in New York City.",
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2488&ixlib=rb-4.0.3"
  }
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    location: 'New York, NY',
    bio: 'Book lover and collector. Interested in classic literature and contemporary fiction.'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="bg-emerald-100 p-3 rounded-full">
              <User className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
              <p className="text-gray-500">{profile.location}</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </Button>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <Input
              label="Name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
            <Input
              label="Location"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={4}
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-600">{profile.bio}</p>
        )}
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">My Books</h2>
          <Button>
            <BookPlus className="w-4 h-4 mr-2" />
            Add Book
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MY_BOOKS.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              actionLabel="Remove Book"
              onAction={() => alert(`Remove: ${book.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}