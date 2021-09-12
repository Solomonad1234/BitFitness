$(document).ready(() => {
    // navbar
    $('.navbar-show-btn').click(() => {
        $('.navbar-collapse').addClass('showNavbar');
    });

    $('.navbar-hide-btn').click(() => {
        $('.navbar-collapse').removeClass('showNavbar');
    });

    // slick slider
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    // stopping transition
    let  resizeTimer ;
    $(window).on('resize', () => {
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });
});

//Counter Query

const counters = document.querySelectorAll('.num');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText =count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
