import { useEffect, useState } from 'react';
import { PAGES_FULLED_HEADER } from 'shared/const/fulledPages';

export const useIsFulledHeader = (): boolean => {
    const [isFulledHeader, setIsFulledHeader] = useState(false);
    const { pathname } = window.location;
    const checkPathname = () => {
        const item = PAGES_FULLED_HEADER.find((item) => (pathname === item));
        setIsFulledHeader(!item);
    };

    useEffect(() => {
        checkPathname();
    }, [pathname]);

    return isFulledHeader;
};
