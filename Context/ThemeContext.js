import { createContext,useState,useEffect} from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('moon'); // moon, sun

    const handleTheme = () => {
        if(theme === 'moon') setTheme('sun');
        else setTheme('moon');
        window.localStorage.setItem('theme',theme);
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