import ScrollReveal from "scrollreveal";

const slideUp = {
    delay: 375,
    duration: 500,
    distance: '50px',
};

const slideUpSlower = {
    ...slideUp,
    delay: 600,
}

const showWithDelay = {
    delay: 200,
    duration: 900,
};

const slideFromRight = {
    duration: 1000,
    distance: '150px',
    origin: 'right',
};

const slideFromRightWithDelay = {
    ...slideFromRight,
    delay: 600
};

export default function initAnimations() {
    const sr = ScrollReveal();

    sr.reveal('.feature .title', slideFromRight);
    sr.reveal('.feature .description', slideFromRightWithDelay);
    sr.reveal('.hero .title', slideUp);
    sr.reveal('.offer .title', slideUp);
    sr.reveal('.hero .info', slideUpSlower);
    sr.reveal('.offer .description', slideUpSlower);
    sr.reveal('.showWithDelay', showWithDelay);
}
