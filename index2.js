var countCall=0;
var countSms=0;
function startReading(){
var title=document.getElementById("title")
var mainText=document.getElementById("mainText");
var firebasedocumentRef=firebase.database().ref().child("Documents").child(title.value);
firebasedocumentRef.on('value',function(datasnapshot){
  mainText.value=datasnapshot.val();
});
}
var notificationCallRef=firebase.database().ref().child("Notifications").child("calls");
notificationCallRef.on('value',function(datasnapshot){
countCall++;
if(countCall!=1)
window.alert("Incoming Call...");
});

var notificationSmsRef=firebase.database().ref().child("Notifications").child("sms");
notificationSmsRef.on('value',function(datasnapshot){
var msg=datasnapshot.val();
countSms++;
if(countSms!=1)
var store = prompt(msg);
if(store!=null)
{firebase.database().ref().child("Notifications").child("smsreply").set(store);
alert("Your message has been delivered!");}
});

var pictureRef=firebase.database().ref().child("Pictures").child("photo");
pictureRef.on('value',function(datasnapshot){
var imageUrl=datasnapshot.val();
document.getElementById("image1").src=imageUrl;
});
