// ==================================================
// ELEMENT REFERENCE
// ==================================================

const menuBtns = document.querySelectorAll('.menu-btn');
const navBar = document.querySelector('.nav');
const navElements = document.querySelectorAll('.nav .links .link');

// ==================================================
// FUNCTIONS
// ==================================================

// * FUNCTION TO TOGGLE NAVBAR
function toggleNavBar() {
    navBar.classList.toggle('hidden');
}

// * FUNCTION TO ADD TRANSITION TO NAVBAR LINKS
function addTransition(array, index = 0) {
    if (index >= array.length || !array) return;

    array[index].style.transition = `transform 0.6s linear(0, 0.0157, 0.0314, 0.0471, 0.0628, 0.0785, 0.0941, 0.1097, 0.1253, 0.1409, 0.1564, 0.1719, 0.1874, 0.2028, 0.2181, 0.2334, 0.2487, 0.2639, 0.279, 0.294, 0.309, 0.3239, 0.3387, 0.3535, 0.3681, 0.3827, 0.3971, 0.4115, 0.4258, 0.4399, 0.454, 0.4679, 0.4818, 0.4955, 0.509, 0.5225, 0.5358, 0.549, 0.5621, 0.575, 0.5878, 0.6004, 0.6129, 0.6252, 0.6374, 0.6494, 0.6613, 0.673, 0.6845, 0.6959, 0.7071, 0.7181, 0.729, 0.7396, 0.7501, 0.7604, 0.7705, 0.7804, 0.7902, 0.7997, 0.809, 0.8181, 0.8271, 0.8358, 0.8443, 0.8526, 0.8607, 0.8686, 0.8763, 0.8838, 0.891, 0.898, 0.9048, 0.9114, 0.9178, 0.9239, 0.9298, 0.9354, 0.9409, 0.9461, 0.9511, 0.9558, 0.9603, 0.9646, 0.9686, 0.9724, 0.9759, 0.9792, 0.9823, 0.9851, 0.9877, 0.99, 0.9921, 0.994, 0.9956, 0.9969, 0.998, 0.9989, 0.9995, 0.9999, 1) ${index * 100 + 100}ms, color 0.4s ease`;

    addTransition(navElements, index + 1);
}

// ==================================================
// FUNCTION CALLS
// ==================================================

addTransition(navElements);

// ==================================================
// EVENT LISTENERS
// ==================================================

// & EVENT LISTENER FOR NAV-LINK CLICK
menuBtns.forEach(btn => {
    btn.addEventListener('click', toggleNavBar);
})

// & EVENT LISTENERS TO CLOSE NAV WHEN BODY IS CLICKED
document.body.addEventListener('click', (e) => {
    if (!navBar.classList.contains('hidden') && !e.target.closest('.nav') && !e.target.closest('.menu-btn')) {
        toggleNavBar();
    }
});