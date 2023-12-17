import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Imagen from '../components/imagen'

export default function GaleriaScreen() {

    //const url ='https://4kwallpapers.com/images/walls/thumbs_3t/13542.jpg'
    const datos = [
        { nonbre: 'Imagenmini hotcake', url: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/395646082_860182498836892_440600282941174376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=rs7n2qkYKaUAX8852P3&_nc_ht=scontent.fuio5-1.fna&oh=00_AfAzuSXPi4HGX5NwZlq78BsZq0yL4ak-SJhgOPwTZ974Gw&oe=656D6660' },
        { nonbre: 'Alohomora', url: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/299028734_456741589795427_787672148087959391_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=nTDUk2s3EbMAX9oHnz5&_nc_ht=scontent.fuio5-1.fna&oh=00_AfCcFMNokZLC3MkMsvkANpxD1J-FvIThZQL35_BXjtCw5A&oe=656D69D1' },
        { nonbre: 'Cerveza de Mantequilla', url: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/300575049_461680559301530_4354563540416806022_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=zWvqkQ0IgGkAX8kM0qx&_nc_ht=scontent.fuio5-1.fna&oh=00_AfAn_V28hIKCm3h59k9_3j3yT2zlpw2HneP4wG2B8hatNw&oe=656DA199' },
        { nonbre: 'Alitas', url: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/379702676_766592315477018_4771471954175114344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=1QBdkPELpngAX8BSbWf&_nc_ht=scontent.fuio5-1.fna&oh=00_AfArIOSv3jEnZtOvP3y3hBgRe3B5I7IAIHoaNIgRF15H3g&oe=656D537E' },
    ]


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, color: '#453e38' }}>Nuestras Especialidades</Text>
            <View style={{ height: '50%', backgroundColor: '#453e38' }}>
                <FlatList
                    data={datos}
                    horizontal={false}
                    renderItem={({item}) => (
                       // <Image source={{ uri: item.url }} style={styles.img1} />
                    <Imagen data={item}/>
                    )}
                    
                />
            </View>
        </View>
    )
}
/* */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(187, 145, 38, 0.5)'
    },
    img1: {
        width: 300,
        height: 300
    }
})
