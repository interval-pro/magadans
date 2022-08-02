import './layout.scss';
import { LeftSideComponent } from '../../@pages/main/left-side/left-side';
import { RightSideComponent } from '../../@pages/main/right-side/right-side';

export const LayoutComponent = (props: any) => {
    return(
        <div className="layout">
            <div className="left">
                <LeftSideComponent />
            </div>
            <div className="right">
                <RightSideComponent />
            </div>
        </div>
    );
};
