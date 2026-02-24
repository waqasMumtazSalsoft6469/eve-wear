import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ApplicationStatus: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Application Status"
                leftIcon="back"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <TextComp text="Application ID: 1234567890" style={styles.applicationId} />
                <TextComp
                    text="Your application is currently under review. We'll notify you once it's approved."
                    style={styles.applicationSubtext}
                />

                <TextComp text="Application Timeline" style={styles.timelineTitle} />

                <View style={styles.timelineCard}>
                    <View style={styles.timelineRow}>
                        <View style={[styles.timelineIconWrap, styles.timelineIconActive]}>
                            <TextComp text="✓" style={styles.timelineIconTextActive} />
                        </View>
                        <View style={styles.timelineTextWrap}>
                            <TextComp text="Application Submitted" style={styles.timelinePrimaryActive} />
                            <TextComp text="July 15, 2024" style={styles.timelineSecondary} />
                        </View>
                    </View>

                    <View style={styles.timelineLine} />

                    <View style={styles.timelineRow}>
                        <View style={styles.timelineIconWrap}>
                            <TextComp text="◷" style={styles.timelineIconTextPending} />
                        </View>
                        <View style={styles.timelineTextWrap}>
                            <TextComp text="Under Review" style={styles.timelinePrimaryActive} />
                            <TextComp text="July 16, 2024" style={styles.timelineSecondary} />
                        </View>
                    </View>

                    <View style={styles.timelineLine} />

                    <View style={styles.timelineRow}>
                        <View style={styles.timelineIconWrap}>
                            <TextComp text="✓" style={styles.timelineIconTextInactive} />
                        </View>
                        <View style={styles.timelineTextWrap}>
                            <TextComp text="Approved" style={styles.timelinePrimaryInactive} />
                            <TextComp text="Pending" style={styles.timelineSecondary} />
                        </View>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.85} style={styles.supportWrap}>
                    <TextComp text="Need help? Contact support" style={styles.supportText} />
                </TouchableOpacity>
            </ScrollView>
        </WrapperContainer>
    );
};

export default ApplicationStatus;
