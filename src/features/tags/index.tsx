import * as React from "react";
import { connect } from "react-redux";
import actions from "./redux/actions";
import withLoader from "../shared/hocs/withLoader";
import withEmptyScreen from "../shared/hocs/withEmptyScreen";
import withOnmount from "../shared/hocs/withOnmount";
import { ITag } from "./repository";
import Tag from "./components/Tag";
import Column, { Justify } from "../../components/Column";
import IStore from "../../redux/store";
import TagLayout from "../../components/Layouts/Tag";

interface IProps {
    fetching: boolean;
    data: ITag[];
    onMount: Function;
}

class Tags extends React.Component<IProps> {
    render() {
        const { data } = this.props;
        return (
            <Column justify={Justify.Center}>
                {data.map((item) => (
                    <TagLayout sentimentScore={item.sentimentScore}>
                        <Tag {...item} key={item.id} />
                    </TagLayout>
                ))}
            </Column>
        );
    }
}
export default connect(
    (state: IStore) => ({
        fetching: state.tags.fetching,
        data: state.tags.data.toArray()
    }),
    dispatch => ({
        onMount: () => dispatch(actions.getAll())
    })
)(
    withOnmount(
        withLoader(
            withEmptyScreen("noTags")(
                Tags
            )
        )
    )
);
