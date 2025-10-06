import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";
import Papa from 'papaparse';

const App = () => {
  const [fileName, setFileName] = useState("");
  const [csvData, setCsvData] = useState([]);
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      const file = event.target.files[0];
      setCsvFile(file);

      if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setCsvData(results.data);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
        }
      });
    }
    }

  };
  return (
    <body class="parent">
      <input
				type="file"
				accept=".csv"
				style={{ display: "none" }}
				id="contained-button-file"
				onChange={handleFileChange}
			/>
      <div>
        <label htmlFor="contained-button-file">
          <Button id="Upload" variant="contained" component="span">Upload</Button>
        </label>
        <h1 id="Title">Budgeter</h1>  
      </div>
      {fileName && (
				<div id="Confirmation">
					<p>Selected File: {fileName}</p>
				</div>
			)}
      <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {/* Render the preview here */}
      </div>
    </body>
  );
}

export default App;
