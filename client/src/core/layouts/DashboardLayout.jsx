import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import MusicPlayer from '../../modules/dashboard/submodules/player/components/musicPlayer/musicPlayer';
import { MusicPlayerProvider } from '../../modules/dashboard/submodules/playlists/services/store/player';
import { Sidebar } from '../../modules/dashboard/components/Sidebar';
import { SidebarMobile } from '../../modules/dashboard/components/SidebarMobile';
import { TabBar } from '../../modules/dashboard/components/TabBar';
import { useState } from 'react';
import { SearchProvider } from '../../modules/dashboard/submodules/search/pages/store/search';
import { MyPlaylistProvider } from '../../modules/dashboard/submodules/playlists/services/store/my-playlists';

const drawerWidth = 240;
const drawerWidthMobile = '100vw';

const DashboardLayout = () => {
  const [stateDrawer, setStateDrawer] = useState(false);

  const openDrawer = () => {
    setStateDrawer(true);
  };

  const closeDrawer = () => {
    setStateDrawer(false);
  };

  return (
    <MusicPlayerProvider>
      <MyPlaylistProvider>
        <SearchProvider>
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                zIndex: '1',
                width: `100vw`,
              }}
            >
              <Sidebar drawerWidth={drawerWidth} />
              <SidebarMobile
                drawerWidth={drawerWidthMobile}
                stateDrawer={stateDrawer}
                closeDrawer={closeDrawer}
              />

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  bgcolor: 'background.default',
                  p: 2,
                  width: { xs: '100%', md: `100% - ${drawerWidth}px` },
                  marginBottom: { xs: '168px', md: '134px' },
                }}
              >
                <Outlet />
              </Box>
            </Box>
            <Box sx={{ zIndex: '20', bgcolor: 'background.default' }}>
              <MusicPlayer trackId={3135556} />
              <TabBar
                stateDrawer={stateDrawer}
                openDrawer={openDrawer}
                closeDrawer={closeDrawer}
              />
            </Box>
          </Box>
        </SearchProvider>
      </MyPlaylistProvider>
    </MusicPlayerProvider>
  );
};

export default DashboardLayout;
