import * as React from "react";

import "./style.scss";
interface IProps {
    withShadow?: boolean;
    style?: {};
}
const Paper: React.FunctionComponent<IProps> = ({ children, withShadow, style }) => {
    let className = "paper";
    if (withShadow) className += " shadow";
    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
};
Paper.defaultProps = {
    withShadow: false
};
export default Paper;