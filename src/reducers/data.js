 import {
 	combineReducers
 } from 'redux';



 import {
 	userList
 } from './userList/list';




 import {
 	allTrend
 } from "./allTrend/allTrend";


 import {
 	channelList
 } from "./channelList/targetChannelList";

 import {
 	channelGroup
 } from './channelGroup/channelGroup';
 import {
 	shortLink
 } from "./shortLink/shortLink";



 import {channelCost} from "./channelCost/channelCost";
 import {modelManager} from "./modelManager/modelManager";


 var Reducer = combineReducers({
 	userList,
 	shortLink,
 	channelGroup,
 	allTrend,
    channelCost,
     modelManager
 });

 // const rootReducer = combineReducers({
 // 	reducer,
 // 	routing: routerReducer
 // });



 export {
 	Reducer,
 	channelList
 };