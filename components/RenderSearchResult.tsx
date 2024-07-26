
import ProductCard from "./productCard";

export default function RenderSearchResult({ products }: { products: any[] }) {

    return (
        <div>
            <div className="grid grid-flow-row xl:gap-6 gap-4    w- sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 lg:p-0 xl:grid-cols-4 pt-3   pb-5   ">
                {products.map((product, index) => {
                    return <ProductCard index={0} product={product} key={index} />;
                })}
            </div>

        </div>
    );
}
