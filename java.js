var siteName = document.getElementById("name")
var siteURL = document.getElementById("url")
var bookMarks = []
if (localStorage.getItem("bookMarks")) {
    bookMarks = JSON.parse(localStorage.getItem("bookMarks"))
    displaySite()
}
function addSite() {
    var site = {
        name: siteName.value,
        url: siteURL.value
    }
    bookMarks.push(site)
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks))
    displaySite()
}
function validUrl(){
    if((siteURL.value.toLowerCase().includes("https://") || siteURL.value.toLowerCase().includes("http://") || siteURL.value.toLowerCase().includes("www.")) != true)
        {
            document.getElementById("invalid").innerHTML= "Please enter a valid URL"
            document.getElementById("disableBtn").innerHTML= `<p class="btn addurl2 mt-3 p-4 pt-2 pb-2">Submit</p>`
        }
    else{
            document.getElementById("disableBtn").innerHTML=`<button  id="addURL" onclick="addSite()" type="button" class="btn addurl mt-3 p-4 pt-2 pb-2">SUBMIT</button>`
            document.getElementById("invalid").innerHTML= ""
    }
}
function displaySite() {
    var temp = ""
    for (var i = 0; i < bookMarks.length; i++) {
        temp += `<tr>
        <td>${i+1}</td>
        <td>${bookMarks[i].name}</td>
        <td><button onclick="visit(${i})" class="btn btn-success"><span><i class="fa fa-eye" aria-hidden="true"></i>
        </span>Visit</button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger"><span><i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>Delete</button></td>
    </tr>`
    }
    document.getElementById("myRow").innerHTML = temp
}
function deleteSite(inde) {
    bookMarks.splice(inde, 1)
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks))
    displaySite()
}
function visit(i)
{
    window.open(bookMarks[i].url, '_blank').focus();
}


localStorage.setItem("bookMarks", JSON.stringify(bookMarks))