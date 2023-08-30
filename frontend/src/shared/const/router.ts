export enum AppRoutes {
    MAIN = 'main',
    CHATBOT = 'chatbot',
    EXERCISES = 'exercises',
    SYNTAX = 'syntax',
    AUDITION = 'audition',
    READING = 'reading',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';

export const getRouteChatbot = () => '/chatbot';
export const getRouteExercises = () => '/exercises';
export const getRouteSyntax = () => '/syntax';
export const getRouteAudition = () => '/audition';
export const getRouteReading = () => '/reading';
