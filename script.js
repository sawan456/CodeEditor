//  Function for Displaying Output from html/css/js code--------------------------------------------
function initialize(){
    var html = document.getElementById("myAreaHTML");
    var css = document.getElementById("myAreaCSS");
    var js = document.getElementById("myAreaJS");
    var code = document.getElementById("code").contentWindow.document;
    document.body.onkeyup=function(){
        code.open();
        code.writeln(
            html.value +
            "<style>"+ css.value + "</style>" +
            "<script>"+ js.value +"</script>"
        );
        code.close();
    }
}
initialize();




// Functions for Copy Buttons =========================================================>>>>>
// Function for Copy Button of HTML section------------------------------->>>>>
function copyHTML(){
    let copArea = document.querySelector(".containerForTextarea");
    let text = document.getElementById("myAreaHTML");
    text.select();
    document.execCommand("copy");
    document.getElementById("copy-btnHTML").style.display = "none";
    copArea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(()=>{
        document.getElementById("copy-btnHTML").style.display = "block";
        copArea.classList.remove("active");
    },400);
}
// Function for Copy Button of CSS section------------------------------->>>>>
function copyCSS(){
    let copArea = document.querySelector(".containerForTextarea");
    let text = document.getElementById("myAreaCSS");
    text.select();
    document.execCommand("copy");
    document.getElementById("copy-btnCSS").style.display = "none";
    copArea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(()=>{
        document.getElementById("copy-btnCSS").style.display = "block";
        copArea.classList.remove("active");
    },400);
}
// Function for Copy Button of JS section------------------------------->>>>>
function copyJS(){
    let copArea = document.querySelector(".containerForTextarea");
    let text = document.getElementById("myAreaJS");
    text.select();
    document.execCommand("copy");
    document.getElementById("copy-btnJS").style.display = "none";
    copArea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(()=>{
        document.getElementById("copy-btnJS").style.display = "block";
        copArea.classList.remove("active");
    },400);
}




// Functions for Save Buttons =========================================================>>>>>
// Function for Save Button of HTML section =========================================================>>>>>
const saveBtnHTML = document.getElementById('save-btnHTML');
const content_HTML = document.getElementById('myAreaHTML');
let HTMLfileName = 'HtmlCode';
function HTMLFileSaved (e)
{
    const contentOfFile = content_HTML.value;
    const blob_ = new Blob([contentOfFile], {type: 'text/plain'});
    const url_ = URL.createObjectURL(blob_);
    const aEl = document.createElement('a');
    aEl.href = url_;
    aEl.download = HTMLfileName;
    aEl.click();
}
saveBtnHTML.addEventListener('click', HTMLFileSaved);

// Function for Save Button of CSS section =========================================================>>>>>
const saveBtnCSS = document.getElementById('save-btnCSS');
const content_CSS = document.getElementById('myAreaCSS');
let CSSfileName = 'CssCode';
function CssFileSaved (e)
{
    const contentOfFile = content_CSS.value;
    const blob_ = new Blob([contentOfFile], {type: 'text/plain'});
    const url_ = URL.createObjectURL(blob_);
    const aEl = document.createElement('a');
    aEl.href = url_;
    aEl.download = CSSfileName;
    aEl.click();
}
saveBtnCSS.addEventListener('click', CssFileSaved);

// Function for Save Button of JS section =========================================================>>>>>
const JSsaveBtn = document.getElementById('save-btnJS');
const content_JS = document.getElementById('myAreaJS');
let JSfileName = 'JsCode';
function JsFileSaved (e)
{
    const contentOfFile = content_JS.value;
    const blob_ = new Blob([contentOfFile], {type: 'text/plain'});
    const url_ = URL.createObjectURL(blob_);
    const aEl = document.createElement('a');
    aEl.href = url_;
    aEl.download = JSfileName;
    aEl.click();
}
JSsaveBtn.addEventListener('click', JsFileSaved);




// Functions for lock/UnLock Buttons =========================================================>>>>>
// Function for lock/UnLock Button of HTML section------------------------------->>>>>
var isDisabled = false;
function lockHTML() {
    var textField = document.getElementById("myAreaHTML");
    var button = document.getElementById("lock-btnHTML");
    isDisabled = !isDisabled; // Toggle the state

    if (isDisabled) {
        textField.disabled = true;
        button.textContent = "Unlock";
    } else {
        textField.disabled = false;
        button.textContent = "Lock";
    }
}

// Function for lock/UnLock Button of CSS section------------------------------->>>>>
function lockCSS() {
    var textField = document.getElementById("myAreaCSS");
    var button = document.getElementById("lock-btnCSS");
    isDisabled = !isDisabled; // Toggle the state

    if (isDisabled) {
        textField.disabled = true;
        button.textContent = "Unlock";
    } else {
        textField.disabled = false;
        button.textContent = "Lock";
    }
}

// Function for lock/UnLock Button of JS section------------------------------->>>>>
function lockJS() {
    var textField = document.getElementById("myAreaJS");
    var button = document.getElementById("lock-btnJS");
    isDisabled = !isDisabled; // Toggle the state

    if (isDisabled) {
        textField.disabled = true;
        button.textContent = "Unlock";
    } else {
        textField.disabled = false;
        button.textContent = "Lock";
    }
}
