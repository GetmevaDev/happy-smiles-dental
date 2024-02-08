const API_URL = 'https://smiles-dental-0e579d8726c6.herokuapp.com/api/';

export async function fetchAPI<T = Record<string, unknown>>(path: string): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${path}?populate=deep`, { next: { revalidate: 5 } });

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
}
