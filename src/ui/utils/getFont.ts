type GetFontFunction = (props: {languageCode: string; isRtl: boolean}) => {
  regular: string;
  bold: string;
  medium: string;
  semiBold: string;
  regular1?: string;
  italic?: string;
  interMedium?: string;
};

export const getFont: GetFontFunction = props => {
  const {languageCode} = props;
  if (languageCode === 'ru') {
    return {
      regular: 'Inter-Regular',
      bold: 'Inter-Bold',
      medium: 'Inter-Medium',
      semiBold: 'Inter-SemiBold',
      regular1: 'Inter-Regular',
      italic: 'Inter-Italic',
    };
  }

  return {
    regular: 'URWGeometricArabic-Regular',
    bold: 'URWGeometricArabic-Bold',
    medium: 'URWGeometricArabic-Medium',
    semiBold: 'URWGeometricArabic-SemiBold',
    interMedium: 'Inter-Medium',
    regular1: 'Inter-Regular',
    italic: 'Inter-Italic',
  };
};
