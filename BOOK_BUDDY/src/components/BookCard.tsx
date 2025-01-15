import React from 'react';
import { Book as BookIcon } from 'lucide-react';
import Button from './Button';

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  imageUrl?: string;
  onAction?: () => void;
  actionLabel?: string;
}

export default function BookCard({ 
  title, 
  author, 
  description, 
  imageUrl, 
  onAction,
  actionLabel = 'Add to Collection'
}: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-3 aspect-h-4 relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-emerald-50 flex items-center justify-center">
            <BookIcon className="h-16 w-16 text-emerald-300" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{author}</p>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{description}</p>
        {onAction && (
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={onAction}
            className="w-full"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}