// Open Popup with Full Image
function openPopup(imageSrc) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup").style.display = "flex";
}

// Close Popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
