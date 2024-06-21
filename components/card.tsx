interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-xl bg-slate-100 p-5 dark:bg-slate-800">
      {title && <h1 className="text-xl font-bold">{title}</h1>}
      <div>{children}</div>
    </div>
  );
}
