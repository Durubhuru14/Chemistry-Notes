// will be called whenever window size changes
window.addEventListener('resize', function() {
	// viewport and full window dimensions will change
	
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;
    let swiper = document.querySelector(".swipper")
    let navHeight = parseInt(document.querySelector(".navbar").clientHeight)
    let footerHeight = parseInt(document.querySelector(".footer").clientHeight)
    console.log(`${viewport_height}-${navHeight+footerHeight}`)
});