type TTypeBadge = {
  typeText?: string | null;
};

const TypeBadge = ({ typeText }: TTypeBadge) => {
  return (
    <div className="bg-gray-100 rounded-sm text-[10px] text-gray-400 w-fit px-2 py-[2px]">
      {typeText}
    </div>
  );
};

export default TypeBadge;
