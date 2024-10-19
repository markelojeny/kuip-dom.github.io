class Api { 
  constructor(config) { 
    this._url = config.url; 
    this._headers = config.headers; 
  } 
  
  register (fio, email,  tel) { 
    console.log(fio, email,  tel); 
    return this._request(`${this._url}/semidvorie`, { 
        method: 'POST', 
        headers: this._headers, 
        body: JSON.stringify({ fio, email,  tel }), 
    }) 

  };

  _handleResponse (res) { 
    return res.ok 
      ? res.json() 
      : Promise.reject(`Ошибка в ${res.status}`); 
  } 

  _request(url, config) { 

    const updatedOptions = { 
      ...config, 
      credentials: "include", 
    }; 
  
    return fetch(url, updatedOptions) 
    .then((res) => this._handleResponse(res)); 
  }
}

const api = new Api ({ 
  url: 'http://centre2000-houses.online',
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default api; 