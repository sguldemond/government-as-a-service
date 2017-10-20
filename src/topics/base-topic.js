import ChatBot from './chat-bot'
import Timeline from './timeline'
import Controle from './data-controle'

export default {
  title: 'Hoe werkt deze website?',
  description: 'Door op de verschillende koppen hieronder de klikken wordt het concept verder toegelicht door middel van tekst en voorbeeld.',
  width: 800,
  height: 600,
  children: [
    ChatBot,
    Timeline,
    Controle
  ]
}
