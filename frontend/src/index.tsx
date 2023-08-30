import { render } from 'react-dom';
import Favicon from 'react-favicon';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/style.scss';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import faviconIcon from './shared/assets/favicon/favicon.png';

render(
    <BrowserRouter basename="/">
        <StoreProvider>
            <ErrorBoundary>
                <Favicon url={faviconIcon} />
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
