const ProductCard = ({ cardData }) => {
  return (
    <figure className="relative h-[220px] w-[220px] flex justify-center items-center cursor-pointer group">
      <img
        src={cardData.image}
        className="h-[100%] w-[100%] object-cover rounded-md grayscale-[50%] hover:grayscale-0 hover:scale-110 hover:blur-md hover:opacity-75 transition z-10"
        alt=""
      />
      <figcaption className="absolute text-slate-800 font-bold text-xl text-center w-full h-6 opacity-0 group-hover:opacity-100 group-hover:scale-110 z-50 rounded-b-md">
        {cardData.figCap}
      </figcaption>
    </figure>
  );
};

export default ProductCard;
