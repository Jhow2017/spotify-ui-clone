import { useState } from "react";
import { FlatList } from "react-native";

//@Ds
import { DsBox, DsFlex } from "@ds/layout";
import { DsText } from "@ds/components/typography";
import { DsImage } from "@ds/components/global";

//components

//images
import CoverMusic01 from "@images/dashboard/cover-music-01.png";
import CoverMusic02 from "@images/dashboard/cover-music-02.png";
import CoverMusic03 from "@images/dashboard/cover-music-03.png";

const ListMusic = () => {
    const [listMusic, setListMusic] = useState([
        {
            id: 1,
            cover: CoverMusic01,
            title: "Bad Guy",
            description: "Billie Eilish",
        },
        {
            id: 2,
            cover: CoverMusic02,
            title: "Scorpion",
            description: "Drake",
        },
        {
            id: 3,
            cover: CoverMusic03,
            title: "WHEN WE ALL",
            description: "Billie Eilish",
        },
        // {
        //     id: 4,
        //     cover: CoverMusic01,
        //     title: "Bad Guy",
        //     description: "Billie Eilish",
        // },
        // {
        //     id: 5,
        //     cover: CoverMusic02,
        //     title: "Scorpion",
        //     description: "Drake",
        // },
        // {
        //     id: 6,
        //     cover: CoverMusic03,
        //     title: "WHEN WE ALL",
        //     description: "Billie Eilish",
        // },
    ]);
    return (
        <FlatList
            data={listMusic}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item, index) => `${item}_${index}`}
            contentContainerStyle={{
                gap: 14,
                paddingLeft: 24,
            }}
            renderItem={({ item, index }) => (
                <DsFlex flexDirection="column" key={index}>
                    <DsBox>
                        <DsImage
                            source={item?.cover}
                            resizeMode="cover"
                            width={147}
                            height={185}
                        />
                    </DsBox>
                    <DsFlex
                        flexDirection="column"
                        gap={3}
                        marginTop={13}
                        marginLeft={13}
                    >
                        <DsText
                            color="#E1E1E1"
                            fontFamily="Inter_700Bold"
                            fontSize={16}
                            textTransform="capitalize"
                        >
                            {item?.title}
                        </DsText>
                        <DsText
                            color="#E1E1E1"
                            fontSize={14}
                            fontFamily="Inter_300Light"
                            textTransform="capitalize"
                        >
                            {item?.description}
                        </DsText>
                    </DsFlex>
                </DsFlex>
            )}
        />
    );
};

export default ListMusic;
