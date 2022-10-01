import { NavLink } from "./NavLinks";
import {
    RiEditLine,
    RiHome2Line,
    RiCodeSSlashFill,
    RiGithubFill,
    RiTwitterFill,
    RiLinkedinBoxFill,
} from "react-icons/ri";
import { PropsWithChildren } from "react";

const TopNavRow: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="flex gap-2 justify-center">{children}</div>;
};

export const TopNav: React.FC = () => {
    return (
        <nav className="p-6 shadow-md rounded-md flex flex-col gap-1 border-zinc-200 dark:border-zinc-600 border">
            <TopNavRow>
                <NavLink href="/">
                    <RiHome2Line /> Home
                </NavLink>
                {/* <NavLink href="/projects">
                    <RiCodeSSlashFill /> Projects
                </NavLink>
                <NavLink href="/blogs">
                    <RiEditLine /> Blogs
                </NavLink> */}
            </TopNavRow>
            <TopNavRow>
                <NavLink
                    href="https://github.com/Vishnu-Aithal"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref>
                    <RiGithubFill />
                </NavLink>
                <NavLink
                    href="https://twitter.com/Vishnu_Aithal"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref>
                    <RiTwitterFill />
                </NavLink>
                <NavLink
                    href="https://www.linkedin.com/in/vishnu-aithal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref>
                    <RiLinkedinBoxFill />
                </NavLink>
            </TopNavRow>
        </nav>
    );
};
