import { Typography } from '@material-ui/core';
import TaskStateCard from './TaskStateCard';

const Content = () => {
    return (
        <div style={{
            paddingLeft: '40px',
            paddingRight: '40px',
            minHeight: 'calc(100vh - 60px)',
            minWidth: 'calc(100vw - 120px)',
            boxSizing: 'border-box'
        }}>
            <Typography
                style={{
                    textAlign: 'left'
                }}
            >Tasks</Typography>
            <TaskStateCard />
            <TaskStateCard />
            <TaskStateCard />
            <TaskStateCard />
        </div>
    );
}
 
export default Content;