import { Typography, Avatar } from '@material-ui/core';

const UserPopOver = () => {
    return (
        <div
            className="UserPopOver"
            style={{
                display: 'flex',
                alignItems: 'center',
                borderLeft: '1px solid rgba(255,255,255,0.5)',
                paddingLeft: '24px',
                paddingRight: '40px',
                cursor: 'pointer'
            }}    
        >
            <Typography
                style={{
                    marginRight: '24px'
                }}>M. Thompson</Typography>
            <Avatar />
        </div>
    );
}
 
export default UserPopOver;