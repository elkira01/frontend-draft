export interface APIAdapter {
  get<T>(url: string, headers?: HeadersInit): Promise<T>;
  post<T>(url: string, body: any, headers?: HeadersInit): Promise<T>;
  put<T>(url: string, body: any, headers?: HeadersInit): Promise<T>;
  patch<T>(url: string, body: any, headers?: HeadersInit): Promise<T>;
  delete<T>(url: string, headers?: HeadersInit): Promise<T>;
}
