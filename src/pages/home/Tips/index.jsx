import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="投喂" />
        <Tab label="疾病" />
        <Tab label="绝育" />
        <Tab label="撸猫" />
        <Tab label="冷知识" />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
    <li>猫餐具最好选择能够让猫咪用一辈子的餐具。</li>
    <li>猫粮一定要选择适合自家猫猫年龄的猫饲料。</li>
    <li>猫厕所和猫砂 猫砂要有比较好的吸水性。</li>
    <li>猫每天喂几次，每次喂多少，每个养猫者都应该明确。</li>
    <li>猫喜欢安静的环境，不喜欢在嘈杂和有强光的地方进食。</li>
    <li>不能喂太过于油腻和杂的食物，你适合的它不一定合适。</li>
    </TabPanel>
    </div>
  );
}