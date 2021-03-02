import { Button, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import { $sideBarWidthDesktop, $headerHeightDesktop } from '../styles/vars';

const BrandContainer = () => {

    return (
        <div
            className="BrandContainer"
            style={{
                width: $sideBarWidthDesktop,
                height: $headerHeightDesktop,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Hidden smUp>
                <Button ><MenuIcon /></Button>
            </Hidden>
            <Typography variant="h6" component="h1">TaskSky</Typography>
        </div>
    );
}
 
export default BrandContainer;