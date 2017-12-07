(
	function pazalGame() {
		var items = document.querySelectorAll('.pazal-container li')
		,	item = document.querySelector('.pazal-container ul')
		, 	button = document.querySelector('.start-btn')
		, 	letsPlay = document.querySelector('.lets-play')
		,	loop	= true
		, 	stopLoop = true
		,	startLoop
		,	fixVal = 75
		,	tileMoveCount = 0
		, 	moves = 0
		,	utilites
		,	emptyTile
		,	crTop
		, 	crLft
		,	emTop
		,	emLft
		,   emptyClass
		,	topArray = [0, 1, 2, 3]
		,	leftArray = [0, 1, 2, 3]
		, 	startGame = false;
		;

		utilites = {
			"equalTopList": function () {
				for (var i = 0; i < items.length; i++) {
					if (items[i].offsetTop === emTop) {
						var itemTopVal = items[i].offsetLeft;
						switch (itemTopVal) {
							case 0:
								topArray.splice(0, 1, items[i])
								break;

							case 75:
								topArray.splice(1, 1, items[i])
								break;

							case 150:
								topArray.splice(2, 1, items[i])
								break;

							case 225:
								topArray.splice(3, 1, items[i])
								break;
						}
					}
				}
			},

			"equalLeftList": function () {
				for (var i = 0; i < items.length; i++) {
					if (items[i].offsetLeft === emLft) {
						var itemTopVal = items[i].offsetTop;
						switch (itemTopVal) {
							case 0:
								leftArray.splice(0, 1, items[i])
								break;

							case 75:
								leftArray.splice(1, 1, items[i])
								break;

							case 150:
								leftArray.splice(2, 1, items[i])
								break;

							case 225:
								leftArray.splice(3, 1, items[i])
								break;
						}
					}
				}
			},

			"checkArrangement": function () {
				if (items[15].offsetTop ==  225 && items[15].offsetLeft == 225) {
					var iterateString = [];
					var stringToCom = '0-0,0-75,0-150,0-225,75-0,75-75,75-150,75-225,150-0,150-75,150-150,150-225,225-0,225-75,225-150,225-225';
					for (var i = 0; i < items.length; i++) {
						var itrateVal = items[i].offsetTop + '-' + items[i].offsetLeft;
						iterateString.push(itrateVal);
					}
					if (iterateString == stringToCom) {
						tileMoveCount = 0;
						moves = 0;
						alert('wow, you made it :)')
					}
				}
			}

		}
	
	//Moving tile on click
	item.addEventListener("click", function( event ) {
		event.stopPropagation();
		emptyClass = event.target.className;
		crTop = event.target.offsetTop;
		crLft = event.target.offsetLeft;
		emTop = items[15].offsetTop;
		emLft = items[15].offsetLeft;

		if (!tileMoveCount == 0) {
				button.style.display = 'none';
				randomArrangment(false);
		} else {
			randomArrangment(true);
			button.innerHTML = 'Lets Play';
			button.classList.add('lets-play');
		}

		if (emptyClass == 'd-fourth') {
			alert("OOPS, Wrong box, Please select other box");
			return;
		}
		else {
			if (crTop == emTop || crLft == emLft) {
				if (crLft == emLft) {
					if (crTop - fixVal == emTop || crTop + fixVal == emTop) {
						items[15].style.top = crTop + 'px';
						event.target.style.top =  emTop + 'px';
					}

					if (crTop - fixVal * 2 == emTop || crTop + fixVal * 2 == emTop) {
						utilites.equalLeftList();
						for (var i in leftArray) {
							if (leftArray[i] == event.target && crTop + fixVal * 2 == emTop) {
								event.target.style.top =  crTop + fixVal + 'px';
								leftArray[++i].style.top = emTop + 'px';
								items[15].style.top = crTop + 'px';
								break;
							}

							if (leftArray[i] == event.target && crTop - fixVal * 2 == emTop) {
								event.target.style.top =  crTop - fixVal + 'px';
								leftArray[--i].style.top = emTop + 'px';
								items[15].style.top = crTop + 'px';
								break;
							}
						}
						leftArray = [0, 1, 2, 3];
					}

					if (crTop - fixVal * 3 == emTop || crTop + fixVal * 3 == emTop) {
						utilites.equalLeftList();
						for (var i in leftArray) {
							if (leftArray[i] == event.target && crTop + fixVal * 3 == emTop) {
								event.target.style.top =  crTop + fixVal + 'px';
								leftArray[++i].style.top = crTop + fixVal * 2 + 'px';
								leftArray[++i].style.top = emTop + 'px';
								items[15].style.top = crTop + 'px';
								break;
							}
							if (leftArray[i] == event.target && crTop - fixVal * 3 == emTop) {
								event.target.style.top =  crTop - fixVal + 'px';
								leftArray[--i].style.top = crTop - fixVal * 2 + 'px';
								leftArray[--i].style.top = emTop + 'px';
								items[15].style.top = crTop + 'px';
								break;
							}
						}
						leftArray = [0, 1, 2, 3];
					}
				}

				if (crTop == emTop) {
					if (crLft - fixVal == emLft || crLft + fixVal == emLft) {
						items[15].style.left = crLft + 'px';
						event.target.style.left =  emLft + 'px';
					}

					if (crLft - fixVal * 2 == emLft || crLft + fixVal * 2 == emLft) {
						utilites.equalTopList();
						for (var i in topArray) {
							if (topArray[i] == event.target && crLft + fixVal * 2 == emLft) {
								event.target.style.left =  crLft + fixVal + 'px';
								topArray[++i].style.left = emLft + 'px';
								items[15].style.left = crLft + 'px';
								break;
							}

							if (topArray[i] == event.target && crLft - fixVal * 2 == emLft) {
								event.target.style.left =  crLft - fixVal + 'px';
								topArray[--i].style.left = emLft + 'px';
								items[15].style.left = crLft + 'px';
								break;
							}
						}
						topArray = [0, 1, 2, 3];
					}

					if (crLft - fixVal * 3 == emLft || crLft + fixVal * 3 == emLft) {
						utilites.equalTopList();
						for (var i in topArray) {
								if (topArray[i] == event.target && crLft + fixVal * 3 == emLft) {
									event.target.style.left =  crLft + fixVal + 'px';
									topArray[++i].style.left = crLft + fixVal * 2 + 'px';
									topArray[++i].style.left = emLft + 'px';
									items[15].style.left = crLft + 'px';
									break;
								}
								if (topArray[i] == event.target && crLft - fixVal * 3 == emLft) {
									event.target.style.left =  crLft - fixVal + 'px';
									topArray[--i].style.left = crLft - fixVal * 2 + 'px';
									topArray[--i].style.left = emLft + 'px';
									items[15].style.left = crLft + 'px';
									break;
								}
						}
						topArray = [0, 1, 2, 3];
					}
				}
				moves += 1;
				document.querySelector('.move-cnt').innerHTML = moves;
				utilites.checkArrangement();
			}
		}
	});

	
	button.addEventListener('click', function(e) {
		
			if (this.className.split(' ').indexOf('lets-play') > -1) {
				this.style.display = 'none';
				randomArrangment(false)
			} else {
				this.innerHTML = 'Lets Play';
				this.classList.add('lets-play');
				randomArrangment(loop);
			}
		
	});

	function randomArrangment(loop) {
		if (loop) {
			var randomNum
			var count = 0;
			startLoop = setInterval(function() {
				randomNum = Math.floor(Math.random() * (0 - 2)) + 1;
				emTop = items[15].offsetTop;
				emLft = items[15].offsetLeft;

				if (randomNum >= 0) {
					utilites.equalLeftList();
					for (var i in leftArray) {
						if (emTop == 0 && count ==0) {
							count = 1
						} else {
							if (emTop == 225 && count ==1) {
								count = 0
							}
							if (emTop == leftArray[i].offsetTop - fixVal && count ==1) {
								items[15].style.top = emTop + fixVal + 'px';
								leftArray[i].style.top = emTop + 'px';
								count = 1;
								break;
							}
							if (emTop == leftArray[i].offsetTop + fixVal && count ==0) {
								items[15].style.top = items[15].offsetTop - fixVal + 'px';
								leftArray[i].style.top = emTop + 'px';
								count = 0;
								break;
							}
						}
					}
					leftArray = [0, 1, 2, 3];
				} else {
					utilites.equalTopList();

					for (var i in topArray) {
						if (emLft == 0 && count ==0) {
							count = 1
						} else {
							if (emLft == 225 && count ==1) {
								count = 0
							}
							if (emLft == topArray[i].offsetLeft - fixVal && count ==1) {
								items[15].style.left = emLft + fixVal + 'px';
								topArray[i].style.left = emLft + 'px';
								count = 1;
								break;
							}
							if (emLft == topArray[i].offsetLeft + fixVal && count ==0) {
								items[15].style.left = items[15].offsetLeft - fixVal + 'px';
								topArray[i].style.left = emLft + 'px';
								count = 0;
								break;
							}
						}
					}
					topArray = [0, 1, 2, 3];
					tileMoveCount += 1;
				}
			}, 100);
		} else {
			stopLoop = false;
			clearInterval(startLoop);
		}
	};

	(function init() {
		//randomArrangment(loop);
	}());

}());
