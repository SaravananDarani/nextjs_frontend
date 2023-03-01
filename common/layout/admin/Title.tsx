import * as React from 'react';
interface TitleProps {
    children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
    return (props.children);
}