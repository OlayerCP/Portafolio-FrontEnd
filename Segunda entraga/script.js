function cambiarParrafo(){
    document.getElementById("here-changer").style.display="block";
    let texto = document.getElementById("editable-text").innerText;
    console.log(texto)
};

function myFunction2(valor){
 document.getElementById("editable-text").innerText=valor;
};