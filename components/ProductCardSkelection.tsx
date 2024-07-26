


const ProductCardSkeleton = () => {
    return (

        <div className=" animate-pulse bg-zinc-900/60 rounded-md h-auto  p-3">
            <div className="animate-pulse rounded-md w-full h-[250px] bg-zinc-900">
            </div>
            <div className="animate-pulse mt-4 rounded-md w-full h-[30px] bg-zinc-900">
            </div>
            <div className="animate-pulse mt-4 rounded-md w-full h-[30px] bg-zinc-900">
            </div>
            <div className="animate-pulse mt-2 rounded-md w-[150px] h-[20px] bg-zinc-900">
            </div> <div className="animate-pulse mt-2 rounded-md w-[120px] h-[10px] bg-zinc-900">
            </div>
        </div>

    );
};

export default ProductCardSkeleton;
