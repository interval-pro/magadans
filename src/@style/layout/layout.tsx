import './layout.scss';
import PropTypes from 'prop-types';

export const LayoutComponent = (props: any) => {
    const leftSide = props.children.find((c: { key: string }) => c.key === 'left-side');
    const rightSide = props.children.find((c: { key: string }) => c.key === 'right-side');
    return(
        <div className="layout">
            <div className="left">
                { leftSide }
            </div>
            <div className="right">
                { rightSide }
            </div>
        </div>
    );
}