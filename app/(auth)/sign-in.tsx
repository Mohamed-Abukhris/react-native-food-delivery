import {View, Text, Button} from 'react-native'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {


    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <CustomInput
                placeholder="Enter your email"
                value={''}
                onChangeText={(value: String) => {}}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput
            placeholder="Enter your password"
            value={''}
            onChangeText={(value: String) => {}}
            label="Password"
            secureTextEntry={true}
            />

        <CustomButton
            title="Sign In"
        />

         <View className="flex justify-center mt-5 flex-row gap-2">
             <Text className="base-regular text-gray-100">
                 Don't have an account?
             </Text>
             <Link href="/sign-in" className="base-bold text-primary">
                 Sign Up
             </Link>
         </View>
        </View>
    )
}
export default SignIn
