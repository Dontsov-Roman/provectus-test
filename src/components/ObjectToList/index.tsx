import * as React from "react";
import Column, { Justify } from "../Column";
import Row from "../Row";
import { Text } from "../Text";

interface IProps {
    object: {
        [key: string]: any;
    };
    columnJustify?: Justify;
    rowJustify?: Justify;
}

export default class ObjectToList extends React.Component<IProps> {
    render() {
        const { object, columnJustify, rowJustify } = this.props;
        const keys = Object.keys(object);
        return (
            <Column justify={columnJustify}>
                {keys.map(key => (
                    <Row justify={rowJustify} key={key}>
                        <Text>{key}:</Text>
                        <Text>{object[key]}</Text>
                    </Row>
                ))}
            </Column>
        );
    }
}