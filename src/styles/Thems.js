import colors from "../styles/Colors";
import fonts from "../styles/Fonts";
import images from "../styles/Images";

export default {
  HEADER_COLOR: '#094f70',
  BUTTON_COLOR: '#094f70',
  BUTTON_BORDER_COLOR: '#094f70',
  TITLE_BAR_COLOR: 'red',

  //////// BACKGROUND_COLORS //////////////
  BACKGROUNG_COLOR_WHITE: '#ffffff',
  BACKGROUNG_COLOR_BLUE: '#094f70',
  BACKGROUNG_COLOR_LIGHTASH: '#e3e9ec',

  ///////BORDER_COLORS /////////
  BORDER_COLOR_ASH: '#b1b5b7',

  //////// INPUTFILED_COLORS //////////////
  INPUT_FIELD_FRAME_NOT_SELECTED_COLOR: '#e0e0e0',
  INPUT_FIELD_FRAME_SELECTED_COLOR: '#828282',
  INPUT_TEXT_HINT_COLOR: '#C0C0C0',

  /////// TEXT_COLORS //////////
  TEXT_COLOR_BLACK: '#000000',
  TEXT_COLOR_WHITE: '#ffffff',
  TEXT_COLOR_ASH: '#828282',

  ///////// FONT_SIZES ///////////
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,

  /////// TEXT_FONTS /////////
  ROBOTO_REGULAR: 'Roboto-Regular',
  ROBOTO_MEDIUM: 'Roboto-Medium',
};

export const IOS_Theme = {

  // Common Background Colors
  PRIMARY_BACKGROUND_COLOR: colors.WHITE_COLOR,

  // --------------------------------------------------------------------------

  // Common Font Colors
  MAIN_HEADER_TITLE_FONT_COLOR: colors.TUNDORA,
  INNER_HEADER_TITLE_FONT_COLOR: colors.TUNDORA,

  // --------------------------------------------------------------------------

  // Common Font Types
  MAIN_HEADER_TITLE_FONT_TYPE: fonts.POPPINS_REGULAR,
  INNER_HEADER_TITLE_FONT_TYPE: fonts.POPPINS_REGULAR,

  // --------------------------------------------------------------------------

  // Common Font Sizes
  MAIN_HEADER_TITLE_FONT_SIZE: 17,
  INNER_HEADER_TITLE_FONT_SIZE: 17,

  // --------------------------------------------------------------------------

  // Alignments
  MAIN_HEADER_TITLE_ALIGNMENT: 'center',
  INNER_HEADER_TITLE_ALIGNMENT: 'center',

  // --------------------------------------------------------------------------

  // Icons and Images
  ALERT_DIALOG_INFOMATION_ICON: images.ALERT_DIALOG_INFOMATION_IOS,
  ALERT_DIALOG_EXCLAMATION_ICON: images.ALERT_DIALOG_EXCLAMATION_IOS,

  SPLASH_BACKGROUND_IMAGE: images.SPLASH_BACKGROUND,
  SPLASH_TITLE_IMAGE: images.SPLASH_TITLE,

}

export const Android_Theme = {

  // Common Background Colors
  PRIMARY_BACKGROUND_COLOR: colors.WHITE_COLOR,

  // --------------------------------------------------------------------------

  // Common Font Colors
  MAIN_HEADER_TITLE_FONT_COLOR: colors.TUNDORA,
  INNER_HEADER_TITLE_FONT_COLOR: colors.TUNDORA,

  // --------------------------------------------------------------------------

  // Common Font Types
  MAIN_HEADER_TITLE_FONT_TYPE: fonts.POPPINS_REGULAR,
  INNER_HEADER_TITLE_FONT_TYPE: fonts.POPPINS_REGULAR,

  // --------------------------------------------------------------------------

  // Common Font Sizes
  MAIN_HEADER_TITLE_FONT_SIZE: 17,
  INNER_HEADER_TITLE_FONT_SIZE: 17,

  // --------------------------------------------------------------------------

  // Alignments
  MAIN_HEADER_TITLE_ALIGNMENT: 'center',
  INNER_HEADER_TITLE_ALIGNMENT: 'center',

  // --------------------------------------------------------------------------

  // Icons and Images
  ALERT_DIALOG_INFOMATION_ICON: images.ALERT_DIALOG_INFOMATION_ANDROID,
  ALERT_DIALOG_EXCLAMATION_ICON: images.ALERT_DIALOG_EXCLAMATION_ANDROID,

  SPLASH_BACKGROUND_IMAGE: images.SPLASH_BACKGROUND,
  SPLASH_TITLE_IMAGE: images.SPLASH_TITLE,

}
