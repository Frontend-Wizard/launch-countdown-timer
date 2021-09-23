"use strict";

const NumberCardD = {
	Top_TopPart: document.getElementById("DNumberCardInnerTop_TopPart"),
	Top_BottomPart: document.getElementById("DNumberCardInnerTop_BottomPart"),
	Bottom_TopPart: document.getElementById("DNumberCardInnerBottom_TopPart"),
};

const NumberCardH = {
	Top_TopPart: document.getElementById("HNumberCardInnerTop_TopPart"),
	Top_BottomPart: document.getElementById("HNumberCardInnerTop_BottomPart"),
	Bottom_TopPart: document.getElementById("HNumberCardInnerBottom_TopPart"),
};

const NumberCardM = {
	Top_TopPart: document.getElementById("MNumberCardInnerTop_TopPart"),
	Top_BottomPart: document.getElementById("MNumberCardInnerTop_BottomPart"),
	Bottom_TopPart: document.getElementById("MNumberCardInnerBottom_TopPart"),
};

const NumberCardS = {
	Top_TopPart: document.getElementById("SNumberCardInnerTop_TopPart"),
	Top_BottomPart: document.getElementById("SNumberCardInnerTop_BottomPart"),
	Bottom_TopPart: document.getElementById("SNumberCardInnerBottom_TopPart"),
};

//Format number to 2 decimals
const valid = (a) => {
	if (a < 10) {
		return "0" + a;
	} else return a;
};

//Get number of day in this month
const dayInMonth = (a) => {
	if ((a % 2 == 0 && a !== 2 && a <= 7) || (a % 2 == 1 && a > 7)) return 30;
	else if ((a % 2 == 1 && a !== 2 && a <= 7) || (a % 2 == 0 && a > 7))
		return 31;
	else if (a === 2) return new Date().getFullYear() % 4 === 0 ? 29 : 28;
};

//Update Days
function updateD(k) {
	document.querySelector(".NumberCardInnerTop .TopPart").style.animation =
		"change .5s forwards";
	if (NumberCardD.Top_TopPart.innerText !== valid(k))
		NumberCardD.Top_TopPart.innerText = valid(k);
	if (NumberCardD.Bottom_TopPart.innerText !== valid(k))
		NumberCardD.Bottom_TopPart.innerText = valid(k);

	setTimeout(() => {
		NumberCardD.Top_TopPart.style.transform =
			"rotateX(180deg) translateY(-80%)";
		NumberCardD.Top_BottomPart.style.color = "transparent";
	}, 50);

	setTimeout(() => {
		document.querySelector(".NumberCardInnerTop .TopPart").style.animation = "";
		NumberCardD.Top_TopPart.style.transform = "";
		NumberCardD.Top_BottomPart.innerText = valid(k);
		NumberCardD.Top_BottomPart.style.color = "#fb6087";
	}, 520);
}

//Update Hours
function updateH(k) {
	document.querySelector(".NumberCardInnerTop .H").style.animation =
		"change .5s forwards";
	if (NumberCardH.Top_TopPart.innerText !== valid(k))
		NumberCardH.Top_TopPart.innerText = valid(k);
	if (NumberCardH.Bottom_TopPart.innerText !== valid(k))
		NumberCardH.Bottom_TopPart.innerText = valid(k);

	setTimeout(() => {
		NumberCardH.Top_TopPart.style.transform =
			"rotateX(180deg) translateY(-80%)";
		NumberCardH.Top_BottomPart.style.color = "transparent";
	}, 50);

	setTimeout(() => {
		document.querySelector(".NumberCardInnerTop .H").style.animation = "";
		NumberCardH.Top_TopPart.style.transform = "";
		NumberCardH.Top_BottomPart.innerText = valid(k);
		NumberCardH.Top_BottomPart.style.color = "#fb6087";
	}, 520);
}

