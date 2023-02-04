console.log("Connected ✅");
document.title = "Hogwarts Library Project";

const form = document.getElementsByClassName('form1')[0];


form.addEventListener("submit", formsubmit);

function formsubmit(e) {
    console.log("Submitted ⚡");
    e.preventDefault();
    getFormData();
    form.reset();
    
}

function getFormData() {
    const BookName = document.getElementById("exampleInputEmail1").value;

    const AuthorName = document.getElementById("exampleInputPassword1").value;

    const Fantasy = document.getElementById("option1");
    const Adventure = document.getElementById("option2");
    const SciFi = document.getElementById("option3");

    var type = " ";

    if (Fantasy.checked) {
        type = "Fantasy";
    }
    else if (Adventure.checked) {
        type = "Adventure";
    }
    else {
        type = "Sci-Fi";
    }



    // console.log(BookName, " ",AuthorName , "  " , type);


    const BookData = {
        BookName,
        AuthorName,
        type,
    }
    
    console.log(BookData);
    
    if (BookName=="" || AuthorName==""){
        alert("Enter Valid Details");
    }
    else{
    // if(BookName!=null && AuthorName!=null)
        AddBookData(BookData);
    }
    
}



let counter = 0;

function AddBookData(data) {
    counter++;

TableData.innerHTML += `
    <tr class="table-danger">
        <th scope="row">${counter}</th>
            <td>${data.BookName}</td>
            <td>${data.AuthorName}</td>
            <td>${data.type}</td>
            <td> <button class ="bg-transparent delete-btn" onClick = "DeleteRow(this)"><lottie-player src="https://assets8.lottiefiles.com/packages/lf20_drreyhno.json"  background="transparent"  speed="1.5"  style="width: 50px; height: 30px;" hover loop autoplay  ></lottie-player> </button>
            </td>
    </tr>

`
    

    function newFunction() {
        if (TableData.innerHTML == "") {
            form.reset();
        }
    }
}

function DeleteRow(d){
    console.log(d.parentNode.parentNode.rowIndex);
    TableData.deleteRow(d.parentNode.parentNode.rowIndex-1);

}

