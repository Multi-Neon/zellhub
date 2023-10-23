
import '@mantine/core/styles.css';
import '@mantine/core/styles/global.css';
import { MantineProvider } from '@mantine/core';

import { theme, colors, schema } from './globals/theme';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar.tsx';

const App = () => {

	return (

		<MantineProvider defaultColorScheme={schema} theme={theme}>

      <Header></Header>
      <Navbar></Navbar>

		</MantineProvider>

	)

}

export default App;