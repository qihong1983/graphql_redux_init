import {
	combineReducers
} from 'redux';



import {
	userList
} from './userList/list';




import {
	mainBody
} from "./mainbody/mainbody";

import {
	Concat
} from "./concat/concat";

import {
	Customer
} from "./customer/customer";


import {
	channelList
} from "./channelList/targetChannelList";

import {
	channelGroup
} from './channelGroup/channelGroup';
import {
	shortLink
} from "./shortLink/shortLink";



import { channelCost } from "./channelCost/channelCost";
import { modelManager } from "./modelManager/modelManager";


var Reducer = combineReducers({
	userList,
	shortLink,
	channelGroup,
	mainBody,
	Concat,
	Customer,
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