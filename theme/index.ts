import { extendTheme } from 'native-base'

export const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        backgroundColor: 'emerald.300',
        colorScheme: 'blueGray',
      },
      baseStyle: {
        color: 'black',
      },
    },
    IconButton: {
      defaultProps: {
        backgroundColor: 'emerald.300',
        colorScheme: 'black',
      },
    },
  },
})
