import ProductCard from "../../components/product-card/ProductCard";
import { ProductCardsData } from "../../data/Data";

const Products = () => {
  return (
    <div className="flex flex-col mx-auto justify-center items-center xl:w-[1024px] lg:w-[1024px] pb-6">
      <p className="text-[48px] leading-[70px] text-center font-bold text-[#000D2F] p-4">
        Our Essence Collection
      </p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:sm:grid-cols-1 gap-6">
        {ProductCardsData.map((cardData) => (
          <ProductCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default Products;
