import * as React from "react";
import "./style.scss";
export enum Justify {
    Center,
    Start,
    End,
    SpaceBetween
}
interface IProps {
    justify?: Justify;
    style?: {};
    wrap?: boolean;
}

export const getClassNameByJustify = (justify: Justify): string => {
    switch(justify) {
        case Justify.Start: {
            return " start";
        }
        case Justify.End: {
            return " end";
        }
        case Justify.SpaceBetween: {
            return " space-between";
        }
        case Justify.Center:
        default:
        {
            return " center";
        }
    }
};

const Row: React.FunctionComponent<IProps> = ({ children, justify, style, wrap }) => {
    let className = `row${getClassNameByJustify(justify)}`;
    if (wrap) className += " wrap";
    return (
        <div style={style} className={className}>
            {children}
        </div>
    );
};
Row.defaultProps = {
    justify: Justify.Center
};
export default Row;