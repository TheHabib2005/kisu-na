import Input from "./Input";

const SearchBar = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Input />
        </div>
    );
};

export default SearchBar;
