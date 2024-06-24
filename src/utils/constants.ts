/**
 * Constantd
 * @author - Faizal 
 * @date - 19th June 2024
 */
// UTILS IMPORT
import {AssetEnum, CryptoCurrencyCodeEnum, CurrencyCodeEnum, StockCodeEnum} from './enum';
import type {SelectOptionsType, LoginUser} from './types';

// LOGIN DETAILS
export const LOGIN_USER_DETAILS: LoginUser = {
    username: "admin",
    password: "admin"
}

// PAGINATION ITEM PER PAGE
export const ITEMS_PER_PAGE = 10;

// DEFAULT CURRENCY
export const DEFAULT_CURRENCY: string = 'USD';

// ASET TYPE FOR SELECT TAG
export const AssetTypeOptions: SelectOptionsType[] = [
    {value: AssetEnum.PROPERTY, label: 'Property'},
    {value: AssetEnum.CRYPTO, label: 'Crypto'},
    {value: AssetEnum.STOCK, label: 'Stock'},
    {value: AssetEnum.CURRENCY, label: 'Currency'}
]

// CRYPTO CURRENCY CODE
export const CryptoCodeOptions: SelectOptionsType[] = [
    { value: CryptoCurrencyCodeEnum.BITCOIN, label: 'Bitcoin' },
    { value: CryptoCurrencyCodeEnum.ETHEREUM, label: 'Ethereum' },
    { value: CryptoCurrencyCodeEnum.BINANCE_COIN, label: 'Binance Coin' },
    { value: CryptoCurrencyCodeEnum.DOGECOIN, label: 'Dogecoin' },
    { value: CryptoCurrencyCodeEnum.SOLANA, label: 'Solana' },
    { value: CryptoCurrencyCodeEnum.CARDANO, label: 'Cardano' },
    { value: CryptoCurrencyCodeEnum.RIPPLE, label: 'Ripple' },
    { value: CryptoCurrencyCodeEnum.LITECOIN, label: 'Litecoin' },
    { value: CryptoCurrencyCodeEnum.CHAINLINK, label: 'Chainlink' },
    { value: CryptoCurrencyCodeEnum.POLKADOT, label: 'Polkadot' }
]

// STOCK CODE
export const StockCodeOptions: SelectOptionsType[] = [
    { value: StockCodeEnum.AAPL, label: 'Apple Inc.' },
    { value: StockCodeEnum.MSFT, label: 'Microsoft Corporation' },
    { value: StockCodeEnum.AMZN, label: 'Amazon.com Inc.' },
    { value: StockCodeEnum.GOOGL, label: 'Alphabet Inc. (Google)' },
    { value: StockCodeEnum.FB, label: 'Facebook, Inc.' },
    { value: StockCodeEnum.TSLA, label: 'Tesla, Inc.' },
    { value: StockCodeEnum.BRK_B, label: 'Berkshire Hathaway Inc.' },
    { value: StockCodeEnum.V, label: 'Visa Inc.' },
    { value: StockCodeEnum.JNJ, label: 'Johnson & Johnson' },
    { value: StockCodeEnum.NVDA, label: 'NVIDIA Corporation' },
    { value: StockCodeEnum.WMT, label: 'Walmart Inc.' },
    { value: StockCodeEnum.PG, label: 'Procter & Gamble Co.' },
    { value: StockCodeEnum.INTC, label: 'Intel Corporation' },
    { value: StockCodeEnum.CSCO, label: 'Cisco Systems, Inc.' },
    { value: StockCodeEnum.NFLX, label: 'Netflix, Inc.' },
    { value: StockCodeEnum.HD, label: 'The Home Depot, Inc.' },
    { value: StockCodeEnum.PFE, label: 'Pfizer Inc.' },
    { value: StockCodeEnum.KO, label: 'The Coca-Cola Company' },
    { value: StockCodeEnum.ADBE, label: 'Adobe Inc.' },
    { value: StockCodeEnum.CRM, label: 'Salesforce.com, Inc.' }
];

