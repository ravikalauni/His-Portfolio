function downloadPDF() {
    const link = document.createElement('a');
    link.href = '../Contents/documents/IT-meets-multiverse-theory-article.pdf';  // Change this to your actual PDF file
    link.download = 'IT-Meets-Multiverse-theory-ravi.pdf';
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