//Update Minutes
function updateM(k) {
	document.querySelector(".NumberCardInnerTop .M").style.animation =
		"change .5s forwards";
	if (NumberCardM.Top_TopPart.innerText !== valid(k))
		NumberCardM.Top_TopPart.innerText = valid(k);
	if (NumberCardM.Bottom_TopPart.innerText !== valid(k))
		NumberCardM.Bottom_TopPart.innerText = valid(k);

	setTimeout(() => {
		NumberCardM.Top_TopPart.style.transform =
			"rotateX(180deg) translateY(-80%)";
		NumberCardM.Top_BottomPart.style.color = "transparent";
	}, 50);

	setTimeout(() => {
		document.querySelector(".NumberCardInnerTop .M").style.animation = "";
		NumberCardM.Top_TopPart.style.transform = "";
		NumberCardM.Top_BottomPart.innerText = valid(k);
		NumberCardM.Top_BottomPart.style.color = "#fb6087";
	}, 520);
}

//Update Seconds
function updateS(k) {
	document.querySelector(".NumberCardInnerTop .S").style.animation =
		"change .5s forwards";
	if (NumberCardS.Top_TopPart.innerText !== valid(k))
		NumberCardS.Top_TopPart.innerText = valid(k);
	if (NumberCardS.Bottom_TopPart.innerText !== valid(k))
		NumberCardS.Bottom_TopPart.innerText = valid(k);

	setTimeout(() => {
		NumberCardS.Top_TopPart.style.transform =
			"rotateX(180deg) translateY(-80%)";
		NumberCardS.Top_BottomPart.style.color = "transparent";
	}, 50);

	setTimeout(() => {
		document.querySelector(".NumberCardInnerTop .S").style.animation = "";
		NumberCardS.Top_TopPart.style.transform = "";
		NumberCardS.Top_BottomPart.innerText = valid(k);
		NumberCardS.Top_BottomPart.style.color = "#fb6087";
	}, 520);
}

//Must be a date in current month
let timeOfLaunching = {
	day: 30, //Day of launching
	h: 11, //Hour of launching
	min: 50, //Minute of launching
};

if (timeOfLaunching.day > dayInMonth(new Date().getMonth() + 1))
	timeOfLaunching.day = dayInMonth(new Date().getMonth() + 1);
if (timeOfLaunching.h > 23) timeOfLaunching.h = 23;
if (timeOfLaunching.min > 59) timeOfLaunching.min = 59;

let time = {
	day: timeOfLaunching.day - new Date().getDate(),
	h: timeOfLaunching.h - new Date().getHours(),
	min: timeOfLaunching.min - 1 - new Date().getMinutes(),
	sec: 59 - new Date().getSeconds(),
};

if (time.h < 0 && time.day > 0) {
	time.day--;
	time.h += 24;
}

if (time.min < 0 && time.h > 0) {
	time.h--;
	time.min += 60;
} else if (time.min < 0 && time.day > 0) {
	time.day--;
	time.h += 23;
	time.min += 60;
}

updateD(time.day);
updateH(time.h);
updateM(time.min);
updateS(time.sec);

let updateAll = setInterval(() => {
	if (time.day == 0 && time.h == 0 && time.min == 0 && time.sec == 0) {
		clearInterval(updateAll);
	} else if (time.sec + 59 != new Date().getSeconds()) {
		time.sec = 59 - new Date().getSeconds();
		updateS(time.sec);
		if (time.sec === 59) {
			time.min--;
			updateM(time.min);
			if (time.min === 59) {
				time.h--;
				updateH(time.h);
				if (time.h === 23) {
					time.day--;
					updateD(time.day);
				}
			}
		}
		if (time.min < 0 && time.h > 0) {
			time.h--;
			time.min += 60;
			updateH(time.h);
			updateM(time.min);
		} else if (time.min < 0 && time.day > 0) {
			time.day--;
			time.h += 23;
			time.min += 60;
			updateD(time.day);
			updateH(time.h);
			updateM(time.min);
		}

		if (time.h < 0 && time.day > 0) {
			time.day--;
			time.h += 24;
			updateD(time.day);
			updateH(time.h);
		}
	}
}, 1000);

//check if date passed
if (
	new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		timeOfLaunching.day,
		timeOfLaunching.h,
		timeOfLaunching.min
	) < new Date()
) {
	clearInterval(updateAll);
	updateD(0);
	updateH(0);
	updateM(0);
	updateS(0);
	setTimeout(() => {
		alert("Date passed");
	}, 550);
}
