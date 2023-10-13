"use client";
import styles from "@/styles/GraphStyle.module.scss";
import {useEffect, useState} from "react";
import {getParams} from "@/app/actions/getParams";
import {Params} from "@/app/Params";
import Image from 'next/image'

export default function GraphPage() {

    const [isOpen, setOpen] = useState(false)
    const [selectedButton, setSelectedButton] = useState("За последний месяц")

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName)
        setOpen(false)
    }

    return (
        <div className={styles.component}>
            <div className={styles.panelGraph}>
                <Image
                    src="/TotalBar.svg"
                    alt="TotalBar"
                    className={styles.total}
                    width={61}
                    height={280}
                    priority
                />
                <div className={styles.ProgBars}>
                    {GetGraph(selectedButton)}
                </div>
            </div>
            <div className={styles.gamburger}>
                <button className={styles.menu_button} onClick={() => setOpen(!isOpen)}>
                    <div className={styles.button_text} id={"ActiveButton"}>{selectedButton}</div>
                    <div className={styles.iconmenu}>
                        <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 15L14 3L2 15" stroke="#000AFF" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                </button>
                <nav className={MenuActive(isOpen)}>
                    <ul className={styles.menu_list}>
                        {isOpen && selectedButton !== "За последний год" && <button className={styles.menu_item} onClick={() => handleButtonClick("За последний год")}>За последний год</button>}
                        {isOpen && selectedButton !== "За последние 6 месяцев" && <button className={styles.menu_item} onClick={() => handleButtonClick("За последние 6 месяцев")}>За последние 6 месяцев</button>}
                        {isOpen && selectedButton !== "За последний месяц" && <button className={styles.menu_item} onClick={() => handleButtonClick("За последний месяц")}>За последний месяц</button>}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

function MenuActive(isOpen:boolean) {
    if(isOpen)
        return styles.menu_active
    else
        return styles.menu
}

function NumberProgActive(isOpen:string,active:string) {
    if(isOpen == active)
        return styles.NumberProg
    else
        return styles.NumberProg_hiden
}

function getArrPeriod(style:string,Array:string[]){

    const [params, setParams] = useState<Roots>();
    const [loading,setLoading] = useState(true);
    const [isOpen, setOpen] = useState("-1")

    useEffect(() => {
        getParams().then(setParams).finally(() => setLoading(false))
    },[]);

    let total: number = 0;

    return(
        <div className={style}>
            {Array.map(Item => (
                <div className={styles.ParentContainer} key={''}>
                    <div className={NumberProgActive(isOpen,Item)}>
                        {loading ? <h3></h3>: <Params params={params} item={Item} graphic={false} period={style}/>}
                    </div>
                    <div onMouseMove={() => setOpen(Item)} onMouseOut={() => setOpen("-1")}>
                        {loading ? <h3></h3>: <Params params={params} item={Item} graphic={true} period={style}/>}
                    </div>
                </div>
            ))}
        </div>
    )
}

function GetGraph(Period:string) {

    if(Period == "За последний месяц"){
        return(
            <div>
                {getArrPeriod(styles.ProgBarMonth,Array.from({length: 31}, (_, i) => (i+1).toString()))}
                <Image
                    src="/UnderMonth.svg"
                    alt="UnderMonth"
                    className={styles.UnderGraph}
                    width={800}
                    height={30}
                    priority
                />
            </div>
        )
    }
    if(Period == "За последний год"){
        return(
            <div>
                {getArrPeriod(styles.ProgBarYear,["January","February","March","April","May","June","July","August","September","October","November","December"])}
                <Image
                    src="/UnderYear.svg"
                    alt="UnderYear"
                    className={styles.UnderGraph}
                    width={800}
                    height={30}
                    priority
                />
            </div>

        )
    }
    if(Period == "За последние 6 месяцев"){
        return(
            <div>
                {getArrPeriod(styles.ProgBarHalfYear,["January","February","March","April","May","June"])}
                <div className={styles.UnderGraph}>
                    <Image
                        src="/UnderHalfYear.svg"
                        alt="UnderHalfYear"
                        className={styles.UnderGraph}
                        width={820}
                        height={30}
                        priority
                    />
                </div>
            </div>
        )
    }
}