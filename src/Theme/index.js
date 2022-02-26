import { ThemeAPP } from "./app/theme";
import { ThemeAUTH } from "./auth/theme";

import { useEffect ,useState} from 'react';
import { useLocation } from "react-router-dom";

const DoCodeAppTheme = ({ children }) => {


    const location = useLocation()
    const [pathname,setPathname] = useState("")

    useEffect(() => {
       console.log(location)
       setPathname(location.pathname)
    }, [location.pathname])

    console.log(pathname)

    return pathname.includes('pass') || pathname[pathname.length-1]==="/" ? 
            <ThemeAUTH >{children}</ThemeAUTH> 
            : <ThemeAPP >{children}</ThemeAPP>

};

export default DoCodeAppTheme;

