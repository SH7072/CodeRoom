import { Flex } from "@mantine/core";
import { Editor, useMonaco } from "@monaco-editor/react";
import ConsoleBar from "../../components/CodeEditor/ConsoleBar";
import { useEffect, useRef, useState } from "react";
import TopSideOptionsbar from "../../components/CodeEditor/TopSideOptionsBar";
import { socket } from "../../socket";
// `#include <iostream>
// using namespace std;
// `

const CodeEditor = ({ user, roomId }) => {

    const monacoRef = useRef(null);
    const monaco = useMonaco();
    const [language, setLanguage] = useState('cpp');
    const [value, setValue] = useState(`"use strict";,
        "function Person(age) {",
        "	if (age) {",
        "		this.age = age;",
        "	}",
        "}",
        "Person.prototype.getAge = function () {",
        "	return this.age;",
        "};`,);
    const [users, setUsers] = useState({
        // 'user1': {
        //     userEmail: 'user1@gmail',
        //     userName: 'user1',
        //     userColor: 'red',
        //     isAdmin: true,
        // },
    });
    const [decorations, setDecorations] = useState({
        // 'user1': [],
    });
    const [contentWidgets, setContentWidgets] = useState({
        // 'user1': {
        //     position: {
        //         lineNumber: 0,
        //         column: 0
        //     },
    });
    // const [isSocket, setIsSocket] = useState(false);
    let isSocket = false;

    console.log(users);
    console.log(decorations);
    // console.log(isSocket);


    function insertWidget(data) {
        // console.log(data);
        if (monaco) {
            // const model = monaco.editor.getModels()[0];
            // decorations[data.userId] =
            //     model.deltaDecorations([], [
            //         {
            //             range: new monaco.Range(data.userCursorPos['startLineNumber'], data.userCursorPos['startColumn'], data.userCursorPos['endLineNumber'], data.userCursorPos['endColumn']),
            //             options: {
            //                 className: data.userColor,
            //                 hoverMessage: {
            //                     value: data.userName,
            //                 }
            //             }
            //         },
            //     ]);
        }

        // contentWidgets[data.userId] = {
        //     position: {
        //         lineNumber: data.userCursorPos['endLineNumber'],
        //         column: data.userCursorPos['endColumn'],
        //         // startLineNumber: data.userCursorPos['startLineNumber'],
        //         // startColumn: data.userCursorPos['startColumn'],
        //         // endLineNumber: data.userCursorPos['endLineNumber'],
        //         // endColumn: data.userCursorPos['endColumn'],
        //     },
        //     // },

        // }
    }

    function changeSelection({ userId, userColor, userName, changes }) {
        if (monaco) {
            // console.log(monacoRef.current.editor);
            // console.log(monaco.editor.getModels());

            let selectionArray = []
            if (changes.range.startColumn == changes.range.endColumn && changes.range.startLineNumber == changes.range.endLineNumber) { //if cursor - 커서일 때
                changes.range.endColumn++;
                changes.range.startColumn++
                selectionArray.push({
                    range: changes.range,
                    options: {
                        className: `${userColor}`,
                        hoverMessage: {
                            value: userName
                        }
                    }
                })

            } else {    //if selection - 여러개를 선택했을 때
                selectionArray.push({
                    range: changes.range,
                    options: {
                        className: `${userColor}`,
                        hoverMessage: {
                            value: userName
                        }
                    }
                })
            }
            // for (let data of e.secondarySelections) {       //if select multi - 여러개를 선택했을 때
            //     if (data.startColumn == data.endColumn && data.startLineNumber == data.endLineNumber) {
            //         selectionArray.push({
            //             range: data,
            //             options: {
            //                 className: `${e.user}one`,
            //                 hoverMessage: {
            //                     value: e.user
            //                 }
            //             }
            //         })
            //     } else
            //         selectionArray.push({
            //             range: data,
            //             options: {
            //                 className: e.user,
            //                 hoverMessage: {
            //                     value: e.user
            //                 }
            //             }
            //         })
            // }

            // console.log(selectionArray);
            const model = monaco.editor.getModels()[0];
            decorations[userId] =
                model.deltaDecorations(decorations[userId], selectionArray);


            // model.deltaDecorations(decorations[userId], [
            //     {
            //         range: new monaco.Range(changes.range.startLineNumber, changes.range.startColumn, changes.range.endLineNumber, changes.range.endColumn),
            //         options: {
            //             className: userColor,
            //             hoverMessage: {
            //                 value: userName,
            //             }
            //         }
            //     },
            // ]);
        }
    };

    function changeWidgetPosition({ userId, changes }) {
        contentWidgets[userId].position.lineNumber = changes[0].range.endLineNumber
        contentWidgets[userId].position.column = changes[0].range.endColumn

        monaco.editor.removeContentWidget(contentWidgets[userId])
        monaco.editor.addContentWidget(contentWidgets[userId])
    }


    function changeText({ userId, code }) {
        // console.log(code);
        if (monaco) {
            console.log(code.changes);
            setUsers((prev) => {
                let newUsers = prev;
                newUsers[userId] = {
                    userId: prev[userId].userId,
                    userEmail: prev[userId].userEmail,
                    userName: prev[userId].userName,
                    userColor: prev[userId].userColor,
                    isAdmin: prev[userId].isAdmin,
                    userCursorPos: code.changes[0].range,
                }
                return newUsers;
            });

            monaco.editor.getModels()[0].applyEdits(code.changes) //change Content
            changeSelection({ userId, userColor: users[userId].userColor, userName: users[userId].userName, changes: code.changes[0] })
            // changeWidgetPosition({ userId, changes: code.changes });
            // if (monaco.editor)
            // monaco.editor.getModel().applyEdits(code.changes) //change Content
            // setValue()
        }
    }


    // useEffect(() => {
    //     console.log('CodeEditor');
    //     // if (user && monaco && editorRef) {
    //     //     socket.auth = {
    //     //         roomId: roomId,
    //     //         userId: user._id,
    //     //     }
    //     //     socket.connect();
    //     //     console.log("socket connected")
    //     //     socket.emit("join-room", {
    //     //         roomId: roomId,
    //     //         userId: user._id,
    //     //         userEmail: user.email,
    //     //         userName: user.name,
    //     //     });
    //     // }

    //     //no need of this as we are getting user data from backend as that data is sent to all users
    //     // user && (users[user._id] = {
    //     //     userId: user._id,
    //     //     userEmail: user.email,
    //     //     userName: user.name,
    //     // })

    // }, [user, editorRef]);

    useEffect(() => {
        if (user && monaco) {
            socket.on('user-connected', (data) => {
                // console.log(data, 'user-connected');
                { data.userId !== user._id && insertWidget(data) };
                decorations[data.userId] = []
                setUsers((prev) => {
                    let newUsers = prev;
                    newUsers[data.userId] = {
                        userId: data.userId,
                        userEmail: data.userEmail,
                        userName: data.userName,
                        userColor: data.userColor,
                        isAdmin: data.isAdmin,
                        userCursorPos: data.userCursorPos,
                    }
                    return newUsers;
                });
            });

            socket.on('user-data-transfer', (data) => {
                console.log(data, 'user-data-transfer');
                for (let i = 0; i < data.length; i++) {
                    if (data[i].userId !== user._id) {
                        insertWidget(data[i]);
                    }
                    decorations[data[i].userId] = []
                }


                //is this efficent way to update state???
                setUsers((prev) => {
                    let newUsers = prev;
                    for (let i = 0; i < data.length; i++) {
                        newUsers[data[i].userId] = {
                            userId: data[i].userId,
                            userEmail: data[i].userEmail,
                            userName: data[i].userName,
                            userColor: data[i].userColor,
                            isAdmin: data[i].isAdmin,
                            userCursorPos: data[i].userCursorPos,
                        }
                    }
                    return newUsers;
                });
            });
        }

        socket.on('coderoom:user-disconnected', (data) => {
            // console.log(data);
        });

        socket.on('code-change-transfer', ({ userId, code }) => {
            console.log(code, userId, user._id, 'code-change-transfer');
            // setIsSocket(prev => true);
            isSocket = true;
            // console.log(isSocket, 'inside code-change-transfer');
            changeText({ userId, code });
            console.log(users);
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
    }, [user, socket, monaco]);


    const handleCodeChanges = (value, event) => {
        // console.log(users);
        console.log(event);
        console.log(isSocket);
        if (!isSocket) {
            console.log('user made changes');
            socket.emit('code-change', {
                roomId: roomId,
                userId: user._id,
                isSocket: isSocket,
                code: event
            });
        }
        else {
            console.log('socket made changes');
            // setIsSocket(prev => false);
            isSocket = false;
        }
    }


    const editorOptions = {
        minimap: {
            enabled: false,
        },
        language: language,
    }

    function handleEditorDidMount(monaco) {
        monacoRef.current = monaco;
        socket.auth = {
            roomId: roomId,
            userId: user._id,
        }
        socket.connect();
        console.log("socket connected")
        socket.emit("join-room", {
            roomId: roomId,
            userId: user._id,
            userEmail: user.email,
            userName: user.name,
        });


    }


    return (
        <>
            <Flex w={'40%'} mih={'100%'} direction={'column'}>
                <TopSideOptionsbar h={'30px'} monaco={monacoRef.current} setLanguage={setLanguage} language={language} />
                <Editor
                    height={'calc(100% - 100px)'}
                    width={'100%'}
                    zoom={1}
                    theme="vs-dark"
                    defaultLanguage={language}
                    // defaultValue={value}
                    value={value}
                    options={editorOptions}
                    onChange={handleCodeChanges}
                    onMount={handleEditorDidMount}
                />
                {/* {contentWidgets && Object.keys(contentWidgets).map((e) => {
                            return monaco.editor.addContentWidget(contentWidgets[e])
                        })
                        } */}
                <ConsoleBar h={'30px'} theme={'dark'} monaco={monacoRef.current} />
            </Flex>
        </>
    );
}

export default CodeEditor;