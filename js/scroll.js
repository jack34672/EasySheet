$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })

var subscribe_button = document.querySelector(".subscribe_button");
var feedback_button = document.querySelector("#feedbackbtn");
subscribe_button.addEventListener('click', function(){
  subscribeOnClick();
}); 

document.querySelector("#subinput").addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    // code for enter
    subscribeOnClick();
  }
}); 

feedback_button.addEventListener('click', function(){
  var feedinput = document.getElementById("subject").value;
  if(feedinput==""){

  }else{
    console.log(feedinput);
      dataLayer.push({'event' : 'feedSubmitted', 'feedback' : feedinput});
      feedback_button.innerHTML = "Sent!!";
  }
}); 

function subscribeOnClick(){
  var subscribing = document.querySelector(".subscribing");
  var thanks = document.querySelector(".thanks");
  var wrong = document.querySelector(".wrong");
  var login = document.querySelector(".login");
  var subinput = document.getElementById("subinput").value;
  
	subscribing.classList.add("subscribing_active");
	subscribe_button.classList.add("subscribe_button_active");
	setTimeout(function(){
		login.classList.add("login_active");
	}, 1200);
	setTimeout(function(){
    console.log(subinput)
    if(subinput==""){
      wrong.classList.add("wrong_active");
    }else{
      thanks.classList.add("thanks_active");
      dataLayer.push({'event' : 'formSubmitted', 'formName' : subinput});
    }
	}, 1400);

	setTimeout(function(){
    if(subinput==""){
      wrong.classList.remove("wrong_active");
    }else{
      thanks.classList.remove("thanks_active");
    }
		login.classList.remove("login_active");
		subscribing.classList.remove("subscribing_active");
		subscribe_button.classList.remove("subscribe_button_active");
	}, 4000);
}


