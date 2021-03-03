import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const SearchInput = () => {
    return (
        <div className="SearchInput c-white no-border" style={{paddingLeft: '40px'}}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SearchIcon />
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        label="Search for tasks..."
                    />
                </Grid>
            </Grid>
        </div>
    );
}
 
export default SearchInput;