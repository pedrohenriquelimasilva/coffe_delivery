import 'styled-components'
import { lightTheme } from '../style/themes/lightTheme'

type LinghtThemeProps = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends LinghtThemeProps {}
}
