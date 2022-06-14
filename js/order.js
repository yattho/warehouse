function getPost() {
    var search = document.frmSubmit.txt1.value;
    var search2 = document.frmSubmit.txt2.value;

   
    if (search == '' || search2 == '') {
          alert(" 값을 입력해주세요 ");

    } else {
        var url;
        url = "https://docs.google.com/spreadsheets/u/0/d/151MWRoSODD7Sb4C7WR2F8ATqfHZF6YXcXqSuSUFbsRg/gviz/tq?tqx=out:html&tq=SELECT+A,B,K+WHERE+A+=+'" + search + "'+AND+B+=+'" + search2 + "'";
        window.open(url, "", "width=250,height=100,left=600,top=380");
      }
}      