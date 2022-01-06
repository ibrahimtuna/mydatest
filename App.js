/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Router from "./Router";

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";

const client = new ApolloClient({
    link: new HttpLink({uri: 'https://api.testing.myda.cloud/staging/'}),
    cache: new InMemoryCache()
});


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ApolloProvider client={client}>
                    <NavigationContainer>
                        <SafeAreaProvider>
                            <Router/>
                        </SafeAreaProvider>
                    </NavigationContainer>
                </ApolloProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
