// Loading HTML
$(function () {
    $('#header').load('./assets/html/header.html');
});
$(function () {
    $('#footer').load('./assets/html/footer.html');
});

/**
 * Toggles the navigation menu
 */
function toggleMenu() {
    const menu = $('#menu');
    menu.toggleClass('hidden');
}

/**
 * Age calculator
 * @param date The date in string form.
 * @returns the amount of whole years that have passed since the given date.
 */
function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age.toString();
}