const swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
});
