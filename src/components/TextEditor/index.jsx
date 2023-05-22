import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";

const TextEditor = () => {

  return (
    <div className="bg-[#f9f8fa] min-h-screen pb-16">
        <Editor
          toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto !border-0 !border-b-2 !border-[#ccc] shadow-md"
          editorClassName="mt-6 bg-white p-5 shadow-lg min-h-[1300px] max-w-5xl mx-auto mb-12 border-2 rounded-sm border-gray-300"
          editorStyle={{ minHeight: "1300px" }}
        />
    </div >
  );
};

export default TextEditor;
