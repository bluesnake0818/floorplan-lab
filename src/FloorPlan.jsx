import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = () => {
  return ( 
    <div>
      {<Bedroom bedNum='1'/>}
      {<Kitchen />}
      {<Bath size='Full' />}
      {<Bedroom bedNum='2'/>}
      {<LivingRoom />}
      {<Bath size='Half' />}
      {<Bedroom bedNum='3' />}
    </div>
  );
}
 
export default FloorPlan;
