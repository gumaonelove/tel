import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export interface ComponentRenderOptions {
  route?: string;
}
export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            {component}
        </MemoryRouter>,
    );
}
