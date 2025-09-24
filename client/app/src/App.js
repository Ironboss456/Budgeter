import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";

const App = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }

  };
  return (
    <body>
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
				<div style={{ marginTop: 20 }}>
					<p>Selected File: {fileName}</p>
				</div>
			)}
    </body>
  );
}

export default App;
