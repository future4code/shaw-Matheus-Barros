import { createTheme } from "@mui/material/styles";
import { primaryColor, neutralColor } from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white",
        },
        text: {
            primary: neutralColor,
        }
    },
    typography: {
        fontFamily: 'IBM Plex Sans',
    }
});

export default theme