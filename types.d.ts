interface Params {
    nickname: string
    finance: Finance
    gift_settings: GiftSettings
    gift_stats: GiftStats
}

interface Finance {
    total: Total
    periods: Period[]
}

interface Total {
    sum: number
    donators_count: number
    regular_donators_count: number
}

interface Period {
    earnings: Earnings
    graph: Graph
}

interface Earnings {
    year_sum: number
    six_month_sum: number
    last_month_sum: number
}

interface Graph {
    year: Year
    half_year: HalfYear
    month: Month
}

interface Year {
    January: any
    February: any
    March: any
    April: any
    May: any
    June: any
    July: any
    August: any
    September: any
    October: any
    November: any
    December: any
}

interface HalfYear {
    January: any
    February: any
    March: any
    April: any
    May: any
    June: any
}

interface Month {
    "1": any
    "2": any
    "3": any
    "4": any
    "5": any
    "6": any
    "7": any
    "8": any
    "9": any
    "10": any
    "11": any
    "12": any
    "13": any
    "14": any
    "15": any
    "16": any
    "17": any
    "18": any
    "19": any
    "20": any
    "21": any
    "22": any
    "23": any
    "24": any
    "25": any
    "26": any
    "27": any
    "28": any
    "29": any
    "30": any
    "31": any
}

interface GiftSettings {
    small_gift: any
    medium_gift: any
    big_gift: any
}

interface GiftStats {
    small_gift_count: number
    small_gift_sum: number
    small_medium_count: number
    small_medium_sum: number
    small_big_count: number
    small_big_sum: number
}