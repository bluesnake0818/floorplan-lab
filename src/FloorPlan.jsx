import './App.css';
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
import Sink from "./Sink";
import Oven from "./Oven";

const FloorPlan = () => {
  return ( 
    <div id='floor-plan'>
      {<Bedroom bedNum='1'/>}
      {<LivingRoom />}
      {<Oven />}
      {<Sink />}
      {<Bath size='Full' />}
      {<Bedroom bedNum='2'/>}
      {<Bath size='Half' />}
      {<Kitchen />}
      {<Bedroom bedNum='3' />}
    </div>
  );
}
 
export default FloorPlan;
