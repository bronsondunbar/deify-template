
/* Template tabs */

$(document).on("click", "#itemGroup > .item", function () {

	var isActive = $(this).hasClass("active");

	if (isActive == false) {

		$("#itemGroup > .item").removeClass("active");
		$(this).addClass("active");

		var elementIndex = $(this).index();

		$("#groupDetails > .grid").removeClass("active");
		$("#groupDetails > .grid").eq(elementIndex).addClass("active");
		

	}

});