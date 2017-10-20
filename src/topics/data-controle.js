import ControleHeader from '../diagrams/controle-header.xml';

import DataLock from './data-lock'
import DataRequest from './data-request'
import DataResponse from './data-response'

export default {
  title: 'Controle',
  description: 'This is an example of something, hello Ewa!',
  diagram: ControleHeader,
  width: 600,
  height: 1000,
  children: [
    DataLock,
    DataRequest,
    DataResponse
  ]
}
