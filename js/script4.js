function downloadPDF() {
    const link = document.createElement('a');
    link.href = '../contents/documents/Man vs Machine.pdf';  // Change this to your actual PDF file
    link.download = 'Article.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
 function suggestionContainer() {
            let container = document.getElementById("suggestionContainer");
            // Toggle the container visibility by checking the display property
            if (container.style.display === "none" || container.style.display === "") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        }
 function similarContainer() {
            let container = document.getElementById("similarContainer");
            // Toggle the container visibility by checking the display property
            if (container.style.display === "none" || container.style.display === "") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        }