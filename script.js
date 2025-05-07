let info = document.getElementById('info');
let btn = document.getElementById('btn');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let time = 125;
let timers = [time, time, time, time, time, time, time, time, time];
let txtTimerNum = 30;
let txtTimer = txtTimerNum;
let txtTimerIntervalId = null;
let intervalIds = [null, null, null, null, null, null, null, null, null]
let inputArray = []
info.innerHTML = inputArray;

btn.addEventListener('click', () => {
	inputArray.length = 0;
	info.innerHTML = inputArray;
})

btnTwo.addEventListener('click', () => {
	for (let i = 0; i < 9; i++) {
		let boxy = document.getElementById(`square${[i + 1]}`);
		boxy.classList.remove('yellow', 'orange', 'black');
		boxy.classList.add('white');
	}
})

btnThree.addEventListener('click', () => {
	document.getElementById('square1').classList.remove('white', 'orange', 'black');
	document.getElementById('square1').classList.add('yellow');
	document.getElementById('timer1').classList.add('hidden');
	clearInterval(intervalIds[0]);
	intervalIds[0] = null


	document.getElementById('square2').classList.remove('white', 'orange', 'black');
	document.getElementById('square2').classList.add('yellow');
	document.getElementById('timer2').classList.add('hidden');
	clearInterval(intervalIds[1]);
	intervalIds[1] = null

	document.getElementById('square3').classList.remove('white', 'orange', 'black');
	document.getElementById('square3').classList.add('yellow');
	document.getElementById('timer3').classList.add('hidden');
	clearInterval(intervalIds[2]);
	intervalIds[2] = null

	document.getElementById('square4').classList.remove('white', 'yellow', 'black');
	document.getElementById('square4').classList.add('orange');
	document.getElementById('timer4').classList.add('hidden');
	clearInterval(intervalIds[3]);
	intervalIds[3] = null

	document.getElementById('square6').classList.remove('white', 'orange', 'yellow');
	document.getElementById('square6').classList.add('black');
	document.getElementById('timer6').classList.remove('hidden');

	if (intervalIds[5] != null) {	
		clearInterval(intervalIds[5]);
		intervalIds[5] = null;
		timers[5] = time;
		document.getElementById('timer6').innerHTML = timers[5]
		timers[5]--;
		intervalIds[5] = setInterval(() => {
			document.getElementById('timer6').innerHTML = timers[5];
			timers[5]--;
			if(timers[5] <= 0) {
				clearInterval(intervalIds[5]);
				intervalIds[5] = null
				document.getElementById('square6').classList.remove('black');
				document.getElementById('square6').classList.add('white');
				timers[5] = time;
				document.getElementById('timer6').innerHTML = timers[5];
			}
		}, 1000)
	}

	if(intervalIds[5] == null) {
		intervalIds[5] = setInterval(() => {
			timers[5]--;
			document.getElementById('timer6').innerHTML = timers[5];
			if(timers[5] <= 0) {
				clearInterval(intervalIds[5]);
				intervalIds[5] = null
				document.getElementById('square6').classList.remove('black');
				document.getElementById('square6').classList.add('white');
				timers[5] = time;
				document.getElementById('timer6').innerHTML = timers[5];
			}
		}, 1000)
	}

	document.getElementById('square8').classList.remove('white', 'orange', 'yellow');
	document.getElementById('square8').classList.add('black');
	document.getElementById('timer8').classList.remove('hidden');

	if (intervalIds[7] != null) {	
		clearInterval(intervalIds[7]);
		intervalIds[7] = null;
		timers[7] = time;
		document.getElementById('timer8').innerHTML = timers[7]
		timers[7]--;
		intervalIds[7] = setInterval(() => {
			document.getElementById('timer8').innerHTML = timers[7];
			timers[7]--;
			if(timers[7] <= 0) {
				clearInterval(intervalIds[7]);
				intervalIds[7] = null
				document.getElementById('square8').classList.remove('black');
				document.getElementById('square8').classList.add('white');
				timers[7] = time;
				document.getElementById('timer8').innerHTML = timers[7];
			}
		}, 1000)
	}

	if(intervalIds[7] == null) {
		intervalIds[7] = setInterval(() => {
			timers[7]--;
			document.getElementById('timer8').innerHTML = timers[7];
			if(timers[7] <= 0) {
				clearInterval(intervalIds[7]);
				intervalIds[7] = null
				document.getElementById('square8').classList.remove('black');
				document.getElementById('square8').classList.add('white');
				timers[7] = time;
				document.getElementById('timer8').innerHTML = timers[7];
			}
		}, 1000)
	}

	document.getElementById('square9').classList.remove('white', 'orange', 'yellow');
	document.getElementById('square9').classList.add('black');
	document.getElementById('timer9').classList.remove('hidden');

	if (intervalIds[8] != null) {	
		clearInterval(intervalIds[8]);
		intervalIds[8] = null;
		timers[8] = time;
		document.getElementById('timer9').innerHTML = timers[8]
		timers[8]--;
		intervalIds[8] = setInterval(() => {
			document.getElementById('timer9').innerHTML = timers[8];
			timers[8]--;
			if(timers[8] <= 0) {
				clearInterval(intervalIds[8]);
				intervalIds[8] = null
				document.getElementById('square9').classList.remove('black');
				document.getElementById('square9').classList.add('white');
				timers[8] = time;
				document.getElementById('timer9').innerHTML = timers[8];
			}
		}, 1000)
	}

	if(intervalIds[8] == null) {
		intervalIds[8] = setInterval(() => {
			timers[8]--;
			document.getElementById('timer9').innerHTML = timers[8];
			if(timers[8] <= 0) {
				clearInterval(intervalIds[8]);
				intervalIds[8] = null
				document.getElementById('square9').classList.remove('black');
				document.getElementById('square9').classList.add('white');
				timers[8] = time;
				document.getElementById('timer9').innerHTML = timers[8];
			}
		}, 1000)
	}
})


