declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.css';
declare module '*.js';
declare module '*.jsx';
declare module '*.ts';
declare module '*.tsx';

/*
 * Namespace 'React' has no exported member 'StatelessComponent'
 */
declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}
