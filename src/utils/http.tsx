import {
  FramesConfig,
  FramesState,
  GatewayBillingAddress,
  TokenizationParams,
} from '../CardScreen/types/types';
import {
  EXPIRY_DATE_DELIMITER,
  LIVE_BASE_URL,
  MBC_LIVE_PUBLIC_KEY_REGEX,
  NAS_LIVE_PUBLIC_KEY_REGEX,
  SANDBOX_BASE_URL,
} from './constants';
import {version} from '../../package.json';

export const getEnvironment = (key: string) =>
  MBC_LIVE_PUBLIC_KEY_REGEX.test(key) || NAS_LIVE_PUBLIC_KEY_REGEX.test(key)
    ? `${LIVE_BASE_URL}/tokens`
    : `${SANDBOX_BASE_URL}/tokens`;

export const tokenize = async (e: TokenizationParams) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(getEnvironment(e.key), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': `frames-react-native/${version}`,
        Authorization: e.key,
      },
      body: JSON.stringify(e.body),
    });

    let json = await response.json();

    if (response.ok) {
      return json;
    } else {
      throw json;
    }
  } catch (error) {
    throw error;
  }
};

export const formatDataForTokenization = (
  state: FramesState,
  config: FramesConfig,
): TokenizationParams => {
  const number = state.cardNumber.replace(/[^A-Z0-9]+/gi, '');
  const expiry_month = state.expiryDate.split(EXPIRY_DATE_DELIMITER)[0];
  const expiry_year = `${new Date().getFullYear().toString().substring(0, 2)}${
    state.expiryDate.split(EXPIRY_DATE_DELIMITER)[1]
  }`;

  let billing_address: GatewayBillingAddress = {
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    zip: '',
    country: undefined,
  };

  if (config.cardholder?.billingAddress?.addressLine1) {
    billing_address.address_line1 =
      config.cardholder.billingAddress.addressLine1;
  }

  if (config.cardholder?.billingAddress?.addressLine2) {
    billing_address.address_line2 =
      config.cardholder.billingAddress.addressLine2;
  }
  if (config.cardholder?.billingAddress) {
    billing_address.city = config.cardholder.billingAddress.city || '';
    billing_address.state = config.cardholder.billingAddress.state || '';
    billing_address.zip = config.cardholder.billingAddress.zip || '';
    billing_address.country = config.cardholder.billingAddress.country;
  } else {
    // @ts-ignore
    billing_address = null;
  }

  return {
    key: config.publicKey,
    body: {
      type: 'card',
      number,
      expiry_month,
      expiry_year,
      cvv: state.cvv,
      name: config.cardholder?.name,
      billing_address,
      phone: {
        number: config.cardholder?.phone,
      },
    },
  };
};
