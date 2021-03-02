import SearchInput from '../../SearchInput';
import NotificationsPopOver from '../../NotificationsPopOver';
import UserPopOver from '../../UserPopOver';
import { $purpleCyanGradient } from '../../styles/vars';

const HeaderContainer = () => {
    return (
        <div
            style={{
                display: 'flex',
                width: 'calc(100% - 120px)',
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