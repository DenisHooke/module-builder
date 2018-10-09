import reducer from './reducer';
import routes from './routes';
import moduleConfig from './config';
import { Module } from '../core';
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
