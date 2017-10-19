import React, { Component, PropTypes } from 'react/addons';
import Diagram from './Diagram';
import Topic from './Topic';
import styles from './App.scss';

export default class App extends Component {

  constructor(props) {
    super(props);

    var topicState = {};
    const addTopicTitlesToTopicObj = (topic) => {
      topicState[topic.title] = {
        highlighted: false,
        collapsed: true
      }
    };

    const walkTopicTree = (topic) => {
      addTopicTitlesToTopicObj(topic);
      if (topic.children) {
        topic.children.map(walkTopicTree);
      }
    }

    for (let topic of props.topics) {
      walkTopicTree(topic);
    }

    this.state = {
      topics: topicState
    };

    this.topicUnderMouseChanged = this.topicUnderMouseChanged.bind(this);
    this.topicClicked = this.topicClicked.bind(this);
  }

  topicUnderMouseChanged(topicTitle, isUnderMouse) {
    const nextState = React.addons.update(this.state, {
      topics: {
        [topicTitle]: {
          highlighted: { $set: isUnderMouse }
        }
      }
    });
    this.setState(nextState);
  };

  topicClicked(topicTitle) {
    const collapsed = this.state.topics[topicTitle].collapsed;
    const nextState = React.addons.update(this.state, {
      topics: {
        [topicTitle]: {
          collapsed: { $set: !collapsed }
        }
      }
    });
    this.setState(nextState);
  }

  render() {

    const { topics } = this.props;
    const topicState = this.state.topics;

    const makeDiagram = (topic) => {
      return (
        <svg key={topic.title} width={topic.width} height={topic.height} viewBox={`0 0 ${topic.width} ${topic.height}`}>
          <Diagram topic={topic} />
        </svg>
      );
    }

    const makeTopic = (topic) => {
      return <Topic topic={topic} key={topic.title} />;
    }

    const injectHighlightAndCallback = (topic) => {
      return Object.assign(
        topic,
        { highlighted: topicState[topic.title].highlighted },
        { collapsed: topicState[topic.title].collapsed },
        { underMouseChanged: this.topicUnderMouseChanged },
        { topicClicked: this.topicClicked },
        { children: topic.children ? topic.children.map(injectHighlightAndCallback) : topic.children }
      );
    };

    const topicsWithExtras = topics.map(injectHighlightAndCallback);

    return (
      <div className={styles.root}>
        <div className={styles.diagram}>
          { topicsWithExtras.map(makeDiagram) }
        </div>
        <ul className={styles.glossary}>
          <div className={styles.intro}>
            <h1>Open data van de overheid als dienst</h1>
            <p><i>“De overheid beschikt over veel algemene, openbare informatie. Deze data worden goed vindbaar en toegankelijk gemaakt, in de vorm van open data.”</i></p>
            <p>Door deze regel uit het regeerakkoord 2017 - 2021 ben ik gaan nadenken over een manier om open data van de overheid zo toegankelijk mogelijk te maken. Door middel van deze pagina ligt ik mijn inzichten graag toe.</p>
          </div>
          { topicsWithExtras.map(makeTopic) }
        </ul>
        <div className={styles.credit}>Gemaakt door <a href="https://www.linkedin.com/in/stan-guldemond-56291b120/">Stan Guldemond</a> als onderdeel van mijn minor <a href="http://futuremedialab.nl/">Future Media Lab</a></div>
      </div>
    );
  }
}

App.propTypes = {
  topics: PropTypes.array.isRequired
}
