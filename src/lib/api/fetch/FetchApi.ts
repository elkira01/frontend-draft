import { APIAdapter } from '@/lib/api/adapter';
import { handleResponse } from '@/lib/api/helpers/responseHelpers';

class FetchAPI implements APIAdapter {
  async get<T>(url: string, headers: HeadersInit = {}): Promise<T> {
    const response = await fetch(url, { method: 'GET', headers });
    return handleResponse<T>(response);
  }

  async post<T>(url: string, body: any, headers: HeadersInit = {}): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  }

  async put<T>(url: string, body: any, headers: HeadersInit = {}): Promise<T> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  }
  async patch<T>(url: string, body: any, headers: HeadersInit = {}): Promise<T> {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  }

  async delete<T>(url: string, headers: HeadersInit = {}): Promise<T> {
    const response = await fetch(url, { method: 'DELETE', headers });
    return handleResponse<T>(response);
  }
}

export default FetchAPI;
