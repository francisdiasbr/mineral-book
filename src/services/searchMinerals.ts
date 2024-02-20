export const fetchMineralsService = async (searchTerm: string) => {
  const apiMainDomain = 'http://127.0.0.1:';
  const portTipsterService = '5000';
  
  const url = `${apiMainDomain}${portTipsterService}/search_minerals?text=${encodeURIComponent(searchTerm)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({
      filters: {}
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};
