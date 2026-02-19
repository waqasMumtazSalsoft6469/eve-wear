import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const ITEM_HEIGHT = moderateScale(40);
const VISIBLE_ITEMS = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: verticalScale(24),
  },

  title: {
    fontSize: moderateScale(26),
    fontFamily: fontFamily.bold,
    color: Colors.brandPurple,
    marginBottom: moderateScale(8),
  },

  subtitle: {
    fontSize: moderateScale(16),
    fontFamily: fontFamily.regular,
    color: Colors.brandSalmon,
    marginBottom: verticalScale(16),
  },

  question: {
    fontSize: moderateScale(16),
    fontFamily: fontFamily.regular,
    color: Colors.text,
    marginBottom: verticalScale(20),
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: moderateScale(8),
  },

  pickerCol: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  pickerLabel: {
    fontSize: moderateScale(12),
    fontFamily: fontFamily.bold,
    color: Colors.textSecondary,
    marginBottom: verticalScale(10),
  },

  /* FlatList container */
  pickerList: {
    height: CONTAINER_HEIGHT,
  },

  pickerContentContainer: {
    paddingVertical: (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2,
  },

  /* Individual item */
  pickerItem: {
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pickerItemSelected: {
    backgroundColor: Colors.sessionBannerBg,
    borderRadius: moderateScale(10),
  },

  pickerItemText: {
    fontSize: moderateScale(15),
    fontFamily: fontFamily.regular,
    color: Colors.textSecondary,
  },

  pickerItemTextSelected: {
    fontSize: moderateScale(18),
    fontFamily: fontFamily.bold,
    color: Colors.text,
  },

  /* Center Highlight Overlay */
  centerOverlay: {
    position: 'absolute',
    top: CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2,
    height: ITEM_HEIGHT,
    width: '100%',

    borderRadius: moderateScale(10),
  },

  /* Footer */

  footer: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: verticalScale(40),
  },

  button: {
    borderRadius: moderateScale(24),
    paddingVertical: moderateScale(16),
  },
});

export default styles;
