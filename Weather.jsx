import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subTitle: "Just don't go outside",
    },
    Clouds: {
        iconName: "weather-cloudey",
        gradient: ["#D7D2CC", "#304352"]
    },
    Haze: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient} 
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={99}
                    name={weatherOptions[condition].iconName}
                    color='white'
                />
                <Text style={styles.temp} >{temp}˚</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atomsphere",
        "Clear",
        "Clouds",
        "Mist",
        "Haze",
        "Dust",
        "Fog",

    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp:{
        fontSize: 51,
        color: 'white',

    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: 'white',
        fontSize: 21,
        fontWeight: "600"

    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }

});

