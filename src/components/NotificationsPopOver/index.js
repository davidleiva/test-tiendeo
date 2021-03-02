import { Button } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const NotificationsPopOver = () => {
    return (
        <div
            className="NotificationsPopOver"
            style={{
                display: 'flex',
                borderLeft: '1px solid rgba(255,255,255,0.5)',
                cursor: 'pointer'
            }}
        >
            <Button style={{ color: 'white'}}><NotificationsNoneIcon /></Button>
        </div>
    );
}
 
export default NotificationsPopOver;