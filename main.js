let gData = []
const getGiphy = async() => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?q=kirito&api_key=AhUN5gDNtxIy8xx84zR8BueNRu6M1b0e&limit=10")
    const data = await response.json();
    gData = data.data;
    await showData(gData);
    console.log(data);
}

const showData = (data) => {
    let a = document.getElementById("gData");
    data.forEach(element => {
        let html = `
            <div class="col-md-3">
                <div class="card" style="width: 100%;">
                    <img src="${element.images.original.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.import_datetime}</p>
                        <a href="#" onclick="document.location.href='${element.url}'" class="btn btn-primary">Go Site</a>
                    </div>
                </div>
            </div>
        `;
        a.innerHTML += html;
    });
}

getGiphy();