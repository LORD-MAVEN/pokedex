import "./Sidebar.css";
import { useEffect } from "react";
import handleClicks from "../utility/HandleClicks.js";
function Sidebar({ changeType }) {

  useEffect(() => {
    handleClicks({changeType})
  }, []); 

  return (
    <div className="sidebar">
      <div className="list1">
        <div onClick={() => changeType('all')}>ALL</div>
        <div onClick={() => changeType('normal')}>Normal</div>
        <div onClick={() => changeType('fire')}>Fire</div>
        <div onClick={() => changeType('water')}>Water</div>
        <div onClick={() => changeType('electric')}>Electric</div>
        <div onClick={() => changeType('ice')}>Ice</div>
        <div onClick={() => changeType('grass')}>Grass</div>
        <div onClick={() => changeType('bug')}>Bug</div>
        <div onClick={() => changeType('poison')}>Poison</div>
        <div onClick={() => changeType('fighting')}>Fighting</div>
      </div>
      <div className="list2">
        <div onClick={() => changeType('rock')}>Rock</div>
        <div onClick={() => changeType('steel')}>Steel</div>
        <div onClick={() => changeType('dragon')}>Dragon</div>
        <div onClick={() => changeType('flying')}>Flying</div>
        <div onClick={() => changeType('ground')}>Ground</div>
        <div onClick={() => changeType('ghost')}>Ghost</div>
        <div onClick={() => changeType('psychic')}>Psychic</div>
        <div onClick={() => changeType('dark')}>Dark</div>
        <div onClick={() => changeType('fairy')}>Fairy</div>
      </div>
    </div>
  );
}

export default Sidebar;