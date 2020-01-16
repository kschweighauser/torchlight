import React from "react";
import "../App.css";

const apiUrl = "https://api.github.com/users";
//https://stackblitz.com/edit/react-fetch-usestate-and-useeffect-exampe?file=style.css
//https://www.techiediaries.com/javascript-fetch-tutorial-and-example/
//const apiUrl = "http://localhost:3000/RSSFeed.xml";

function Events() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then(res => {
        return res.json();
      });
      //console.log(data);
      setItems(data);
      //console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App container">
      {items.map(item => (
        <div key={item.id} className="card">
          <img src={item.avatar_url} alt={item.login} />
          <div className="card-body">{item.login}</div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Events;