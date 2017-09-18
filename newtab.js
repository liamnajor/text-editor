var n = 1
document.getElementById("newtab").onclick = function(){
	var newScript = document.createElement('iframe');
	newScript.id = "tab"+n+""
	newScript.src = "tab.html"
	if (n === 1){
		newScript.width = "960"
		newScript.height = "640"
	} else {
		newScript.width = "0"
		newScript.height = "0"
	}
	var scene = document.getElementById('tab')	
	scene.appendChild(newScript);
	var input = document.createElement('input');
	input.id = ""+n+""
	input.type = "button"
	input.value = "show/hide tab"+n+""
	var div = document.getElementById('head')
	div.appendChild(input);
	var newScript = document.createElement('script');
	newScript.innerHTML = "var tab"+n+" = document.getElementById('tab"+n+"'); var button = document.getElementById('"+n+"'); button.onclick = function(){if (tab"+n+".width === '0' && tab"+n+".height === '0'){tab"+n+".width = 960; tab"+n+".height = 640} else {tab"+n+".width = 0; tab"+n+".height = 0}}"
	var scene = document.getElementById('tab')
	scene.appendChild(newScript);
	n += 1
}
window.addEventListener("mousedown", function(s) { 
	
})
