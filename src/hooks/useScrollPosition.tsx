import { useState, useEffect } from "react";

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        setIsScrollingUp(window.scrollY < scrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPosition]);

    return { scrollPosition, isScrollingUp };
};
