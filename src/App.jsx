import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import QuestionCard from './Components/QuestionCard';

const data = [
	{
		id: 1,
		text: 'What is React?',
		options: [
			{ id: 1, text: 'A front-end framework', correct: true },
			{ id: 2, text: 'A back-end framework', correct: false },
			{ id: 3, text: 'A full-stack framework', correct: false },
			{ id: 4, text: 'A database', correct: false },
		],
	},
	{
		id: 2,
		text: 'What is a component?',
		options: [
			{ id: 5, text: 'A function', correct: false },
			{ id: 6, text: 'A class', correct: false },
			{ id: 7, text: 'A variable', correct: false },
			{ id: 8, text: 'A reusable piece of code', correct: true },
		],
	},
	{
		id: 3,
		text: 'What is a prop?',
		options: [
			{ id: 9, text: 'A function', correct: false },
			{ id: 10, text: 'A class', correct: false },
			{ id: 11, text: 'A variable', correct: false },
			{ id: 12, text: 'A property', correct: true },
		],
	},
];

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleAnswerChange = (questionId, answer) => {
		console.log(answers);
		const newAnswers = answers;
		const answerIndex = newAnswers.findIndex(
			(a) => a.questionId === questionId
		);
		if (answerIndex > -1) {
			newAnswers[answerIndex] = { questionId, answer };
		} else {
			newAnswers.push({ questionId, answer });
		}
		setAnswers(newAnswers);
	};

	function handleClose() {
		setAnswers([]);
		onClose();
	}

	return (
		<>
			<Navbar onOpen={onOpen} />
			<Container maxW="1280px">
				<Flex justifyContent="center" alignItems={'center'} mt="5rem">
					<QuestionCard
						key={data[currentQuestion].id}
						{...data[currentQuestion]}
						handleAnswerChange={handleAnswerChange}
						currValue={
							answers.find((a) => a.questionId == data[currentQuestion].id)
								?.answer || ''
						}
					/>
				</Flex>

				<Box mt={'2rem'}>
					<ButtonGroup>
						{currentQuestion > 0 && (
							<Button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
								Previous
							</Button>
						)}
						{currentQuestion < data.length - 1 && (
							<Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
								Next
							</Button>
						)}
					</ButtonGroup>
				</Box>
			</Container>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							{
								answers.filter((a) => {
									const question = data.find((q) => q.id === a.questionId);
									const option = question.options.find(
										(o) => o.text === a.answer
									);
									return option?.correct;
								}).length
							}{' '}
							/{data.length}
						</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={handleClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default App;
