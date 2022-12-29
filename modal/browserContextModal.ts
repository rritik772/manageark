import { ColorScheme } from "@mantine/core";

export interface broswerContextModal {
    colorscheme: ColorScheme,
    setColorScheme: (colorScheme: ColorScheme) => void
}

export const defaultBroswerContextModal: broswerContextModal = {
    colorscheme: 'light',
    setColorScheme: (colorScheme: ColorScheme) => {}
}