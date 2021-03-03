import Card from '@material-ui/core/Card';
import PriorityBadge from '../../PriorityBadge';
import { Avatar } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const TaskTicket = ({
    title,
    totalComments,
    totalAttached,
    colorSchemeClass
}) => {
    return (
        <Card style={{
            padding: '10px'
        }}> 
            <PriorityBadge
                colorSchemeClass={colorSchemeClass}
                text="Priority"
            />
            <p className="bodyColor" style={{
                marginBottom: '18px'
            }}>{title}</p>
            <div className="d-flex" style={{
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div
                    className="bodyColor d-flex"
                    style={{
                        opacity: '0.6',
                        fontSize: '15px',
                        alignItems: 'center'
                    }}
                >
                    <span style={{
                        marginRight: '18px',
                        display: 'flex',
                        alignItems: 'center'
                    }}><CommentIcon style={{
                        fontSize: '14px',
                        marginRight: '8px',
                        opacity: '0.8',
                    }}
                    /><span>{totalComments}</span></span>
                    <span style={{
                        marginRight: '18px',
                        display: 'flex',
                        alignItems: 'center'
                    }}><AttachFileIcon style={{
                        fontSize: '14px',
                        marginRight: '8px',
                        opacity: '0.8',
                        transform: 'rotate(45deg)',
                    }}
                    /><span>{totalAttached}</span></span></div>
                <Avatar style={{ width: '30px', height: '30px'}} className={colorSchemeClass}/>
            </div>
        </Card>
    );
}
 
export default TaskTicket;