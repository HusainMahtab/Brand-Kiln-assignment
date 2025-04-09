export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  seatingCapacity: number;
  imageUrl: string;
  description: string;
  specifications: {
    engine: string;
    transmission: string;
    mileage: string;
    color: string;
  };
};

export type FilterOptions = {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  fuelType?: string;
  seatingCapacity?: number;
  sortBy?: 'price-asc' | 'price-desc';
}; 