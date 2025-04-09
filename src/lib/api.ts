import { Car, FilterOptions } from "@/types/car";

// Mock data for cars
const mockCars: Car[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    price: 25000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
    description:
      "A reliable and comfortable sedan with advanced safety features and excellent fuel efficiency.",
    specifications: {
      engine: "2.5L 4-cylinder",
      transmission: "Automatic",
      mileage: "28 MPG",
      color: "Silver",
    },
  },
  {
    id: "2",
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 45000,
    fuelType: "Electric",
    seatingCapacity: 5,
    imageUrl: "https://images.unsplash.com/photo-1551830820-330a71b99659",
    description:
      "A revolutionary electric vehicle with cutting-edge technology and impressive performance.",
    specifications: {
      engine: "Electric Motor",
      transmission: "Single Speed",
      mileage: "358 miles",
      color: "White",
    },
  },
  {
    id: "3",
    brand: "Honda",
    model: "CR-V",
    year: 2023,
    price: 32000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a",
    description:
      "A versatile SUV with hybrid technology and spacious interior.",
    specifications: {
      engine: "2.0L Hybrid",
      transmission: "Automatic",
      mileage: "40 MPG",
      color: "Blue",
    },
  },
  {
    id: "4",
    brand: "Ford",
    model: "F-150",
    year: 2023,
    price: 38000,
    fuelType: "Diesel",
    seatingCapacity: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEz2Os_Tzk2BlPTw7cOBi3pCwnsk2wWup01OkjuQqlmaR1q7dVaEjioY&s",
    description:
      "A powerful pickup truck with impressive towing capacity and rugged design.",
    specifications: {
      engine: "3.0L Diesel",
      transmission: "Automatic",
      mileage: "25 MPG",
      color: "Black",
    },
  },
  {
    id: "5",
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 65000,
    fuelType: "Petrol",
    seatingCapacity: 7,
    imageUrl:
      "https://media.istockphoto.com/id/1255788257/photo/generic-modern-car-as-product-shot.jpg?s=612x612&w=0&k=20&c=2hf1RiTYrpTtlHIE_FTFj_V5k5Cu_z85V84iIK8Lqbc=",
    description:
      "A luxury SUV with premium features and exceptional performance.",
    specifications: {
      engine: "3.0L 6-cylinder",
      transmission: "Automatic",
      mileage: "22 MPG",
      color: "Gray",
    },
  },
  {
    id: "6",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 48000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://media.istockphoto.com/id/1255788539/photo/generic-modern-car-as-product-shot.jpg?s=612x612&w=0&k=20&c=JmPQRqEhsiU-jMZbqA1bJ2Wpbg0KhuUJcbu6iREsZQA=",
    description:
      "A sophisticated luxury sedan with elegant design and advanced technology.",
    specifications: {
      engine: "2.0L 4-cylinder",
      transmission: "Automatic",
      mileage: "26 MPG",
      color: "White",
    },
  },
  {
    id: "7",
    brand: "Audi",
    model: "Q5",
    year: 2023,
    price: 55000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    imageUrl:
      "https://media.istockphoto.com/id/485492791/photo/red-car.jpg?s=612x612&w=0&k=20&c=1NdTGPsBGwv32l9PNit_1ZxoX4-fhTTbKWKhG89gyow=",
    description:
      "A premium SUV with quattro all-wheel drive and luxurious interior.",
    specifications: {
      engine: "2.0L Hybrid",
      transmission: "Automatic",
      mileage: "27 MPG",
      color: "Black",
    },
  },
  {
    id: "8",
    brand: "Volkswagen",
    model: "Golf",
    year: 2023,
    price: 28000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QYJeIe20riUNbI1p1jONcRCyaxgwALMwhA&s",
    description:
      "A compact hatchback with sporty handling and practical design.",
    specifications: {
      engine: "2.0L 4-cylinder",
      transmission: "Automatic",
      mileage: "32 MPG",
      color: "Red",
    },
  },
  {
    id: "9",
    brand: "Subaru",
    model: "Outback",
    year: 2023,
    price: 35000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZbnwJlZWdTgVWddz3eKoxHlfQYKAa96Sww&s",
    description:
      "An adventure-ready wagon with all-wheel drive and rugged capability.",
    specifications: {
      engine: "2.5L 4-cylinder",
      transmission: "Automatic",
      mileage: "29 MPG",
      color: "Green",
    },
  },
  {
    id: "10",
    brand: "Jeep",
    model: "Wrangler",
    year: 2023,
    price: 42000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://media.istockphoto.com/id/475358758/photo/generic-black-car-side-view.jpg?s=612x612&w=0&k=20&c=AqvwJDXA4duFwBcuYKeXRS3H9XNy_iOnJsiVGW6XZz8=",
    description: "An iconic off-road vehicle with removable top and doors.",
    specifications: {
      engine: "3.6L V6",
      transmission: "Automatic",
      mileage: "20 MPG",
      color: "Yellow",
    },
  },
  {
    id: "11",
    brand: "Subaru",
    model: "Outback",
    year: 2023,
    price: 35000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://media.istockphoto.com/id/490313551/photo/white-3d-car-luxury-suv.jpg?s=612x612&w=0&k=20&c=nQI_40FSgNGzpq8r59uSrshMfePNuFbEA59lcxOiiY4=",
    description:
      "An adventure-ready wagon with all-wheel drive and rugged capability.",
    specifications: {
      engine: "2.5L 4-cylinder",
      transmission: "Automatic",
      mileage: "29 MPG",
      color: "Green",
    },
  },
  {
    id: "12",
    brand: "Subaru",
    model: "Outback",
    year: 2023,
    price: 35000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZbnwJlZWdTgVWddz3eKoxHlfQYKAa96Sww&s",
    description:
      "An adventure-ready wagon with all-wheel drive and rugged capability.",
    specifications: {
      engine: "2.5L 4-cylinder",
      transmission: "Automatic",
      mileage: "29 MPG",
      color: "Green",
    },
  },
  {
    id: "13",
    brand: "Subaru",
    model: "Outback",
    year: 2023,
    price: 35000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://media.istockphoto.com/id/481709964/photo/generic-car-of-my-own-design-in-a-studio-environment.jpg?s=612x612&w=0&k=20&c=gzBcwwuWhdobuBD_SxiiJolV0-qwAg6D0YGwYxN8N_Q=",
    description:
      "An adventure-ready wagon with all-wheel drive and rugged capability.",
    specifications: {
      engine: "2.5L 4-cylinder",
      transmission: "Automatic",
      mileage: "29 MPG",
      color: "Green",
    },
  },
  {
    id: "14",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 48000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    imageUrl:
      "https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=eh6EA4g462zfVg5a3iPwMsbNlTGZqYhZFUhcLoaLDSs=",
    description:
      "A sophisticated luxury sedan with elegant design and advanced technology.",
    specifications: {
      engine: "2.0L 4-cylinder",
      transmission: "Automatic",
      mileage: "26 MPG",
      color: "White",
    },
  },
];

