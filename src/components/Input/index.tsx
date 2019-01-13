import * as React from "react";
import { debounce } from "lodash";
import IProps from "./IProps";

import "./style.scss";

interface ITextAreaProps extends IProps {
    rows?: number;
    cols?: number;
    wrap?: string;
}
export default class extends React.Component<ITextAreaProps> {
    static defaultProps = {
        defaultValue: ""
    };
    onChange = debounce(this.props.onChange, this.props.timeout);
    render() {
        const { defaultValue, style, rows, cols, wrap } = this.props;
        return (
            <textarea
                style={style}
                rows={rows}
                cols={cols}
                wrap={wrap}
                className="my-textarea"
                onChange={(e) => this.onChange(e.target.value)}
                defaultValue={defaultValue}
            />
        );
    }
}