let counter = 0;

// Print "Hello World"
// Every second
const interval = setInterval(
	() => {
		console.log(counter)
		console.log('Hello every second');
		counter++;

		// And stop after 5 times
		if (counter === 5) {
			// After 5 times. Print "Done" and let Node exit.
			console.log("Done");
			clearTimeout(interval);
		}
	},
	1000
);
