const fontFamies = {
    PoppinsBlack: 'Poppins-Black',
    PoppinsBlackItalic: 'Poppins-BlackItalic',
    PoppinsBold: 'Poppins-Bold',
    PoppinsBoldItalic: 'Poppins-BoldItalic',
    PoppinsExtraBold: 'Poppins-ExtraBold',
    PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
    PoppinsExtraLight: 'Poppins-ExtraLight',
    PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
    PoppinsItalic: 'Poppins-Italic',
    PoppinsLight: 'Poppins-Light',
    PoppinsLightItalic: 'Poppins-LightItalic',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsMediumItalic: 'Poppins-MediumItalic',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
    PoppinsThin: 'Poppins-Thin',
    PoppinsThinItalic: 'Poppins-ThinItalic'
}

const fonts = {
    fw_100: {
        fontFamily: fontFamies.PoppinsThin,
        fontWeight: '100' as '100',
    },
    fw_100_italic: {
        fontFamily: fontFamies.PoppinsThinItalic,
        fontWeight: '100' as '100',
    },
    fw_200: {
        fontFamily: fontFamies.PoppinsExtraLight,
        fontWeight: '200' as '200',
    },
    fw_200_italic: {
        fontFamily: fontFamies.PoppinsExtraLightItalic,
        fontWeight: '200' as '200',
    },
    fw_300: {
        fontFamily: fontFamies.PoppinsLight,
        fontWeight: '300' as '300',
    },
    fw_300_italic: {
        fontFamily: fontFamies.PoppinsLightItalic,
        fontWeight: '300' as '300',
    },
    fw_400: {
        fontFamily: fontFamies.PoppinsRegular,
        fontWeight: '400' as '400',
    },
    fw_400_italic: {
        fontFamily: fontFamies.PoppinsItalic,
        fontWeight: '400' as '400',
    },
    fw_500: {
        fontFamily: fontFamies.PoppinsMedium,
        fontWeight: '500' as '500',
    },
    fw_500_italic: {
        fontFamily: fontFamies.PoppinsMediumItalic,
        fontWeight: '500' as '500',
    },
    fw_600: {
        fontFamily: fontFamies.PoppinsSemiBold,
        fontWeight: '600' as '600',
    },
    fw_600_italic: {
        fontFamily: fontFamies.PoppinsSemiBoldItalic,
        fontWeight: '600' as '600',
    },
    fw_700: {
        fontFamily: fontFamies.PoppinsBold,
        fontWeight: '700' as '700',
    },
    fw_700_italic: {
        fontFamily: fontFamies.PoppinsBoldItalic,
        fontWeight: '700' as '700',
    },
    fw_800: {
        fontFamily: fontFamies.PoppinsExtraBold,
        fontWeight: '800' as '800',
    },
    fw_800_italic: {
        fontFamily: fontFamies.PoppinsExtraBoldItalic,
        fontWeight: '800' as '800',
    },
    fw_900: {
        fontFamily: fontFamies.PoppinsBlack,
        fontWeight: '900' as '900',
    },
    fw_900_italic: {
        fontFamily: fontFamies.PoppinsBlackItalic,
        fontWeight: '900' as '900',
    }
}

const ThemeColors = {
    steelblue: '#318bb1',
    darkslategray: '#303030',
    darkgray: '#969696',
    white: '#ffffff',
    gray: '#838181',
    red: '#e60d0d',
    gold: '#ffc700',
    lightGray: '#f9f9f9',
    lightGray1: '#f6f6f6',
    gray1: '#dedede',
    gray2: '#636363',
    fb_bg: '#3b5998',
    insta_bg: '#4099ff',
    linked_bg: '#3372b9',
    steelBlueContrast: '#247ca173'
}

export { fontFamies, fonts, ThemeColors };