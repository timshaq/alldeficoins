"use strict";

// import webpTest from './webpTest';

// webpTest();

document.addEventListener("DOMContentLoaded", function () {

const header = document.getElementById('header');

function headerActiveClass() {

	if (window.scrollY >= 200) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}

}

headerActiveClass();

window.addEventListener('scroll', function(ev) {
	var scrollTop = window.scrollY
	headerActiveClass()
});

function disableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'hidden';
};

function enableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'scroll';
};

// burger

const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');

burgerOpen.addEventListener('click', function() {
	header.classList.add('open-menu');
	disableScroll();
})

burgerClose.addEventListener('click', function() {
	header.classList.remove('open-menu');
	enableScroll();
})

const searchOpen = document.getElementById('searchOpen');
const searchClose = document.getElementById('searchClose');
const searchForm = document.getElementById('searchForm');
const searchInput = searchForm.querySelector('input');

searchOpen.addEventListener('click', function() {
	header.classList.add('search');
	disableScroll();
	searchInput.focus();
})

searchClose.addEventListener('click', function() {
	header.classList.remove('search');
	enableScroll();
})

searchForm.addEventListener('submit', function(ev) {
	ev.preventDefault();
	const inputValue = searchInput.value;
	console.log(inputValue)
	window.location.href = `/search?search=${inputValue}`;
})

});