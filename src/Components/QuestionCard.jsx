import {
	Card,
	CardBody,
	CardHeader,
	Heading,
	Radio,
	RadioGroup,
	Stack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

const QuestionCard = ({ id, text, options, handleAnswerChange, currValue }) => {
	const [value, setValue] = React.useState(currValue);

	useEffect(() => {
		handleAnswerChange(id, value);
	}, [value]);

	return (
		<Card w={'100%'}>
			<CardHeader>
				<Heading>Que:- {text}</Heading>
			</CardHeader>

			<CardBody>
				<RadioGroup onChange={setValue} value={value}>
					<Stack>
						{options.map((option) => (
							<Radio key={option.id} value={option.text}>
								{option.text}
							</Radio>
						))}
					</Stack>
				</RadioGroup>
			</CardBody>
		</Card>
	);
};

export default QuestionCard;
