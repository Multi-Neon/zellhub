import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Dashboard' },
  { link: '/ai', label: 'AI assistant' },
  { link: '/plan', label: 'Plan' },
  { link: '/help', label: 'Help' },
];

const Header = ({store_name}) => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <button><span className={classes.logo}>ZellHub</span> <span className={classes.multineon}>by Multi Neon</span></button>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          {/*<Autocomplete
            className={classes.search}
            placeholder={`Search ${store_name || 'your store'}`}
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['Reports', 'Inventory']}
            visibleFrom="xs"
          />*/}
        </Group>
      </div>
    </header>
  );
}

export default Header;