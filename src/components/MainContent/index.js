import MainMenu from '../MainMenu';
import Content from '../Content';

const MainContent = () => {
    return (
        <div style={{
            height: 'calc(100vh - 60px)',
            position: 'relative',
            top: '60px',
            display: 'flex'
        }}>
            <MainMenu />
            <Content />
        </div>
    );
}
 
export default MainContent;