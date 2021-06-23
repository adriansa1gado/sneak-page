function showMoreData () {
    if(numberPage < 4) {
        showMore.classList.add('btn--enabled');
        return;
    }
    
    numberPage += 1;
    printGallery(numberPage);    
}

async function printGallery (numberPage = 1) {
    const portafolio = await fetchData(numberPage);
    portafolio.map((proyecto) => {                        
        const proyect = document.createElement('figure');
        proyect.classList.add('item');
        proyect.innerHTML = `<img loading="lazy" src="${proyecto.pictureUrl}" alt="imagen de ${proyecto.area}">`;
        galleryMsonry.appendChild(proyect);        
    })
}

printGallery();