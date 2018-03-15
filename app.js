var app=angular.module("HangManApp",[]);
app.controller("GameController",['$scope',function($scope){
	

var words=["rat","cat","mat","bat","fat","sat"];
$scope.inCorrectLettersChosen=[];
$scope.correctLettersChosen=[];
$scope.guesses=6;
$scope.displayWord =[];
$scope.input={letter : ''}

var selectRandomWord = function(){
	var index = Math.round(Math.random()*words.length);
	$scope.demo = "SomeString";
	return words[index];
}
var newGame=function(){
	console.log("in New Game");
	$scope.inCorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
$scope.guesses=6;
$scope.displayWord =[];

    selectedWord = selectRandomWord();
    console.log(selectedWord);
    var tempDisplayWord = '';
    for (var i =0;i<selectedWord.length; i++) {
    	tempDisplayWord +='*'; 
    }
    $scope.displayWord = tempDisplayWord;
    console.log(tempDisplayWord);
}


$scope.letterChosen = function(){

  console.log("In function");  
  $scope.guesses -=1;
  for(var i =0; i< $scope.correctLettersChosen.length; i++) {
  	if ($scope.correctLettersChosen[i].toLowerCase() == $scope.input.letter.toLowercase()) {
  		console.log("first for loop");
           $scope.input.letter ="";

           return;
  	} 
  }

  for(var i =0; i< $scope.inCorrectLettersChosen.length; i++) {
  	if ($scope.inCorrectLettersChosen[i].toLowerCase() == $scope.input.letter.toLowercase()) {
  		console.log("second for loop");
           $scope.input.letter ="";
          
           return;
  	    }
  	} 
console.log("out of loop");
          
  	var correct = false;
  	for (var i = 0; i<selectedWord.length; i++) {
  		console.log("selected word is" + selectedWord[i]);
  		if (selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()) {
  			$scope.displayWord = $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase() + $scope.displayword.slice(i+1);
  			correct = true;
  		}
  	}
  	if(correct){
  		$scope.correctLettersChosen.push($scope.input.letter.toLowercase());
  	}
  	else {
  		$scope.inCorrectLettersChosen.push($scope.input.letter.toLowercase());
  	}
  	$scope.input.letter ="";
  
}

newGame();
}]);