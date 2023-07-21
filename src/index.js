import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify';    /* named import should be! https://github.com/aws-amplify/amplify-js/issues/10827 (fp)*/
import "@aws-amplify/ui-react/styles.css";
import {ThemeProvider} from "@aws-amplify/ui-react"; /* modified from AmplifyProvider as written in: https://github.com/aws-amplify/amplify-js/issues/11190 (fp) */
import awsconfig from './aws-exports';
import {
    ActionCard,
    ActionCardCollection,
    NewForm1,
    HomeUpdateForm,
    studioTheme
} from './ui-components';
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <App />
        <NewForm1 />
        <ActionCard />
        <HomeUpdateForm Home={{id: '6b5aaf93-4100-4b0d-8896-e2d924dd739d',
                            address: 'Guckler Károly út',
                            image_url: 'https://old.margitos.hu/fenykepek/2021/2021_0529_Csaladi_kirandulas/_small/P5299103.JPG',
                            price: '26,1'}} />
        <ActionCardCollection />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
