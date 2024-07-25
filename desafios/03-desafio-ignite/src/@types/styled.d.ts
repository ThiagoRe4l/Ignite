import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

// Define um tipo 'ThemeType' baseado no tipo do tema padrão
type ThemeType = typeof defaultTheme

// Estende a interface 'DefaultTheme' da biblioteca 'styled-components'
// com as propriedades do tipo 'ThemeType'
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}