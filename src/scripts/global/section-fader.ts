const observer = new IntersectionObserver((entries) => {
  for (const { target, isIntersecting } of entries) {
    const fadeIn = new Animation(
      new KeyframeEffect(
        target,
        [
          {
            opacity: 0,
          },
          {
            opacity: isIntersecting ? 1 : 0,
          },
        ],
        { delay: 50, duration: 450, easing: "ease", fill: "forwards" }
      )
    );
    fadeIn.play();
  }
});

const sections = document.querySelectorAll("main > section");

for (const section of sections) {
  if (!(section instanceof HTMLElement)) continue;

  section.style.opacity = "0";

  observer.observe(section);
}
