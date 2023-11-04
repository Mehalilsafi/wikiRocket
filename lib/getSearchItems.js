
export default async function getSearchItems(searchTerm) {
    const params = new URLSearchParams({
      action: 'query',
      generator: 'search',
      gsrsearch: searchTerm,
      gsrlimit: '20',
      prop: 'pageimages|extracts',
      exchars: '100',
      exintro: 'true',
      explaintext: 'true',
      exlimit: 'max',
      format: 'json',
      origin: '*',
    });
  
    const url = 'https://en.wikipedia.org/w/api.php?' + params;
  
    const response = await fetch(url);
    console.log(response.json)
    return response.json();
 
  }
  
