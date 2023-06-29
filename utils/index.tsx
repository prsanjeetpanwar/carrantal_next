
export async function fetchCars() {
    const headers = {
      'X-RapidAPI-Key': '5f3ca8ec42msh75c342cbb8e7d2cp11909ajsnf95337a3b73e',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };
  
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
      headers: headers,
    });
  
    const result = await response.json();
    return result;
  }
  
