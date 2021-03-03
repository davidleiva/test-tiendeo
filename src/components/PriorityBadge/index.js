import Classnames from 'classnames';

const PriorityBadge = ({text,colorSchemeClass}) => {
    return (
        <div className={Classnames([
            'PriorityBadge',
            colorSchemeClass,
        ])}>
            {text}
        </div>
    );
}
 
export default PriorityBadge;