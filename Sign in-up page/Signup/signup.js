function signup(e){
    event.preventDefault();
    console.log('Hello!');
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    var user ={
        username: username,
        email: email,
        password:password,
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
};

function signin(e){
    event.preventDefault();
    // console.log('Hello!');



    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    // var result = documentGetElementById('result').value;


    var user  = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if (user == null){
        console.log("wrong password");
    } else if (username == data.username && pass == data.password){
        console.log('logged in');
    }else{
        console.log('wrong password');
    }

};

