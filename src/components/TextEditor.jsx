import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
const TextEditor = () => {
	const [data, setData] = useState("");
	//check for Navigation Timing API support

	const [otherinfo, setOtherInfo] = useState("");

	const handleData = () => {
		setOtherInfo(data);
	};

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ font: [] }],
			[{ size: [] }],
			["bold", "italic", "underline", "strike", "blockqute"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
		],
	};

	useEffect(() => {}, [data]);
	return (
		<Container className="py-3">
			<div className="h3 text-center my-5">
				<ReactQuill
					theme="snow"
					value={data}
					onChange={setData}
					className="editor-input"
					modules={modules}
				/>

				<div className="" dangerouslySetInnerHTML={{ __html: otherinfo }}></div>
			</div>
			<Button onClick={handleData}>Press me!</Button>
		</Container>
	);
};

export default TextEditor;
