import * as React from "react";

interface IWithOnmountProps {
    onMount?: Function;
}
type P = any;
const WithOnmount = (Component: React.ComponentType<P>) =>
    class WithOnmount extends React.Component<any & IWithOnmountProps> {
        static defaultProps = {
            onMount: () => console.warn("No onmount props"),
        };
        componentWillMount() {
            const { onMount } = this.props;
            onMount();
        }
        render() {
            return <Component {...this.props} />;
        }
};
export default WithOnmount;