for(let i = 0; i < 9; i++) {
	let boxy = document.getElementById(`square${[i + 1]}`);
	let timer = document.getElementById(`timer${[i + 1]}`);
	timer.innerHTML = timers[i];
	boxy.addEventListener('click', () => {
    if(boxy.id == 'square1') {
			inputArray.push('12');
      info.innerHTML = inputArray.join(', ');
    } else if (boxy.id == 'square2') {
      inputArray.push('11');
			info.innerHTML = inputArray.join(', ');
    } else if (boxy.id == 'square3') {
      inputArray.push('9');
			info.innerHTML = inputArray.join(', ');
    } else if (boxy.id == 'square4') {
      inputArray.push('1');
			info.innerHTML = inputArray.join(', ');
    } else if (boxy.id == 'square6') {
      inputArray.push('7');
			info.innerHTML = inputArray.join(', ');
    } else if (boxy.id == 'square7') {
      inputArray.push('3');
			info.innerHTML = inputArray.join(', ');
    } else if (boxy.id == 'square8') {
      inputArray.push('5');
			info.innerHTML = inputArray.join(', ');
    } else if (boxy.id == 'square9') {
      inputArray.push('7');
			info.innerHTML = inputArray.join(', ');
    }

    if (txtTimerIntervalId == null) {
      txtTimerIntervalId = setInterval(() => {
        txtTimer--;
        console.log(txtTimer)
        if(txtTimer <= 0) {
          clearInterval(txtTimerIntervalId);
          info.innerHTML = '';
          txtTimerIntervalId = null;
          txtTimer = txtTimerNum;
        }
      }, 1000)
    }

    if (txtTimerIntervalId != null) {
      clearInterval(txtTimerIntervalId);
      txtTimerIntervalId = null;
      txtTimer = txtTimerNum;
      txtTimerIntervalId = setInterval(() => {
        txtTimer--;
        console.log(txtTimer)
        if(txtTimer <= 0) {
          clearInterval(txtTimerIntervalId);
          info.innerHTML = '';
          txtTimerIntervalId = null;
          txtTimer = txtTimerNum;
        }
      }, 1000)
    }
    

    if(boxy.id == 'square5') {
			return;
		}

    if (boxy == 'square1') {
      info.innerHTML.push('12')
    }

		if(boxy.classList.contains('orange')) {
			timer.classList.remove('hidden');
			if(intervalIds[i] == null) {
				intervalIds[i] = setInterval(() => {
					timers[i]--;
					timer.innerHTML = timers[i];
					if(timers[i] <= 0) {
						clearInterval(intervalIds[i]);
						intervalIds[i] = null
						boxy.classList.remove('black');
            console.log('white')
            boxy.classList.add('white');
						timers[i] = time;
						timer.innerHTML = timers[i];
					}
				}, 1000)
			}
		} else {
			timer.classList.add('hidden')
		}

		if(boxy.classList.contains('black')) {
			clearInterval(intervalIds[i]);
			intervalIds[i] = null
      timers[i] = time;
			timer.innerHTML = timers[i];
		}

    if(boxy.classList.contains('yellow')) {
      boxy.classList.remove('yellow');
      boxy.classList.add('orange');
  } else if(boxy.classList.contains('orange')) {
      boxy.classList.remove('orange');
      boxy.classList.add('black');
  } else if(boxy.classList.contains('white')) {
      boxy.classList.remove('white');
      boxy.classList.add('yellow');   
  } else if (boxy.classList.contains('black')){
      boxy.classList.remove('black');
      boxy.classList.add('white');
  }
	})
	boxy.addEventListener('contextmenu', (event) => {
		event.preventDefault()
		
		if (txtTimerIntervalId == null) {
      txtTimerIntervalId = setInterval(() => {
        txtTimer--;
        console.log(txtTimer)
        if(txtTimer <= 0) {
          console.log('done')
          clearInterval(txtTimerIntervalId);
          info.innerHTML = '';
          txtTimerIntervalId = null;
          txtTimer = txtTimerNum;
        }
      }, 1000)
    }

    if (txtTimerIntervalId != null) {
      clearInterval(txtTimerIntervalId);
      txtTimerIntervalId = null;
      txtTimer = txtTimerNum;
      txtTimerIntervalId = setInterval(() => {
        txtTimer--;
        console.log(txtTimer)
        if(txtTimer <= 0) {
          console.log('done')
          clearInterval(txtTimerIntervalId);
          info.innerHTML = '';
          txtTimerIntervalId = null;
          txtTimer = txtTimerNum;
        }
      }, 1000)
		}

		if(boxy.id == 'square1') {
      inputArray.push('Big North');
			info.innerHTML = inputArray.join(', ')
			boxy.classList.remove('orange', 'yellow', 'white');
			boxy.classList.add('black');
			document.getElementById('square2').classList.remove('orange', 'yellow', 'white');
			document.getElementById('square2').classList.add('black');
			document.getElementById('square4').classList.remove('orange', 'yellow', 'white');
			document.getElementById('square4').classList.add('black');
			timer.classList.remove('hidden');
			document.getElementById('timer2').classList.remove('hidden');
			document.getElementById('timer4').classList.remove('hidden');
			
			if (intervalIds[0] != null) {	
				clearInterval(intervalIds[0]);
				intervalIds[0] = null;
				timers[0] = time;
				timer.innerHTML = timers[0]
				timers[0]--;
				intervalIds[0] = setInterval(() => {
					timer.innerHTML = timers[0];
					timers[0]--;
					if(timers[0] <= 0) {
						clearInterval(intervalIds[0]);
						intervalIds[0] = null
						boxy.classList.remove('black');
            boxy.classList.add('white');
						timers[0] = time;
						timer.innerHTML = timers[0];
					}
				}, 1000)
			}

			if(intervalIds[0] == null) {
				intervalIds[0] = setInterval(() => {
					timers[0]--;
					timer.innerHTML = timers[0];
					if(timers[0] <= 0) {
						clearInterval(intervalIds[0]);
						intervalIds[0] = null
						boxy.classList.remove('black');
            boxy.classList.add('white');
						timers[0] = time;
						timer.innerHTML = timers[0];
					}
				}, 1000)
			}
			
			if(intervalIds[1] == null) {
				intervalIds[1] = setInterval(() => {
					timers[1]--;
					document.getElementById('timer2').innerHTML = timers[1];
					if(timers[1] <= 0) {
						clearInterval(intervalIds[1]);
						intervalIds[1] = null
						document.getElementById('square2').classList.remove('black');
            document.getElementById('square2').classList.add('white');
						timers[1] = time;
						document.getElementById('timer2').innerHTML = timers[1];
					}
				}, 1000)
			}

			if (intervalIds[1] != null) {	
				clearInterval(intervalIds[1]);
				intervalIds[1] = null;
				timers[1] = time;
				document.getElementById('timer2').innerHTML = timers[1]
				timers[1]--;
				intervalIds[1] = setInterval(() => {
					document.getElementById('timer2').innerHTML = timers[1];
					timers[1]--;
					if(timers[1] <= 0) {
						clearInterval(intervalIds[1]);
						intervalIds[1] = null
						document.getElementById('square2').classList.remove('black');
            document.getElementById('square2').classList.add('white');
						timers[1] = time;
						document.getElementById('timer2').innerHTML = timers[1];
					}
				}, 1000)
			}


			if(intervalIds[3] == null) {
				intervalIds[3] = setInterval(() => {
					timers[3]--;
					document.getElementById('timer4').innerHTML = timers[3];
					if(timers[3] <= 0) {
						clearInterval(intervalIds[3]);
						intervalIds[3] = null
						document.getElementById('square4').classList.remove('black');
						document.getElementById('square4').classList.add('white');
						timers[3] = time;
						document.getElementById('timer4').innerHTML = timers[3];
					}
				}, 1000)
			}

			if (intervalIds[3] != null) {	
				clearInterval(intervalIds[3]);
				intervalIds[3] = null;
				timers[3] = time;
				document.getElementById('timer4').innerHTML = timers[3]
				timers[3]--;
				intervalIds[3] = setInterval(() => {
					document.getElementById('timer4').innerHTML = timers[3];
					timers[3]--;
					if(timers[3] <= 0) {
						clearInterval(intervalIds[3]);
						intervalIds[3] = null
						document.getElementById('square4').classList.remove('black');
            document.getElementById('square4').classList.add('white');
						timers[3] = time;
						document.getElementById('timer4').innerHTML = timers[3];
					}
				}, 1000)
			}


		} else if(boxy.id == 'square9') {
      inputArray.push('Big South');
			info.innerHTML = inputArray.join(', ')
			boxy.classList.remove('orange', 'yellow', 'white')
			boxy.classList.add('black')
			document.getElementById('square6').classList.remove('orange', 'yellow', 'white');
			document.getElementById('square6').classList.add('black');
			document.getElementById('square8').classList.remove('orange', 'yellow', 'white');
			document.getElementById('square8').classList.add('black');

      timer.classList.remove('hidden');
			document.getElementById('timer6').classList.remove('hidden');
			document.getElementById('timer8').classList.remove('hidden');

			if (intervalIds[8] != null) {	
				clearInterval(intervalIds[8]);
				intervalIds[8] = null;
				timers[8] = time;
				timer.innerHTML = timers[8]
				timers[8]--;
				intervalIds[8] = setInterval(() => {
					timer.innerHTML = timers[8];
					timers[8]--;
					if(timers[8] <= 8) {
						clearInterval(intervalIds[8]);
						intervalIds[8] = null
						boxy.classList.remove('black');
            boxy.classList.add('white');
						timers[8] = time;
						timer.innerHTML = timers[8];
					}
				}, 1000)
			}

			if(intervalIds[8] == null) {
				intervalIds[8] = setInterval(() => {
					timers[8]--;
					timer.innerHTML = timers[8];
					if(timers[8] <= 0) {
						clearInterval(intervalIds[8]);
						intervalIds[8] = null
						boxy.classList.remove('black');
            boxy.classList.add('white');
						timers[8] = time;
						timer.innerHTML = timers[8];
					}
				}, 1000)
			}

			if (intervalIds[5] != null) {	
				clearInterval(intervalIds[5]);
				intervalIds[5] = null;
				timers[5] = time;
				document.getElementById('timer6').innerHTML = timers[5]
				timers[5]--;
				intervalIds[5] = setInterval(() => {
					document.getElementById('timer6').innerHTML = timers[5];
					timers[5]--;
					if(timers[5] <= 0) {
						clearInterval(intervalIds[5]);
						intervalIds[5] = null
						document.getElementById('square6').classList.remove('black');
            document.getElementById('square6').classList.add('white');
						timers[5] = time;
						document.getElementById('timer6').innerHTML = timers[5];
					}
				}, 1000)
			}

			if(intervalIds[5] == null) {
				intervalIds[5] = setInterval(() => {
					timers[5]--;
					document.getElementById('timer6').innerHTML = timers[5];
					if(timers[5] <= 0) {
						clearInterval(intervalIds[5]);
						intervalIds[5] = null
						document.getElementById('square6').classList.remove('black');
						document.getElementById('square6').classList.add('white');
						timers[5] = time;
						document.getElementById('timer6').innerHTML = timers[5];
					}
				}, 1000)
			}

			if (intervalIds[7] != null) {	
				clearInterval(intervalIds[7]);
				intervalIds[7] = null;
				timers[7] = time;
				document.getElementById('timer8').innerHTML = timers[7]
				timers[7]--;
				intervalIds[7] = setInterval(() => {
					document.getElementById('timer8').innerHTML = timers[7];
					timers[7]--;
					if(timers[7] <= 0) {
						clearInterval(intervalIds[7]);
						intervalIds[7] = null
						document.getElementById('square8').classList.remove('black');
            document.getElementById('square8').classList.add('white');
						timers[7] = time;
						document.getElementById('timer8').innerHTML = timers[7];
					}
				}, 1000)
			}

			if(intervalIds[7] == null) {
				intervalIds[7] = setInterval(() => {
					timers[7]--;
					document.getElementById('timer8').innerHTML = timers[7];
					if(timers[7] <= 0) {
						clearInterval(intervalIds[7]);
						intervalIds[7] = null
						document.getElementById('square8').classList.remove('black');
						document.getElementById('square8').classList.add('white');
						timers[7] = time;
						document.getElementById('timer8').innerHTML = timers[7];
					}
				}, 1000)
			}
		} else {
			return;
		}
	})
}