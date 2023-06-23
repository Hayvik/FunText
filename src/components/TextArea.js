import React, { useState, useEffect } from 'react';
import './TextArea.css'
import './Button.css'
import { Box, Stack, Divider } from '@mui/material';
import { CSVLink } from "react-csv";



export default function TextArea(props) {
  const [text, setText] = useState("Enter your text");
  const [count, setCount] = useState();
  const [countW, setCountW] = useState();
  const [topWords, setTopWords] = useState([]);
  // const [wordSpeed, setWordSpeed] = useState(0);
  // const [timeElapsed, setTimeElapsed] = useState(0);
  // const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [csvData, setCSVData] = useState([]);

  const handleDownload = () => {
    const csvData = [
      {
        text: text,
        count: count,
        countW: countW,
        topWords: topWords.join(', '),
      },
    ];

    setCSVData(csvData);
  };

  const csvHeaders = [
    { label: 'Text', key: 'text' },
    { label: 'Word Count', key: 'count' },
    { label: 'Character Count', key: 'countW' },
    { label: 'Top Words', key: 'topWords' },
  ];
  const csvreport ={
    data:csvData,
    header:csvHeaders,
    filename:'textMetadata.csv'
  }
  
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("Upper case clicked: " + text);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log("Lower case clicked: " + text);
  };
  const handleCopy =()=>{
    console.log("copying elements");
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleChange = (event) => {
    console.log("Change occurred: " + event.target.value);
    setText(event.target.value);

    let b = event.target.value.split(" ").length;
    setCount(b);
    let charLen = event.target.value.length;
    setCountW(charLen);
  };

  const handleClearText = () => {
    setText('');
    setTopWords([]);
    // setWordSpeed(0);
    // setTimeElapsed(0);
  };

  // const handleStopTimer = () => {
  //   setIsTimerRunning(false);
  // };

  const topNwords = () => {
    const frequency = countWordsFrequency(text);
    const sortedWords = Object.keys(frequency).sort(
      (a, b) => frequency[b] - frequency[a]
    );
    const top5Words = sortedWords.slice(0, 5);
    setTopWords(top5Words);
  };

  const countWordsFrequency = (text) => {
    const words = text.toLowerCase().split(/\s+/);
    const frequency = {};

    for (const word of words) {
      frequency[word] = (frequency[word] || 0) + 1;
    }

    return frequency;
  };

  // useEffect(() => {
  //   let timer = null;
  //   if (isTimerRunning) {
  //     timer = setInterval(() => {
  //       setTimeElapsed(prevTime => prevTime + 1);
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [isTimerRunning]);

  // useEffect(() => {
  //   const words = text.trim().split(/\s+/);
  //   const count = words.length;
  //   setWordSpeed(count / timeElapsed);
  // }, [text, timeElapsed]);

  return (
    <>
      <Box
        className={props.color}
        sx={{
          backgroundColor: props.color,
          height: '600px',
          width: '100%',
          color: props.color === 'dark' ? '#e8e8e8' : 'black'
        }}
      >
        <div className='container'>
          <h1 className='pt-10px text-slate-500 text-2xl font-extrabold'>Enter your texts.</h1>
          <div className="my-text drop-shadow-lg">
            <textarea
              className="form-control mt-3 hover:shadow-lg"
              id="myBox"
              value={text}
              rows="5"
              onChange={handleChange}
              style={{ backgroundColor: props.color === 'dark' ? '#212121' : '#e8e8e8', color: props.color === 'dark' ? 'white' : 'black' }}
            />
            <Stack
              marginTop='10px'
              marginLeft='5px'
              direction="row"
              divider={<Divider orientation="vertical" flexItem color='black' />}
              spacing={2}>
              <button type="button" className="button" onClick={handleUpperCase}>Upper Case</button>
              <button type="button" className="button" onClick={handleLowerCase}>Lower Case</button>
              <button type="button" className="button" onClick={handleClearText}>Clear Text</button>
              <button type="button" className="button" onClick={topNwords}>Top 5 Words</button>
              <button type="button" className="button" onClick={handleCopy}>Copy Text</button>
              <button onClick={handleDownload} type='button' className='button'>
              <CSVLink {...csvreport}>Download Text as CSV</CSVLink>
              </button>
              
              {/* <button type="button" className="button" onClick={handleStopTimer}>Stop</button> */}
            </Stack>

          </div>
        </div>

        <div className='container'>
          <h1 className='mt-3 text-slate-500 text-2xl font-extrabold'>Summary of Your texts.</h1>
          <p className='mb-2'>You have entered {count} words and {countW} characters</p>
          <span className='mt-3 text-slate-500 text-xl font-bold mt-3'>Preview</span>
          <p>{text}</p>
        </div>

        <div className='container'>
          <ul>
            {topWords.map((word, index) => (
              <li key={index} style={{ fontWeight: '500', fontSize: '18px', textTransform: 'uppercase' }}><b>{word}</b> Appeared {countWordsFrequency(text)[word]}</li>
            ))}
          </ul>
        </div>

        {/* <div className='container'>
          <h1 className='mt-3 text-slate-500 text-2xl font-extrabold'>Word Speed</h1>
          <p>Word Speed: {wordSpeed.toFixed(2)} words/second</p>
        </div> */}
      </Box>
    </>
  );
}
