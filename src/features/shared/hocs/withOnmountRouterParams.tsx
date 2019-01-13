import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IWithOnmountProps {
    onMount?: Function;
    url?: string;
}
type P = any;
const WithOnmountRouter = (Component: React.ComponentType<P>) =>
    class WithOnmount extends React.Component<any & IWithOnmountProps & RouteComponentProps> {
        static defaultProps = {
            onMount: () => console.warn("No onmount props"),
        };
        componentWillMount() {
            const { onMount, match: { params } } = this.props;
            onMount(params);
        }
        render() {
            return <Component {...this.props} />;
        }
    };
export default WithOnmountRouter;