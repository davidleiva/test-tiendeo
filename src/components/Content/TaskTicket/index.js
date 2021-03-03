import Card from '@material-ui/core/Card';
import PriorityBadge from '../../PriorityBadge';
import { Avatar } from '@material-ui/core';

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
            <p style={{
                marginBottom: '18px'
            }}>{title}</p>
            <div className="d-flex" style={{
                justifyContent: 'space-between'
            }}>
                <div><span>{totalComments}</span> * <span>{totalAttached}</span></div>
                <Avatar style={{ width: '30px', height: '30px'}} className={colorSchemeClass}/>
            </div>
        </Card>
    );
}
 
export default TaskTicket;