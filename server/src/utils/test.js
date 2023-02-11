const krwTokens = [
  {
      market: "KRW-BTC",
      kr_name: "비트코인",
      en_name: "Bitcoin"
  },
  {
      market: "KRW-ETH",
      kr_name: "이더리움",
      en_name: "Ethereum"
  },
  {
      market: "KRW-NEO",
      kr_name: "네오",
      en_name: "NEO"
  },
  {
      market: "KRW-MTL",
      kr_name: "메탈",
      en_name: "Metal"
  },
  {
      market: "KRW-XRP",
      kr_name: "리플",
      en_name: "Ripple"
  },
  {
      market: "KRW-ETC",
      kr_name: "이더리움클래식",
      en_name: "Ethereum_Classic"
  },
  {
      market: "KRW-OMG",
      kr_name: "오미세고",
      en_name: "OmiseGo"
  },
  {
      market: "KRW-SNT",
      kr_name: "스테이터스네트워크토큰",
      en_name: "Status_Network_Token"
  },
  {
      market: "KRW-WAVES",
      kr_name: "웨이브",
      en_name: "Waves"
  },
  {
      market: "KRW-XEM",
      kr_name: "넴",
      en_name: "NEM"
  },
  {
      market: "KRW-QTUM",
      kr_name: "퀀텀",
      en_name: "Qtum"
  },
  {
      market: "KRW-LSK",
      kr_name: "리스크",
      en_name: "Lisk"
  },
  {
      market: "KRW-STEEM",
      kr_name: "스팀",
      en_name: "Steem"
  },
  {
      market: "KRW-XLM",
      kr_name: "스텔라루멘",
      en_name: "Lumen"
  },
  {
      market: "KRW-ARDR",
      kr_name: "아더",
      en_name: "Ardor"
  },
  {
      market: "KRW-ARK",
      kr_name: "아크",
      en_name: "Ark"
  },
  {
      market: "KRW-STORJ",
      kr_name: "스토리지",
      en_name: "Storj"
  },
  {
      market: "KRW-GRS",
      kr_name: "그로스톨코인",
      en_name: "Groestlcoin"
  },
  {
      market: "KRW-REP",
      kr_name: "어거",
      en_name: "Augur"
  },
  {
      market: "KRW-ADA",
      kr_name: "에이다",
      en_name: "Ada"
  },
  {
      market: "KRW-SBD",
      kr_name: "스팀달러",
      en_name: "SteemDollars"
  },
  {
      market: "KRW-POWR",
      kr_name: "파워렛저",
      en_name: "Power_ledger"
  },
  {
      market: "KRW-BTG",
      kr_name: "비트코인골드",
      en_name: "Bitcoin_Gold"
  },
  {
      market: "KRW-ICX",
      kr_name: "아이콘",
      en_name: "Icon"
  },
  {
      market: "KRW-EOS",
      kr_name: "이오스",
      en_name: "EOS"
  },
  {
      market: "USDT-TUSD",
      kr_name: "트루USD",
      en_name: "TrueUSD"
  },
  {
      market: "KRW-TRX",
      kr_name: "트론",
      en_name: "TRON"
  },
  {
      market: "KRW-SC",
      kr_name: "시아코인",
      en_name: "Siacoin"
  },
  {
      market: "KRW-ONT",
      kr_name: "온톨로지",
      en_name: "Ontology"
  },
  {
      market: "KRW-ZIL",
      kr_name: "질리카",
      en_name: "Zilliqa"
  },
  {
      market: "KRW-POLYX",
      kr_name: "폴리매쉬",
      en_name: "Polymesh"
  },
  {
      market: "KRW-ZRX",
      kr_name: "제로엑스",
      en_name: "0x_Protocol"
  },
  {
      market: "KRW-LOOM",
      kr_name: "룸네트워크",
      en_name: "Loom_Network"
  },
  {
      market: "KRW-BCH",
      kr_name: "비트코인캐시",
      en_name: "Bitcoin_Cash"
  },
  {
      market: "KRW-BAT",
      kr_name: "베이직어텐션토큰",
      en_name: "Basic_Attention_Token"
  },
  {
      market: "KRW-IOST",
      kr_name: "아이오에스티",
      en_name: "IOST"
  },
  {
      market: "KRW-RFR",
      kr_name: "리퍼리움",
      en_name: "Refereum"
  },
  {
      market: "KRW-CVC",
      kr_name: "시빅",
      en_name: "Civic"
  },
  {
      market: "KRW-IQ",
      kr_name: "아이큐",
      en_name: "IQ_wiki"
  },
  {
      market: "KRW-IOTA",
      kr_name: "아이오타",
      en_name: "IOTA"
  },
  {
      market: "KRW-HIFI",
      kr_name: "하이파이",
      en_name: "Hifi_Finance"
  },
  {
      market: "KRW-ONG",
      kr_name: "온톨로지가스",
      en_name: "ONG"
  },
  {
      market: "KRW-GAS",
      kr_name: "가스",
      en_name: "GAS"
  },
  {
      market: "KRW-UPP",
      kr_name: "센티넬프로토콜",
      en_name: "Sentinel_Protocol"
  },
  {
      market: "KRW-ELF",
      kr_name: "엘프",
      en_name: "aelf"
  },
  {
      market: "KRW-KNC",
      kr_name: "카이버네트워크",
      en_name: "Kyber_Network"
  },
  {
      market: "KRW-BSV",
      kr_name: "비트코인에스브이",
      en_name: "Bitcoin_SV"
  },
  {
      market: "KRW-THETA",
      kr_name: "쎄타토큰",
      en_name: "Theta_Token"
  },
  {
      market: "KRW-QKC",
      kr_name: "쿼크체인",
      en_name: "QuarkChain"
  },
  {
      market: "KRW-BTT",
      kr_name: "비트토렌트",
      en_name: "BitTorrent"
  },
  {
      market: "KRW-MOC",
      kr_name: "모스코인",
      en_name: "Moss_Coin"
  },
  {
      market: "KRW-ENJ",
      kr_name: "엔진코인",
      en_name: "Enjin"
  },
  {
      market: "KRW-TFUEL",
      kr_name: "쎄타퓨엘",
      en_name: "Theta_Fuel"
  },
  {
      market: "KRW-MANA",
      kr_name: "디센트럴랜드",
      en_name: "Decentraland"
  },
  {
      market: "KRW-ANKR",
      kr_name: "앵커",
      en_name: "Ankr"
  },
  {
      market: "KRW-AERGO",
      kr_name: "아르고",
      en_name: "Aergo"
  },
  {
      market: "KRW-ATOM",
      kr_name: "코스모스",
      en_name: "Cosmos"
  },
  {
      market: "KRW-TT",
      kr_name: "썬더코어",
      en_name: "ThunderCore"
  },
  {
      market: "KRW-CRE",
      kr_name: "캐리프로토콜",
      en_name: "Carry_Protocol"
  },
  {
      market: "KRW-MBL",
      kr_name: "무비블록",
      en_name: "MovieBloc"
  },
  {
      market: "KRW-WAXP",
      kr_name: "왁스",
      en_name: "WAX"
  },
  {
      market: "KRW-HBAR",
      kr_name: "헤데라",
      en_name: "Hedera"
  },
  {
      market: "KRW-MED",
      kr_name: "메디블록",
      en_name: "MediBloc"
  },
  {
      market: "KRW-MLK",
      kr_name: "밀크",
      en_name: "MiL_k"
  },
  {
      market: "KRW-STPT",
      kr_name: "에스티피",
      en_name: "Standard_Tokenization_Protocol"
  },
  {
      market: "KRW-ORBS",
      kr_name: "오브스",
      en_name: "Orbs"
  },
  {
      market: "KRW-VET",
      kr_name: "비체인",
      en_name: "VeChain"
  },
  {
      market: "KRW-CHZ",
      kr_name: "칠리즈",
      en_name: "Chiliz"
  },
  {
      market: "KRW-STMX",
      kr_name: "스톰엑스",
      en_name: "StormX"
  },
  {
      market: "KRW-DKA",
      kr_name: "디카르고",
      en_name: "dKargo"
  },
  {
      market: "KRW-HIVE",
      kr_name: "하이브",
      en_name: "Hive"
  },
  {
      market: "KRW-KAVA",
      kr_name: "카바",
      en_name: "Kava"
  },
  {
      market: "KRW-AHT",
      kr_name: "아하토큰",
      en_name: "AhaToken"
  },
  {
      market: "KRW-LINK",
      kr_name: "체인링크",
      en_name: "Chainlink"
  },
  {
      market: "KRW-XTZ",
      kr_name: "테조스",
      en_name: "Tezos"
  },
  {
      market: "KRW-BORA",
      kr_name: "보라",
      en_name: "BORA"
  },
  {
      market: "KRW-JST",
      kr_name: "저스트",
      en_name: "JUST"
  },
  {
      market: "KRW-CRO",
      kr_name: "크로노스",
      en_name: "Cronos"
  },
  {
      market: "KRW-TON",
      kr_name: "톤",
      en_name: "TON"
  },
  {
      market: "KRW-SXP",
      kr_name: "솔라",
      en_name: "SXP"
  },
  {
      market: "KRW-HUNT",
      kr_name: "헌트",
      en_name: "HUNT"
  },
  {
      market: "KRW-PLA",
      kr_name: "플레이댑",
      en_name: "PlayDapp"
  },
  {
      market: "KRW-DOT",
      kr_name: "폴카닷",
      en_name: "Polkadot"
  },
  {
      market: "KRW-SRM",
      kr_name: "세럼",
      en_name: "Serum"
  },
  {
      market: "KRW-MVL",
      kr_name: "엠블",
      en_name: "MVL"
  },
  {
      market: "KRW-STRAX",
      kr_name: "스트라티스",
      en_name: "Stratis"
  },
  {
      market: "KRW-AQT",
      kr_name: "알파쿼크",
      en_name: "Alpha_Quark_Token"
  },
  {
      market: "KRW-GLM",
      kr_name: "골렘",
      en_name: "Golem"
  },
  {
      market: "KRW-SSX",
      kr_name: "썸씽",
      en_name: "SOMESING"
  },
  {
      market: "KRW-META",
      kr_name: "메타디움",
      en_name: "Metadium"
  },
  {
      market: "KRW-FCT2",
      kr_name: "피르마체인",
      en_name: "FirmaChain"
  },
  {
      market: "KRW-CBK",
      kr_name: "코박토큰",
      en_name: "Cobak_Token"
  },
  {
      market: "KRW-SAND",
      kr_name: "샌드박스",
      en_name: "The_Sandbox"
  },
  {
      market: "KRW-HUM",
      kr_name: "휴먼스케이프",
      en_name: "Humanscape"
  },
  {
      market: "KRW-DOGE",
      kr_name: "도지코인",
      en_name: "Dogecoin"
  },
  {
      market: "KRW-STRK",
      kr_name: "스트라이크",
      en_name: "Strike"
  },
  {
      market: "KRW-PUNDIX",
      kr_name: "펀디엑스",
      en_name: "Pundi_X"
  },
  {
      market: "KRW-FLOW",
      kr_name: "플로우",
      en_name: "Flow"
  },
  {
      market: "KRW-DAWN",
      kr_name: "던프로토콜",
      en_name: "Dawn_Protocol"
  },
  {
      market: "KRW-AXS",
      kr_name: "엑시인피니티",
      en_name: "Axie_Infinity"
  },
  {
      market: "KRW-STX",
      kr_name: "스택스",
      en_name: "Stacks"
  },
  {
      market: "KRW-XEC",
      kr_name: "이캐시",
      en_name: "eCash"
  },
  {
      market: "KRW-SOL",
      kr_name: "솔라나",
      en_name: "Solana"
  },
  {
      market: "KRW-MATIC",
      kr_name: "폴리곤",
      en_name: "Polygon"
  },
  {
      market: "KRW-NU",
      kr_name: "누사이퍼",
      en_name: "Nucypher"
  },
  {
      market: "KRW-AAVE",
      kr_name: "에이브",
      en_name: "Aave"
  },
  {
      market: "KRW-1INCH",
      kr_name: "1인치네트워크",
      en_name: "1inch_Network"
  },
  {
      market: "KRW-ALGO",
      kr_name: "알고랜드",
      en_name: "Algorand"
  },
  {
      market: "KRW-NEAR",
      kr_name: "니어프로토콜",
      en_name: "NEAR_Protocol"
  },
  {
      market: "KRW-AVAX",
      kr_name: "아발란체",
      en_name: "Avalanche"
  },
  {
      market: "KRW-T",
      kr_name: "쓰레스홀드",
      en_name: "Threshold"
  },
  {
      market: "KRW-CELO",
      kr_name: "셀로",
      en_name: "Celo"
  },
  {
      market: "KRW-GMT",
      kr_name: "스테픈",
      en_name: "Stepn"
  },
  {
      market: "KRW-APT",
      kr_name: "앱토스",
      en_name: "Aptos"
  },
  {
      market: "KRW-SHIB",
      kr_name: "시바이누",
      en_name: "Shiba_Inu"
  }
]

for (token of krwTokens) {
  console.log(`create table junbit.${token.en_name.toLowerCase()} (market varchar(10), candle_date_time_utc char(20), candle_date_time_kst char(20), opening_price int unsigned, high_price int unsigned, low_price int unsigned, trade_price int unsigned, timestamp varchar(20), candle_acc_trade_price float, candle_acc_trade_volume float, unit smallint unsigned);`)
}