const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


const nextMove = function(board) {
			for(let i = 0; i < board.length; i++) {
				for(let j = 0; j < board.length; j++) {
					if(board[i][j] === '') {
						return [i, j];
					} 
				}
			}
		};

const makeMove = function(board, loc, isX) {	
				if(isX){
					if(!board[loc[0]][loc[1]])
						board[loc[0]][loc[1]] = 'x';
					return -1;
				}
				if(!isX){
					if(!board[loc[0]][loc[1]])
						board[loc[0]][loc[1]] = 'o';
					return -1;
				}

		return board;
}
const findWinner=function(board) {
	let alert={}
	//horizontal
	for(let i=0; i<board.length; i++){
		if(board[i][0]===board[i][1] && board[i][0]===board[i][2] && board[i][1]===board[i][2]){
			if(board[i][0]==='x'){
			alert ={
			 winner: 'x',
			 winningLocations: [[i, 0], [i, 1], [i, 2]]
			};
			break;
	    };
	    if(board[i][0]==='o'){
			alert ={
			 winner: 'o',
			 winningLocations: [[i, 0], [i, 1], [i, 2]]
			};
	    };
	    
	 };
	};
	 //vertical
	for(let j=0; j<board.length; j++){
		if(board[0][j]===board[1][j] && board[0][j]===board[2][j] &&  board[1][j]===board[2][j]){
			if(board[0][j]==='x'){
			alert ={
			 winner: 'x',
			 winningLocations: [[0,j], [1,j], [2,j]]
			};
	    };
	    if(board[0][j]==='o'){
			alert ={
			 winner: 'o',
			 winningLocations: [[0,j], [1,j], [2,j]]
			};
	    };
	 };
	};
    //diagonally
	if(board[0][0]=== board[1][1] && board[1][1]===board[2][2] && board[0][0]=== board[2][2]){
		   if(board[0][0]==='x'){
			alert ={
			 winner: 'x',
			 winningLocations: [[0,0], [1,1], [2,2]]
			};
	    };
	    if(board[0][0]==='o'){
			alert= {
			winner: 'o',
			winningLocations: [[0,0], [1,1], [2,2]]
			};
	    };
	 };

	if(board[0][2]===board[1][1] && board[2][0]===board[1][1] && board[0][2]===board[2][0]){
		 if(board[0][2]==='x'){
			alert= {
			 winner: 'x',
			 winningLocations: [[0,2], [1,1], [2,0]]
			};
	    };
	    if(board[0][2]==='o'){
			alert= {
			winner: 'o',
			winningLocations: [[0,2], [1,1], [2,0]]
			};
	    };
	 };

	/*
    //tie
	let val=0;
	for(let i=0; i<board.length; i++){
		for(let j=0; j<board.length; j++){
				if(board[i][j]!==' '){
				val += 1;
			}
		};
	};

	if(val === 9) {
   		 return {
        	winner: "none",
   		 };
	};*/
	
	let gameOver=true;
		for (let i=0; i<board.length; i++)
		for (let j=0; j<board.length; j++)
			if(board[i][j]=== '')
			gameOver=false;
	if(gameOver&&!alert.hasOwnProperty('winner'))
	alert = {
		winner : 'none'
	};
	if(alert.hasOwnProperty('winner'))
		return alert;
		else return;		
};


let isX = true;
 /* while(isX){
  	let update = nextMove(board, isX);
  	if(makeMove(board, update, isX) === -1) {
	alert("Invalid option");
		break;
 	}
 	makeMove(board, update, isX);
 	if(findWinner(board) !== undefined) {
 		alert("Game over");
		break;
 	}
 	isX = !isX;
 }
*/

 const canvas = document.getElementById("canvas");
 const context = canvas.getContext("2d");

 const drawBorders = function (borderWidth, strokeStyle) {
 	 const start=0;
	 context.lineWidth = borderWidth;
	 context.strokeStyle = strokeStyle;
	 context.beginPath();


	for (let a=0; a<=3; a++) {
		context.moveTo(a*canvas.width/3, start);
		context.lineTo(a*canvas.width/3, canvas.width - 5);
	};

	for (let b=0; b<=3; b++) {  
		context.moveTo(start, b*canvas.width/3);
		context.lineTo(canvas.width - 5, b*canvas.width/3);
	}
	 context.stroke();
};

drawBorders(5, 'black');

const drawX = function(a, b) {

	context.beginPath();
	context.strokeStyle = 'yellow';
	context.moveTo(a + 25, b + 25);
	context.lineTo(a + canvas.width/3 -25, b + canvas.width/3 -25);
	context.moveTo(a + 25, b + canvas.width/3-25);
	context.lineTo(a + canvas.width/3 - 25, b + 25);
	context.stroke();
};


const drawO = function(a, b) {
	
	context.beginPath();
	context.strokeStyle = 'green';
	context.arc(a + (0.5 * canvas.width / 3),  b + (0.5 * canvas.width / 3), (canvas.width / 3 - 50) / 2, 0, 2 * Math.PI);
	context.stroke();
};


const update = function(isX){
	if(!isX){
		const location = nextMove(board, isX);
		makeMove(board, location, isX);
		drawO(location[1]*(canvas.width / 3), location[0]*(canvas.width / 3))
		
	}
}
canvas.addEventListener('click', function(e){
	const x=Math.floor(e.offsetX/(canvas.width / 3));
	const y = Math.floor(e.offsetY/(canvas.width / 3));
	makeMove(board, [y,x], isX);
	drawX(x*(canvas.width / 3), y*(canvas.width / 3));
	isX=!isX;
	update(isX);
	isX=!isX;
	if(findWinner(board)){
		alert('the winner is   ' + findWinner(board).winner + ',  winning location is     ' + findWinner(board).winningLocations)
	}
})

