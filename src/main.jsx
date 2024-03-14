import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import { useState } from "react";
// import Description from "./components/Description/Description";
// import Options from "./components/Options/Options";
// import Feedback from "./components/Feedback/Feedback";
// import "./App.css";

// // const feedbackType = { good: 0, neutral: 0, bad: 0 };

// function App() {
//   const updateFeedback = (feedbackType) => {
//     console.log("feedbackType: ", feedbackType);
//   };

//   return (
//     <div>
//       <Description />
//       <Options updateFeedback={updateFeedback} />
//       <Feedback />
//     </div>
//   );
// }

// export default App;
