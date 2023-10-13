"use client";
import styles from "@/styles/GraphStyle.module.scss";
import {useState} from "react";

function MenuActive(isOpen:boolean) {
    if(isOpen)
        return styles.menu_active
    else
        return styles.menu
}

export default function Burger() {
    const [isOpen, setOpen] = useState(false)
    const [selectedButton, setSelectedButton] = useState("За последний месяц")

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName)
        setOpen(false)
    }

    return (
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
    )
}