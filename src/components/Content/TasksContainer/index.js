import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TaskTicket from '../TaskTicket';
import Classnames from 'classnames';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export default function TasksContainer({
    title,
    colorSchemeClass,
    tasks,
}) {
    return (
        <div className={Classnames([
            'TasksContainer bodyColor',colorSchemeClass
        ])}>
            <Card className={'TasksContainer__Child'}>
                <CardContent>
                    <Typography color="textSecondary" style={{fontSize: '20px', marginBottom: '24px'}}>
                        {title}
                    </Typography>
                        { tasks.map(task => (
                            <TaskTicket
                                colorSchemeClass={colorSchemeClass}
                                title={task.title}
                                totalComments={task.totalComments}
                                totalAttached={task.totalAttached}
                            />
                        ))}
                </CardContent>
                <CardActions style={{
                    justifyContent: 'center'
                }}>
                    <Button
                        className="bodyColor"
                        size="small"
                        endIcon={<ControlPointIcon />}
                        style={{
                            textTransform: 'capitalize',
                            fontSize: '16px',
                            marginBottom: '4px',
                            fontWeight: '400',
                            opacity: '0.8'
                    }}>Add task</Button>
                </CardActions>
            </Card>
        </div>
    );
}