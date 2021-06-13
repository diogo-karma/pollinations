import React from 'react'
import { CardContent, Typography } from "@material-ui/core"
import useColab from "../network/useColab"
import ReactJson from 'react-json-view'
import { displayContentID, noop } from "../network/utils";

export const IpfsLog = () => {

    const { state } = useColab(); // {state:{ipfs:{},contentID: null, nodeID:null}, dispatch: noop}
    const { ipfs } = state;

    return <>

        <CardContent>
            <Typography
                variant="body2"
                color="textPrimary"
                component="pre"
                style={{ fontWeight: "bold" }}
                children={
                    ipfs.output && ipfs.output.log ? ipfs.output.log.replace(/\].*/g, "") : "Loading..."
                } />
        </CardContent>

        <CardContent>


            <ReactJson
                src={state.ipfs}
                name={displayContentID(state.contentID)}
                enableClipboard={false}
                displayDataTypes={false}
                displayObjectSize={false}
                collapsed={false} />

        </CardContent>

    </>

}