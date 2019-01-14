var twitSearch = 'trump'; //FIRST KEYWORD THAT IS SEARCHED
var input; //USER INPUT VARIABLE
var button; //VARIABLE NAME FOR BUTTON
var consumerKey = 'Unb8354mrg9GNvxqZJvWROE2H'; //apikey
var consumerSecret = '2FmhHlrELDNrgOJZhEFc1XNySSSo3ywU9vKQ8YYKrz5DTNzEsx';//apisecretkey
var token = '1072526542482391042-i0IzulObCpSdfhk30KlWraPPUkShed';//api token
var tokenSecret = 'avIyWAEfryedFkamhEamZDHSsKyEHVhA0zIWETt1LxACd';//api token secret
var cb = new Codebird(); //CODE BIRD LIBRARY
var numberOfObjects = 100; //UP TO 100 TWEETS/CIRCLES
var stat = []; //ARRAY FOR STATUS UODATE
var sizeCircles = []; //ARRAY FOR SIZE OF CIRCLES
var xPos = []; //ARRAY FOR THE MOUSE X POSITION
var yPos = []; //ARRAY FOR THE MOUSE Y POSITION

function setup() { //SETTING UP OUR PROGRAM
  createCanvas(1280, 720); //SIZE OF THE CANVAS
  cb.setConsumerKey(consumerKey, consumerSecret); //CODEBIRD SEARCHING FOR MY KEY AND SECRET IN THEIR LIBRARY
  cb.setToken(token, tokenSecret); //SEARCHING FOR MY TOKEN AND SECRET IN THE CODEBIRD LIBRARY
  noStroke(); //NO STROKE
  input = createInput(); //CREATING AN INPUT FOR THE USER TO SEARCH
  input.position(100, 780); //THE POSITION OF WHERE THE INPUT IS ON THE CANVAS
  button = createButton('Search'); //CREATING A BUTTON WHICH IS CALLED SEARCH
  button.position(input.x + input.width,780); //THE BUTTON IS POSITIONED NEXT TO THE INPUT
  button.mousePressed(search); //WHEN THE BUTTON IS PRESSED WE SEARCH THE TWEETS
  ts(); //TWITTER SEARCH VARIABLE NAME

}

function ts(){ //CREATING A FUNCTION CALLED TS (TWITTERSEARCH)
  var params = {
    q: twitSearch, //WE WANT TO SEARCH TWITTER
    result_type: 'mixed', //WE WANT THE NEWEST AND POPULAR RESULTS
    count: numberOfObjects //NUMBER OF OBJECTS UP TO 100 AS MENTIONED ABOVE
  };

  cb.__call( //CALLING CODEBIRD
    "search_tweets", //SEARCHING FOR THE TWEETS OF WHAT THE USER HAS SEARCHED FOR
    params,
    function(reply) { //REPLY FUNCTION

      background(0, 0, 0); //ALL BLACK BACKGROUND
      var statuses = reply.statuses; //VARIABLE CALLED STATUS ARE THE STATUSES TWEETERS HAVE WRITTEN

      stat = statuses; //VARIABLE STAT IS THE STATUSES
      for (var i = 0; i < statuses.length; i++) { //WE SEARCH FOR ONE MORE TWEET
        var tweet = statuses[i]; //THE TWEET VARIABLE IS THE STATUSES
        if (!tweet.retweeted_status) { //IF TWEETED...

          sizeCircles[i] = reply.statuses[i].retweet_count; //THERE ARE 'I' MANY AMOUNT OF STATUSES AND CIRCLES

          xPos[i] = round(random(width)); //APPEAR IN RANDOM X POSITIONS
          yPos[i] = round(random(height)); //APPEAR IN RANDOM Y POSITIONS

          fill(255,0,0); //FILL LIGHT BLUE

        }


      }
    }
  );
  var apimethods = getApiMethods(); //SEARCH THE API
  for (var httpmethod in apimethods) { //SEARCHING VARIABLE OF HTTPMETHOD IN API METHODS

  }

}

function mousePressed(){ //FUNCTION OF WHEN THE MOUSE IS PRESSED
  fill(255,0,255); //FILL THIS RGB COLOUR
}

var d = []; //VARIABLE NAMED D

function draw() { //CREATING A DRAW FUNCTION
  background(0); //THE BACKGROUND IS BLACK

    for (var i=0; i<stat.length; i++){ //FOR THE STATUSES
      var d = dist(xPos[i], yPos[i], mouseX, mouseY); //VARIABLE D REPRESENTS DISTANCE BETWEEN X AND Y COORDINATES
      if (d < 25){ //IF D IS LESS THAN 255
        fill(255); //FILL THIS COLOUR
        text(stat[i].text, xPos[i], yPos[i]); //PRINT TEXT FROM THE STAT VARIABLE IN THE X AND Y POSITION
        fill(0, 255, 255); //FILL THIS COLOUR
      }
      else{ //OTHERWISE IF THAT DOESNT APPLY
        fill(255); //FILL THIS COLOUR
      }
      ellipse(xPos[i], yPos[i], 10,10); //ELLIPSE POSITIONS, AND SIZE
}
}

var getApiMethods = function () { //GET THE API METHODS
  var httpmethods = {
    GET: [ //WHAT WE WANT FROM THE API
      "trends/available", //THE AVAILABLE TRENDS

    ],
    POST: []
  };
  return httpmethods; //RETURN THESE
};
function search(){ //FUNCTION NAMED SEARCH
  twitSearch = input.value(); //TWITSEARCH IS THE VALUE THE USER HAS WRITTEN
  ts(); //TWITTERSEARCH RESULT
}