export async function getCars(filters: FilterOptions = {}): Promise<Car[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredCars = [...mockCars];

  // Apply filters
  if (filters.brand) {
    filteredCars = filteredCars.filter((car) => car.brand === filters.brand);
  }

  if (filters.minPrice) {
    filteredCars = filteredCars.filter((car) => car.price >= filters.minPrice!);
  }

  if (filters.maxPrice) {
    filteredCars = filteredCars.filter((car) => car.price <= filters.maxPrice!);
  }

  if (filters.fuelType) {
    filteredCars = filteredCars.filter(
      (car) => car.fuelType === filters.fuelType
    );
  }

  if (filters.seatingCapacity) {
    filteredCars = filteredCars.filter(
      (car) => car.seatingCapacity === filters.seatingCapacity
    );
  }

  // Apply sorting
  if (filters.sortBy) {
    filteredCars.sort((a, b) => {
      if (filters.sortBy === "price-asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  return filteredCars;
}

export async function getCarById(id: string): Promise<Car | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockCars.find((car) => car.id === id);
}

export function getUniqueBrands(cars: Car[]): string[] {
  return Array.from(new Set(cars.map((car) => car.brand)));
}

export function getUniqueFuelTypes(cars: Car[]): string[] {
  return Array.from(new Set(cars.map((car) => car.fuelType)));
}

export function getUniqueSeatingCapacities(cars: Car[]): number[] {
  return Array.from(new Set(cars.map((car) => car.seatingCapacity))).sort();
}
