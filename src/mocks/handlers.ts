import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3000/api/hello', () => {
    return HttpResponse.json({ name: 'mock data' });
  }),
];
