import React from "react";
import { render } from "react-dom";
import "../App.css";

//const apiUrl = "https://api.github.com/users";

const apiUrl = "http://localhost:3000/RSSFeed.xml";

function Events() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then(res => {
        return res.json();
      });
      //console.log(data);
      setItems(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {items.map(item => (
        <div className="card">
          <img src={item.avatar_url} />
          <div className="card-body">{item.login}</div>
        </div>
      ))}
      ;
    </div>
  );
}

render(<Events />, document.getElementById("root"));


export default Events;