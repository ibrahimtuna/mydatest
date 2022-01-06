import React from 'react';
import {Image,View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ShopScreen from "./src/screens/ShopScreen";
import ForYouScreen from "./src/screens/ForYouScreen";
import Activities from "./src/screens/Activities";
import Login from "./src/screens/Login";
import {
    activeTabBarIconStyle,
    tabBarIconStyle,
    tabBarLabelStyle,
    tabBarLoginIconStyle,
    tabBarScannerContainer,
    tabBarScannerIconStyle
} from "./src/assets/styles";
import {useSelector} from "react-redux";

const Tab = createBottomTabNavigator();
const Router = () => {
    const user = useSelector(state => state.user)
    const isLoggedIn = user.token ? true : false;
    console.log(isLoggedIn,user)



    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName="Login"
            screenOptions={{
                tabBarStyle: {height: 60 + insets.bottom},
                tabBarLabelStyle: tabBarLabelStyle
            }}
            shifting="false"
        >
            <Tab.Screen
                name="Shop"
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Image
                                source={require('./src/assets/icons/ic_shop_active.png')}
                                style={tabBarIconStyle}
                            /> :
                            <Image
                                source={require('./src/assets/icons/ic_shop.png')}
                                style={tabBarIconStyle}
                            />
                    )
                }}
                component={ShopScreen}/>
            <Tab.Screen
                name="ForYou"
                options={{
                    tabBarLabel: 'For You',
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Image
                                source={require('./src/assets/icons/ic_for_you_active.png')}
                                style={tabBarIconStyle}
                            /> :
                            <Image
                                source={require('./src/assets/icons/ic_for_you.png')}
                                style={tabBarIconStyle}
                            />
                    )
                }}
                component={ForYouScreen}/>
            <Tab.Screen
                name="Scanner"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <View
                        style={tabBarScannerContainer}
                        >
                            <Image
                                style={tabBarScannerIconStyle}
                                source={require('./src/assets/icons/ic_scanner.png')}
                                resizeMode="contain"
                            />
                        </View>
                    )
                }}
                component={ShopScreen}/>
            <Tab.Screen
                name="Activities"
                options={{
                    tabBarLabel: 'Activities',
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Image
                                source={require('./src/assets/icons/ic_activities_active.png')}
                                style={tabBarIconStyle}
                            /> :
                            <Image
                                source={require('./src/assets/icons/ic_activities.png')}
                                style={tabBarIconStyle}
                            />
                    )
                }}
                component={Activities}/>
            <Tab.Screen
                name="Login"
                options={{
                    tabBarLabel: isLoggedIn ? "Logout" : "Login",
                    tabBarIcon: ({focused}) => (
                            <View style={[tabBarLoginIconStyle,focused && activeTabBarIconStyle]} />
                    )
                }}
                component={Login}/>
        </Tab.Navigator>
    );
}

export default Router;
