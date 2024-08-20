
import BaseService from './service';

export const fetchMineralsService = async (searchTerm: string) => {
  
  const endpoint = 'search_minerals';    
  const body = {
      filters: {},
      search_text: searchTerm,
    };

  return BaseService.post(endpoint, body)
};
