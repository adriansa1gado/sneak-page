showMore.addEventListener('click', showMoreData);
navbar.addEventListener('click', showNavbar);

for (let i = 0; i < navbarItems.length; i++) {
	navbarItems[i].addEventListener('click', filterData);
}

for (let i = 0; i < galleryMenu.length; i++) {
	galleryMenu[i].addEventListener('click', seeGalleryMenu);
}
