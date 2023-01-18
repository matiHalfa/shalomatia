
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