import { Component, Inject } from '@angular/core';
import { appState } from './redux/app.state';
import { Store } from 'redux';
import * as counterAction from './redux/counter.action';
import {AppStore} from './redux/app.store'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number=0;
  constructor( @Inject(AppStore) private store:Store<appState>){
    store.subscribe(()=>this.valueChange());
  }
  valueChange(){
    this.count = this.store.getState().counter;
  }
  increase(){
    this.store.dispatch(counterAction.increaseAction());
  }
  decrease(){
    this.store.dispatch(counterAction.decrementAction());
  }
  title = 'redux-simple';
}
