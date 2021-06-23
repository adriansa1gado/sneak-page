const addFolder = (itemGallery) => folder.push(itemGallery);

const updateNavbarClass = (navbarItem) => {
	for (let i = 0; i < navbarItems.length; i++) {
		navbarItems[i].classList.remove('btn--primary');
	}
	navbarItem.classList.add('btn--primary');
};

// filtra segun el area elegida
const filterData = (e) => {
	galleryMsonry.innerHTML = '';
	updateNavbarClass(e.target);

	if (e.target.dataset.area === 'all') {
		printGallery(folder, false);
		return;
	}

	let dataFilter = folder.filter(
		(elemento) => elemento.area === e.target.dataset.area
	);

	printGallery(dataFilter, false);
};

// busca mas datos del archivo .json
const showMoreData = () => {
	if (numberPage === 4) {
		showMore.classList.add('btn--enabled');
		return;
	}

	numberPage += 1;
	initData(numberPage);
};

// Imprime los datos recibidos por parametro
const printGallery = (data, addtoFolder = true) => {
	data.map((elemento) => {
		const element = document.createElement('figure');
		element.classList.add('item');
		element.innerHTML = `<img loading="lazy" src="${elemento.pictureUrl}" alt="imagen de ${elemento.area}">
        <div class="gallery__item-details">
            <h3 class="title--secundary">${elemento.area}</h3>
            <p>${elemento.nameProyect}</p>
        </div>`;
		galleryMsonry.appendChild(element);

		addtoFolder ? addFolder(elemento) : '';
	});
};

// obtiene los datos
const initData = async (numberPage = 1) => {
	const portafolio = await fetchData(numberPage);

	printGallery(portafolio);
};

initData();
