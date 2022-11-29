import { extendTheme } from 'native-base'

export const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        backgroundColor: 'emerald.300',
      },
    },
    IconButton: {
      defaultProps: {
        backgroundColor: 'emerald.300',
        colorScheme: 'black',
      },
    },
    Icon: {
      baseStyle: {
        color: 'black',
      },
    },
  },
})
