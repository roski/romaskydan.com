'use client';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaX, FaYoutube } from 'react-icons/fa6';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { navHoverTap } from '@/libs/animation-util';
import { siteInfo } from '@/data/metadata';

const { socialLinks } = siteInfo;

enum SocialIconName {
  Github = 'Github',
  X = 'X',
  LinkedIn = 'LinkedIn',
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  YouTube = 'YouTube',
}

interface SocialIcon {
  name: SocialIconName;
  icon: ReactNode;
  url: string;
}

const SOCIAL_ICONS: SocialIcon[] = [
  {
    name: SocialIconName.Github,
    icon: <FaGithub />,
    url: socialLinks.github,
  },
  {
    name: SocialIconName.LinkedIn,
    icon: <FaLinkedin />,
    url: socialLinks.linkedin,
  },
  {
    name: SocialIconName.Facebook,
    icon: <FaFacebook />,
    url: socialLinks.facebook,
  },
  {
    name: SocialIconName.Instagram,
    icon: <FaInstagram />,
    url: socialLinks.instagram,
  },
  {
    name: SocialIconName.X,
    icon: <FaX />,
    url: socialLinks.x,
  },
  {
    name: SocialIconName.YouTube,
    icon: <FaYoutube />,
    url: socialLinks.youtube,
  },
];

export default function SocialIcons() {
  return (
    <nav className="flex space-x-4">
      {SOCIAL_ICONS.map(({ icon, name, url }) => {
        return (
          url && (
            <Link key={name} href={url} aria-label={`${name} link`} target="_blank">
              <motion.div initial="normal" variants={navHoverTap} whileHover="hover" whileTap="tap">
                {icon}
              </motion.div>
            </Link>
          )
        );
      })}
    </nav>
  );
}
