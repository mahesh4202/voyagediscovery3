import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example" className="container my-3">
            <Tab label="Amazing Views" {...a11yProps(0)} />
            <Tab label="Historical Places" {...a11yProps(1)} />
            <Tab label="Adventure Trips" {...a11yProps(2)} />
            <Tab label="Lakefront" {...a11yProps(3)} />
            <Tab label="Castles" {...a11yProps(4)} />
            <Tab label="Play" {...a11yProps(5)} />
            <Tab label="Hotels" {...a11yProps(6)} />
            <Tab label="Luxe" {...a11yProps(7)} />
            <Tab label="Treehouses" {...a11yProps(8)} />
            <Tab label="Boats" {...a11yProps(9)} />
            <Tab label="Cabins" {...a11yProps(10)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Card1 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Card2 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Card3 />
      </CustomTabPanel>
    </Box>
  );
}
