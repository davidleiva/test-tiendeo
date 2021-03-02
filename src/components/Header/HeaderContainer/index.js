import SearchInput from '../../SearchInput';
import NotificationsPopOver from '../../NotificationsPopOver';
import UserPopOver from '../../UserPopOver';
import { $purpleCyanGradient } from '../../styles/vars';

const HeaderContainer = () => {
    return (
        <div
            style={{
                display: 'flex',
                width: 'calc(100% - 169px)',
                paddingLeft: '24px',
                paddingRight: '24px',
                ...$purpleCyanGradient
            }}
            className="HeaderContainer"
        >
            <SearchInput />
            <div style={{
                marginLeft: 'auto',
                display: 'flex'
            }}>
                <NotificationsPopOver />
                <UserPopOver />
            </div>
        </div>
    );
}
 
export default HeaderContainer;