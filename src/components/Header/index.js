import BrandContainer from '../BrandContainer';
import HeaderContainer from './HeaderContainer';
import AppBar from '@material-ui/core/AppBar';

const Header = () => {
    return (
        <AppBar
            position="fixed"
            className={''}
            style={{
                zIndex: 9999,
                flexDirection: 'row'
            }}
        >
            <BrandContainer />
            <HeaderContainer />
        </AppBar>
    );
}
 
export default Header;