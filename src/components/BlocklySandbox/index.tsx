import {Block, BlocklyEditor} from "@site/src/components/BlocklyEditor";
import React, {useEffect} from "react";
import BlocklyRunner from "@site/src/components/BlocklyRunner";
import {javascriptGenerator} from "blockly/javascript";

export default function BlocklySandBox() {
    const simpleWorkspace = React.useRef(null);
    const [js, setJs] = React.useState('');


    return (
        <React.Fragment>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button onClick={() => {
                    let code = javascriptGenerator.workspaceToCode(simpleWorkspace.current.workspace);
                    setJs(code);
                }}>
                    Run
                </button>
                <button onClick={() => {
                    simpleWorkspace.current.setXml(`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_if"></block>
</xml>
`);
                }}>
                    Reset
                </button>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <BlocklyEditor ref={simpleWorkspace}
                               readOnly={false} trashcan={false} media={'media/'}
                               move={{
                                   scrollbars: true,
                                   drag: true,
                                   wheel: true
                               }}
                               initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
</xml>
      `}>
                    >
                </BlocklyEditor>

                <div>
                    <BlocklyRunner
                        code={js}
                    />
                </div>
            </div>
        </React.Fragment>

);

}
