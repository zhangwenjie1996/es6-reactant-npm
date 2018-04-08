import React from 'react';
import { Button, Input } from 'antd';
export default class XButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <Button   type="primary" onClick={this.props.onClick}>222</Button>               
    }
}
