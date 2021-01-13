(function () {
    window.addEventListener("DOMContentLoaded", function () {
        document.querySelector('.btn1').addEventListener('click', function () {
            // get the form elements defined in your form HTML above
            var form = document.getElementById("my-form");
            var status = document.querySelector(".status");
            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                status.style.display = 'block';
                status.textContent = "Thanks for submitting";
            }

            function error() {
                status.style.display = 'block';
                status.textContent = "Oops! There was a problem.";
            }

            // handle the form submission event

            form.addEventListener("submit", function (ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });
        });
        document.querySelector('.btn2').addEventListener('click', function () {
            // get the form elements defined in your form HTML above
            var form = document.getElementById("soci-emi");
            var status = document.querySelector(".emi-w-r");
            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                status.textContent = "Thanks for submitting";
                status.style = "color:green;"
            }

            function error() {
                status.textContent = "Oops! There was a problem.";
                status.style = 'color:red;'
            }

            // handle the form submission event

            form.addEventListener("submit", function (ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });
        })

    });

    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
    document.querySelector('#switch').addEventListener('click', function () {
        var onoff = document.querySelector('#switch');
        if (onoff.checked == true) {
            document.body.style = 'background-color: white; color: black;';
            for (var i = 0; i < document.querySelectorAll('.card').length; i++) {
                document.querySelectorAll('.card')[i].style = 'background: #0099ff50; border: 2px solid rgba(0, 0, 0, 0.4);';
            }
            document.querySelector('.haed').style = 'background: linear-gradient(90deg, #0099ff, rgb(25, 4, 145),  rgb(0, 132, 255));';
            document.querySelector(".borp").style.background = '#fff';
            document.querySelector('.libraries').style = "background: rgb(255, 255, 255);";
            for (var i = 0; i < document.querySelectorAll('.librec').length; i++) {
                document.querySelectorAll('.librec')[i].style = 'background: rgba(45, 45, 45, 0.15); border: 2px solid rgba(45, 45, 45, 0.35);';
            }
        }
        else if (onoff.checked == false) {
            document.body.style = 'background-color: rgb(1, 0, 51); color:white;';
            for (var i = 0; i < document.querySelectorAll('.card').length; i++) {
                document.querySelectorAll('.card')[i].style = 'background: rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 255, 255, 0.4);)';
            }
            document.querySelector('.haed').style = 'background: linear-gradient(90deg, #0099ff, rgb(25, 4, 145), rgb(1, 1, 73));';
            document.querySelector(".borp").style.background = 'rgb(1, 0, 51)';
            document.querySelector('.libraries').style = "background: rgb(2, 0, 46);";
            for (var i = 0; i < document.querySelectorAll('.librec').length; i++) {
                document.querySelectorAll('.librec')[i].style = " background: rgba(255, 255, 255, 0.4); border: 2px solid #fff;";
            }
        }
    })
    document.querySelector("#switch1").addEventListener('click', function () {
        var onoff = document.querySelector('#switch1');
        var el1 = document.querySelector('#key1');
        if (onoff.checked) {
            el1.disabled = false;
        } else {
            el1.disabled = true;
        }
    })
})();

/*var y = window.innerHeight;
var x = window.innerWidth;

function size() {
    document.querySelector('.my').style = `font-size: ${x / 70}px;`;
}; size();
window.onresize = function () {
    x = window.innerWidth;
    size();
};*/

/*document.querySelector(".my").onmouseover = function () {
    this.style = `background-color:blue;`;
}
document.querySelector(".my").onmouseout = function () {
    this.style = "background-color:none";
}*/