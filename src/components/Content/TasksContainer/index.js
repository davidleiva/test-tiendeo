import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TaskTicket from '../TaskTicket';
import { TableSortLabel } from '@material-ui/core';
  
export default function TasksContainer({
    title,
    colorSchemeClass,
    tasks,
    className
}) {
    return (
        <Card className={'TasksContainer'}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {title}
            </Typography>
                { tasks.map(task => (
                    <TaskTicket
                        title={task.title}
                        totalComments={task.totalComments}
                        totalAttached={task.totalAttached}
                    />
                ))}
            </CardContent>
            <CardActions>
                <Button size="small">Add task</Button>
            </CardActions>
        </Card>
    );
}