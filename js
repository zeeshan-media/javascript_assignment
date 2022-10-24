function toggle() {
    let x = document.getElementById('toggle');
    if (x.style.display === 'none') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    function add(){
         let a = document.getElementById('a').value;
         let sum = a+1;
         alert(sum);   
    }
}
