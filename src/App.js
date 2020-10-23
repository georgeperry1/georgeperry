import React from 'react';

import { AppBody, Section, List, TechItem, ListItem, Social, Copyright } from './App.styled';
import Emoji from './components/Emoji';
import Text from './components/Text';
import Icon from './components/Icon';

const App = () => {
  return (
    <AppBody>
      <Section>
        <Text>Hello, I'm George <Emoji emoji="👋" label="waving hand"/> </Text>
      </Section>

      <Section>
        <Text>I design and build great tech products <Emoji emoji="🛠️" label="hammer and wrench"/></Text>
        <Text>I specialise in JavaScript but I'll work with any tools or technology <Emoji emoji="🧰" label="toolbox"/></Text>
      </Section>

      <Section>
        <Text>Here's my ideal stack:</Text>
        <List>
          <TechItem>
            JavaScript/TypeScript <Icon src="./assets/javascript.png" alt="javascript"/> <Icon src="./assets/typescript.png" alt="typescript"/>
          </TechItem>
          <TechItem>
            React <Icon src="./assets/react.png" alt="react"/>
          </TechItem>
          <TechItem>
            GraphQL <Icon src="./assets/graphql.png" alt="graphql"/>
          </TechItem>
          <TechItem>
            Node.js <Icon src="./assets/nodejs.png" alt="nodejs"/>
          </TechItem>
          <TechItem>
            SQL/PostgreSQL <Icon src="./assets/postgresql.png" alt="postgresql"/>
          </TechItem>
        </List>
      </Section>

      <Section>
        <Text>Here's some of my writing: </Text>
        <List>
          <ListItem href="https://medium.com/trackstack/simple-audio-waveform-with-wavesurfer-js-and-react-ae6c0653b240" target="_blank">
            Simple audio waveform with Wavesurfer.js and React <Emoji emoji="🌊" label="water wave"/>
          </ListItem>
          <ListItem href="https://medium.com/trackstack/deploying-a-react-app-to-aws-s3-with-github-actions-b1cb9ba75c95" target="_blank">
            Deploying a React app to AWS S3 with Github Actions <Emoji emoji="🎬" label="clapper board"/>
          </ListItem>
          <ListItem href="https://medium.com/@GeorgePerry/finding-intent-to-buy-from-instagram-comments-with-tensorflow-js-3f764c132be7" target="_blank">
            Building a simple text classification neural network in TensorFlow.js <Emoji emoji="🕸️" label="spider web"/>
          </ListItem>
          <ListItem href="https://medium.com/@GeorgePerry/who-will-win-the-voice-war-a19510b4965b" target="_blank">
            Who will win the Voice War? <Emoji emoji="🎤" label="microphone"/>
          </ListItem>
          <ListItem href="https://chatbotnewsdaily.com/how-we-changed-our-recruitment-process-using-a-chatbot-b030b9820c1d" target="_blank">
            How we changed our recruitment process using a Chatbot <Emoji emoji="🤖" label="robot"/>
          </ListItem>
        </List>
      </Section>

      <Section>
        <TechItem>
          hello@georgeperry.info 
          <Social href="https://github.com/georgeperry1" target="_blank"><Icon src="./assets/github.png" alt="github"/></Social>
          <Social href="https://www.linkedin.com/in/george-perry-developer/" target="_blank"><Icon src="./assets/linkedin.png" alt="linkedin"/></Social>
        </TechItem>
      </Section>

      <Section>
        <Copyright>©️ 2020 George Perry</Copyright>
      </Section>
    </AppBody>
  );
}

export default App;
