import React, {useState, useEffect} from 'react';
import {View, Button, TextInput} from 'react-native';
import {textInputStyle} from "../assets/styles";
import {gql, useMutation} from "@apollo/client";
import {useDispatch,useSelector} from "react-redux";
import {login,logout} from "../redux/actions/userActions";

const LOGIN_MUTATION = gql`
  mutation logIn($User: LoginInput!) {
  logIn(input: $User) {
    access_token
  }
}
`;

function Login(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [submit] = useMutation(LOGIN_MUTATION, {
        variables: {
            User: {
                username: username,
                password: password
            }
        },
        context:{
            headers:{
                "Authorization": "Bearer Guest"
            }
        },
        onCompleted: ({logIn}) => {
            dispatch(login(logIn))
        },
        onError: (err) => {
            alert('Invalid data provided',err)
            console.log(err, "error")
        }
    });


    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <View>
            {
                !user.token ?
                    <>
                        <TextInput
                            placeholder={"Username"}
                            onChangeText={setUsername}
                            value={username}
                            style={textInputStyle}
                        />
                        <TextInput
                            placeholder={"Password"}
                            onChangeText={setPassword}
                            value={password}
                            style={textInputStyle}
                            secureTextEntry
                        />
                        <Button title={"Login"} onPress={submit}/>
                    </> :
                    <Button title={"logout"} onPress={logoutHandler}/>
            }
        </View>
    );
}

export default Login;
