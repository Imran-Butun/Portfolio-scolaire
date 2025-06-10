import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 4, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`${sizeClasses[size]} ${
            index < rating
              ? 'text-yellow-500 fill-current'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;