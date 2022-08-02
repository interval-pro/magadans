import './right-side.scss';
import { GridBoxComponent } from '../../../@shared/components/grid-box/grid-box';

export const RightSideComponent = () => {
    return (
        <div className="grid-container">
            <div className="top-side">
                <div className="left-top-side">
                    <GridBoxComponent title='Orderbook'>
                        <div className="orderbook"></div>
                    </GridBoxComponent>
                </div>
                <div className="center-top-side">
                    <GridBoxComponent title='Chart'>
                        <div className="chart"></div>
                    </GridBoxComponent>
                </div>
                <div className="right-top-side">
                    <GridBoxComponent title='Info'>
                        <div className="info"></div>
                    </GridBoxComponent>
                </div>
            </div>
            <div className="bottom-side">
                <GridBoxComponent title='History'>
                    <div className="history"></div>
                </GridBoxComponent>
            </div>
        </div>
    )
}