// import React, {useEffect} from "react";
// import Codemirror from "codemirror";
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/addon/edit/closetag';
// import 'codemirror/addon/edit/closebrackets'
//
// const Editor =()=>{
//     useEffect(() => {
//         async function init(){
//             Codemirror.fromTextArea(document.getElementById('realtimeEditor'),{
//                 mode: {name: 'javascript', json:true},
//                 theme: 'dracula',
//                 autoCloseTags: true,
//                 lineNumbers: true,
//             });
//         }
//         init();
//     }, []);
//     return(
//         <textarea id="realtimeEditor"></textarea>
//     )
// }
//
// export default Editor;

import React, { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const Editor = () => {
    const editorRef = useRef(null);
    const codeMirrorInstance = useRef(null);

    useEffect(() => {
        // Initialize CodeMirror
        if (editorRef.current) {
            codeMirrorInstance.current = Codemirror.fromTextArea(editorRef.current, {
                mode: { name: 'javascript', json: true },
                theme: 'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            });
        }

        // Cleanup function to avoid memory leaks
        return () => {
            if (codeMirrorInstance.current) {
                codeMirrorInstance.current.toTextArea();
                codeMirrorInstance.current = null; // Clear reference
            }
        };
    }, []);

    return (
        <textarea ref={editorRef} style={{ height: '9000px', width: '100%' }}></textarea>
    );
};

export default Editor;


// import React, { useEffect, useRef } from 'react';
// import Codemirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/addon/edit/closetag';
// import 'codemirror/addon/edit/closebrackets';
// import ACTIONS from './Actions';
//
// const Editor = ({ socketRef, roomId, onCodeChange }) => {
//     const editorRef = useRef(null);
//     const codeMirrorInstance = useRef(null);
//
//     useEffect(() => {
//         if (!editorRef.current) return;
//
//         codeMirrorInstance.current = Codemirror.fromTextArea(editorRef.current, {
//             mode: { name: 'javascript', json: true },
//             theme: 'dracula',
//             autoCloseTags: true,
//             autoCloseBrackets: true,
//             lineNumbers: true,
//         });
//
//         codeMirrorInstance.current.on('change', (instance, changes) => {
//             const { origin } = changes;
//             const code = instance.getValue();
//             onCodeChange(code);
//             if (origin !== 'setValue' && socketRef.current) {
//                 socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code });
//             }
//         });
//
//         // Cleanup function
//         return () => {
//             if (codeMirrorInstance.current) {
//                 codeMirrorInstance.current.toTextArea();
//                 codeMirrorInstance.current = null; // Clear reference
//             }
//         };
//     }, [socketRef, roomId, onCodeChange]);
//
//     useEffect(() => {
//         if (!socketRef.current) return;
//
//         const handleCodeChange = ({ code }) => {
//             if (code !== null && codeMirrorInstance.current) {
//                 codeMirrorInstance.current.setValue(code);
//             }
//         };
//
//         socketRef.current.on(ACTIONS.CODE_CHANGE, handleCodeChange);
//
//         // Cleanup function
//         return () => {
//             if (socketRef.current) {
//                 socketRef.current.off(ACTIONS.CODE_CHANGE, handleCodeChange);
//             }
//         };
//     }, [socketRef]);
//
//     return <textarea ref={editorRef} id="realtimeEditor"></textarea>;
// };
//
// export default Editor;


// import React, { useEffect, useRef } from 'react';
// import Codemirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/xml/xml'; // For HTML mode
// import 'codemirror/mode/css/css'; // For CSS mode
// import 'codemirror/addon/edit/closetag';
// import 'codemirror/addon/edit/closebrackets';
// import ACTIONS from './Actions';
//
// const Editor = ({ socketRef, roomId, onCodeChange, mode, value }) => {
//     const editorRef = useRef(null);
//     const codeMirrorInstance = useRef(null);
//
//     useEffect(() => {
//         if (!editorRef.current) return;
//
//         codeMirrorInstance.current = Codemirror.fromTextArea(editorRef.current, {
//             mode: mode,
//             theme: 'dracula',
//             autoCloseTags: true,
//             autoCloseBrackets: true,
//             lineNumbers: true,
//         });
//
//         codeMirrorInstance.current.setValue(value);
//
//         codeMirrorInstance.current.on('change', (instance, changes) => {
//             const { origin } = changes;
//             const code = instance.getValue();
//             onCodeChange(code);
//             if (origin !== 'setValue' && socketRef.current) {
//                 socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code });
//             }
//         });
//
//         // Cleanup function
//         return () => {
//             if (codeMirrorInstance.current) {
//                 codeMirrorInstance.current.toTextArea();
//                 codeMirrorInstance.current = null; // Clear reference
//             }
//         };
//     }, [socketRef, roomId, onCodeChange, mode, value]);
//
//     useEffect(() => {
//         if (!socketRef.current) return;
//
//         const handleCodeChange = ({ code }) => {
//             if (code !== null && codeMirrorInstance.current) {
//                 codeMirrorInstance.current.setValue(code);
//             }
//         };
//
//         socketRef.current.on(ACTIONS.CODE_CHANGE, handleCodeChange);
//
//         // Cleanup function
//         return () => {
//             if (socketRef.current) {
//                 socketRef.current.off(ACTIONS.CODE_CHANGE, handleCodeChange);
//             }
//         };
//     }, [socketRef]);
//
//     return <textarea ref={editorRef} id="realtimeEditor"></textarea>;
// };
//
// export default Editor;
//
//
