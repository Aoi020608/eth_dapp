import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Heading, Box, Form, Flex, Field, Input, Textarea, Button, Image, Card} from 'rimble-ui';

import { uploadImage } from '../actions/imageAction.js';

import Home3 from '../img/Home3.jpg';

const ForCreator = () => {

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tags, setTags] = useState("");
	const [file, setFile] = useState(null);
	const [buffer, setBuffer] = useState(null);

	const history = useHistory();

	const dispatch = useDispatch();

	const captureFileHandler = (event) => {
		const fileImage = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(fileImage);
		reader.onloaded = () => 
			setBuffer(Buffer(reader.result));
			setFile(window.URL.createObjectURL(fileImage));
	}

	const submitHandler = async(event) => {
		event.preventDefault();
		try {
			await dispatch(uploadImage(buffer, title, description, tags, history));
			console.log("success");
		} catch {
			console.log("error");
		}
	}

	return(
		<Box p={4}>
			<Box >
				<Heading as={"h1"} color="white">Share your works</Heading>
				<Form onSubmit={submitHandler} fontSize={10}>
					<Flex mx={-3} flexWrap={"wrap"}>
						<Box width={[1, 1, 1]} px={3}>
							<Field label="Title" color="White" width={1} >
								<Input 
									type="text"
									required	
									width={1}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</Field>
						</Box>
						<Box width={[1, 1, 1]} px={3}>
							<Field label="Description" color="White" width={1}>
								<Textarea 
									placeholder="Type something" 
									row={4} 
									width={1}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</Field>
						</Box>
						<Box width={[1, 1, 1]} px={3}>
							<Field label="Tags" color="White" width={1}>
								<Input 
									type="text"
									required
									width={1}
									onChange={(e) => setTags(e.target.value)}
								/>
							</Field>
						</Box>
						<Box width={[1, 1, 1]} px={3}>
							<Field label="Image" color="White" width={1}>
								<Input
									type="file"
									required
									width={3}
									onChange={captureFileHandler}
								/>
							</Field>
						</Box>
					</Flex>
					<Box mx={"auto"} my={2} p={0}>
						<Flex>
							<Box width={1/2} >
								<Button type="submit">Upload</Button>
							</Box>
							<Box >
								<Button type="reset">Cancel</Button>
							</Box>
						</Flex>	
					</Box>
				</Form>
				{file && (
					<Card width={"10rem"} mx={"auto"} my={5} p={0} >
						<Image src={file} alt="file" borderRadius={8}  />
					</Card>
				)}
			</Box>
		</Box>
	);

}

export default ForCreator;
