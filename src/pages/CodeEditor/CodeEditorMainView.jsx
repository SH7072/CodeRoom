import { useSelector } from "react-redux";
import CodeEditor from "./CodeEditor";
import { Flex } from "@mantine/core";
import { useParams } from "react-router-dom";

const CodeEditorMainView = () => {
    const user = useSelector(state => state.user.user);
    const { roomId } = useParams();

    return (
        <>
            <Flex height={'92vh'} mih={'92vh'}>
                <Flex w={'40%'}>
                    <h1>Hi! Welcome to Code Editor</h1>
                </Flex>
                {user ? <CodeEditor user={user} roomId={roomId} /> : null}
            </Flex>
        </>
    );
}

export default CodeEditorMainView;