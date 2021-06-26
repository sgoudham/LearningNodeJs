// You can define only ONE function
const helloFunc = (delay) => {
	console.log(`Hello! after ${delay}`)
}

// This is if you're using another function to make it more readable
// const theOneFunc = (timeout) => {
// 	setTimeout(helloFunc, timeout * 1000, timeout);
// };

// Hello after 4 seconds
setTimeout(helloFunc, 4 * 1000, 4);

// Hello after 8 seconds
setTimeout(helloFunc, 8 * 1000, 8);


