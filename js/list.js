function getPost() {
    var search = document.frmSubmit.txt1.value;
    var search2 = document.frmSubmit.txt2.value;
   
    if (search == null || search2 == null) {
          alert(" 값을 입력해주세요 ");

    } else {
        var url; 
        url = "https://docs.google.com/spreadsheets/u/0/d/1A1SXyBEA4zfDuUdg6dN-tV52OENYmvnka9rv8ivp6xY/gviz/tq?tqx=out:html&tq=SELECT+*+WHERE+A+=+'" + search + "'+OR+D+=+'" + search2 + "'";
        window.open(url, "", "width=1100,height=600,left=400");
      }
}      