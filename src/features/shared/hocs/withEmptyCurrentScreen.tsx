import * as React from "react";
import Text from "../../../components/Text";
import Centered from "../../../components/Centered";
import { withNamespaces, WithNamespaces } from "react-i18next";

interface IProps extends WithNamespaces {
    current: any;
}
const withEmptyScreen = (emptyMessage: string) => (Component: React.ComponentType<any & IProps>) =>
    class WithEmptyScreen extends React.Component<IProps> {
        render() {
            const { current, t } = this.props;
            return (
                !current
                ? <Centered><Text>{t(emptyMessage)}</Text></Centered>
                : <Component {...this.props} />
            );
        }
};
export default (message?: string) =>
    (Component: React.ComponentType<any & IProps>) =>
        withNamespaces()(withEmptyScreen(message)(Component));