import TimelineHeader from '../diagrams/timeline-header.xml';

import TimelineBubble from './timeline-bubble'

export default {
  title: 'Timeline',
  description: 'Een andere mogelijke implementatie is een timeline. Hier wordt de gebruiker op de hoogte gesteld van rechten en plichten.',
  diagram: TimelineHeader,
  width: 600,
  height: 500,
  children: [
    TimelineBubble
  ]
}
