/*
	Flow Charting Loops

	Working off the cups in a box example pull a red cup out

	Psuedo Code
	Open Box
	More Cups in Box --No-- Close Box
	 |	<----------------				
	Yes 				|
	 |					|
	Pull  Out cup 		|
	 | 					|
	Is cup Red? --No -- Repeat
	 |
	Yes
	 |
	End Loop and Close Box
	
	let boxOfCups = ['green', 'yellow', 'blue', 'green', 'red', 'black', 'purple'];

	for(let i = 0; i < boxOfCups.length; i++) {
		if(box[i] === 'red') {
			console.log('Found the red cup!');
		}
	}
*/