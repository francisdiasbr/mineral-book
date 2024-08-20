class BaseService {
  constructor() {
    this.baseURL = 'http://127.0.0.1:5002/';
  }

  async get(endpoint, headers = {}) {
    return this.request(endpoint, 'GET', null, headers);
  }

  async post(endpoint, body, headers = {}) {
    return this.request(endpoint, 'POST', body, headers);
  }
  
  async delete(endpoint, headers = {}) {
    return this.request(endpoint, 'DELETE', null, headers);
  }

  async put(endpoint, body = null, headers = {}) {
    return this.request(endpoint, 'PUT', body, headers);
  }

  async request(endpoint, method, body = null, extra_headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...extra_headers,
      },
    };
    // Apenas adiciona 'body' às opções se ele não for nulo
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error = new Error(`HTTP error! status: ${response.status}`);
        error.response = response;
        throw error;
      }
      // Verifica se a resposta realmente tem conteúdo antes de tentar converter para JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      }
      return response.statusText;
    } catch (error) {
      console.error(`API call error with ${method} request from url ${url}`, error.message);
      throw error;
    }
  }
  
}

export default new BaseService();