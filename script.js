document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('update-button');
    const mainHeading = document.getElementById('main-heading');

    updateButton.addEventListener('click', () => {
        mainHeading.textContent = '✅ The Pipeline Works!';
    });
});