import { createStore,Store } from 'redux'
import { reducer} from './counter.reducer'
import { appState} from './app.state'
import {InjectionToken} from '@angular/core'

function CreateAppStore():Store<appState>
{
    return createStore(reducer,undefined);
}


export const AppStore = new InjectionToken("AppStore");

export const storeProvider= {
    provide:AppStore, 
    useFactory:CreateAppStore
}