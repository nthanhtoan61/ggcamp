/**
 * API service cho Contact Us page
 * Fetch contact data từ backend API
 */

import { ContactData } from "@/types";

/**
 * Lấy API URL từ environment variable
 * Hỗ trợ cả REACT_APP_API_URL và NEXT_PUBLIC_API_URL
 */
const getApiUrl = (): string => {
  // Trong Next.js, client-side env vars cần prefix NEXT_PUBLIC_
  // Nhưng hỗ trợ cả REACT_APP_API_URL để tương thích
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.REACT_APP_API_URL ||
    "http://localhost:3001";

  return apiUrl;
};

/**
 * Fetch contact data từ API
 * @returns Promise<ContactData>
 * @throws Error nếu fetch thất bại
 */
export const fetchContactData = async (): Promise<ContactData> => {
  const apiUrl = getApiUrl();
  const endpoint = `${apiUrl}/api/contact`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch contact data: ${response.status} ${response.statusText}`
      );
    }

    const data: ContactData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error instanceof Error
      ? error
      : new Error("Failed to load contact data");
  }
};
