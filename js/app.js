window.onload = function () {};

color = ['red', 'orange', 'green', 'blue', 'indigo', 'violet'];
var khaledQuotes = [];

khaledQuotes[0] = "\"You smart, You very smart, We the best, You a genius ,"
+ "I appreciate you, You loyal, I changed, A lot, You can too Win win win no matter what."
+ "This next part of the video is when you’re doing push-ups or you’re doing sit-ups – whatever." 
+ " Let’s get it. Another One! Another One! Another One! Another One!\""

khaledQuotes[1] = "\"They kick you when you’re down, but they wanna kick it when you’re up."
+ "You can never run out of keys. You gotta water your plants. Nobody can water them for you."
+ "Stay focused and secure your bag, because they want you to fail and they don’t want us to win."
+ "We gonna win more. We gonna live more. We the best." + "The key is that I’m the king\""

khaledQuotes[2] = "\"I’m gonna go hard no matter what because I gotta feed my family and I gotta feed myself."
+ "Watch your back, but more importantly when you get out the shower, dry your back. It’s a cold world out there."
+ "I remember when I ain’t have a jacuzzi. They don’t want you to win."
+ "The other day the grass was brown, now its green cuz I ain’t give up. Never surrender.\""

khaledQuotes[3] = "\"Almond milk + cinnamon crunch = major key to success."
+ "When you stop making excuses and you work hard and go hard you will be very successful. "
+ "They’ll try to close the door on you… Just open it. Bless up. Don’t play yourself."
+ "The key is to be honest. Be honest, but don’t play yourself. "
+ "You do know it cost money to put a t-shirt on your back? You do know it cost money have a house?"
+ " You do know it cost money to eat? Get money, don’t let these people fool you. \""

khaledQuotes[4] = "\"If you think of something negative and you keep it in your head,"
+ " you are going to actually live that."
+ " Now, if you think of something great and positive and joyful,"
+ " you're going to actually live that."
+ " You've got to be careful what you put in your head."
+ " Basically, I'll call that: 'Don't ever play yourself.' \""
''
function genKhaled(id) {
    var paragraphs= document.getElementById('paragraph').value,
        randomKhaleds = 0,
        demKhaleds = "";
        document.getElementById(id).innerHTML = "";

    if (paragraphs < 0) {
    	document.getElementById(id).style.fontWeight = "bold";
    	document.getElementById(id).style.fontStyle = "normal";
        document.getElementById(id).innerHTML = "INPUT VALUE SHOULD BE"
        + " GREATER THAN 0";
    }

    for (var i = 0; i < paragraphs; i++) {
        randomKhaleds = randomNum(khaledQuotes.length);
        demKhaleds += khaledQuotes[randomKhaleds] + "<br><br>";
        document.getElementById(id).innerHTML = demKhaleds;
        document.getElementById(id).style.fontWeight = "normal";
        document.getElementById(id).style.fontStyle = "italic";

        

	}
}
document.getElementById('spot').style.display = "none";
function show(target) {
	document.getElementById('spot').style.display = "block";
}

// Helper functions
function randomNum (length) {
    return Math.floor(Math.random() * length);
}
