import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee, faApple } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

type AllowedIcons = 'linkedin' | 'git' | 'instagram' | 'x';

const iconMap: Record<AllowedIcons, IconProp> = {
  linkedin: faLinkedin,
  git: faGithub,
  instagram: faInstagram,
  x: faXTwitter
};

interface IconProps {
  iconName: AllowedIcons;
  size?: 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x';
  color?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, size = 'lg', color = 'black' }) => {
  const icon = iconMap[iconName];

  return (
    <FontAwesomeIcon icon={icon} size={size} color={color} />
  );
};

export default Icon;
