import { PropsWithChildren } from "react";
import { Content } from "./Content";
import { TopNav } from "./TopNav";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-700 h-screen w-screen">
            <div className="sm:w-3/4 w-11/12 mx-auto sm:pt-10 pt-5">
                <TopNav />
                <Content>{children}</Content>
            </div>
        </main>
    );
};
