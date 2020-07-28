
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  var panel_one_customer_1_details = document.getElementsByClassName("panel-one-customer-1-details");
  var i;
  for (i = 0; i < panel_one_customer_1_details.length; i++) {
    panel_one_customer_1_details[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var panel_one_1 = document.getElementById("panel-one-1");
      if (panel_one_1.style.display === "flex") {
        panel_one_1.style.display = "none";
      } else {
        panel_one_1.style.display = "flex";
      }
    });
  }
  var panel_one_customer_2_details = document.getElementsByClassName("panel-one-customer-2-details");
  var i;
  for (i = 0; i < panel_one_customer_2_details.length; i++) {
    panel_one_customer_2_details[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var panel_one_2 = document.getElementById("panel-one-2");
      if (panel_one_2.style.display === "flex") {
        panel_one_2.style.display = "none";
      } else {
        panel_one_2.style.display = "flex";
      }
    });
  }
  var panel_one_customer_3_details = document.getElementsByClassName("panel-one-customer-3-details");
  var i;
  for (i = 0; i < panel_one_customer_3_details.length; i++) {
    panel_one_customer_3_details[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var panel_one_3 = document.getElementById("panel-one-3");
      if (panel_one_3.style.display === "flex") {
        panel_one_3.style.display = "none";
      } else {
        panel_one_3.style.display = "flex";
      }
    });
  }
  var panel_two_customer_1_details = document.getElementsByClassName("panel-two-customer-1-details");
  var i;
  for (i = 0; i < panel_two_customer_1_details.length; i++) {
    panel_two_customer_1_details[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var panel_two_1 = document.getElementById("panel-two-1");
      if (panel_two_1.style.display === "flex") {
        panel_two_1.style.display = "none";
      } else {
        panel_two_1.style.display = "flex";
      }
    });
  }
  var panel_two_customer_2_details = document.getElementsByClassName("panel-two-customer-2-details");
  var i;
  for (i = 0; i < panel_two_customer_2_details.length; i++) {
    panel_two_customer_2_details[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var panel_two_2 = document.getElementById("panel-two-2");
      if (panel_two_2.style.display === "flex") {
        panel_two_2.style.display = "none";
      } else {
        panel_two_2.style.display = "flex";
      }
    });
  }
  var panel_two_customer_3_details = document.getElementsByClassName("panel-two-customer-3-details");
  var i;
  for (i = 0; i < panel_two_customer_3_details.length; i++) {
    panel_two_customer_3_details[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var panel_two_3 = document.getElementById("panel-two-3");
      if (panel_two_3.style.display === "flex") {
        panel_two_3.style.display = "none";
      } else {
        panel_two_3.style.display = "flex";
      }
    });
  }
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

var panel_container_one = document.getElementsByClassName("panel-container-one");
var panel_container_two = document.getElementsByClassName("panel-container-two");

function panel_container_one_func(){
  for(var i=0;i<panel_container_one.length;i++){
    if(panel_container_one[i].style.display === "none"){
      panel_container_one[i].style.display = "block";
      panel_container_two[i].style.display = "none";
    }
    else{
      panel_container_one[i].style.display = "block";
      panel_container_two[i].style.display = "none";
    }
  }
}

function panel_container_two_func(){
  for(var i=0;i<panel_container_two.length;i++){
    if(panel_container_two[i].style.display === "none"){
      panel_container_two[i].style.display = "block";
      panel_container_one[i].style.display = "none";
    }
    else{
      panel_container_two[i].style.display = "block";
      panel_container_one[i].style.display = "none";
    }

  }
}
// var panel_changer_1 = document.getElementsByClassName("panel-changer-1");
// var i;
// for (i = 0; i < panel_changer_1.length; i++) {
//   panel_changer_1[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel_container_one = document.getElementById("panel-container-one");
//     if (panel_container_one.style.display === "flex") {
//       panel_container_one.style.display = "none";
//     } else {
//       panel_container_one.style.display = "flex";
//     }
//   });
// }
// var panel_changer_2 = document.getElementsByClassName("panel-changer-2");
// var i;
// for (i = 0; i < panel_changer_2.length; i++) {
//   panel_changer_2[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel_container_two = document.getElementById("panel-container-two");
//     if (panel_container_two.style.display === "flex") {
//       panel_container_two.style.display = "none";
//     } else {
//       panel_container_two.style.display = "flex";
//     }
//   });
// }