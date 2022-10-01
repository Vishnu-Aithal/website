import { PropsWithChildren } from "react";

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="p-6 prose-p">{children}</div>;
};
