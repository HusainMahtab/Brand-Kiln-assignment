# Car Finder Web App

A modern web application built with Next.js, shadcn/ui, and TailwindCSS that allows users to search, filter, and view car details.

## Features

- Search for cars by brand, model, or specifications
- Filter cars by:
  - Brand
  - Price range
  - Fuel type
  - Seating capacity
- Sort cars by price (low to high, high to low)
- View detailed car information
- Add cars to wishlist (stored in localStorage)
- Responsive design for all screen sizes
- Pagination (10 cars per page)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui
- React Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd car-finder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── cars/
│   │   └── [id]/
│   │       └── page.tsx
│   └── page.tsx
├── components/
│   ├── CarCard.tsx
│   ├── Filters.tsx
│   └── ui/
├── lib/
│   ├── api.ts
│   └── wishlist.ts
└── types/
    └── car.ts
```

## API

The application uses a mock API for demonstration purposes. In a production environment, you would replace the mock data in `src/lib/api.ts` with actual API calls.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
