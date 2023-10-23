
import { createTheme, MantineColorsTuple } from '@mantine/core';

// define theme colors
export let colors = [
	"#f6ecff",
	"#e7d6fb",
	"#caabf1",
	"#ac7ce8",
	"#9354e0",
	"#833cdb",
	"#7b2eda",
	"#6921c2",
	"#5d1cae",
	"#501599"
];

// get theme color schema (light || dark)
export let schema = localStorage.getItem('schema') || 'dark';

export let theme = createTheme({
  colors: {
    colors
  }
});