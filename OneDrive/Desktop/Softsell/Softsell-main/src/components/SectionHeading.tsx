import { cn } from '../utils/cn';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;