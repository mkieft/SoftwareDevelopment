/* search string splited into array */
var key_words;
/* selected search topic */
var search_topic;

/* click search button */
function search_begin(){
	var search_topic = document.getElementById("search_topic").value;
	if(search_topic == "Select Topic"){
		alert("Please select a topic");
	}
	else{
		/* search log */
		var search_input = document.getElementById("search_input").value;
		var search_log = "search/" + search_topic + "/";
		key_words;
		if(search_input != ""){
			key_words = search_input.split(" ");
			for(var i = 0; i < key_words.length; i ++){
				search_log += key_words[i];
				if(i != key_words.length - 1){
					search_log += "+";
				}
			}
		}
		console.log(search_log);
		/* set search result visible */
		var search_result = document.getElementById("search_result");
		search_result.style.visibility = "visible";
		/* set search input box top margin */
		var search_box = document.getElementById("search_box");
		search_box.style.marginTop = "1%";
	}
}