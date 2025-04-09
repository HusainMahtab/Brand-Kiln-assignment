import { FilterOptions } from '@/types/car';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

interface FiltersProps {
  brands: string[];
  fuelTypes: string[];
  seatingCapacities: number[];
  onFilterChange: (filters: FilterOptions) => void;
}

export function Filters({
  brands,
  fuelTypes,
  seatingCapacities,
  onFilterChange,
}: FiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({});

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceRangeChange = (value: number[]) => {
    const newFilters = {
      ...filters,
      minPrice: value[0],
      maxPrice: value[1],
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (value: string) => {
    const newFilters = {
      ...filters,
      sortBy: value as 'price-asc' | 'price-desc',
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  return (
    <div className="flex items-center gap-2 p-4">
      <Sheet>
        <SheetTrigger asChild className='fixed'>
          <Button variant="outline" className="gap-2 cursor-pointer">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="space-y-6 p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Brand</label>
                <Select
                  value={filters.brand}
                  onValueChange={(value) => handleFilterChange('brand', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Fuel Type</label>
                <Select
                  value={filters.fuelType}
                  onValueChange={(value) => handleFilterChange('fuelType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuelTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Seating Capacity</label>
                <Select
                  value={filters.seatingCapacity?.toString()}
                  onValueChange={(value) =>
                    handleFilterChange('seatingCapacity', parseInt(value))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatingCapacities.map((capacity) => (
                      <SelectItem key={capacity} value={capacity.toString()}>
                        {capacity} seats
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select
                  value={filters.sortBy}
                  onValueChange={handleSortChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
                <Slider
                  min={0}
                  max={100000}
                  step={1000}
                  value={[filters.minPrice || 0, filters.maxPrice || 100000]}
                  onValueChange={handlePriceRangeChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${(filters.minPrice || 0).toLocaleString()}</span>
                  <span>${(filters.maxPrice || 100000).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={resetFilters}
                className="flex-1"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <ThemeToggle />
    </div>
  );
} 