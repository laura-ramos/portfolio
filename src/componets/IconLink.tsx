
interface IconLinkProps {
  href: string;
  title: string;
  children?: React.ReactNode;
  isCircle?: boolean;
}
export const IconLink = ({ href, title, children, isCircle }: IconLinkProps) => {
  const className = `btn ${isCircle ? 'btn-circle' : ''} btn-outline btn-primary text-neutral`;

  return (
    <a
      className={className}
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
