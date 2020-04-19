
/* PAGE2 REQUEST FUNCTION */
function makeRequestPage1(flag) {
    localStorage.setItem("active", "page1")
    document.getElementById("btn1").style.backgroundColor = "black";
    document.getElementById("btn2").style.backgroundColor = "salmon";
    var request = new XMLHttpRequest();
    var user_cards = document.querySelector(".user-cards");
    user_cards.innerHTML = ""
    var chkbox = document.querySelector(".toggle input");
    var sbox = document.getElementById("searchbox").value


    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            res_page1 = JSON.parse(request.response);
            var users_page1 = res_page1.data;
            localStorage.setItem("users_page1", JSON.stringify(users_page1))
            console.log(JSON.parse(localStorage.getItem("users_page1")))
            var newuser_page1 = []

            users_page1.forEach(function (u) {

                if (u.first_name.toLowerCase().includes(sbox.toLowerCase()) || u.last_name.toLowerCase().includes(sbox.toLowerCase()) || u.email.toLowerCase().includes(sbox.toLowerCase())) {
                    newuser_page1.push(u);
                }

            })
            users_page1 = newuser_page1

            if (flag == '1') {
                users_page1.sort(function (a, b) {
                    var nameA = a.first_name.toLowerCase(), nameB = b.first_name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
            }


            if (!chkbox.checked) {

                users_page1.forEach(user => {
                    user_cards.innerHTML += "<div class='card'><img src='" + user.avatar + "'alt='Avatar' style='width:100%'><div class='card-container'><h4><b>" + user.first_name + ' ' + user.last_name + "</b></h4><p>" + user.email + "</p></div></div>"
                });

            }


            cards = document.querySelectorAll(".card");
            chkbox.addEventListener("change", function () {

                if (chkbox.checked) {
                    user_cards.innerHTML = ""
                    users_page1.forEach(user => {

                        user_cards.innerHTML += "<div class='card'><div class='card-container'><h4><b>" + user.first_name + ' ' + user.last_name + "</b></h4><p>" + user.email + "</p></div></div>"
                    });


                    user_cards.setAttribute("class", "user-cards-list");


                    cards.forEach(function (c) {
                        c.setAttribute("class", "card-list")


                    })




                }
                else {
                    user_cards.innerHTML = ""

                    users_page1.forEach(user => {
                        user_cards.innerHTML += "<div class='card'><img src='" + user.avatar + "'alt='Avatar' style='width:100%'><div class='card-container'><h4><b>" + user.first_name + ' ' + user.last_name + "</b></h4><p>" + user.email + "</p></div></div>"
                    });


                    user_cards.setAttribute("class", "user-cards")
                    cards.forEach(function (c) {
                        c.removeAttribute("class", "card-list")
                    })

                }

            });
        }

    }


    request.open('GET', "https://reqres.in/api/users", true);

    request.send();


}

/* PAGE2 REQUEST FUNCTION */

function makeRequestPage2(flag) {
    localStorage.setItem("active", "page2")
    document.getElementById("btn1").style.backgroundColor = "salmon";
    document.getElementById("btn2").style.backgroundColor = "black";

    var request = new XMLHttpRequest();
    var user_cards = document.querySelector(".user-cards");
    user_cards.innerHTML = ""
    var chkbox = document.querySelector(".toggle input");
    var sbox = document.getElementById("searchbox").value


    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            res_page2 = JSON.parse(request.response);
            var users_page2 = res_page2.data;
            localStorage.setItem("users_page2", JSON.stringify(users_page2))
            console.log(JSON.parse(localStorage.getItem("users_page2")))

            var newuser_page2 = []

            users_page2.forEach(function (u) {

                if (u.first_name.toLowerCase().includes(sbox.toLowerCase()) || u.last_name.toLowerCase().includes(sbox.toLowerCase()) || u.email.toLowerCase().includes(sbox.toLowerCase())) {
                    newuser_page2.push(u);
                }

            })
            users_page2 = newuser_page2

            if (flag == '1') {
                users_page2.sort(function (a, b) {
                    var nameA = a.first_name.toLowerCase(), nameB = b.first_name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
            }


            if (!chkbox.checked) {

                users_page2.forEach(user => {
                    user_cards.innerHTML += "<div class='card'><img src='" + user.avatar + "'alt='Avatar' style='width:100%'><div class='card-container'><h4><b>" + user.first_name + ' ' + user.last_name + "</b></h4><p>" + user.email + "</p></div></div>"
                });

            }


            cards = document.querySelectorAll(".card");
            chkbox.addEventListener("change", function () {

                if (chkbox.checked) {
                    user_cards.innerHTML = ""




                    users_page2.forEach(user => {

                        user_cards.innerHTML += "<div class='card'><div class='card-container'><h4><b>" + user.first_name + ' ' + user.last_name + "</b></h4><p>" + user.email + "</p></div></div>"
                    });


                    user_cards.setAttribute("class", "user-cards-list");
                    //user_cards.removeAttribute("class", "user-cards")

                    cards.forEach(function (c) {
                        c.setAttribute("class", "card-list")
                        //c.setAttribute("class", "card")

                    })




                }
                else {
                    user_cards.innerHTML = ""

                    users_page2.forEach(user => {
                        user_cards.innerHTML += "<div class='card'><img src='" + user.avatar + "'alt='Avatar' style='width:100%'><div class='card-container'><h4><b>" + user.first_name + ' ' + user.last_name + "</b></h4><p>" + user.email + "</p></div></div>"
                    });


                    user_cards.setAttribute("class", "user-cards")
                    cards.forEach(function (c) {
                        c.removeAttribute("class", "card-list")
                    })

                }

            });
        }

    }


    request.open('GET', "https://reqres.in/api/users?page=2", true);

    request.send();



}

makeRequestPage1()


/* SORTING UTILITY FUNCTION */

function sortUtil(flag) {
    if (localStorage.getItem('active') === "page1") {
        makeRequestPage1(flag);
    } else {
        makeRequestPage2(flag);
    }
}

/* SEARCH UTILITY FUNCTION */

function searchUtil(flag) {
    if (localStorage.getItem('active') === "page1") {
        makeRequestPage1(flag);
    } if (localStorage.getItem('active', "page2")) {
        makeRequestPage2(flag);
    }
}















