import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const NotFound = () => <div>404 - Page Not Found</div>;

const App = () => (
    <Provider store={store}>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    </Provider>
);

export default App;