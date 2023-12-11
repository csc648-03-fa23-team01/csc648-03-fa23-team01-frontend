import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); // simple shadow for depth
`;

const MessageContent = styled.p`
  font-size: 14px;
  color: #333;
`;

const RecipientName = styled.h3`
  margin: 0;
  color: #555;
  font-size: 16px;
  text-align: left; // Align text to the left
`;


const MessageCard = ({ content, recipient_first_name, recipient_last_name }) => {
  return (
    <CardWrapper>
      <RecipientName>{recipient_first_name} {recipient_last_name}</RecipientName>
      <MessageContent>{content}</MessageContent>
    </CardWrapper>
  );
};

export default MessageCard;
