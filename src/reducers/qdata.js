 import {
 	combineReducers
 } from 'redux';

 import {
 	channelRoi
 } from './channelRoi/channelRoi';

 import {
 	userMass
 } from './userMass/userMass';


 import {
 	retentionAnalysis
 } from './retentionAnalysis/retentionAnalysis';


 var qReducer = combineReducers({
 	channelRoi,
 	userMass,
 	retentionAnalysis
 });

 export {
 	qReducer
 };