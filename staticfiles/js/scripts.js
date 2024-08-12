document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown-toggle').forEach(function (element) {
        element.addEventListener('click', function (event) {
            let dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });
});