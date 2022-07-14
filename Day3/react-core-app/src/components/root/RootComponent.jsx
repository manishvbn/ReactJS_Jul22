/* eslint-disable */

import React from 'react';
import CrudAssignment from '../1_crud/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';
import CallbackHook from '../3_hooks/CallbackHook';
import ContextAndReducerHookDemo from '../3_hooks/ContextAndReducerDemo';
import EffectHookAjax from '../3_hooks/EffectHookAjax';
import EffectHookAssignmentDemo from '../3_hooks/EffectHookAssignment';
import EffectHookDemo from '../3_hooks/EffectHookDemo';
import ReducerHookDemo from '../3_hooks/ReducerHookDemo';
import StateHookDemo from '../3_hooks/StateHookDemo';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                {/* <AjaxComponent /> */}
                {/* <StateHookDemo /> */}
                {/* <EffectHookDemo /> */}
                {/* <EffectHookAssignmentDemo /> */}
                {/* <EffectHookAjax /> */}
                {/* <ReducerHookDemo /> */}
                {/* <ContextAndReducerHookDemo /> */}
                <CallbackHook />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;