import { Car } from '@/types/car';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { addToWishlist, isInWishlist, removeFromWishlist } from '@/lib/wishlist';
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(car.id));

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car.id);
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="object-cover w-full h-full rounded-t-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white cursor-pointer"
            onClick={toggleWishlist}
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'
              }`}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            {car.brand} {car.model}
          </h3>
          <p className="text-gray-500">{car.year}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">${car.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500">{car.fuelType}</span>
          </div>
          <div className="flex gap-2 text-sm text-gray-500">
            <span>{car.specifications.transmission}</span>
            <span>•</span>
            <span>{car.specifications.mileage}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/cars/${car.id}`} className="w-full">
          <Button className="w-full cursor-pointer">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
} 