export type InformationCardProps = {
  image: string;
  text: string;
  background?: string;
  customClass?: string;
};

export function InformationCard({ image, text, background, customClass }: InformationCardProps): JSX.Element {
  return (
    <div
      className={`flex flex-col justify-center items-center p-[10%] ${background || 'bg-gray-100'} ${
        customClass || ''
      }`}
      style={{ background: background || '' }}>
      <img src={image} alt='informative-image' className='w-[50%]' />
      <p className=''>{text}</p>
    </div>
  );
}
