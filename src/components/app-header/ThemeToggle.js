                                                                /* ===================== IMPORTS ====================== */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import { Brightness4 as LightIcon } from "@mui/icons-material";
import { Brightness7 as DarkIcon } from "@mui/icons-material";
import { ColorContext } from "../../ColorContext";


                                                                /* ====================== COMPONENT =================== */
function ThemeToggle() {
    const theme = useTheme();                                   /* Theme object                                         */
    const colorMode = React.useContext(ColorContext);           /* Color mode context                                   */

    return (
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
        </IconButton>
    );
}


                                                                /* ====================== EXPORT ====================== */
export default ThemeToggle;