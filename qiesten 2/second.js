function checkInput() {

    const inputValue = document.getElementById("second").value;
    const resultElement = document.getElementById("result");
    

    if (inputValue === "აკაკი წერეთელი.") {
        resultElement.textContent = "სწორია";
        resultElement.style.color = "green";
        

        setTimeout(() => {
            window.location.href = "/qiesten 3/third.html";
        }, 2000);
        
    } else {

        resultElement.textContent = "არასწორია";
        resultElement.style.color = "red";
        

        setTimeout(() => {
            window.location.href = "/qiesten 3/third.html";
        }, 2000);
        

        console.log("Wrong input: ", inputValue);
    }
}