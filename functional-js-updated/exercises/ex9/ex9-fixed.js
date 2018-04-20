const countdownLength = 5;
// create a new observable - a stream / lazy array - called timer
// are interval and time interval observable methods - yes
// interval goes 0, 1, 2
//timeInterval *converts* the output into the gap between outputs 0, 1000, 1000 etc.
var timer = Rx.Observable.interval(1000).timeInterval();

// we are creating a compound + transformed observable - countdown - by merging two observables
// .of(-1) creates an observable from the sequence -1 (emits -1 over and over)
// .take() sets the limit of the time overservable (to 5 in this case)
// .pluck(key) is like map but pulls out the value of the specified key from the obs obj
var countdown =
	Rx.Observable.merge(
		Rx.Observable.of(-1),
		timer.take(countdownLength).pluck("value")
	)
	// and then mapping the merge with formatCountdown()
	.map(formatCountdown);

// Having defined our output observable ('countdown') - a compound of other created and
// transformed observables, we now subsribe something to it using so that it's output is used!
// To do this we use the .subscribe() method on the observable,
// with the .subscribe(nextCallback,errorCallback,completeCallback) syntax.
countdown.subscribe(
	console.log.bind(console),
	null,
	console.log.bind(console,"Complete!")
);


// *************************************
// formatCountdown takes a counter
// and returns the result of calling formatTime on the value
// countDownLength (5) - counter (our param, which is a merging of the two observables) - 1
function formatCountdown(counter) {
	return formatTime(countdownLength - counter - 1);
}

function formatTime(time) {
	var hours = Math.floor(time / 60);
	var minutes = time % 60;
	if (minutes < 10) minutes = `0${minutes}`;
	return `${hours}:${minutes}`;
}
