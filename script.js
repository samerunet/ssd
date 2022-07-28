$(() => {
	$(window).on("scroll", function () {
		if ($(window).scrollTop()) {
			$("nav").addClass("black");
		} else {
			$("nav").removeClass("black");
		}
	});
	const $home = () => { 

	}
	const $clearDiv = () => {
		$(".main-content").addClass("hide");

		const $main = $("<div>").addClass(".main-content").appendTo(".container");
	};

	$("#about").on("click", $clearDiv);
});