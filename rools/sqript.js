const continueButton = document.getElementById('btn1');

continueButton.addEventListener('click', function() {
    const confirmAction = confirm("Are you Ready?");
    
    if (confirmAction) {
        window.location.href = '/qiesten 1/first.html';
    }

});