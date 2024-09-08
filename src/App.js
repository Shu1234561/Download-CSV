import "./App.css";
import { CSVLink } from "react-csv";

function App() {
  const playersData = [
    {
      name: "Rohit Sharma",
      age: 34,
      team: "Mumbai Indians",
      email: "ah@smthing.co.com",
    },
    {
      name: "Virat Kohli",
      age: 34,
      team: "Royal Challengers Bangalore",
      email: "ah@smthing.co.com",
    },
    {
      name: "Shreyas Iyer",
      age: 27,
      team: "Kolkata Knight Riders",
      email: "ah@smthing.co.com",
    },
    {
      name: "Sanju Samson",
      age: 27,
      team: "Rajasthan Royals",
      email: "ah@smthing.co.com",
    },
    {
      name: "KL Rahul",
      age: 30,
      team: "Punjab Kings",
      email: "ah@smthing.co.com",
    },
    {
      name: "Rishabh Pant",
      age: 25,
      team: "Delhi Capitals",
      email: "ah@smthing.co.com",
    },
    {
      name: "David Warner",
      age: 36,
      team: "Sunrisers Hyderabad",
      email: "ah@smthing.co.com",
    },
    {
      name: "Faf du Plessis",
      age: 37,
      team: "Chennai Super Kings",
      email: "ah@smthing.co.com",
    },
  ];

  const headers = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Age",
      key: "age",
    },
    {
      label: "Team",
      key: "team",
    },
    {
      label: "Email",
      key: "email",
    },
  ];

  const csvLink = {
    fileName: "file.csv",
    headers: headers,
    data: playersData,
  };

  const handleDownload = () => {
    console.log("You clicked the button");

    // Convert CSV data into a Blob
    const csvData = [
      Object.keys(playersData[0]).join(","),
      ...playersData.map((player) => Object.values(player).join(",")),
    ].join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });

    // Create temporary URL
    const url = window.URL.createObjectURL(blob);

    // Create an anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = "players.csv";

    // Programmatically click the anchor to trigger the download
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hellow World</h2>
        <button
          style={{
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid black",
            cursor: "pointer",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "700",
          }}
          onClick={() => {
            console.log("You clicked the button", csvLink);
            handleDownload();
          }}
          className="Button"
        >
          {/* <CSVLink
            className='Button'
            style={{textDecoration:"none", color:"black", fontSize:"16px", fontWeight:"700"}}
            {...csvLink}
          > */}
          Download CSV
          {/* </CSVLink> */}
        </button>
      </header>
    </div>
  );
}

export default App;
