import { Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Navbar = ({ onOpen }) => {
	return (
		<Flex
			justifyContent={'space-between'}
			p={'1rem'}
			bgColor={'blue.500'}
			textColor={'white'}
		>
			<Heading>Quiz App</Heading>
			<Button bgColor={'blue.600'} onClick={onOpen}>
				Submit Quiz
			</Button>
		</Flex>
	);
};

export default Navbar;
