import * as React from "react";
import { connect } from "react-redux";
import { withNamespaces, WithNamespaces } from "react-i18next";
import actions from "./redux/actions";
import withLoader from "../shared/hocs/withLoader";
import withEmptyScreen from "../shared/hocs/withEmptyCurrentScreen";
import withOnmount from "../shared/hocs/withOnmountRouterParams";
import { ITag } from "./repository";
import Tag from "./components/Tag";
import Column, { Justify } from "../../components/Column";
import IStore from "../../redux/store";
import TagLayout from "../../components/Layouts/Tag";
import { Text } from "../../components/Text";
import Row from "../../components/Row";
import ObjectToList from "../../components/ObjectToList";
import Paper from "../../components/Paper";

interface IProps extends WithNamespaces {
    current: ITag;
}
class Single extends React.Component<IProps> {
    render () {
        const { current, t } = this.props;
        return (
            <Column justify={Justify.Center}>
                <Column justify={Justify.Center}>
                    <TagLayout sentimentScore={current.sentimentScore}>
                        <Tag {...current} />
                    </TagLayout>
                </Column>
                <Paper withShadow>
                    <Row>
                        <Text>{t("totalMentions")}:</Text>
                        <Text>{current.sentimentScore}</Text>
                    </Row>
                </Paper>
                <Paper withShadow>
                    <Row>
                        <Text>{t("positiveMentions")}:</Text>
                        <Text>{current.sentiment.positive}</Text>
                    </Row>
                </Paper>
                <Paper withShadow>
                    <Row>
                        <Text>{t("negativeMentions")}:</Text>
                        <Text>{current.sentiment.negative}</Text>
                    </Row>
                </Paper>
                <Paper withShadow>
                    <Row>
                        <Text>{t("neutralMentions")}:</Text>
                        <Text>{current.sentiment.neutral}</Text>
                    </Row>
                </Paper>
                <Paper withShadow>
                    <Row>
                        <Column justify={Justify.End}><Text>{t("pageTypes")}:</Text></Column>
                        <ObjectToList columnJustify={Justify.Start} rowJustify={Justify.Start} object={current.pageType} />
                    </Row>
                </Paper>
            </Column>
        );
    }
}

export default connect(
    (state: IStore) => ({
        fetching: state.tags.fetchingOne,
        current: state.tags.current
    }),
    dispatch => ({
        onMount: ({ id }) => dispatch(actions.getById(id))
    })
)(
    withNamespaces()(
        withOnmount(
            withLoader(
                withEmptyScreen("tagNotFound")(
                    Single
                )
            )
        )
    )
);