// ALL CURRENCY CODE
export const CurrencyOptions: SelectOptionsType[] = [
    { value: CurrencyCodeEnum.USD, label: 'USD - US Dollar' },
    { value: CurrencyCodeEnum.AED, label: 'AED - United Arab Emirates Dirham' },
    { value: CurrencyCodeEnum.AFN, label: 'AFN - Afghan Afghani' },
    { value: CurrencyCodeEnum.ALL, label: 'ALL - Albanian Lek' },
    { value: CurrencyCodeEnum.AMD, label: 'AMD - Armenian Dram' },
    { value: CurrencyCodeEnum.ANG, label: 'ANG - Netherlands Antillean Guilder' },
    { value: CurrencyCodeEnum.AOA, label: 'AOA - Angolan Kwanza' },
    { value: CurrencyCodeEnum.ARS, label: 'ARS - Argentine Peso' },
    { value: CurrencyCodeEnum.AUD, label: 'AUD - Australian Dollar' },
    { value: CurrencyCodeEnum.AWG, label: 'AWG - Aruban Florin' },
    { value: CurrencyCodeEnum.AZN, label: 'AZN - Azerbaijani Manat' },
    { value: CurrencyCodeEnum.BAM, label: 'BAM - Bosnia-Herzegovina Convertible Mark' },
    { value: CurrencyCodeEnum.BBD, label: 'BBD - Barbadian Dollar' },
    { value: CurrencyCodeEnum.BDT, label: 'BDT - Bangladeshi Taka' },
    { value: CurrencyCodeEnum.BGN, label: 'BGN - Bulgarian Lev' },
    { value: CurrencyCodeEnum.BHD, label: 'BHD - Bahraini Dinar' },
    { value: CurrencyCodeEnum.BIF, label: 'BIF - Burundian Franc' },
    { value: CurrencyCodeEnum.BMD, label: 'BMD - Bermudian Dollar' },
    { value: CurrencyCodeEnum.BND, label: 'BND - Brunei Dollar' },
    { value: CurrencyCodeEnum.BOB, label: 'BOB - Bolivian Boliviano' },
    { value: CurrencyCodeEnum.BRL, label: 'BRL - Brazilian Real' },
    { value: CurrencyCodeEnum.BSD, label: 'BSD - Bahamian Dollar' },
    { value: CurrencyCodeEnum.BTN, label: 'BTN - Bhutanese Ngultrum' },
    { value: CurrencyCodeEnum.BWP, label: 'BWP - Botswanan Pula' },
    { value: CurrencyCodeEnum.BYN, label: 'BYN - Belarusian Ruble' },
    { value: CurrencyCodeEnum.BZD, label: 'BZD - Belize Dollar' },
    { value: CurrencyCodeEnum.CAD, label: 'CAD - Canadian Dollar' },
    { value: CurrencyCodeEnum.CDF, label: 'CDF - Congolese Franc' },
    { value: CurrencyCodeEnum.CHF, label: 'CHF - Swiss Franc' },
    { value: CurrencyCodeEnum.CLP, label: 'CLP - Chilean Peso' },
    { value: CurrencyCodeEnum.CNY, label: 'CNY - Chinese Yuan' },
    { value: CurrencyCodeEnum.COP, label: 'COP - Colombian Peso' },
    { value: CurrencyCodeEnum.CRC, label: 'CRC - Costa Rican Colón' },
    { value: CurrencyCodeEnum.CUP, label: 'CUP - Cuban Peso' },
    { value: CurrencyCodeEnum.CVE, label: 'CVE - Cape Verdean Escudo' },
    { value: CurrencyCodeEnum.CZK, label: 'CZK - Czech Republic Koruna' },
    { value: CurrencyCodeEnum.DJF, label: 'DJF - Djiboutian Franc' },
    { value: CurrencyCodeEnum.DKK, label: 'DKK - Danish Krone' },
    { value: CurrencyCodeEnum.DOP, label: 'DOP - Dominican Peso' },
    { value: CurrencyCodeEnum.DZD, label: 'DZD - Algerian Dinar' },
    { value: CurrencyCodeEnum.EGP, label: 'EGP - Egyptian Pound' },
    { value: CurrencyCodeEnum.ERN, label: 'ERN - Eritrean Nakfa' },
    { value: CurrencyCodeEnum.ETB, label: 'ETB - Ethiopian Birr' },
    { value: CurrencyCodeEnum.EUR, label: 'EUR - Euro' },
    { value: CurrencyCodeEnum.FJD, label: 'FJD - Fijian Dollar' },
    { value: CurrencyCodeEnum.FKP, label: 'FKP - Falkland Islands Pound' },
    { value: CurrencyCodeEnum.FOK, label: 'FOK - Faroese Króna' },
    { value: CurrencyCodeEnum.GBP, label: 'GBP - British Pound Sterling' },
    { value: CurrencyCodeEnum.GEL, label: 'GEL - Georgian Lari' },
    { value: CurrencyCodeEnum.GGP, label: 'GGP - Guernsey Pound' },
    { value: CurrencyCodeEnum.GHS, label: 'GHS - Ghanaian Cedi' },
    { value: CurrencyCodeEnum.GIP, label: 'GIP - Gibraltar Pound' },
    { value: CurrencyCodeEnum.GMD, label: 'GMD - Gambian Dalasi' },
    { value: CurrencyCodeEnum.GNF, label: 'GNF - Guinean Franc' },
    { value: CurrencyCodeEnum.GTQ, label: 'GTQ - Guatemalan Quetzal' },
    { value: CurrencyCodeEnum.GYD, label: 'GYD - Guyanaese Dollar' },
    { value: CurrencyCodeEnum.HKD, label: 'HKD - Hong Kong Dollar' },
    { value: CurrencyCodeEnum.HNL, label: 'HNL - Honduran Lempira' },
    { value: CurrencyCodeEnum.HRK, label: 'HRK - Croatian Kuna' },
    { value: CurrencyCodeEnum.HTG, label: 'HTG - Haitian Gourde' },
    { value: CurrencyCodeEnum.HUF, label: 'HUF - Hungarian Forint' },
    { value: CurrencyCodeEnum.IDR, label: 'IDR - Indonesian Rupiah' },
    { value: CurrencyCodeEnum.ILS, label: 'ILS - Israeli New Sheqel' },
    { value: CurrencyCodeEnum.IMP, label: 'IMP - Isle of Man Pound' },
    { value: CurrencyCodeEnum.INR, label: 'INR - Indian Rupee' },
    { value: CurrencyCodeEnum.IQD, label: 'IQD - Iraqi Dinar' },
    { value: CurrencyCodeEnum.IRR, label: 'IRR - Iranian Rial' },
    { value: CurrencyCodeEnum.ISK, label: 'ISK - Icelandic Króna' },
    { value: CurrencyCodeEnum.JEP, label: 'JEP - Jersey Pound' },
    { value: CurrencyCodeEnum.JMD, label: 'JMD - Jamaican Dollar' },
    { value: CurrencyCodeEnum.JOD, label: 'JOD - Jordanian Dinar' },
    { value: CurrencyCodeEnum.JPY, label: 'JPY - Japanese Yen' },
    { value: CurrencyCodeEnum.KES, label: 'KES - Kenyan Shilling' },
    { value: CurrencyCodeEnum.KGS, label: 'KGS - Kyrgystani Som' },
    { value: CurrencyCodeEnum.KHR, label: 'KHR - Cambodian Riel' },
    { value: CurrencyCodeEnum.KID, label: 'KID - Kiribati Dollar' },
    { value: CurrencyCodeEnum.KMF, label: 'KMF - Comorian Franc' },
    { value: CurrencyCodeEnum.KRW, label: 'KRW - South Korean Won' },
    { value: CurrencyCodeEnum.KWD, label: 'KWD - Kuwaiti Dinar' },
    { value: CurrencyCodeEnum.KYD, label: 'KYD - Cayman Islands Dollar' },
    { value: CurrencyCodeEnum.KZT, label: 'KZT - Kazakhstani Tenge' },
    { value: CurrencyCodeEnum.LAK, label: 'LAK - Laotian Kip' },
    { value: CurrencyCodeEnum.LBP, label: 'LBP - Lebanese Pound' },
    { value: CurrencyCodeEnum.LKR, label: 'LKR - Sri Lankan Rupee' },
    { value: CurrencyCodeEnum.LRD, label: 'LRD - Liberian Dollar' },
    { value: CurrencyCodeEnum.LSL, label: 'LSL - Lesotho Loti' },
    { value: CurrencyCodeEnum.LYD, label: 'LYD - Libyan Dinar' },
    { value: CurrencyCodeEnum.MAD, label: 'MAD - Moroccan Dirham' },
    { value: CurrencyCodeEnum.MDL, label: 'MDL - Moldovan Leu' },
    { value: CurrencyCodeEnum.MGA, label: 'MGA - Malagasy Ariary' },
    { value: CurrencyCodeEnum.MKD, label: 'MKD - Macedonian Denar' },
    { value: CurrencyCodeEnum.MMK, label: 'MMK - Myanma Kyat' },
    { value: CurrencyCodeEnum.MNT, label: 'MNT - Mongolian Tugrik' },
    { value: CurrencyCodeEnum.MOP, label: 'MOP - Macanese Pataca' },
    { value: CurrencyCodeEnum.MRU, label: 'MRU - Mauritanian Ouguiya' },
    { value: CurrencyCodeEnum.MUR, label: 'MUR - Mauritian Rupee' },
    { value: CurrencyCodeEnum.MVR, label: 'MVR - Maldivian Rufiyaa' },
    { value: CurrencyCodeEnum.MWK, label: 'MWK - Malawian Kwacha' },
    { value: CurrencyCodeEnum.MXN, label: 'MXN - Mexican Peso' },
    { value: CurrencyCodeEnum.MYR, label: 'MYR - Malaysian Ringgit' },
    { value: CurrencyCodeEnum.MZN, label: 'MZN - Mozambican Metical' },
    { value: CurrencyCodeEnum.NAD, label: 'NAD - Namibian Dollar' },
    { value: CurrencyCodeEnum.NGN, label: 'NGN - Nigerian Naira' },
    { value: CurrencyCodeEnum.NIO, label: 'NIO - Nicaraguan Córdoba' },
    { value: CurrencyCodeEnum.NOK, label: 'NOK - Norwegian Krone' },
    { value: CurrencyCodeEnum.NPR, label: 'NPR - Nepalese Rupee' },
    { value: CurrencyCodeEnum.NZD, label: 'NZD - New Zealand Dollar' },
    { value: CurrencyCodeEnum.OMR, label: 'OMR - Omani Rial' },
    { value: CurrencyCodeEnum.PAB, label: 'PAB - Panamanian Balboa' },
    { value: CurrencyCodeEnum.PEN, label: 'PEN - Peruvian Nuevo Sol' },
    { value: CurrencyCodeEnum.PGK, label: 'PGK - Papua New Guinean Kina' },
    { value: CurrencyCodeEnum.PHP, label: 'PHP - Philippine Peso' },
    { value: CurrencyCodeEnum.PKR, label: 'PKR - Pakistani Rupee' },
    { value: CurrencyCodeEnum.PLN, label: 'PLN - Polish Zloty' },
    { value: CurrencyCodeEnum.PYG, label: 'PYG - Paraguayan Guarani' },
    { value: CurrencyCodeEnum.QAR, label: 'QAR - Qatari Rial' },
    { value: CurrencyCodeEnum.RON, label: 'RON - Romanian Leu' },
    { value: CurrencyCodeEnum.RSD, label: 'RSD - Serbian Dinar' },
    { value: CurrencyCodeEnum.RUB, label: 'RUB - Russian Ruble' },
    { value: CurrencyCodeEnum.RWF, label: 'RWF - Rwandan Franc' },
    { value: CurrencyCodeEnum.SAR, label: 'SAR - Saudi Riyal' },
    { value: CurrencyCodeEnum.SBD, label: 'SBD - Solomon Islands Dollar' },
    { value: CurrencyCodeEnum.SCR, label: 'SCR - Seychellois Rupee' },
    { value: CurrencyCodeEnum.SDG, label: 'SDG - Sudanese Pound' },
    { value: CurrencyCodeEnum.SEK, label: 'SEK - Swedish Krona' },
    { value: CurrencyCodeEnum.SGD, label: 'SGD - Singapore Dollar' },
    { value: CurrencyCodeEnum.SHP, label: 'SHP - Saint Helena Pound' },
    { value: CurrencyCodeEnum.SLE, label: 'SLE - Sierra Leonean Leone' },
    { value: CurrencyCodeEnum.SLL, label: 'SLL - Sierra Leonean Leone' },
    { value: CurrencyCodeEnum.SOS, label: 'SOS - Somali Shilling' },
    { value: CurrencyCodeEnum.SRD, label: 'SRD - Surinamese Dollar' },
    { value: CurrencyCodeEnum.SSP, label: 'SSP - South Sudanese Pound' },
    { value: CurrencyCodeEnum.STN, label: 'STN - São Tomé and Príncipe Dobra' },
    { value: CurrencyCodeEnum.SYP, label: 'SYP - Syrian Pound' },
    { value: CurrencyCodeEnum.SZL, label: 'SZL - Swazi Lilangeni' },
    { value: CurrencyCodeEnum.THB, label: 'THB - Thai Baht' },
    { value: CurrencyCodeEnum.TJS, label: 'TJS - Tajikistani Somoni' },
    { value: CurrencyCodeEnum.TMT, label: 'TMT - Turkmenistani Manat' },
    { value: CurrencyCodeEnum.TND, label: 'TND - Tunisian Dinar' },
    { value: CurrencyCodeEnum.TOP, label: 'TOP - Tongan Paʻanga' },
    { value: CurrencyCodeEnum.TRY, label: 'TRY - Turkish Lira' },
    { value: CurrencyCodeEnum.TTD, label: 'TTD - Trinidad and Tobago Dollar' },
    { value: CurrencyCodeEnum.TVD, label: 'TVD - Tuvaluan Dollar' },
    { value: CurrencyCodeEnum.TWD, label: 'TWD - New Taiwan Dollar' },
    { value: CurrencyCodeEnum.TZS, label: 'TZS - Tanzanian Shilling' },
    { value: CurrencyCodeEnum.UAH, label: 'UAH - Ukrainian Hryvnia' },
    { value: CurrencyCodeEnum.UGX, label: 'UGX - Ugandan Shilling' },
    { value: CurrencyCodeEnum.UYU, label: 'UYU - Uruguayan Peso' },
    { value: CurrencyCodeEnum.UZS, label: 'UZS - Uzbekistan Som' },
    { value: CurrencyCodeEnum.VES, label: 'VES - Venezuelan Bolívar Soberano' },
    { value: CurrencyCodeEnum.VND, label: 'VND - Vietnamese Dong' },
    { value: CurrencyCodeEnum.VUV, label: 'VUV - Vanuatu Vatu' },
    { value: CurrencyCodeEnum.WST, label: 'WST - Samoan Tala' },
    { value: CurrencyCodeEnum.XAF, label: 'XAF - Central African CFA Franc' },
    { value: CurrencyCodeEnum.XCD, label: 'XCD - East Caribbean Dollar' },
    { value: CurrencyCodeEnum.XDR, label: 'XDR - Special Drawing Rights' },
    { value: CurrencyCodeEnum.XOF, label: 'XOF - West African CFA Franc' },
    { value: CurrencyCodeEnum.XPF, label: 'XPF - CFP Franc' },
    { value: CurrencyCodeEnum.YER, label: 'YER - Yemeni Rial' },
    { value: CurrencyCodeEnum.ZAR, label: 'ZAR - South African Rand' },
    { value: CurrencyCodeEnum.ZMW, label: 'ZMW - Zambian Kwacha' },
    { value: CurrencyCodeEnum.ZWL, label: 'ZWL - Zimbabwean Dollar' }
  ];