const getGiphy = async() => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?q=kirito&api_key=AhUN5gDNtxIy8xx84zR8BueNRu6M1b0e&limit=10")
    const data = await response.json();
    console.log(data);
}

getGiphy();