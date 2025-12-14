import gsap from 'gsap';

export const windowOpenAnimation = (element) => {
    gsap.fromTo(
        element,
        {
            scale: 0.8,
            opacity: 0,
            y: 50,
        },
        {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'back.out(1.7)',
        }
    );
};

export const windowCloseAnimation = (element, onComplete) => {
    gsap.to(element, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.2,
        ease: 'power2.in',
        onComplete,
    });
};

export const dockHoverAnimation = (element, scale = 1.5) => {
    gsap.to(element, {
        scale,
        duration: 0.3,
        ease: 'back.out(1.7)',
    });
};

export const dockLeaveAnimation = (element) => {
    gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
    });
};

export const fadeIn = (element, delay = 0) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay,
            ease: 'power2.out',
        }
    );
};

export const staggerFadeIn = (elements, stagger = 0.1) => {
    gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger,
            ease: 'power2.out',
        }
    );
};
