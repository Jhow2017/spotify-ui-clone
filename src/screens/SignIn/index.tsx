import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

//components
import { DsText } from "@ds/components/typography";
import { DsFlex } from "@ds/layout";
import DsButton from "@ds/components/global/button";

import DsInput from "@ds/components/form/input";
import Header from "src/components/header";
import LayoutPublic from "src/components/layout/layout-public";

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
        <LayoutPublic>
            <Header />

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
                                    errors.username && errors.username.message
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
                                    errors.password && errors.password.message
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
        </LayoutPublic>
    );
};

export default SignIn;
