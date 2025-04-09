import { Car } from '@/types/car';

const WISHLIST_KEY = 'car-wishlist';

export function getWishlist(): string[] {
  if (typeof window === 'undefined') return [];
  const wishlist = localStorage.getItem(WISHLIST_KEY);
  return wishlist ? JSON.parse(wishlist) : [];
}

export function addToWishlist(carId: string): void {
  const wishlist = getWishlist();
  if (!wishlist.includes(carId)) {
    wishlist.push(carId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
}

export function removeFromWishlist(carId: string): void {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter((id) => id !== carId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
}

export function isInWishlist(carId: string): boolean {
  const wishlist = getWishlist();
  return wishlist.includes(carId);
} 