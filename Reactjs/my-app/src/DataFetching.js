//DataFetching.js
/* This file uses reactjs hook to send a GET request to an base url
User can request an id with a field to get a json response
GET is immediately sent after inputing, but the value is only displayed 
after button press
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Row, Col, Button} from 'react-bootstrap';

export function DataFetching(){
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)
	const handleClick = () => {setIdFromButtonClick(id)}

	useEffect(() => { axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				console.log(res)
				setPost(res.data)
				})
			.catch(err => {
				console.log(err)
				})
	}, [id, idFromButtonClick])

	return (
		<div>
			<Row>
				<Col md={{ span: 4, offset: 4 }} fluid="md">
					<h3>fetch a json from https://jsonplaceholder.typicode.com/posts</h3>
					<input type ="text" value={id} onChange={e => setId(e.target.value)} />
					<Button type ="button" onClick={handleClick}> Fetch Post</Button>
					<div>{post.title}</div>
				</Col>
			</Row>
		</div>
	)
}