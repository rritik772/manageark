import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { broswerContextModal, defaultBroswerContextModal } from "../modal/browserContextModal";
import { ColorScheme, Loader, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

export const BrowserContext = createContext<broswerContextModal>(defaultBroswerContextModal);
export const useBroswerContext = () => useContext(BrowserContext);

export const BroswerContextProvider = ({ children }: { children: ReactNode }) => {
    const [colorscheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'colorscheme',
        defaultValue: 'light'
    });

    const value = {
        colorscheme,
        setColorScheme
    }

    return (
        <BrowserContext.Provider value={value}>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: colorscheme,
                    fontFamily: 'dm',
                    headings: { fontFamily: 'dmd' },

                    components: {

                        Button: {
                            styles: () => ({
                                root: {
                                    fontFamily: 'dmb'
                                }
                            })
                        },

                    }

                }}
            >
                {children}
            </MantineProvider>

        </BrowserContext.Provider>
    )
}