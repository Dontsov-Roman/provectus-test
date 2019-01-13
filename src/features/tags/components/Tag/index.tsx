import * as React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../components/Layouts/Tag";
import { ITag } from "../../repository";
import { Text } from "../../../../components/Text";
import "./style.scss";

interface IProps extends ITag {
    style?: any;
}

export class Tag extends React.Component<IProps> {
    render() {
        const { label, style, id } = this.props;
        return (
            <Link to={`/${id}`}>
                <Text className="tag" style={style}>
                    {label}
                </Text>
            </Link>
        );
    }
}

export default class ThemedTag extends React.Component<IProps> {
    static contextType = Context;
    render() {
        const { style, ...props } = this.props;
        return <Tag {...props} style={{ ...this.context, ...style }} />;
    }
}