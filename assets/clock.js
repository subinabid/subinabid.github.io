//convert degrees to radians for drawing Arc
function deg(deg) {
  return (Math.PI/180)*deg - (Math.PI/180)*90
}


function clockload() {
  setInterval (
  function () {

  //get dates
  var dob = new Date(2016, 10, 11, 15, 03, 00 , 0);
  var tod = new Date();

  //calculate durations
  var duration = tod.getTime() - dob.getTime();
  duration = duration/1000;
  var csecond = Math.floor(duration%60);
  duration = duration/60;
  var cminute = Math.floor(duration%60);
  duration = duration/60;
  var chour = Math.floor(duration%24);
  duration = duration/24;
  var cday = Math.floor(duration%30);
  duration = duration/30;

  //month and year needs different approach
  var monthcorrection = 0;
  if (tod.getMonth()< 10) {
    monthcorrection = 13;
  }
  var cmonth = tod.getMonth() - dob.getMonth() + monthcorrection;

  //will compute year later
  var cyear = 0;

  //Clear canvas
  var cleaner = document.getElementById("seconds");
  var c = cleaner.getContext("2d");
  c.fillStyle="#FFFFFF";
  c.clearRect(0,0,180,180);

  var cleaner = document.getElementById("minutes");
  var c = cleaner.getContext("2d");
  c.fillStyle="#FFFFFF";
  c.fillRect(0,0,180,180);

  var cleaner = document.getElementById("hours");
  var c = cleaner.getContext("2d");
  c.fillStyle="#FFFFFF";
  c.fillRect(0,0,180,180);

  var cleaner = document.getElementById("days");
  var c = cleaner.getContext("2d");
  c.fillStyle="#FFFFFF";
  c.fillRect(0,0,180,180);

  var cleaner = document.getElementById("months");
  var c = cleaner.getContext("2d");
  c.fillStyle="#FFFFFF";
  c.fillRect(0,0,180,180);

  //Start drawing canvas
  var canvas_months = document.getElementById('months');
  var cm = canvas_months.getContext("2d");
  cm.beginPath();
  cm.arc(90,90,70,deg(0),deg(360*cmonth/12));
  cm.lineWidth = 20;
  cm.strokeStyle = "#3d4552";
  cm.stroke();
  cm.font = "20px Arial ";
  cm.textAlign = "center";
  cm.fillStyle = "#000000";
  cm.fillText(cmonth + " months", 90, 95);

  var canvas_days = document.getElementById('days');
  var cd = canvas_days.getContext("2d");
  cd.beginPath();
  cd.arc(90,90,70,deg(0),deg(360*cday/30));
  cd.lineWidth = 20;
  cd.strokeStyle = "#3d4552";
  cd.stroke();
  cd.font = "20px Arial ";
  cd.textAlign = "center";
  cd.fillStyle = "#000000";
  cd.fillText(cday + " days", 90, 95);

  var canvas_hours = document.getElementById('hours');
  var ch = canvas_hours.getContext("2d");
  ch.beginPath();
  ch.arc(90,90,70,deg(0),deg(360*chour/24));
  ch.lineWidth = 20;
  ch.strokeStyle = "#3d4552";
  ch.stroke();
  ch.font = "20px Arial ";
  ch.textAlign = "center";
  ch.fillStyle = "#000000";
  ch.fillText(chour + " hrs", 90, 95);

  var canvas_minutes = document.getElementById('minutes');
  var cm = canvas_minutes.getContext("2d");
  cm.beginPath();
  cm.arc(90,90,70,deg(0),deg(360*cminute/60));
  cm.lineWidth = 20;
  cm.strokeStyle = "#3d4552";
  cm.stroke();
  cm.font = "20px Arial ";
  cm.textAlign = "center";
  cm.fillStyle = "#000000";
  cm.fillText(cminute + " min", 90, 95);

  var canvas_seconds = document.getElementById('seconds');
  var cs = canvas_seconds.getContext("2d");
  cs.beginPath();
  cs.arc(90,90,70,deg(0),deg(360*csecond/60));
  cs.lineWidth = 20;
  cs.strokeStyle = "#3d4552";
  cs.stroke();
  cs.font = "20px Arial ";
  cs.textAlign = "center";
  cs.fillStyle = "#000000";
  cs.fillText(csecond + " sec", 90, 95);
  //end of canvas
  },1000)
}
