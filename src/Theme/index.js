import { ThemeAPP } from "./app/theme";
import { ThemeAUTH } from "./auth/theme";

import { useEffect ,useState} from 'react';

const DoCodeAppTheme = ({ children }) => {

    const [showAuthTheme, setShowAuthTheme] = useState()

    useEffect(() => {
        let cP = window.location.href
        setShowAuthTheme(
            cP.includes("Pass") ||
            cP[cP.length-1]=="/"
        )
    }, [])

    return showAuthTheme ? 
            <ThemeAUTH >{children}</ThemeAUTH> 
            : <ThemeAPP >{children}</ThemeAPP>

};

export default DoCodeAppTheme;

