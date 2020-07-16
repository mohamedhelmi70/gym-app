import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from "./TabBarComponent";
import {Gym, Sessions, Schedule, Clients} from '../screens';

const Tab = createBottomTabNavigator();

function Navigator () {
	return (
		<Tab.Navigator
            tabBar={props => <BottomTabBar {...props}/>}
			tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'black'}}
		>
			<Tab.Screen name="Gym" component={Gym} />
			<Tab.Screen name="Clients" component={Clients} />
			<Tab.Screen name="Sessions" component={Sessions} />
			<Tab.Screen name="Schedule" component={Schedule} />
		</Tab.Navigator>
	);
}

export default Navigator;