import clsxm from '@/lib/clsxm';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={clsxm('layout', className)}>{children}</div>;
}
