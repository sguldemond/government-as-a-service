import ControleHeader from '../diagrams/controle-header.xml';

import DataLock from './data-lock'
import DataRequest from './data-request'
import DataResponse from './data-response'

export default {
  title: 'Controle',
  description: 'Controle op de persoonlijke gegevens is een belangrijk aspect bij het vertrouwen in een systeem. Het moet zeer eenvoudig zijn om aan te geven welke gegevens de gebruiker wel en niet wilt delen.',
  diagram: ControleHeader,
  width: 600,
  height: 1000,
  children: [
    DataLock,
    DataRequest,
    DataResponse
  ]
}
