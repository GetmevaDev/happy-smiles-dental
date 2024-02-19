const API_URL = 'https://smiles-dental-0e579d8726c6.herokuapp.com/api/';

export async function fetchAPI<T = Record<string, unknown>>(
  path: string,
  deep: boolean = true
): Promise<T> {
  try {
    const url = `${API_URL}${path}${deep ? '?populate=deep' : ''}`;
    const response = await fetch(url, { next: { revalidate: 1 } });

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
}
