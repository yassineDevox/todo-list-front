import { ThemeAPP } from "./app/theme";
import { ThemeAUTH } from "./auth/theme";

import { useEffect ,useState} from 'react';

const DoCodeAppTheme = ({ children }) => {

    const [showAuthTheme, setShowAuthTheme] = useState()
    const [currentPath, setCurrentPath] = useState()

    useEffect(() => {
        let cP = window.location.href
        setShowAuthTheme(
            cP.toLocaleLowerCase().includes("pass") ||
            cP[cP.length-1]==="/"  
        ) 
        setCurrentPath(cP)
    }, [currentPath])

    return showAuthTheme ? 
            <ThemeAUTH >{children}</ThemeAUTH> 
            : <ThemeAPP >{children}</ThemeAPP>

};

export default DoCodeAppTheme;

