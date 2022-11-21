const formbutton = document.getElementById('forms');

formbutton.addEventListener('click',(e) => {
    const form = document.querySelector ('form')
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
  
    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);

    window.location.href = "buildmycv.html";
})