import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from 'app/providers/router';
import { Toaster } from 'react-hot-toast';
import { HeaderAndFooter } from 'app/providers/HeaderAndFooter';
import { Container } from 'app/providers/Container';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <Container>
                    <Toaster />
                    <AppRouter />
                </Container>
            </Suspense>
        </div>
    );
}

export default App;
