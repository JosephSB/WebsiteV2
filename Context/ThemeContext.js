import { createContext,useState,useEffect} from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('moon'); // moon, sun

    const handleTheme = () => {
        let x = ""
        if(theme === 'moon') x ='sun';
        else x ='moon';
        setTheme(x)
        window.localStorage.setItem('theme',x);
    }

    useEffect(() => {
        let storage = window.localStorage;

        if(storage.getItem('theme') !== null ) setTheme(storage.getItem('theme'))
        else storage.setItem('theme', theme)

    }, []);

    useEffect(() => {
        if(theme === 'moon'){
            document.body.classList.remove('Ligth') 
            document.body.classList.add('Dark') 
        }else{
            document.body.classList.remove('Dark') 
            document.body.classList.add('Ligth') 
        }
    }, [theme]);

    const dataTheme = {
        handleTheme,
        theme
    }

  return <ThemeContext.Provider value={dataTheme}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;