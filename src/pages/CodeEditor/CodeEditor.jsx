import { Flex } from "@mantine/core";
import { Editor } from "@monaco-editor/react";
import ConsoleBar from "../../components/CodeEditor/ConsoleBar";
import { useEffect, useRef, useState } from "react";
import TopSideOptionsbar from "../../components/CodeEditor/TopSideOptionsBar";
import { socket } from "../../socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CodeEditor = () => {

    const user = useSelector(state => state.user.user);
    const { roomId } = useParams();
    const editorRef = useRef(null);
    const [language, setLanguage] = useState('cpp');
    const [value, setValue] = useState(`#include <iostream>
using namespace std;
`);
    const [users, setUsers] = useState({});

    const [isSocket, setIsSocket] = useState(false);

    function changeText(code) {
        // console.log(code);
        editorRef?.current?.getModel().applyEdits(code.changes) //change Content
    }

    console.log(users);

    useEffect(() => {
        console.log('CodeEditor');
        user && socket.connect();
        user && socket.emit('coderoom:join-room', {
            roomId: roomId,
            userId: user.email,
            name: user.name
        });

        user && (users[user.email] = user.name)

    }, [user]);

    useEffect(() => {
        socket.on('coderoom:user-connected', (data) => {
            console.log(data);
            // setUsers((prev) => [...prev, data.userId]);
            users[data.userId] = data.name;
        });

        socket.on('coderoom:user-disconnected', (data) => {
            // console.log(data);
        });

        socket.on('coderoom:code-change', ({ isSocket, code }) => {
            // console.log(isSocket, code);
            setIsSocket(true);
            changeText(code);
        });

        socket.on('coderoom:cursor-change', (data) => {
            console.log(data);
        });

        // socket.on('coderoom:language-change', (data) => {
        //     console.log(data);
        //     setLanguage(data.language);
        // });


        return () => {
            console.log('CodeEditor unmount');
            user && socket.emit('coderoom:leave-room', {
                roomId: roomId,
                userId: user.email
            });
            socket.disconnect();

        }
    }, [user, socket]);



    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        editorRef.monaco = monaco;
        editorRef?.current?.setValue(`#include <iostream>
using namespace std;

`);
    }

    const handleCodeChanges = (value, event) => {

        console.log(users);
        // console.log(value);
        // console.log(event);
        editorRef?.current?.onDidChangeModelContent((e) => {
            if (!isSocket) {
                socket.emit('coderoom:code-change', {
                    roomId: roomId,
                    userId: user.email,
                    isSocket: isSocket,
                    code: event
                });
            }
            else {
                setIsSocket(false);
            }
        });
        // console.log(event);
        // editorRef?.current?.getModel().onDidChangeContent((e) => { console.log(e); });
        // editorRef?.current?.onDidChangeModelContent((e) => { console.log(e); });
        // console.log(editorRef?.current?.getDiffEditors());

        editorRef?.current?.onDidChangeCursorSelection((e) => {
            console.log(e);
            socket.emit('coderoom:cursor-change', {
                roomId: roomId,
                userId: user.email,
                cursor: e
            });
        });
    }


    const editorOptions = {
        minimap: {
            enabled: false,
        },
        language: language,
    }



    return (
        <>
            {/* <h1>Hi! Welcome to Code Editor</h1> */}
            {user &&
                <Flex height={'92vh'} mih={'92vh'}>
                    <Flex w={'40%'}>
                        <h1>Hi! Welcome to Code Editor</h1>
                    </Flex>
                    <Flex w={'40%'} mih={'100%'} direction={'column'}>
                        <TopSideOptionsbar h={'30px'} editorRef={editorRef} setLanguage={setLanguage} language={language} />
                        <Editor
                            height={'calc(100% - 100px)'}
                            width={'100%'}
                            theme="vs-dark"
                            defaultLanguage={language}
                            defaultValue={value}
                            options={editorOptions}
                            onMount={handleEditorDidMount}
                            onChange={handleCodeChanges}
                        />
                        <ConsoleBar h={'30px'} theme={'dark'} editorRef={editorRef} />
                    </Flex>
                </Flex>
            }
        </>
    );
}

export default CodeEditor;