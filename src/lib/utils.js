import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if(days > 7){
    return date.toLocaleDateString()
  }

  if (days > 0 && days <= 7) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
}