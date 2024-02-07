export async function fetchAPI<T = Record<string, unknown>>(path: string): Promise<T> {
  try {
    const response = await fetch(
      `https://smiles-dental-0e579d8726c6.herokuapp.com/api/${path}?populate=deep`
    );

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
}
