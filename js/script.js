function giveComment(){
    var username = document.getElementById("commentform").username;
    var comment = document.getElementById('commentform').comment;
    var hasil1 = document.getElementById('hasil1');
    var hasil2 = document.getElementById('hasil2');
    var time = document.getElementById('time-comment');
    hasil1.innerHTML = '<img src = "img/comentator.png" height="50px" style="float:left; margin:0px 10px 0px 0px;">'+username.value;
    hasil2.innerHTML = comment.value;
    time.innerHTML = 'a few second ago';
}

function about(){
    document.getElementById("myDropDown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropDown.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}
