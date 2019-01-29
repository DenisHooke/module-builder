import reducer from './reducer';
import routes from './routes';
import moduleConfig from './config';
import { Module } from '../core/index';
import './template';

const module = globalConfig => (
    new Module('{MODULE_NAME}', {
        routes,
        reducer,
        config: { ...moduleConfig, ...globalConfig },
        actions: {},
    })
);


export default module;
