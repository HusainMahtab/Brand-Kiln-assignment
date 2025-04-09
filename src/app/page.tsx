'use client';

import { useEffect, useState } from 'react';
import { Car, FilterOptions } from '@/types/car';
import { getCars, getUniqueBrands, getUniqueFuelTypes, getUniqueSeatingCapacities } from '@/lib/api';
import { CarCard } from '@/components/CarCard';
import { Filters } from '@/components/Filters';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({});
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars(filters);
        setCars(data);
        setFilteredCars(data);
        setCurrentPage(1);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [filters]);

  useEffect(() => {
    const filtered = cars.filter((car) =>
      `${car.brand} ${car.model}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [searchQuery, cars]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl backdrop-blur-lg w-full p-6 font-bold fixed top-0 left-0 right-0 z-20">Find Your Dream Car</h1>

        <div className="mb-8 mt-8 w-full fixed top-8 left-0 right-0 backdrop-blur-lg z-20">
          <div className="relative ">
            <Input
              type="text"
              placeholder="Search by brand or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-6"
            />
            <Search className="absolute left-1 top-4 h-4 w-4 text-gray-500 text-[32px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-28">
          <div className="lg:col-span-1 fixed lg:static top-28 p-4 h-16 left-0 z-20 backdrop-blur-2xl bg-accent w-full lg:w-auto lg:h-auto lg:backdrop-blur-none lg:bg-transparent">
            <Filters
              brands={getUniqueBrands(cars)}
              fuelTypes={getUniqueFuelTypes(cars)}
              seatingCapacities={getUniqueSeatingCapacities(cars)}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
              </div>
            ) : currentCars.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold">No cars found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 md:p-0">
                  {currentCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center mt-8 gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <span className="flex items-center px-4">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
