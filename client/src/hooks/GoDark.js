import { useState } from 'react';

export const GoDark = () => {
    const [isDark, setIsDark] = useState(false);

    const setDark = () => {
        setIsDark(!isDark);
    };

    return [isDark, setDark];

}