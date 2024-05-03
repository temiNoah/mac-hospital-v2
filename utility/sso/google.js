import React, { useEffect, useState, useContext } from 'react'
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from '../../context/UserContext';
import { Alert } from 'react-native';
//import { Create } from "../../utility/firebase/crudOperations";
import { AUTH_TYPE } from '../../components/consts/data';

export default function useGoogleSSO(navigation) {

    //const [userInfo, setUserInfo] = useState(null);
    const { user, setUser } = useContext(UserContext);

    //client IDs from .env
    const config = {
        androidClientId: "518545057471-lb3khpci79roer6njapisulmqthfdgjv.apps.googleusercontent.com", //process.env.ANDROID_CLIENT_ID,
        iosClientId: "518545057471-ljhq23eh6uggdsr4q2a5ts5lla3lhmn9.apps.googleusercontent.com", //process.env.IOS_CLIENT_ID,
        webClientId: "518545057471-01g94v3396gn1jkklil3mo5sqd2qtbu5.apps.googleusercontent.com" //process.env.WEB_CLIENT_ID,
    };
    const [request, response, promptAsync] = Google.useAuthRequest(config);

    //add it to a useEffect with response as a dependency 
    // useEffect(() => {
    //    signInWithGoogle();
    // }, [response]);  //add it to a useEffect with response as a dependency 


    const getUserInfo = async (token) => {
        //absent token
        if (!token) return;

        //present token
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            Alert.alert("token:" + token + "   response:" + JSON.stringify(response));

            const user = await response.json();//returns response body as json object
            console.log("user:", JSON.stringify(user))
            //store user information  in Asyncstorage
            await AsyncStorage.setItem("user", JSON.stringify(user));//stores the json object as a string ie '{"":""}' quotes the object

            const userObj = JSON.parse(JSON.stringify(user))//converts to js object

            //store inthe user context too
            setUser((prev) => ({
                ...prev,
                id: userObj.id,
                username: userObj.name,
                email: userObj.email,
                picture: userObj.picture,
                isLoggedIn: true,
                authProvider: AUTH_TYPE.GOOGLE
            }))


            createUser(userObj);
            // setUserInfo(userObj);

            navigation.navigate("UserTypeScreen")

        } catch (error) {
            console.error("Failed to fetch user data:", response.status, response.statusText);
            Alert.alert(response.statusText)
        }
    };

    const signInWithGoogle = async () => {
        //console.log('running signInWithGoogle function  ', 'res:', JSON.stringify(response))
        try {
            // Attempt to retrieve user information from AsyncStorage
            const userJSON = await AsyncStorage.getItem("user");

            //console.log("stored User info:", (userJSON !== null ? JSON.stringify(userJSON) : userJSON))
            // userJSON = Object.values(userJSON).includes(null) ? null : userJSON
            if (userJSON) {
                Alert.alert("Already set User: " + JSON.parse(userJSON).email);
                console.log("Already defined user ...:", userJSON)
                const userObj = JSON.parse(userJSON); //convert to JS object
                // If user information is found in AsyncStorage, parse it and set it in the state
                // setUserInfo(JSON.parse(userJSON));
                setUser((prev) => ({
                    ...prev,
                    id: userObj.id,
                    username: userObj.name,
                    picture: userObj.picture,
                    email: userObj.email,
                    isLoggedIn: true
                }));

                //then move to the next screen
                navigation.navigate("UserTypeScreen")

            } else if (response?.type === "success") {
                // If no user information is found and the response type is "success" (assuming response is defined),
                // call getUserInfo with the access token from the response
                getUserInfo(response.authentication.accessToken);
            } else {
                console.log("Response : ", JSON.stringify(response))
                Alert.alert("Response: " + JSON.stringify(response));
            }

        } catch (error) {
            // Handle any errors that occur during AsyncStorage retrieval or other operations
            console.error("Error retrieving user data from AsyncStorage:", error);
        }
    };

    const createUser = (form) => {

        const id = uuid.v4();;
        console.log("user id :", id)
        //create the user and return
        const userData = {
            _id: id,//context.user.id,//auth.currentUser.uid,
            avatar: form.picture,
            backgroundColor: 'rgba(0,255,0,0.7)',
            name: form.name,
            userType: form.userType,
            createdAt: new Date(),
            email: form.email
        }

        const newUserObj = Create("users", id, userData)
            .then((data) => {
                console.log("Created user on User\'s table");
            }
            ).catch((error) => {
                console.error("Error:", error)
            })

    }


    return [promptAsync, signInWithGoogle]
}
