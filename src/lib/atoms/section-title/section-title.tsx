export type SectionTitleProps = {
  title: string;
  customClass?: string;
};

export function SectionTitle({ title, customClass }: SectionTitleProps): JSX.Element {
  return <h2 className={`w-full text-center text-[25px] font-semibold ${customClass || ''}`}>{title}</h2>;
}
