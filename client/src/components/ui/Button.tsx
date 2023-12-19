import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { FC } from "react";

const ButtonVariants = cva(["btn"], {
    variants: {
        intent: {
            primary: ["bg-primary"],
            secondary: ["btn-secondary"],
            white: [
                "bg-secondary",
                "text-black",
                "border-gray-400",
                "hover:bg-gray-100",
                "border-solid",
                "border-2",
                "border-gray-800",
            ],
            text: [
                "text-white",
                "dark:stroke-white",
                "dark:fill-white",
                "hover:bg-gray-100",
            ],
        },
        size: {
            small: ["text-md", "py-1", "px-4", "w-fit"],
            medium: ["text-lg", "px-6", "py-2"],
            large: ["text-xlg", "px-8", "py-4"],
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "small",
    },
});
export interface ButtonProps
    extends React.HTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof ButtonVariants> {}

const Button: FC<ButtonProps> = ({
    children,
    intent,
    size,
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(ButtonVariants({ intent, size }), className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
