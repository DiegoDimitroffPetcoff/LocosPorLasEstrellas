export async function FetchGet() {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1");
        const data = await response.json();
   
        return data
      }
      
    
