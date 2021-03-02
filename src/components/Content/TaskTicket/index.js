import Card from '@material-ui/core/Card';

const TaskTicket = ({
    title,
    totalComments,
    totalAttached
}) => {
    return (
        <Card>
            <p>{title}</p>
            <p><span>{totalComments}</span> * <span>{totalAttached}</span></p>
        </Card>
    );
}
 
export default TaskTicket;