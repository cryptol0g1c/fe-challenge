// Module dependencies
import { useState } from 'react';

// UI Components
import { Box, Container, Tabs, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TransationsTab from './transactions-tab';
import AnaliticsTab from './analitics-tab';

// Assets
import { wording } from '../../utils/constants';

const DashboardTabs = () => {
  const [tabValue, setTabValue] = useState('1');

  const { ANALITICS_TAB, TRANSACTION_TAB } = wording;

  const handleTabChange = (_, newTabValue) => {
    setTabValue(newTabValue);
  }

  const tabList = [
    { 
      tabId: '0',
      label: TRANSACTION_TAB,
      component: <TransationsTab />,
    },
    { 
      tabId: '1',
      label: ANALITICS_TAB,
      component: <AnaliticsTab />
    },
  ];

  return (
    <Container>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} mt={4}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="data tabs">
            {
              tabList.map(
                ({ label, tabId }) => <Tab label={label} value={tabId} key={`tabId-${tabId}`} />
              )
            }
          </Tabs>
        </Box>
        {
          tabList.map(
            ({ component, tabId }) => (
              <TabPanel value={tabId} key={`tabPanelId-${tabId}`}>
                {component}
              </TabPanel>
            )
          )
        }
      </TabContext>
    </Container>
  );
};

export default DashboardTabs;
