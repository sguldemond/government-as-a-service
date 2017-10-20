import ChatHeader from '../diagrams/chat-header.xml';

import ChatBubble1 from './chat-bubble1'
import ChatBubble2 from './chat-bubble2'
import ChatBubble3 from './chat-bubble3'
import ChatBubble4 from './chat-bubble4'
import ChatBubble5 from './chat-bubble5'
import ChatWriteBubble from './chat-write-bubble'

export default {
  title: 'AI chat bot',
  description: 'This is an example of something, hello Ewa!',
  diagram: ChatHeader,
  width: 500,
  height: 600,
  children: [
    ChatBubble1,
    ChatBubble2,
    ChatBubble3,
    ChatBubble4,
    ChatBubble5,
    ChatWriteBubble
  ]
}
