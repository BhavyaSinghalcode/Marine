const backButton = document.createElement("button");
backButton.id = "back-to-main";
backButton.innerText = "Back to Home";
backButton.onclick = backToMainSite;
document.getElementById("result-screen").appendChild(backButton);


function backToMainSite() {
window.location.href = "index.html";
}