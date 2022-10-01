import Link from "next/link";
import { ReactNode } from "react";

type Props = React.ComponentProps<typeof Link>;

export const NavLink: React.FC<Props> = ({
    children,
    target,
    rel,
    ...props
}) => {
    return (
        <Link {...props}>
            <a
                {...{ target, rel }}
                className="p-2 flex gap-2 items-center hover:bg-zinc-200 dark:hover:bg-zinc-600 hover transition-all cursor-pointer rounded-md prose-a">
                {children}
            </a>
        </Link>
    );
};
