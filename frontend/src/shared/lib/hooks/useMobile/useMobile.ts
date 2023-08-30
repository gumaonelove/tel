import { useEffect, useState } from 'react';

export const useMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (width < 576) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [width]);

    useEffect(() => {
        const handleResize = (event: Event) => {
            const target = event.target as Window;
            setWidth(target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isMobile,
    };
};
