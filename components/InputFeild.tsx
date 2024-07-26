import React, { FC } from "react";
interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
    error: string | false | undefined
    value: string | number;
    title: string;
    placeholder: string;
    name: string;
    type: string
    className?: string;
    wrapperClassName?: string
    handleInputKeydown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

}
const InputFeild: FC<Props> = ({
    handleChange,
    error,
    value,
    title,
    placeholder,
    name,
    type,
    handleBlur,
    className,
    wrapperClassName,
    handleInputKeydown
}) => {
    return (
        <div className={wrapperClassName || "flex flex-col gap-3  mb-6 w-full"}>
            {title !== "" && <label htmlFor="" className="capitalize font-semibold ">
                {title}
            </label>}
            <input
                type={type}
                name={name}
                autoComplete="off"
                className={`${className || 'p-3 bg-zinc-900/50 rounded-md font-semibold outline-none'} ${error && "border border-red-600"
                    }`}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                onBlur={handleBlur}
                onKeyDown={handleInputKeydown}
            />
            {error && (
                <span className="text-red-500 capitalize font-semibold">
                    {" "}
                    {error}
                </span>
            )}

        </div>
    );
};

export default InputFeild;
