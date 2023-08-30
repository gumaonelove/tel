import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { ExercisesPage } from 'pages/ExercisesPage';
import { SyntaxPage } from 'pages/SyntaxPage';
import { AuditionPage } from 'pages/AuditionPage';
import { ReadingPage } from 'pages/ReadingPage';
import { ChatbotPage } from 'pages/ChatbotPage';
import {
    AppRoutes, getRouteAudition, getRouteChatbot, getRouteExercises, getRouteMain, getRouteReading, getRouteSyntax,
} from '../../const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.EXERCISES]: {
        path: getRouteExercises(),
        element: <ExercisesPage />,
    },
    [AppRoutes.SYNTAX]: {
        path: getRouteSyntax(),
        element: <SyntaxPage />,
    },
    [AppRoutes.AUDITION]: {
        path: getRouteAudition(),
        element: <AuditionPage />,
    },
    [AppRoutes.READING]: {
        path: getRouteReading(),
        element: <ReadingPage />,
    },
    [AppRoutes.CHATBOT]: {
        path: getRouteChatbot(),
        element: <ChatbotPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
