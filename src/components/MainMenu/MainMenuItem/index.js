import { Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
import './styles.css';

const MainMenuItem = ({labelText, icon, active, style}) => {
    return (
        <div
            style={{
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }}
            className={classNames({
                'MainMenuItem--Active': active
            })}
        >   
            { icon }
            <Button>
                <Typography style={{textTransform: "capitalize"}}>{labelText}</Typography>
            </Button>
        </div>
    );
}
 
export default MainMenuItem;