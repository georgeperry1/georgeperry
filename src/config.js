import ReactGA from 'react-ga';

export const BREAK_POINTS = {
    MOBILE: `@media (max-width: 576px)`,
    TABLET: `@media (max-width: 768px)`,
    DESKTOP_SMALL: `@media (max-width: 992px)`,
    DESKTOP_LARGE: `@media (max-width: 1200px)`,
};

export const initializeReactGA = () => {
    ReactGA.initialize('UA-69177937-2');
}

export const googleEvent = (category, action, label) => {
    ReactGA.event({ category, action, label });
};
 