import Headphones from '@/components/svgs/devices/Headphones';
import Laptop from '@/components/svgs/devices/Laptop';
import Phone from '@/components/svgs/devices/Phone';

{
  /*import Keyboard from '@/components/svgs/devices/Keyboard'*/
}

{
  /*import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';*/
}

export const devices = [
  {
    name: 'laptop hp probook',
    icon: <Laptop className="size-4" />,
  },
  {
    name: ' Protronics Muffs M2 ',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Samsung m21 (64 GB)',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Unhook', href: 'https://unhook.app/' },
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
];

export const software = [
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'VS Code', href: 'https://code.visualstudio.com/' },
  { name: 'Git Bash', href: 'https://gitforwindows.org/' },
  { name: 'cursor', href: 'https://cursor.com/home' },
];
