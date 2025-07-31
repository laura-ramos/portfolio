
interface Props {
  image: string,
  name: string
}
export const SkillItem = ({ image, name }: Props) => {
  return (
    <li className='ml-2 mr-2'>
      <div className="border text-sm font-semibold grid flex-col items-center p-3 w-36 h-28 justify-items-center">
        <img src={image} className="h-16" alt={name} />
        <span className="pt-2">{name}</span>
      </div>
    </li>
  );
}