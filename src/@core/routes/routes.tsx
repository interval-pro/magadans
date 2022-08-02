import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LayoutComponent } from '../../@style/layout/layout';
import { LoginComponent } from '../../@pages/login/login';
import { NotFoundComponent } from '../../@pages/not-found/not-found';

export const RouterWrapper = (props: any) => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LayoutComponent />}></Route>
                <Route path='/login' element={<LoginComponent />}></Route>
                <Route path='*' element={<NotFoundComponent />}></Route>
            </Routes>
        </Router>
    );
};
