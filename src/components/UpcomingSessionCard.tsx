import ButtonComp from '@/components/ButtonComp';
import MyIcons, { IconName } from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback } from 'react';
import { I18nManager, Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

export interface UpcomingSessionCardProps {
    doctorName: string;
    specialty: string;
    clinicName: string;
    date: string;
    time: string;
    address: string;
    onJoinSession: () => void;
    profileImageSource?: ImageSourcePropType | null;
    videoIcon?: IconName;
    dateIcon?: IconName;
    timeIcon?: IconName;
    locationIcon?: IconName;
}

const DEFAULT_VIDEO_ICON: IconName = 'drawerSessions';
const DEFAULT_DATE_ICON: IconName = 'dateWhite';
const DEFAULT_TIME_ICON: IconName = 'clockWhite';
const DEFAULT_LOCATION_ICON: IconName = 'locationWhite';

const UpcomingSessionCard: React.FC<UpcomingSessionCardProps> = ({
    doctorName,
    specialty,
    clinicName,
    date,
    time,
    address,
    onJoinSession,
    profileImageSource,
    videoIcon = DEFAULT_VIDEO_ICON,
    dateIcon = DEFAULT_DATE_ICON,
    timeIcon = DEFAULT_TIME_ICON,
    locationIcon = DEFAULT_LOCATION_ICON,
}) => {
    const handleJoin = useCallback(() => {
        onJoinSession();
    }, [onJoinSession]);

    return (
        <View style={styles.card}>
            <View style={styles.banner}>
                <MyIcons
                    name={videoIcon}
                    size={moderateScale(20)}
                    stroke={Colors.sessionBannerText}
                    style={styles.bannerIcon}
                />
                <TextComp text="Upcoming Session" style={styles.bannerText} />
            </View>

            <View style={[styles.doctorRow, I18nManager.isRTL && styles.doctorRowRTL]}>
                <View style={styles.avatarWrap}>
                    {profileImageSource != null ? (
                        <Image source={profileImageSource} style={styles.avatar} resizeMode="cover" />
                    ) : (
                        <View style={styles.avatarPlaceholder} />
                    )}
                </View>
                <View style={styles.doctorInfo}>
                    <TextComp text={doctorName} style={styles.doctorName} />
                    <TextComp text={specialty} style={styles.specialty} />
                    <View style={[styles.clinicRow, I18nManager.isRTL && styles.clinicRowRTL]}>
                        <MyIcons
                            name={locationIcon}
                            size={moderateScale(14)}
                        />
                        <TextComp text={clinicName} style={styles.clinicText} />
                    </View>
                </View>
            </View>

            <View style={styles.details}>
                <View style={[styles.detailRow, I18nManager.isRTL && styles.detailRowRTL]}>
                    <View style={styles.detailIconWrap}>
                        <MyIcons
                            name={dateIcon}
                            size={moderateScale(16)}
                        />
                    </View>
                    <TextComp text={date} style={styles.detailText} />
                </View>
                <View style={[styles.detailRow, I18nManager.isRTL && styles.detailRowRTL]}>
                    <View style={styles.detailIconWrap}>
                        <MyIcons
                            name={timeIcon}
                            size={moderateScale(16)}
                        />
                    </View>
                    <TextComp text={time} style={styles.detailText} />
                </View>
                <View style={[styles.detailRow, I18nManager.isRTL && styles.detailRowRTL]}>
                    <View style={styles.detailIconWrap}>
                        <MyIcons
                            name={locationIcon}
                            size={moderateScale(16)}
                            stroke={Colors.white}
                        />
                    </View>
                    <TextComp text={address} style={styles.detailText} />
                </View>
            </View>

            <ButtonComp
                title="Join Session"
                onPress={handleJoin}
                variant="premium"
                style={styles.joinButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: moderateScale(16),
        padding: moderateScale(20),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
        overflow: 'hidden',
        marginHorizontal: 2
    },
    banner: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        backgroundColor: Colors.sessionBannerBg,
        borderRadius: moderateScale(10),
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(14),
        marginBottom: moderateScale(20),
    },
    bannerIcon: {
        marginEnd: moderateScale(8),
    },
    bannerText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
        color: Colors.sessionBannerText,
    },
    doctorRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        marginBottom: moderateScale(20),
    },
    doctorRowRTL: {
        flexDirection: 'row-reverse',
    },
    avatarWrap: {
        marginEnd: moderateScale(14),
    },
    avatar: {
        width: moderateScale(64),
        height: moderateScale(64),
        borderRadius: moderateScale(32),
        borderWidth: 1,
        borderColor: Colors.gray200,
    },
    avatarPlaceholder: {
        width: moderateScale(64),
        height: moderateScale(64),
        borderRadius: moderateScale(32),
        backgroundColor: Colors.gray100,
        borderWidth: 1,
        borderColor: Colors.gray200,
    },
    doctorInfo: {
        flex: 1,
    },
    doctorName: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(4),
    },
    specialty: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
        marginBottom: moderateScale(8),
    },
    clinicRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
    },
    clinicRowRTL: {
        flexDirection: 'row-reverse',
    },
    clinicIcon: {
        marginEnd: moderateScale(6),
    },
    clinicText: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
        color: Colors.sessionBannerText,
    },
    details: {
        marginBottom: moderateScale(24),
    },
    detailRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginBottom: moderateScale(12),
    },
    detailRowRTL: {
        flexDirection: 'row-reverse',
    },
    detailIconWrap: {
        width: moderateScale(36),
        height: moderateScale(36),
        borderRadius: moderateScale(8),
        backgroundColor: Colors.sessionDetailIconBg,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: moderateScale(12),
    },
    detailText: {
        flex: 1,
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.text,
    },
    joinButton: {
        borderRadius: moderateScale(24),
    },
});

export default React.memo(UpcomingSessionCard);
0 