import { Button, Badge } from '@material-ui/core';
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
            <Button style={{ color: 'white'}}>
                <Badge color="secondary" variant="dot">
                    <NotificationsNoneIcon />
                </Badge>
            </Button>
        </div>
    );
}
 
export default NotificationsPopOver;