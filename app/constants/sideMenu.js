import { HomeIcon, InfoIcon, BriefcaseIcon, PhoneIcon, SettingsIcon } from 'lucide-react';

export const menuItems = [
  { name: 'Home', icon: <HomeIcon className="text-gray-600" />, route: '/' },
  { name: 'About', icon: <InfoIcon className="text-gray-600" />, route: '/about' },
  { name: 'Services', icon: <BriefcaseIcon className="text-gray-600" />, route: '/services' },
  { name: 'Contact', icon: <PhoneIcon className="text-gray-600" />, route: '/contact' },
  { name: 'Settings', icon: <SettingsIcon className="text-gray-600" />, route: '/settings' },
];