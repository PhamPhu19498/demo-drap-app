import React from "react";
import { Flex } from "@phamphu19498/livetrade-uikit";
import DragList from "./DragList";

const DrapPages = () =>{
    return (
        <Flex width="100%" justifyContent="center" alignItems="center" flexDirection="column" py="2rem">
            <Flex maxWidth="1320px" width='100%' justifyContent='center' pt="2rem">
                <DragList/>
            </Flex>
        </Flex>
    )
}

export default DrapPages