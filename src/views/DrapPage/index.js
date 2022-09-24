import React from "react";
import { Flex, Text, LinkExternal } from "@phamphu19498/livetrade-uikit";
import DragList from "./DragList";

const DrapPages = () =>{
    return (
        <Flex width="100%" justifyContent="center" alignItems="center" flexDirection="column" py="2rem">
            <Flex maxWidth="1320px" width='100%' justifyContent='center' pt="2rem" flexDirection="column">
                <Flex width="100%" justifyContent='flex-start' mb="2rem">
                    <LinkExternal 
                        href="https://github.com/PhamPhu19498/demo-drap-app"
                        style={{cursor:"pointer"}}
                    >
                        <Text bold>
                            Link GitHub
                        </Text>
                    </LinkExternal>
                </Flex>
                <DragList/>
            </Flex>
        </Flex>
    )
}

export default DrapPages