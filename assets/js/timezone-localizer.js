function localizeTimes() {
	times = document.querySelectorAll('[id^="time-"]');
	for (i = 0; i < times.length; i++) {
		d = new Date(times[i].innerHTML.replace(" ", ""));
		// Make sure to check whether the element contained a valid date.
		if (d instanceof Date && isFinite(d.getTime())) {
			times[i].innerHTML = "<small>" + d.toLocaleDateString() + "</small><br /><b>" + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'long' }).replace(" ", "</b><br /><small>") + "</small>";
		}
	}
	// If present, show the note regarding the timezone conversion.
	note = document.getElementById("time-conversion-note");
	if (note) {
		note.style.display = "inherit";
	}
}
// Automatically localize times for DOM IDs that begin with "time-".
window.addEventListener("load", localizeTimes);
