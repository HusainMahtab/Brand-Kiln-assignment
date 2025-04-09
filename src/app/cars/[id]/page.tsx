'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Car } from '@/types/car';
import { getCarById } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { addToWishlist, isInWishlist, removeFromWishlist } from '@/lib/wishlist';
import Link from 'next/link';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const data = await getCarById(id as string);
        setCar(data || null);
        setIsWishlisted(isInWishlist(id as string));
      } catch (error) {
        console.error('Error fetching car:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(id as string);
    } else {
      addToWishlist(id as string);
    }
    setIsWishlisted(!isWishlisted);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold">Car not found</h3>
        <p className="text-gray-500">The car you&apos;re looking for doesn&apos;t exist</p>
        <Link href="/">
          <Button className="mt-4">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-video">
            <img
              src={car.imageUrl}
              alt={`${car.brand} ${car.model}`}
              className="object-cover w-full h-full rounded-lg"
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

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500">{car.year}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">
                ${car.price.toLocaleString()}
              </span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-accent rounded-full text-sm">
                  {car.fuelType}
                </span>
                <span className="px-3 py-1 bg-accent rounded-full text-sm">
                  {car.seatingCapacity} seats
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500">Engine</p>
                  <p className="font-medium">{car.specifications.engine}</p>
                </div>
                <div>
                  <p className="text-gray-500">Transmission</p>
                  <p className="font-medium">{car.specifications.transmission}</p>
                </div>
                <div>
                  <p className="text-gray-500">Mileage</p>
                  <p className="font-medium">{car.specifications.mileage}</p>
                </div>
                <div>
                  <p className="text-gray-500">Color</p>
                  <p className="font-medium">{car.specifications.color}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 