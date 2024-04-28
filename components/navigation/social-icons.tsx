'use client';
import Link from 'next/link';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaX,
  FaYoutube,
} from 'react-icons/fa6';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { navHoverTap } from '@/libs/animation-util';
import { siteInfo } from '@/data/metadata';

type SocialIconName =
  | 'github'
  | 'linkedin'
  | 'facebook'
  | 'instagram'
  | 'x'
  | 'youtube';

interface SocialIcon {
  icon: ReactNode;
  url: string;
}

const { socialLinks } = siteInfo;
const SOCIAL_ICONS: { [key in SocialIconName]: SocialIcon } = {
  github: {
    icon: <FaGithub />,
    url: socialLinks.github,
  },
  linkedin: {
    icon: <FaLinkedin />,
    url: socialLinks.linkedin,
  },
  facebook: {
    icon: <FaFacebook />,
    url: socialLinks.facebook,
  },
  instagram: {
    icon: <FaInstagram />,
    url: socialLinks.instagram,
  },
  x: {
    icon: <FaX />,
    url: socialLinks.x,
  },
  youtube: {
    icon: <FaYoutube />,
    url: socialLinks.youtube,
  },
};

export default function SocialIcons() {
  const { order } = socialLinks;
  return (
    <nav className="flex space-x-4">
      {order.map((name) => {
        const { icon, url } = SOCIAL_ICONS[name as SocialIconName];
        return (
          url && (
            <Link
              key={name}
              href={url}
              aria-label={`${name} link`}
              target="_blank">
              <motion.div
                initial="normal"
                variants={navHoverTap}
                whileHover="hover"
                whileTap="tap">
                {icon}
              </motion.div>
            </Link>
          )
        );
      })}
    </nav>
  );
}
