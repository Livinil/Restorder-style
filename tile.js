function mousemoveHandler (event) {
 	var regions = {
		top: {
			x1: this.offsetLeft + this.offsetWidth * 1/3,
			x2: this.offsetLeft + this.offsetWidth * 2/3,
			y1: this.offsetTop,
			y2: this.offsetTop + this.offsetHeight * 1/3
		},
		right: {
			x1: this.offsetLeft + this.offsetWidth * 2/3,
			x2: this.offsetLeft + this.offsetWidth,
			y1: this.offsetTop,
			y2: this.offsetTop + this.offsetHeight
		},
		bottom: {
			x1: this.offsetLeft + this.offsetWidth * 1/3,
			x2: this.offsetLeft + this.offsetWidth * 2/3,
			y1: this.offsetTop + this.offsetHeight * 2/3,
			y2: this.offsetTop + this.offsetHeight
		},
		left: {
			x1: this.offsetLeft,
			x2: this.offsetLeft + this.offsetWidth * 1/3,
			y1: this.offsetTop,
			y2: this.offsetTop + this.offsetHeight
		},
		center: {
			x1: this.offsetLeft + this.offsetWidth * 1/3,
			x2: this.offsetLeft + this.offsetWidth * 2/3,
			y1: this.offsetTop + this.offsetHeight * 1/3,
			y2: this.offsetTop + this.offsetHeight * 2/3
		}
	};

	for (var region in regions) {
		this.classList.remove(region);
		if (regions[region].x1 < event.pageX && event.pageX < regions[region].x2 &&
			regions[region].y1 < event.pageY && event.pageY < regions[region].y2) {
			this.classList.add(region);
		}
	}

	this.parentElement.style.webkitPerspectiveOriginX = this.offsetLeft + this.offsetWidth / 2 + "px";
	this.parentElement.style.webkitPerspectiveOriginY = this.offsetTop + this.offsetHeight / 2 + "px";
}