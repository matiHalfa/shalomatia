
const btnLeftName = "הצגת נתונים"; 
const btnRightName = "עדכון נתונים"; 
const titleText = "SHA Title";
var title;
var btn1;
var btn2;

function initialize()
{
    SetElements();

    SetTitle();
    SetButtonsName();

    SetListeners();
}

function SetListeners()
{
  btn1.addEventListener("click", () =>
   {
    window.location.href = "/ShowData";
});
btn2.addEventListener("click", () =>
   {
    window.location.href = "/EditData";
});
}

function CreatePostReq(routh)
{
    var xhr = new XMLHttpRequest();

    xhr.open('post', routh, true);
    // xhr.setRequestHeader("GetAppointmentData",actionString);
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //       var status = xhr.status

    //       if (status===0 || (status >= 200 && status < 400))
    //       {
    //         //   var appointmentOptionsDates = xhr.getResponseHeader("dataBack");

    //         //   if(action == undefined)
    //         //   {
    //         //     datesListFromJson = appointmentOptionsDates.split(',');
    //         //     CreateDateList();
    //         //   }
    //         //   else
    //         //   {
    //         //     hoursListFromJson = appointmentOptionsDates.split(',');
    //         //     CreateHourList();
    //         //   }
    //       }
    //       else{
    //         console.log("There has been error with request for data");

    //         // writeToTextLog("There has been error with request for data")
    //       }
    //     }
    // }
    // xhr.send("Mati_AppointmentOptionsDates");
    xhr.send("123");
}
function SetTitle()
{
    title.textContent = GetTitleText();
}
function GetTitleText()
{
    return titleText;
}
function SetElements()
{
    title = $('title-text');
    btn1 = $('btn1');
    btn2 = $('btn2');
}

function SetButtonsName()
{
    btn1.textContent = GetBtnLeftName(); 
    btn2.textContent = GetBtnRightName(); 
}
function GetBtnLeftName()
{
    return btnLeftName;
}
function GetBtnRightName()
{
    return btnRightName;
}
function $(x) {return document.getElementById(x);}