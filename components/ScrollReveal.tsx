import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number; // Delay in ms
    threshold?: number; // 0 to 1, how much of element must be visible
    className?: string; // Additional classes
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    delay = 0,
    threshold = 0.1,
    className = ""
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Only animate once
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const style = {
        transitionDelay: `${delay}ms`,
    };

    return (
        <div
            ref={ref}
            style={style}
            className={`transition-all duration-1000 ease-out transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
