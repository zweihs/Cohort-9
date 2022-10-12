const form = document.getElementById("myForm");
const ratingCard = document.getElementById("rating");
const submission = document.getElementById("submission");
const ratingOutput = document.getElementById("ratingOutput");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const output = form.rating.value;
    console.log(output);
    if(Number.isInteger(parseInt(output))) {
        ratingCard.style.display = "none";
        ratingOutput.innerHTML = `You selected ${output} out of 5`
        submission.style.display = "flex";
    }    
})