import { JSX } from "react";
import { highlight } from 'sugar-high';
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

function Code({ children, ...props }: any) {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const H2 = (props: any) => (
    <h2 {...props} className="font-bold text-2xl py-5">
        {props.children}
    </h2>
);

const components = {
    code: Code,
    h2: H2, 
};

export default function MDXContent(
    props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
    return (
        <MDXRemote 
            {...props}
            components={components} 
        />
    );
}
