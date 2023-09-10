import { createTheme } from "@mui/material/styles";
import "@fontsource/source-sans-pro";

export default function GlobalTheme(themeMode) {
    return (
        createTheme({
            palette: {
                mode: themeMode
            },
            typography: {
                fontFamily: "Source Sans Pro, sans-serif"
            }
        })
    );
}
