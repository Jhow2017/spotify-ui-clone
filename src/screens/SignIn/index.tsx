import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

//@Ds
import { DsText } from "@ds/components/typography";
import { DsFlex } from "@ds/layout";
import DsButton from "@ds/components/global/button";
import DsInput from "@ds/components/form/input";

//components
import Header from "src/components/header";
import LayoutPublic from "src/components/layout/layout-public";
import DsDivider from "@ds/components/global/divider";
import { ScrollView } from "react-native";

const SignInTypesSchema = z.object({
    username: z.string().min(3),
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 characters" }),
});

// extracting the type
type SignInTypes = z.infer<typeof SignInTypesSchema>;

const SignIn = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInTypes>({
        resolver: zodResolver(SignInTypesSchema),
        mode: "onBlur",
    });

    const onSubmit: SubmitHandler<SignInTypes> = (data) => {
        console.log(data);
    };

    return (
        <ScrollView
            scrollEnabled
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <LayoutPublic>
                <Header />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <DsFlex marginTop={80} flexDirection="column">
                        <DsText
                            color="#F2F2F2"
                            fontSize={30}
                            lineHeight={35}
                            fontWeight="700"
                            textAlign="center"
                            textTransform="capitalize"
                        >
                            Sign in
                        </DsText>

                        <DsFlex flexDirection="column" gap={16} marginTop={38}>
                            <Controller
                                control={control}
                                name="username"
                                render={({ field }) => (
                                    <DsInput
                                        type="text"
                                        size="medium"
                                        id="username"
                                        onChangeText={field.onChange}
                                        value={field.value}
                                        placeholder="Enter username or email"
                                        textTransform="capitalize"
                                        error={
                                            errors.username &&
                                            errors.username.message
                                        }
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <DsInput
                                        size="medium"
                                        id="password"
                                        onChangeText={field.onChange}
                                        value={field.value}
                                        type="password"
                                        placeholder="Password"
                                        error={
                                            errors.password &&
                                            errors.password.message
                                        }
                                    />
                                )}
                            />
                        </DsFlex>

                        <DsText
                            color="#A0A0A0"
                            fontSize={17}
                            lineHeight={25}
                            fontWeight="400"
                            textAlign="left"
                            marginTop={21}
                        >
                            Recovery password
                        </DsText>
                        <DsButton
                            variant="secondary"
                            size="large"
                            paddingHorizontal={36}
                            fontWeight="700"
                            lineHeight={22}
                            borderRadius={30}
                            marginTop={22}
                            onPress={handleSubmit(onSubmit)}
                        >
                            Sign In
                        </DsButton>
                    </DsFlex>
                </TouchableWithoutFeedback>
                <DsFlex
                    marginTop={31}
                    alignItems="center"
                    justifyContent="center"
                    gap={8}
                >
                    <DsDivider
                        gradient={{
                            colors: ["#252525", "#5B5B5B"],
                            start: [1, 0],
                            end: [0, 0],
                        }}
                        width={150}
                        height={1}
                    />
                    <DsText fontSize={14} color="#DCDCDC" bottom={2}>
                        Or
                    </DsText>
                    <DsDivider
                        gradient={{
                            colors: ["#252525", "#5B5B5B"],
                            start: [0, 0],
                            end: [1, 0],
                        }}
                        width={150}
                        height={1}
                    />
                </DsFlex>
            </LayoutPublic>
        </ScrollView>
    );
};

export default SignIn;
