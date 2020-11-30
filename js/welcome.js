var textWrapper = document.querySelector('.welcome');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: false
}).add({
    targets: '.welcome .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 250 * i
}).add({
    targets: '.welcome',
    opacity: 0,
    duration: 5,
    easing: "easeOutExpo",
    delay: 5
});
