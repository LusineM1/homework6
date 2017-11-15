//6.1
const func=function(x,z) {
	if (x===0) {
		return "";
	};

	return z + func(x-1,z);
};

const diamond=function(height,str){
	if(height%2===0){
		height=height+1;
	}
	const loop=function(a){
		if (a===0) {
			return "" ;
		};
		console.log(func(a-1, ' ') + func(2*(Math.floor(height/2)+1-a)+1, str))
		return loop(a-1) 
	}
	const loop1=function(b){
		if(b===0){
			return ""
		};
		console.log(func(Math.floor(height/2)+1-b, ' ') + func(2*b-1,str))
		loop1(b-1)
	}
   loop(Math.floor(height/2)+1);
   loop1(height-(Math.floor(height/2)+1));
};
diamond(5,'@');


//6.2
const symbol = function(val1,val2){
let str='';
	for (let i = 0; i<=val1; i++){
		str=str + val2
};
return str;
}; 

const printDiamond = function(height,str){
	if(height%2===0) {  
		height = height + 1
	};
	for(let i = 0; i<=height; i=i+2){
		console.log(symbol((height-i)/2," ") + symbol(i,str));
	}

	for(let i = height-2; i>=1; i=i-2){
		console.log(symbol((height-i)/2, " ") + symbol(i-1,str));
	}
};
printDiamond(5,"@");

