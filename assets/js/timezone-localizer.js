function localizeTimes() {
	times = document.querySelectorAll('[id^="time-"]');
	for (i = 0; i < times.length; i++) {
		d = new Date(times[i].innerHTML.replace(" ", ""));
		times[i].innerHTML = "<small>" + d.toLocaleDateString() + "</small><br /><b>" + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'long' }).replace(" ", "</b><br /><small>") + "</small>";
	}
}
// Automatically localize times for DOM IDs that begin with "time-".
window.addEventListener("load", localizeTimes);
