import { BookIcon, UserIcon, SettingsIcon, LayersIcon } from 'lucide-react';

export const menuItems = [
  { name: 'My Courses', icon: <BookIcon className="text-gray-600" />, route: '/my-courses' },
  { name: 'My Learning', icon: <LayersIcon className="text-gray-600" />, route: '/my-learning' },
  { name: 'Profile', icon: <UserIcon className="text-gray-600" />, route: '/profile' },
  { name: 'Settings', icon: <SettingsIcon className="text-gray-600" />, route: '/settings' },
];