import React from 'react';

import * as Blockly from 'blockly/core';
import * as locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale as any);

class BlocklyEditor extends React.Component<any, any> {

    primaryWorkspace: any;
    blocklyDiv: React.RefObject<HTMLDivElement>;
    toolbox: React.RefObject<HTMLDivElement>;

    constructor(props) {
        super(props);
        this.blocklyDiv = React.createRef();
        this.toolbox = React.createRef();
    }

    get workspace() {
        return this.primaryWorkspace;
    }

    componentDidMount() {
        const {initialXml, children, ...rest} = this.props;

        console.log(this.toolbox.current);

        this.primaryWorkspace = Blockly.inject(
            this.blocklyDiv.current,
            {
                toolbox: this.toolbox.current,
                ...rest
            },
        );

        if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(initialXml), this.primaryWorkspace);
        }
    }

    setXml(xml) {
        Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(xml), this.primaryWorkspace);
    }

    render() {
        return <React.Fragment>
                <div>
                    <div
                        ref={this.blocklyDiv} id="blocklyDiv"
                        style={{height: 350, width: 500}}
                    ></div>
                </div>
        </React.Fragment>;
    }

}

const Block = (p) => {
    const { children, ...props } = p;
    props["is"] = "blockly";
    return React.createElement("block", props, children);
};

const Category = (p) => {
    const { children, ...props } = p;
    props["is"] = "blockly";
    return React.createElement("category", props, children);
};

const Value = (p) => {
    const { children, ...props } = p;
    props["is"] = "blockly";
    return React.createElement("value", props, children);
};

const Field = (p) => {
    const { children, ...props } = p;
    props["is"] = "blockly";
    return React.createElement("field", props, children);
};

const Shadow = (p) => {
    const { children, ...props } = p;
    props["is"] = "blockly";
    return React.createElement("shadow", props, children);
};

export { Block, Category, Value, Field, Shadow, BlocklyEditor };
