import { ThemeAPP } from "pages/app/theme";
import { ThemeAUTH } from "pages/auth/theme";

import { useEffect ,useState} from 'react';
import { useLocation } from "react-router-dom";

const DoCodeAppTheme = ({ children }) => {


    const location = useLocation()
    const [pathname,setPathname] = useState("")

    useEffect(() => {
       setPathname(location.pathname)
    }, [location.pathname])

    return pathname.includes('pass') || pathname[pathname.length-1]==="/" ? 
            <ThemeAUTH >{children}</ThemeAUTH> 
            : <ThemeAPP >{children}</ThemeAPP>

};

export default DoCodeAppTheme;

