import {
  ImageSourcePropType,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export type Schemes = {
  Visa: string;
  Mastercard: string;
  'American Express': string;
  Discover: string;
  JCB: string;
  'Diners Club': string;
  Maestro: string;
  Mada: string;
};

export type CardNumberState = {
  value: string;
  icon: any;
  valid: boolean;
};

export type FramesFieldProps = Omit<TextInputProps, 'value' | 'onChangeText'>;

export type FramesCardFieldProps = {
  showIcon?: boolean;
} & FramesFieldProps;

type Validation = {
  cardNumber: boolean;
  expiryDate: boolean;
  cvv: boolean;
  card: boolean;
};

export type FramesState = {
  cardNumber: string;
  cardBin: CardBinChangedEvent;
  cardIcon: ImageSourcePropType;
  cardType: string;
  expiryDate: string;
  cvv: string;
  cvvLength: number;
  validation: Validation;
};

export type FramesDispatch = ({
  type,
  payload,
}: {
  type: string;
  payload: any;
}) => void;

export type FramesBillingAddress = {
  addressLine1?: string;
  addressLine2?: string;
  zip?: string;
  city?: string;
  state?: string;
  country?: string;
};

export type FramesCardholder = {
  name?: string;
  billingAddress?: FramesBillingAddress;
  phone?: string;
};

export type FramesConfig = {
  publicKey: string;
  debug?: boolean;
  cardholder?: FramesCardholder;
};

export type PaymentMethodChangeParams = {
  isValid: boolean;
  paymentMethod: string;
};

export type FrameValidationChangedParams = {
  element: string;
  isValid: boolean;
  isEmpty: boolean;
};

export type FramesProps = {
  style?: StyleProp<ViewStyle>;
  children: any;
  config: FramesConfig;
  frameValidationChanged?: (e: FrameValidationChangedParams) => void;
  paymentMethodChanged?: (e: PaymentMethodChangeParams) => void;
  cardValidationChanged?: (e: FrameCardValidationChangedEvent) => void;
  cardTokenized: (e: FrameCardTokenizedEvent) => void;
  cardTokenizationFailed?: (e: FrameCardTokenizationFailedEvent) => void;
  cardBinChanged?: (e: CardBinChangedEvent) => void;
} & ViewStyle;

export type FrameCardValidationChangedEvent = {
  isValid: boolean;
  isElementValid: ValidationChange;
};

type ValidationChange = {
  cardNumber: boolean;
  expiryDate: boolean;
  cvv: boolean;
};

export type FramesContextType = {
  state: FramesState;
  dispatch: FramesDispatch;
  submitCard: () => void;
};

export type TokenizationParams = {
  key: string;
  body: TokenizationBody;
};

export type TokenizationBody = {
  type: string;
  number: string;
  expiry_month: string;
  expiry_year: string;
  cvv: string;
  name?: string;
  billing_address?: GatewayBillingAddress;
  phone?: Phone;
};

export type Phone = {
  number?: string;
};

export type Scheme =
  | 'Visa'
  | 'Mastercard'
  | 'AMERICAN EXPRESS'
  | 'Diners Club International'
  | 'Maestro'
  | 'Discover'
  | 'Mada';

export type CardType = 'Credit' | 'Debit' | 'Prepaid' | 'Charge';
export type CardCategory = 'Consumer' | 'Commercial';

export type GatewayBillingAddress = {
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
};

export type GatewayPhone = {
  number?: string;
};

export type FrameCardTokenizedEvent = {
  type: string;
  token: string;
  expires_on: string;
  expiry_month: string;
  expiry_year: string;
  scheme?: Scheme;
  last4: string;
  bin: string;
  card_type?: CardType;
  card_category?: CardCategory;
  issuer?: string;
  issuer_country?: string;
  product_id?: string;
  product_type?: string;
  billing_address?: GatewayBillingAddress;
  phone?: GatewayPhone;
  name?: string;
};

export type FrameCardTokenizationFailedEvent = {
  error_codes: Array<string>;
  error_type: string;
  request_id: string;
};

export type CardBinChangedEvent = {
  bin: string;
  scheme: string;
};

export type SubmitButtonProps = {
  title: string;
  textStyle?: TextStyle;
} & TouchableOpacityProps;
