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
  const [tabValue, setTabValue] = useState('0');

  const { ANALITICS_TAB, ARIA_LABEL_TABS, TRANSACTION_TAB } = wording;

  const handleTabChange = (_, newTabValue) => {
    setTabValue(newTabValue);
  };

  const tabList = [
    { 
      tabId: '0',
      label: ANALITICS_TAB,
      component: <AnaliticsTab />
    },
    { 
      tabId: '1',
      label: TRANSACTION_TAB,
      component: <TransationsTab />,
    },
  ];

  return (
    <Container>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} mt={4} mb={3}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label={ARIA_LABEL_TABS}>
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
