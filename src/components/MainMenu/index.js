import Drawer from '@material-ui/core/Drawer';
import MainMenuItem from './MainMenuItem';
import {$headerHeightDesktop} from '../styles/vars';

import GroupIcon from '@material-ui/icons/Group';
import DnsIcon from '@material-ui/icons/Dns';
import EventNoteIcon from '@material-ui/icons/EventNote';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import SettingsIcon from '@material-ui/icons/Settings';

const MainMenu = () => {
    const toggleDrawer = () => console.log('toggle');

    return (
        <Drawer 
            className="MainMenu__Drawer"
            variant='permanent'
            anchor={'left'} 
            open={true} 
            onClose={toggleDrawer()}
            classes={{
                drawer: {
                    width: '120px',
                    flexShrink: 0,
                },
                drawerPaper: {
                    width: '120px',
                },
                drawerContainer: {
                    overflow: 'auto',
                },
                content: {
                    flexGrow: 1,
                  },
            }}
            style={{
                width: '120px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div
                className="MainMenu__Container"
                style={{
                    width: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100% - 60px)',
                    position: 'relative',
                    top: '60px',
                }}
            >
                <MainMenuItem
                    icon={
                        <GroupIcon />
                    }
                    labelText={'Manage'}
                />
                <MainMenuItem
                    active={true}
                    icon={
                        <DnsIcon />
                    }
                    labelText={'Tasks'}
                />
                <MainMenuItem
                    icon={
                        <EventNoteIcon />
                    }
                    labelText={'Schedule'}
                />
                <MainMenuItem
                    icon={
                        <InsertChartIcon />
                    }
                    labelText={'Reports'}
                />
                <MainMenuItem
                    icon={
                        <SettingsIcon />
                    }
                    labelText={'Settings'}
                    style={{
                        marginTop: 'auto'
                    }}
                />
            </div>
            <svg style={{
                width: '0',
                height: '0',
                position: 'absolute',
            }} aria-hidden="true" focusable="false">
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9ea7fc" />
                    <stop offset="100%" stopColor="#6db3f7"  />
                </linearGradient>
            </svg>
        </Drawer>
    );
}
 
export default MainMenu;