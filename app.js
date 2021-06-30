var getData = () => {
    var table = document.getElementById('tbl');
    table.innerHTML = "";
    var i = 1;
    firebase.database().ref('users').on('child_added',(data) => {
        // console.log(data.val());
        var {Name,Age} = data.val();
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td1_text = document.createTextNode(i);
        td1.appendChild(td1_text);
        var td2 = document.createElement('td');
        var td2_text = document.createTextNode(Name);
        td2.appendChild(td2_text);
        var td3 = document.createElement('td');
        var td3_text = document.createTextNode(Age);
        td3.appendChild(td3_text);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
        i++;
    })
}
var sendData = () => {
    var uName = document.getElementById('name');
    var nAge = document.getElementById('age');
    var obj = {
        Name:uName.value,
        Age:nAge.value
    }
    firebase.database().ref('users').child(uName.value).set(obj);
    uName.value = "";
    nAge.value = "";
    getData();
}
getData();