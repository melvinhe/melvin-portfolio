import { useContext } from "react";
import DarkModeContext from "./create-dark-mode";

export default function useDarkMode() {
    return useContext(DarkModeContext);
}