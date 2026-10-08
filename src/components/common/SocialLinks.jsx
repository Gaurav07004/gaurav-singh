import { socialLinks } from "../../data/socialLinks";

// Icon + label list used in the menu drawer.
export default function SocialLinks({ links = socialLinks }) {
  return (
    <ul className="mt-6 xl:text-base text-[0.9rem] font-medium space-y-3 uppercase">
      {links.map(({ label, url, icon: Icon }) => (
        <li key={label}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group transition"
          >
            <span className="text-xl group-hover:text-(--primary) transition">
              <Icon />
            </span>

            <span className="group-hover:text-(--primary) transition">
              {label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
