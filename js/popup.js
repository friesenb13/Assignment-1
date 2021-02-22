console.log("i'm the popup")

$("#pink").on("click", changeTheme);
$("#yellow").on("click", changeTheme);


 
function changeTheme () {
    var color = $(this).attr('id');
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { chrome.tabs.sendMessage(tabs[0].id, {message: color});
});
}
