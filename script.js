const continueButton = document.getElementById('btn1');

continueButton.addEventListener('click', function() {
    const confirmAction = confirm("Are you sure you want to continue?");
    
    if (confirmAction) {
        window.location.href = '/rools/index.html';
    }
});