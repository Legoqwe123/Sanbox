import "./styles.scss";

document.querySelector(".menu").addEventListener("click", function() {
	document.querySelector(".app").classList.toggle("active");
	console.log(this);
});
