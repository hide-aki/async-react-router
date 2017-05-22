import Request from "./Request";
import React from "react";

export default class Link extends React.Component {
    click(e) {
        e.preventDefault();
        Request.to(this.props.to);
    }

    render() {
        return (
            <a href={this.props.to} onClick={this.click.bind(this)}>
                {this.props.children}
            </a>
        );
    }
}

