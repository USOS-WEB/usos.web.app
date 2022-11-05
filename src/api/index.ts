export async function fetchPossiblePoints() {
    const response = await fetch('https://glacial-harbor-34290.herokuapp.com/points');
    return await response.json();
}

export async function fetchPath(startId: string, selectedId: string){
    if(selectedId && startId){

        
      console.log({body: JSON.stringify({ "start": "142355", "stop": "111028" })})
      const requestOptions = { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "start": startId, "stop": selectedId
            
        })
      };
  
      const response = await fetch('https://glacial-harbor-34290.herokuapp.com/route ', requestOptions)
      console.log('response')
      console.log(response)
      return await response.json() 
    }
    
  }