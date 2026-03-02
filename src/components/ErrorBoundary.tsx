/**
 * @file ErrorBoundary.tsx
 * @description Error boundary component that catches JavaScript errors in the
 * child component tree and displays a fallback UI instead of crashing the app.
 * Uses only raw React Native components in the fallback so it cannot throw.
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Platform,
  Linking,
} from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';
import AlertIcon from '@/assets/icons/alert.svg';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';

const ERROR_BUTTON_PURPLE = '#6A3297';
const ERROR_SCREEN_BG = '#F9FAFB';

const ErrorIconWithBadge = () => (
  <Animated.View
    style={iconStyles.wrapper}
    entering={FadeInDown.duration(450).delay(0).springify()}
  >
    <AlertIcon
      width={moderateScale(80)}
      height={moderateScale(80)}
    />
  </Animated.View>
);

const RefreshIcon = ({ size = 22, color = Colors.white }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={iconStyles.refresh}>
    <Path
      d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
      fill={color}
    />
  </Svg>
);

const HelpIcon = ({ size = 18, color = ERROR_BUTTON_PURPLE }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.5} fill="none" />
    <Path
      d="M9.5 9.5c0-1.2 1-2 2.5-2s2.5.8 2.5 2c0 1.5-1.5 1.8-2 2.2v.8M12 15.5h.01"
      stroke={color}
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
    />
  </Svg>
);

const iconStyles = StyleSheet.create({
  wrapper: {
    width: moderateScale(80),
    height: moderateScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  refresh: { marginRight: moderateScale(8) },
});

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Optional custom fallback when an error is caught */
  fallback?: ReactNode;
  /** Optional callback when an error is caught (e.g. for logging/crash reporting) */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Optional support email for "Contact support" link (default: support@example.com) */
  supportEmail?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary that catches errors in child components and shows a fallback UI.
 * Provides a "Try again" action to clear the error state and re-render children.
 * Fallback uses only View/Text/Pressable so it never throws (e.g. no context deps).
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidMount(): void {
    this.setupGlobalHandler();
  }

  componentWillUnmount(): void {
    this.restoreGlobalHandler();
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  private previousGlobalHandler: ((error: unknown, isFatal?: boolean) => void) | null = null;

  private setupGlobalHandler = (): void => {
    const ErrorUtils = (globalThis as any).ErrorUtils;
    if (!ErrorUtils?.setGlobalHandler) return;
    this.previousGlobalHandler = ErrorUtils.getGlobalHandler?.() ?? null;
    ErrorUtils.setGlobalHandler((error: unknown, isFatal?: boolean) => {
      const err = error instanceof Error ? error : new Error(String(error));
      this.setState({ hasError: true, error: err });
      this.props.onError?.(err, { componentStack: '' });
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.error('ErrorBoundary (global handler):', err);
      }
      // Don't call previous handler so our fallback UI is shown instead of red box
    });
  };

  private restoreGlobalHandler = (): void => {
    const ErrorUtils = (globalThis as any).ErrorUtils;
    if (ErrorUtils?.setGlobalHandler && this.previousGlobalHandler) {
      ErrorUtils.setGlobalHandler(this.previousGlobalHandler);
    }
  };

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  handleContactSupport = (): void => {
    const email = this.props.supportEmail ?? 'support@example.com';
    Linking.openURL(`mailto:${email}`).catch(() => {});
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <Animated.View
          style={[styles.container, styles.aboveSplash]}
          entering={FadeIn.duration(300)}
        >
          <View style={styles.content}>
            <ErrorIconWithBadge />
            <Animated.View
              entering={FadeInDown.duration(400).delay(80).springify()}
            >
              <Text style={styles.title}>Something went wrong.</Text>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(400).delay(160).springify()}
            >
              <Text style={styles.message}>
                We are having trouble loading your data. Please check your connection or try again later.
              </Text>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(400).delay(280).springify()}
            >
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
                onPress={this.handleRetry}
              >
                <RefreshIcon size={moderateScale(20)} color={Colors.white} />
                <Text style={styles.buttonText}>Retry Loading</Text>
              </Pressable>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(400).delay(360).springify()}
            >
              <Pressable
                style={styles.supportLink}
                onPress={this.handleContactSupport}
              >
                <HelpIcon size={moderateScale(18)} color={ERROR_BUTTON_PURPLE} />
                <Text style={styles.supportLinkText}>Need help? Contact support</Text>
              </Pressable>
            </Animated.View>
          </View>
        </Animated.View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ERROR_SCREEN_BG,
    padding: moderateScale(24),
  },
  aboveSplash: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9999,
    ...(Platform.OS === 'android' && { elevation: 9999 }),
  },
  content: {
    maxWidth: 340,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: '600',
    color: Colors.gray700,
    marginTop: moderateScale(24),
    marginBottom: moderateScale(12),
    textAlign: 'center',
  },
  message: {
    fontSize: moderateScale(15),
    color: Colors.gray500,
    marginBottom: moderateScale(28),
    textAlign: 'center',
    lineHeight: moderateScale(22),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ERROR_BUTTON_PURPLE,
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(28),
    borderRadius: moderateScale(12),
    minWidth: 200,
  },
  buttonPressed: {
    opacity: 0.88,
  },
  buttonText: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  supportLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(28),
    gap: moderateScale(8),
  },
  supportLinkText: {
    fontSize: moderateScale(14),
    color: ERROR_BUTTON_PURPLE,
    fontWeight: '500',
  },
});

export default ErrorBoundary;
