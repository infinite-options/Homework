import logo from './logo.svg';
import './App.css';
import { configureAbly, useChannel } from "@ably-labs/react-hooks";
// import Ably from "ably/promises";
import Ably from "ably/callbacks"

import { useState,useEffect } from "react"


function App() {
  // configureAbly({ key: "g-DZyg.SmBPzA:-WgGW3NF95e3vR9n9cR3QykLwVEGWPyV_q1ObCR55VI" });
  const ably_api_key = "g-DZyg.SmBPzA:-WgGW3NF95e3vR9n9cR3QykLwVEGWPyV_q1ObCR55VI"
  //Ably returns Ably object which is unique to this instance.
  const ably = new Ably.Realtime(ably_api_key)
  const [messagepassed, setmessagepassed] = useState("")
  const [Disply, setDisply] = useState("")
  //Ably returns a channel specific to Ably object instance 
  const channel = ably.channels.get(`publishMessage`)
  async function finalScoresButton() {
    //publish over Ably using this syntax :  channel.publish({data: {<var_name>: <message to pass>}});
    channel.publish({data: {te: messagepassed}});
    console.log(channel)
  }
  async function handleChange(event) {
    setmessagepassed(event.target.value)
  }
  useEffect(() => {
    channel.subscribe(async event => {
      setDisply(event.data.te)
      console.log(event.data)
    })
  })
  return (
    <div>
        <div>
          <br/>
          {Disply}
        </div>
      <input type="text" onChange={handleChange} name="Message" placeholder="Message to publish" /> 
      <br></br>

      <br></br>
        <button onClick={finalScoresButton}>
            publish message
      </button>
    </div>
  );
}

export default App;
