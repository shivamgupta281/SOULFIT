import React from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Tablayout = () => {
  return (
<Paper>
        <Tabs
          value = {1}  
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {diet_types.map(group =>
          <Tab label={group} />
        )}  
        </Tabs>
      </Paper>
  )
}

export default Tablayout;