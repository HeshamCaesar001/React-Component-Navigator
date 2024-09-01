import Button from "../components/Button";
import {GoBell,GoCloudOffline,GoCalendar} from 'react-icons/go'

function ButtonPage() {
  const handleClick = ()=>{
    console.log("clicked");
  }
  const handleMouse = ()=>{
    console.log("mouse over");
  }
  return (
    <div>
      <div>
        <Button  onClick={handleClick}  primary rounded  ><GoBell /> Primary </Button>
      </div>
      <hr />
      <div>
        <Button onMouseOver={handleMouse} secondary  > <GoCloudOffline /> Secondary</Button>
      </div>
      <div>
        <Button success  ><GoCalendar /> Success</Button>
      </div>
      <div>
        <Button danger  >Danger</Button>
      </div>
      <div>
        <Button rounded>Primary</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
