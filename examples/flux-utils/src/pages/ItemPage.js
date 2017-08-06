import NProgress from "nprogress";
import React from "react";
import ItemContainer from "../containers/ItemContainer";
import HackerNewsApi from "../api/HackerNewsApi";
import NotFoundPage from "./NotFoundPage";
import ItemAction from "../actions/item/ItemAction";

export default class ItemPage extends React.Component {
    static initialPropsWillGet() {
        NProgress.start();
    }

    static async getInitialProps(attributes) {
        return {
            item: await HackerNewsApi.findItem(attributes.params.itemId)
        };
    }

    static initialPropsStoreHook(props) {
        if (props.item) {
            ItemAction.newInstance(props.item);
        }
    }

    static initialPropsDidGet() {
        NProgress.done();
    }

    render() {
        if (!this.props.item) return (<NotFoundPage/>);

        return (<ItemContainer/>);
    }
}