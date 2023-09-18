import React, { ReactNode } from "react";
import {
    FlexStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    Insets,
    TextStyle,
} from "react-native";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

//components
import { DsText } from "@ds/components/typography";
import { DsFlex } from "@ds/layout";

//types external
import type { ComponentMounterType } from "@ds/core/component-mounter";

export type IconsType =
    | "bille"
    | "spotify"
    | "moon"
    | "sun"
    | "arrow-left"
    | "arrow-top"
    | "apple-logo"
    | "google-logo"
    | "eye-hide"
    | "eye-show"
    | "more"
    | "settings"
    | "search"
    | "player"
    | "heart-favorite"
    | "heart"
    | "profile"
    | "home"
    | "repeate"
    | "previous"
    | "next"
    | "pause"
    | "shuffle"
    | "more-horizontal";

interface DsIconType
    extends TouchableOpacityProps,
        FlexStyle,
        ComponentMounterType {
    children?: ReactNode;
    icon: IconsType;
    size?: number;
    color?: string;
    hitSlop?: Insets;
    stylesText?: TextStyle;
}
const DsIcon: React.FC<DsIconType> = (props) => {
    const { icon, size = 64, stylesText, color, children, ...attr } = props;

    return (
        <DsFlex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <TouchableOpacity
                {...(attr as TouchableOpacityProps)}
                style={{ ...attr }}
            >
                {icon === "spotify" && (
                    <Svg
                        width={size}
                        height={(size / 235) * 71}
                        viewBox="0 0 235 71"
                        fill="none"
                        style={[props.style]}
                    >
                        <Path
                            fill={color || "#fff"}
                            d="M35.241 0C15.778 0 0 15.894 0 35.5 0 55.107 15.778 71 35.241 71c19.465 0 35.242-15.893 35.242-35.5C70.483 15.895 54.706.002 35.24.002V0Zm16.162 51.202a2.186 2.186 0 0 1-3.022.733c-8.274-5.091-18.69-6.245-30.958-3.421a2.197 2.197 0 0 1-2.63-1.666 2.21 2.21 0 0 1 1.653-2.65c13.424-3.09 24.94-1.759 34.228 3.96 1.036.64 1.364 2 .729 3.044Zm4.313-9.667a2.736 2.736 0 0 1-3.78.913c-9.472-5.866-23.912-7.565-35.116-4.138a2.748 2.748 0 0 1-3.429-1.845 2.775 2.775 0 0 1 1.832-3.452c12.799-3.911 28.71-2.017 39.588 4.718a2.778 2.778 0 0 1 .905 3.804Zm.37-10.065c-11.358-6.796-30.097-7.421-40.941-4.106a3.292 3.292 0 0 1-4.111-2.212c-.528-1.755.454-3.609 2.197-4.142 12.449-3.807 33.143-3.072 46.22 4.748a3.33 3.33 0 0 1 1.152 4.55 3.28 3.28 0 0 1-4.515 1.162h-.002Zm39.793 1.302c-6.085-1.462-7.166-2.488-7.166-4.643 0-2.037 1.902-3.408 4.734-3.408 2.744 0 5.462 1.041 8.316 3.184.084.065.193.09.298.073a.395.395 0 0 0 .266-.163l2.971-4.219a.405.405 0 0 0-.076-.546c-3.396-2.744-7.217-4.078-11.686-4.078-6.57 0-11.16 3.972-11.16 9.654 0 6.094 3.96 8.252 10.802 9.918 5.82 1.35 6.805 2.483 6.805 4.505 0 2.243-1.987 3.638-5.185 3.638-3.552 0-6.451-1.209-9.692-4.032a.393.393 0 0 0-.564.042l-3.332 3.994a.406.406 0 0 0 .037.56c3.771 3.39 8.409 5.18 13.416 5.18 7.079 0 11.653-3.896 11.653-9.928.013-5.09-3.013-7.91-10.424-9.726l-.013-.005Zm26.454-6.045c-3.068 0-5.585 1.217-7.664 3.712v-2.808a.398.398 0 0 0-.395-.402h-5.45a.4.4 0 0 0-.396.402v31.201a.4.4 0 0 0 .396.403h5.45a.4.4 0 0 0 .395-.403v-9.848c2.079 2.345 4.596 3.493 7.664 3.493 5.702 0 11.475-4.421 11.475-12.874.009-8.454-5.765-12.877-11.471-12.877h-.004Zm5.138 12.876c0 4.303-2.63 7.308-6.401 7.308-3.724 0-6.535-3.14-6.535-7.308 0-4.167 2.811-7.307 6.535-7.307 3.708 0 6.401 3.072 6.401 7.307ZM148.6 26.727c-7.343 0-13.096 5.695-13.096 12.968 0 7.195 5.715 12.83 13.008 12.83 7.369 0 13.138-5.677 13.138-12.922 0-7.22-5.731-12.876-13.05-12.876Zm0 20.227c-3.905 0-6.851-3.163-6.851-7.353 0-4.209 2.845-7.263 6.763-7.263 3.931 0 6.893 3.16 6.893 7.355 0 4.209-2.861 7.26-6.805 7.26Zm28.73-19.725h-5.997v-6.175a.398.398 0 0 0-.395-.402h-5.45c-.219 0-.4.18-.4.402v6.175h-2.617a.4.4 0 0 0-.396.402v4.717a.4.4 0 0 0 .396.402h2.617v12.207c0 4.93 2.437 7.431 7.247 7.431 1.953 0 3.573-.407 5.1-1.28a.391.391 0 0 0 .202-.347v-4.494a.4.4 0 0 0-.189-.34.384.384 0 0 0-.387-.016c-1.048.53-2.062.776-3.198.776-1.747 0-2.53-.801-2.53-2.59V32.752h5.997a.4.4 0 0 0 .396-.402v-4.716a.388.388 0 0 0-.392-.403l-.004-.002Zm20.89.024v-.759c0-2.23.85-3.226 2.752-3.226 1.136 0 2.05.227 3.072.57.126.04.257.02.358-.055a.4.4 0 0 0 .164-.327v-4.625a.396.396 0 0 0-.282-.385c-1.077-.323-2.458-.655-4.528-.655-5.029 0-7.693 2.854-7.693 8.252v1.162h-2.617c-.219 0-.4.18-.4.402v4.74c0 .222.181.403.4.403h2.617v18.825c0 .224.181.402.4.402h5.445c.224 0 .4-.178.4-.402V32.75h5.088l7.794 18.824c-.884 1.975-1.755 2.37-2.942 2.37-.959 0-1.974-.289-3.005-.861a.429.429 0 0 0-.315-.03.399.399 0 0 0-.236.216l-1.847 4.083a.402.402 0 0 0 .172.521c1.928 1.051 3.666 1.5 5.816 1.5 4.023 0 6.249-1.89 8.206-6.969l9.452-24.603a.395.395 0 0 0-.042-.373.39.39 0 0 0-.324-.175h-5.673a.4.4 0 0 0-.379.27l-5.811 16.717-6.363-16.728a.397.397 0 0 0-.37-.259h-9.309v-.001Zm-12.111-.024h-5.45c-.219 0-.4.18-.4.402v23.944c0 .224.181.402.4.402h5.45a.401.401 0 0 0 .399-.402V27.633a.4.4 0 0 0-.399-.403v-.001Zm-2.694-10.903c-2.159 0-3.909 1.76-3.909 3.934 0 2.176 1.75 3.938 3.909 3.938s3.906-1.762 3.906-3.938c0-2.174-1.751-3.934-3.906-3.934Zm47.73 18.602c-2.154 0-3.833-1.745-3.833-3.863 0-2.119 1.7-3.883 3.854-3.883 2.155 0 3.834 1.744 3.834 3.86 0 2.119-1.7 3.886-3.855 3.886Zm.021-7.362c-1.965 0-3.45 1.573-3.45 3.499 0 1.925 1.477 3.476 3.429 3.476 1.966 0 3.451-1.571 3.451-3.498 0-1.925-1.477-3.477-3.43-3.477Zm.85 3.874 1.086 1.53h-.917l-.977-1.404h-.837v1.403h-.766v-4.054h1.793c.938 0 1.553.482 1.553 1.293.004.665-.379 1.071-.93 1.232h-.005Zm-.648-1.83h-.997v1.283h.997c.497 0 .796-.245.796-.642 0-.417-.299-.64-.796-.64Z"
                        />
                    </Svg>
                )}

                {icon === "moon" && (
                    <Svg
                        width={size}
                        height={(size / 36) * 36}
                        viewBox="0 0 36 36"
                        fill="none"
                        style={[props.style]}
                    >
                        <Path
                            d="M18.4044 18.5833C24.4044 28.9756 35.6769 25.9315 28.5025 30.0736C21.3281 34.2158 12.1543 31.7576 8.01212 24.5833C3.86999 17.4089 6.32812 8.23501 13.5025 4.09287C20.6769 -0.0492657 12.4044 8.19095 18.4044 18.5833Z"
                            stroke={color || "white"}
                            strokeWidth={1.5}
                        />
                    </Svg>
                )}

                {icon === "sun" && (
                    <Svg
                        width={size}
                        height={(size / 32) * 32}
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <G clipPath="url(#clip0_1_358)">
                            <Path
                                d="M16 1.33331V3.99998M16 28V30.6666M30.6667 16H28M4 16H1.33333M26.3709 5.62908L24.4853 7.5147M7.51472 24.4853L5.6291 26.3709M26.3709 26.3709L24.4853 24.4853M7.51472 7.5147L5.6291 5.62908M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 7.99998 16 7.99998C20.4183 7.99998 24 11.5817 24 16Z"
                                stroke={color || "white"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_1_358">
                                <Rect
                                    width={"100%"}
                                    height={"100%"}
                                    fill={color || "white"}
                                />
                            </ClipPath>
                        </Defs>
                    </Svg>
                )}

                {icon === "eye-hide" && (
                    <Svg
                        width={size}
                        height={(size / 24) * 24}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <Path
                            stroke={color || "white"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m2.999 3 18 18M9.843 9.914a3 3 0 0 0 4.265 4.22M6.5 6.646A10.024 10.024 0 0 0 2.457 12c1.274 4.057 5.065 7 9.542 7 1.99 0 3.842-.58 5.4-1.582m-6.4-12.369c.329-.032.663-.049 1-.049 4.478 0 8.268 2.943 9.542 7a9.954 9.954 0 0 1-1.189 2.5"
                        />
                    </Svg>
                )}

                {icon === "eye-show" && (
                    <Svg
                        width={size}
                        height={(size / 24) * 24}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <Path
                            stroke={color || "white"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <Path
                            stroke={color || "white"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12.001 5C7.524 5 3.733 7.943 2.46 12c1.274 4.057 5.065 7 9.542 7 4.478 0 8.268-2.943 9.542-7-1.274-4.057-5.064-7-9.542-7Z"
                        />
                    </Svg>
                )}

                {icon === "more" && (
                    <Svg
                        width={size}
                        height={(size / 24) * 24}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <G
                            stroke={color || "white"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        >
                            <Path d="M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
                        </G>
                    </Svg>
                )}

                {icon === "more-horizontal" && (
                    <Svg
                        width={size}
                        height={(size / 24) * 24}
                        viewBox="0 0 24 24"
                        fill={color || "white"}
                    >
                        <title />
                        <Path d="M8 12a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm10-2a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm-6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
                    </Svg>
                )}

                {icon === "search" && (
                    <Svg
                        width={size}
                        height={(size / 25) * 25}
                        viewBox="0 0 25 25"
                        fill="none"
                    >
                        <Path
                            fill={color || "white"}
                            fillRule="evenodd"
                            d="M11.458.26C5.85.26 1.302 4.808 1.302 10.417S5.85 20.573 11.458 20.573c5.61 0 10.157-4.547 10.157-10.156C21.615 4.807 17.068.26 11.458.26ZM2.865 10.417a8.594 8.594 0 1 1 17.187 0 8.594 8.594 0 0 1-17.187 0Z"
                            clipRule="evenodd"
                        />
                        <Path
                            fill={color || "white"}
                            d="M20.344 18.198a.781.781 0 0 0-1.105 1.104l4.167 4.167a.781.781 0 0 0 1.105-1.105l-4.167-4.166Z"
                        />
                    </Svg>
                )}

                {icon === "heart" && (
                    <Svg
                        width={size}
                        height={(size / 28) * 28}
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <Path
                            fill={color || "white"}
                            fillRule="evenodd"
                            d="M24.321 4.591c-1.549-1.579-3.273-2.068-4.892-1.95-1.575.116-2.994.8-4.03 1.457-.817.518-1.98.518-2.798 0-1.036-.657-2.455-1.34-4.03-1.456-1.62-.119-3.344.37-4.893 1.95-1.828 1.864-2.402 4.166-2.171 6.494.227 2.302 1.237 4.642 2.583 6.715 1.35 2.079 3.075 3.945 4.805 5.3 1.692 1.325 3.533 2.274 5.105 2.274 1.572 0 3.413-.949 5.105-2.274 1.73-1.355 3.454-3.221 4.805-5.3 1.346-2.073 2.355-4.413 2.583-6.715.23-2.328-.343-4.63-2.172-6.495Zm-7.985.985c.916-.582 2.05-1.103 3.22-1.189 1.127-.082 2.341.232 3.516 1.43 1.404 1.431 1.868 3.19 1.68 5.097-.192 1.935-1.059 4.007-2.31 5.934-1.248 1.92-2.843 3.642-4.416 4.875-1.612 1.263-3.06 1.902-4.026 1.902-.966 0-2.414-.64-4.026-1.902C8.4 20.49 6.806 18.77 5.558 16.848c-1.251-1.927-2.118-4-2.31-5.934-.189-1.907.276-3.666 1.68-5.097 1.174-1.198 2.388-1.512 3.515-1.43 1.17.086 2.304.607 3.22 1.189 1.39.881 3.284.881 4.673 0Z"
                            clipRule="evenodd"
                        />
                    </Svg>
                )}

                {icon == "heart-favorite" && (
                    <Svg width={size} height={(size / 24) * 24} fill="none">
                        <Path
                            fill={color || "white"}
                            d="M17.773 3.903C15.73 1.82 13.364 2.7 11.9 3.628c-.828.525-1.974.525-2.802 0-1.464-.93-3.83-1.808-5.872.275C-1.62 8.847 6.694 18.375 10.5 18.375c3.806 0 12.12-9.528 7.273-14.472Z"
                        />
                    </Svg>
                )}

                {icon == "profile" && (
                    <Svg width={size} height={(size / 28) * 28} fill="none">
                        <Path
                            fill={color || "white"}
                            fillRule="evenodd"
                            d="M14 1.458a5.542 5.542 0 1 0 0 11.084 5.542 5.542 0 0 0 0-11.084ZM10.208 7a3.792 3.792 0 1 1 7.584 0 3.792 3.792 0 0 1-7.584 0ZM10.5 14.292a5.542 5.542 0 1 0 0 11.083h7a5.542 5.542 0 1 0 0-11.083h-7Zm-3.792 5.541a3.792 3.792 0 0 1 3.792-3.791h7a3.792 3.792 0 0 1 0 7.583h-7a3.792 3.792 0 0 1-3.792-3.792Z"
                            clipRule="evenodd"
                        />
                    </Svg>
                )}

                {icon === "repeate" && (
                    <Svg width={size} height={(size / 24) * 24} fill="none">
                        <Path
                            fill={color || "white"}
                            d="M15.78 2.47a.75.75 0 0 0-1.06 1.06l.72.72h-4.602c-1.706 0-2.747 0-3.615.281a5.75 5.75 0 0 0-3.692 3.692c-.281.868-.281 1.909-.281 3.615v.324c0 1.706 0 2.747.281 3.615a.75.75 0 1 0 1.427-.464C4.759 14.702 4.75 13.92 4.75 12c0-1.92.01-2.702.208-3.313a4.25 4.25 0 0 1 2.729-2.729C8.298 5.759 9.08 5.75 11 5.75h4.178l-.658.549a.75.75 0 1 0 .96 1.152l1.409-1.174a1.746 1.746 0 0 0 .117-2.582L15.78 2.47ZM20.468 8.223a.75.75 0 1 0-1.426.464c.199.611.208 1.393.208 3.313 0 1.92-.01 2.702-.208 3.313a4.25 4.25 0 0 1-2.729 2.729c-.611.199-1.393.208-3.313.208h-2c-.967 0-1.646-.002-2.16-.03l.69-.69a.75.75 0 1 0-1.06-1.06l-1.226 1.225a1.749 1.749 0 0 0 .117 2.582l1.409 1.174a.75.75 0 0 0 .96-1.152l-.681-.568c.51.02 1.096.02 1.795.019h2.318c1.706 0 2.747 0 3.615-.281a5.75 5.75 0 0 0 3.691-3.692c.282-.868.282-1.909.282-3.615v-.324c0-1.706 0-2.747-.282-3.615Z"
                        />
                    </Svg>
                )}

                {icon === "previous" && (
                    <Svg width={size} height={(size / 24) * 24} fill="none">
                        <path
                            fill={color || "white"}
                            d="M6.23 6.5a.813.813 0 0 0-1.626 0v13a.813.813 0 0 0 1.625 0v-13ZM16.778 5.703c-.733-.079-1.462.154-2.244.521-.779.366-1.731.925-2.934 1.632l-.075.044c-1.203.707-2.156 1.267-2.856 1.77-.704.506-1.263 1.03-1.559 1.707a4.054 4.054 0 0 0 0 3.246c.296.678.855 1.201 1.559 1.707.7.504 1.652 1.063 2.856 1.77l.075.044c1.203.707 2.155 1.267 2.934 1.632.782.367 1.511.6 2.244.521a3.937 3.937 0 0 0 2.784-1.633c.428-.6.594-1.351.672-2.222.078-.867.078-1.985.078-3.4v-.084c0-1.415 0-2.534-.078-3.4-.078-.871-.244-1.622-.672-2.222a3.938 3.938 0 0 0-2.784-1.633Z"
                        />
                    </Svg>
                )}

                {icon === "apple-logo" && (
                    <Svg
                        width={size}
                        height={(size / 29) * 36}
                        viewBox="0 0 29 36"
                        fill={color || "#fff"}
                    >
                        <Path d="M28.0738 12.2736C27.8672 12.4356 24.2195 14.5131 24.2195 19.1323C24.2195 24.4752 28.8611 26.3654 29 26.4122C28.9786 26.5275 28.2626 29.0009 26.5528 31.5212C25.0281 33.739 23.4358 35.9532 21.0135 35.9532C18.5912 35.9532 17.9678 34.5311 15.1715 34.5311C12.4464 34.5311 11.4775 36 9.26176 36C7.04606 36 5.50006 33.9478 3.72252 31.4275C1.66355 28.468 0 23.8704 0 19.5068C0 12.5077 4.50264 8.79568 8.93404 8.79568C11.2887 8.79568 13.2514 10.3582 14.7298 10.3582C16.1368 10.3582 18.3312 8.70207 21.01 8.70207C22.0252 8.70207 25.6729 8.79568 28.0738 12.2736ZM19.7382 5.73897C20.8461 4.41044 21.6298 2.56706 21.6298 0.723672C21.6298 0.468047 21.6084 0.208821 21.5621 0C19.7596 0.0684068 17.6152 1.21332 16.3221 2.72907C15.3068 3.89559 14.3593 5.73897 14.3593 7.60756C14.3593 7.88839 14.4056 8.16922 14.427 8.25923C14.541 8.28083 14.7262 8.30603 14.9114 8.30603C16.5287 8.30603 18.5627 7.21152 19.7382 5.73897Z" />
                    </Svg>
                )}

                {icon === "google-logo" && (
                    <Svg
                        width={size}
                        height={(size / 29) * 30}
                        viewBox="0 0 29 30"
                        fill="none"
                    >
                        <Path
                            fill={color || "#EA4335"}
                            d="M7.016 12.533a8.446 8.446 0 0 1 8.036-5.795c2.018 0 3.84.716 5.272 1.888L24.49 4.46C21.952 2.247 18.697.88 15.052.88a14.283 14.283 0 0 0-12.84 7.936l4.804 3.717Z"
                        />
                        <Path
                            fill={color || "#34A853"}
                            d="M19.874 22.375c-1.3.84-2.953 1.287-4.822 1.287a8.446 8.446 0 0 1-8.023-5.755l-4.82 3.66a14.278 14.278 0 0 0 12.843 7.954c3.5 0 6.844-1.245 9.349-3.58l-4.527-3.566Z"
                        />
                        <Path
                            fill={color || "#4A90E2"}
                            d="M24.4 25.94c2.62-2.443 4.321-6.081 4.321-10.74 0-.846-.13-1.757-.325-2.603H15.052v5.533h7.68c-.378 1.86-1.396 3.301-2.858 4.245L24.4 25.94Z"
                        />
                        <Path
                            fill={color || "#FBBC05"}
                            d="M7.029 17.907a8.496 8.496 0 0 1-.44-2.706c0-.933.15-1.83.427-2.668L2.211 8.816c-.959 1.922-1.48 4.088-1.48 6.385 0 2.29.531 4.451 1.477 6.366l4.82-3.66Z"
                        />
                    </Svg>
                )}

                {icon === "arrow-left" && (
                    <Svg
                        width={size}
                        height={(size / 24) * 24}
                        viewBox="0 0 24 24"
                        fill={color || "#fff"}
                        style={[props.style]}
                    >
                        <Path
                            d="M14.528 7.53269C14.8222 7.24111 14.8243 6.76624 14.5327 6.47204C14.2411 6.17784 13.7662 6.17573 13.472 6.46731L11.6773 8.2461C11.0013 8.91604 10.4489 9.46359 10.0571 9.95146C9.64963 10.4588 9.35469 10.9737 9.27591 11.5918C9.24136 11.8629 9.24136 12.1371 9.27591 12.4082C9.35469 13.0263 9.64963 13.5412 10.0571 14.0485C10.4489 14.5364 11.0013 15.084 11.6773 15.7539L13.472 17.5327C13.7662 17.8243 14.2411 17.8222 14.5327 17.528C14.8243 17.2338 14.8222 16.7589 14.528 16.4673L12.765 14.72C12.0495 14.0109 11.5587 13.5228 11.2266 13.1093C10.904 12.7076 10.7933 12.4496 10.7639 12.2185C10.7454 12.0734 10.7454 11.9266 10.7639 11.7815C10.7933 11.5504 10.904 11.2924 11.2266 10.8907C11.5587 10.4772 12.0495 9.98914 12.765 9.28L14.528 7.53269"
                            fill={color || "#fff"}
                        />
                    </Svg>
                )}
            </TouchableOpacity>

            {children && (
                <DsText
                    marginTop={16}
                    color={"#DADADA"}
                    fontSize={17}
                    fontWeight="700"
                    textTransform={"capitalize"}
                    {...stylesText}
                >
                    {children}
                </DsText>
            )}
        </DsFlex>
    );
};

export default DsIcon;
