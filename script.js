(function () {
    window.addEventListener("DOMContentLoaded", function () {

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