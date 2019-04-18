function giveComment(){
  
    var jmlkomen = document.getElementById('jumlah-comment');
    var komentator = document.getElementById('komentator');
	var x = parseInt(komentator.textContent);
	x = x + 1;
    komentator.innerHTML = " "+x+" Komentar";
    jmlkomen.innerHTML = " "+x+" Comments";

    var time = new Date();
    var monthName=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var month = monthName[time.getMonth()];
    var h = time.getHours();
    var m = time.getMinutes();
    var date = month+" "+time.getDate()+", "+time.getFullYear()+" at "+h+":"+m;

    var username = document.getElementById("commentform").username.value;
    var comment = document.getElementById('commentform').comment.value;
    var hasil1 = '<div class="comment"><h3 id="hasil1"><img src="../img/comentator.png" height="33" style="float:left; margin:1px 10px 1px 0px;">'+username+'</h3>';
    var timeComment = '<p id="time-comment" style="font-size: 8pt">'+date+'</p>'
    var hasil2 = '<p id="hasil2">'+comment+'</p></div><br>';
    var hasil = hasil1+timeComment+hasil2;
    
    h=checkTime(h);
    m=checkTime(m);
    
    $(".comment-form").append(hasil);
}

function validateForm() {
    var x = document.forms["commentform"]["username"].value;
    var y = document.forms["commentform"]["email"].value;
	var z = document.forms["commentform"]["comment"].value;
    if (x == "" || y == "") {
        alert("Name or Email must be filled out");
        return false;
    } else if(z == ""){
        alert("Comment must be filled out");
        return false;
    } else {
		if(validateEmail(y)){
			giveComment();
		}
    }
}

function validateEmail(mail){
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
		return (true);
	}
	alert("You must Entered the valid email")
	return (false);
}

function checkTime(i)
{   if(i<10){i="0"+i;}
    return i;
}

function about() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

$(document).ready(function () {
              // Set timer to check if user is idle
    var idleTimer = 0;
    $(this).mousemove(function(e){
        // clear prior timeout, if any
        window.clearTimeout(idleTimer);
     
        // create new timeout (10 s)
        idleTimer = window.setTimeout(isIdle, 30000);
    });
     
    function isIdle() {
        alert("30 seconds have passed without moving the mouse. Do you want to continue?");
        idleTimer = 0;
    }
});