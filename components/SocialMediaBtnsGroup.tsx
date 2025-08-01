import { XIcon } from '@/icons/XIcon';
import { SocialMediaBtn } from './SocialMediaBtn';
import { InstagramIcon } from '@/icons/InstagramIcon';
import { DiscordIcon } from '@/icons/DiscordIcon';
import { GithubIcon } from '@/icons/GithubIcon';

const iconClass =
  'size-6 fill-white group-hover:fill-white/70 transition-colors duration-300';

const btns = [
  {
    ariaLabel: 'X link button',
    href: 'https://x.com/WioraAI',
    icon: <XIcon className={iconClass} />,
  },
  {
    ariaLabel: 'Instagram',
    href: 'https://www.instagram.com/wiora.app/',
    icon: <InstagramIcon className={iconClass} />,
  },
  {
    ariaLabel: 'Discord link button',
    href: 'https://discord.gg/SdJz3DsQ',
    icon: <DiscordIcon className={iconClass} />,
  },
];

export const SocialMediaBtnsGroup = ({ className }: { className?: string }) => {
  return (
    <section className={`flex gap-2 ${className}`}>
      {btns.map(({ ariaLabel, href, icon }) => (
        <SocialMediaBtn key={ariaLabel} href={href} ariaLabel={ariaLabel}>
          {icon}
        </SocialMediaBtn>
      ))}
    </section>
  );
};
