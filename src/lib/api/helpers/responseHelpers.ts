export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return (await response.json()) as Promise<T>;
}
