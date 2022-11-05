/** @jsx jsx */
import { jsx, ThemeProvider} from 'theme-ui';
import Navbar from './navbar';
import theme from "theme";


export default function Header() {
  
  return (
  
   <ThemeProvider theme={theme}>
    <Navbar/>
   </ThemeProvider>
  );
}



