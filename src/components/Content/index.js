import { Typography } from '@material-ui/core';
import FloatingIcon from '../FloatingIcon';
import TasksContainer from './TasksContainer';


const Content = () => {
    return (
        <div className="Content">
            <Typography
                style={{
                    textAlign: 'left',
                    fontSize: '28px',
                    marginBottom: '40px'
                }}
            >Tasks</Typography>
            <div className="d-flex">
                <TasksContainer
                    title={'Backlog'}
                    colorSchemeClass={'PinkGradient'}
                    tasks={[
                        {
                            title: 'Company website redesign',
                            totalComments: 2,
                            totalAttached: 1
                        }
                    ]}
                />
                <TasksContainer
                    className={TasksContainer}
                    title={'In Progress'}
                    colorSchemeClass={'OrangeGradient'}
                    tasks={[
                        {
                            title: 'Company website redesign',
                            totalComments: 1,
                            totalAttached: 3
                        }
                    ]}
                />
                <TasksContainer
                    title={'Review'}
                    colorSchemeClass={'BlueGradient'}
                    tasks={[
                        {
                            title: 'Company website redesign',
                            totalComments: 1,
                            totalAttached: 1
                        }
                    ]}
                />
                <TasksContainer
                    title={'Complete'}
                    colorSchemeClass={'GreenGradient'}
                    tasks={[
                        {
                            title: 'Company website redesign',
                            totalComments: 3,
                            totalAttached: 3
                        }
                    ]}
                />
            </div>
            <FloatingIcon />
        </div>
    );
}
 
export default Content;