/**
 * Enum
 * @author - Faizal 
 * @date - 19th June 2024
 */

// NOTIFICATION TYPE
export enum NotificationEnum {
    success = 'success',
    error = 'error',
}

// ASSET TYPE
export enum AssetEnum {
    PROPERTY = 'PROPERTY',
    STOCK = 'STOCK',
    CRYPTO = 'CRYPTO',
    CURRENCY = 'CURRENCY'
}

export enum CryptoCurrencyCodeEnum {
    BITCOIN = 'bitcoin',
    ETHEREUM = 'ethereum',
    BINANCE_COIN = 'binancecoin',
    DOGECOIN = 'dogecoin',
    SOLANA = 'solana',
    CARDANO = 'cardano',
    RIPPLE = 'ripple',
    LITECOIN = 'litecoin',
    CHAINLINK = 'chainlink',
    POLKADOT = 'polkadot'
};

export enum StockCodeEnum {
    AAPL = "AAPL",
    MSFT = "MSFT",
    AMZN = "AMZN",
    GOOGL = "GOOGL",
    FB = "FB",
    TSLA = "TSLA",
    BRK_B = "BRK.B",
    V = "V",
    JNJ = "JNJ",
    NVDA = "NVDA",
    WMT = "WMT",
    PG = "PG",
    INTC = "INTC",
    CSCO = "CSCO",
    NFLX = "NFLX",
    HD = "HD",
    PFE = "PFE",
    KO = "KO",
    ADBE = "ADBE",
    CRM = "CRM"
}

export enum CurrencyCodeEnum {
    USD = "USD",
    AED = "AED",
    AFN = "AFN",
    ALL = "ALL",
    AMD = "AMD",
    ANG = "ANG",
    AOA = "AOA",
    ARS = "ARS",
    AUD = "AUD",
    AWG = "AWG",
    AZN = "AZN",
    BAM = "BAM",
    BBD = "BBD",
    BDT = "BDT",
    BGN = "BGN",
    BHD = "BHD",
    BIF = "BIF",
    BMD = "BMD",
    BND = "BND",
    BOB = "BOB",
    BRL = "BRL",
    BSD = "BSD",
    BTN = "BTN",
    BWP = "BWP",
    BYN = "BYN",
    BZD = "BZD",
    CAD = "CAD",
    CDF = "CDF",
    CHF = "CHF",
    CLP = "CLP",
    CNY = "CNY",
    COP = "COP",
    CRC = "CRC",
    CUP = "CUP",
    CVE = "CVE",
    CZK = "CZK",
    DJF = "DJF",
    DKK = "DKK",
    DOP = "DOP",
    DZD = "DZD",
    EGP = "EGP",
    ERN = "ERN",
    ETB = "ETB",
    EUR = "EUR",
    FJD = "FJD",
    FKP = "FKP",
    FOK = "FOK",
    GBP = "GBP",
    GEL = "GEL",
    GGP = "GGP",
    GHS = "GHS",
    GIP = "GIP",
    GMD = "GMD",
    GNF = "GNF",
    GTQ = "GTQ",
    GYD = "GYD",
    HKD = "HKD",
    HNL = "HNL",
    HRK = "HRK",
    HTG = "HTG",
    HUF = "HUF",
    IDR = "IDR",
    ILS = "ILS",
    IMP = "IMP",
    INR = "INR",
    IQD = "IQD",
    IRR = "IRR",
    ISK = "ISK",
    JEP = "JEP",
    JMD = "JMD",
    JOD = "JOD",
    JPY = "JPY",
    KES = "KES",
    KGS = "KGS",
    KHR = "KHR",
    KID = "KID",
    KMF = "KMF",
    KRW = "KRW",
    KWD = "KWD",
    KYD = "KYD",
    KZT = "KZT",
    LAK = "LAK",
    LBP = "LBP",
    LKR = "LKR",
    LRD = "LRD",
    LSL = "LSL",
    LYD = "LYD",
    MAD = "MAD",
    MDL = "MDL",
    MGA = "MGA",
    MKD = "MKD",
    MMK = "MMK",
    MNT = "MNT",
    MOP = "MOP",
    MRU = "MRU",
    MUR = "MUR",
    MVR = "MVR",
    MWK = "MWK",
    MXN = "MXN",
    MYR = "MYR",
    MZN = "MZN",
    NAD = "NAD",
    NGN = "NGN",
    NIO = "NIO",
    NOK = "NOK",
    NPR = "NPR",
    NZD = "NZD",
    OMR = "OMR",
    PAB = "PAB",
    PEN = "PEN",
    PGK = "PGK",
    PHP = "PHP",
    PKR = "PKR",
    PLN = "PLN",
    PYG = "PYG",
    QAR = "QAR",
    RON = "RON",
    RSD = "RSD",
    RUB = "RUB",
    RWF = "RWF",
    SAR = "SAR",
    SBD = "SBD",
    SCR = "SCR",
    SDG = "SDG",
    SEK = "SEK",
    SGD = "SGD",
    SHP = "SHP",
    SLE = "SLE",
    SLL = "SLL",
    SOS = "SOS",
    SRD = "SRD",
    SSP = "SSP",
    STN = "STN",
    SYP = "SYP",
    SZL = "SZL",
    THB = "THB",
    TJS = "TJS",
    TMT = "TMT",
    TND = "TND",
    TOP = "TOP",
    TRY = "TRY",
    TTD = "TTD",
    TVD = "TVD",
    TWD = "TWD",
    TZS = "TZS",
    UAH = "UAH",
    UGX = "UGX",
    UYU = "UYU",
    UZS = "UZS",
    VES = "VES",
    VND = "VND",
    VUV = "VUV",
    WST = "WST",
    XAF = "XAF",
    XCD = "XCD",
    XDR = "XDR",
    XOF = "XOF",
    XPF = "XPF",
    YER = "YER",
    ZAR = "ZAR",
    ZMW = "ZMW",
    ZWL = "ZWL"
}
  