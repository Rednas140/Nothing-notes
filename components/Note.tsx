import { PropsWithChildren } from "react";

export function Note({type, title, content}: {type: number} & {title: string} & {content: string}){
    const theme = type;

    return (
        <section>
            <h2>{title ? title : "fuck yeah"}</h2>
            <p>{ content ? content : "Less gooo"}</p>
        </section>
    );
}