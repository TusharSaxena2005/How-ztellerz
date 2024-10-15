
gsap.to("#page1 #name", {
    transform: "translateX(-55%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0%",
        end: "bottom -200%",
        scrub: 2,
        pin: true
    }
});

gsap.from("#page2-heading", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2-heading",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 5
    }
})

gsap.from("#meet-team", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#meet-team",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 5
    }
})

document.getElementById('explore-btn').addEventListener('click', function () {
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            window.location.href = "/html/explore.html"
            break;
        } else {
            window.location.href = "/html/login.html"
        }
    }
})



