import * as React from "react";
import "./style.scss";

export enum Tags {
    Standart,
    Mobile,
}
export interface IProps {
    sentimentScore: number;
}
export const Context = React.createContext({});
const lowThreshold = 30;
const highThreshold = 90;

export default class TagLayout extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }
    render() {
        const { sentimentScore } = this.props;
        let style = {};
        if (sentimentScore < lowThreshold) {
            style = {
                color: "red",
                fontSize: 12
            };
        } else if (sentimentScore > highThreshold) {
            style = {
                color: "green",
                fontSize: 18
            };
        } else {
            style = {
                color: "yellow",
                fontSize: 15
            };
        }
        return (
            <Context.Provider value={style}>
                {this.props.children}
            </Context.Provider>
        );
    }
}