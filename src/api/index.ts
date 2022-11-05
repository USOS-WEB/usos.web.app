import pointsMock from '../mocks/pointsMock.json'
import searchMock from '../mocks/searchMock.json'

export async function fetchPossiblePoints() {
    // return await fetch('https://yourapi.com/getPoints');
    return Promise.resolve(JSON.parse(JSON.stringify(pointsMock)));
}

export async function fetchPath(startId: string, selectedId: string){
    if(selectedId && startId){

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start: startId, end: selectedId })
      };
  
    //   await fetch('https://yourapi.com/search', requestOptions)
      return Promise.resolve(searchMock)
    }
    
  }