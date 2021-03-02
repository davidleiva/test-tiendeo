import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const FloatingIcon = () => {
    return (
        <Fab
            classes={{root: 'FloatingIcon'}}
            aria-label="add"
        >
            <AddIcon htmlColor="#ffffff"/>
        </Fab>
    );
}
 
export default FloatingIcon;

