function myFunction(){
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }

}

/*

*indexOf() metodu, var olan bir dizi içerisinde aradığımız bir elemanın indeks numarasını geriye 
        döndürür. ⇒ Dizilerde indeks numarası sıfır'dan (0'dan) başlar.
        Yani dizinin ilk elemanının indeks numarası 0, ikinci elemanının indeks numarası 1'dir. 

*/