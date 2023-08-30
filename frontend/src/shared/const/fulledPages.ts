import {
    getRouteAudition,
    getRouteChatbot,
    getRouteExercises,
    getRouteReading,
    getRouteSyntax,
} from 'shared/const/router';

export const PAGES_FULLED_HEADER = [
    getRouteChatbot(),
    getRouteExercises(),
    getRouteSyntax(),
    getRouteReading(),
    getRouteAudition(),
];
