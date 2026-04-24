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
    /*
  {
    name: 'LG Ultragear 27GN650 (27 inch, 68.5 cm)',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Magic Keyboard',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Logitech MX Master 3S Mouse',
    icon: <Mouse className="size-4" />,
  },*/
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
  { name: 'Dia', href: 'https://www.diabrowser.com/' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'TickTick', href: 'https://ticktick.com/download' },
  { name: 'OBS Studio', href: 'https://obsproject.com/' },
  { name: 'VLC', href: 'https://www.videolan.org/vlc/' },
  { name: 'Ghostty', href: 'https://ghostty.org/' },
];
