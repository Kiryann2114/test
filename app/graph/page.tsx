import styles from "@/styles/GraphStyle.module.css";
import {getParams} from "@/app/actions/getParams";
import Burger from "@/app/graph/Burgermenu";
import {any} from "prop-types";

export default async function GraphPage() {

    const AllParams = await getParams()

    // @ts-ignore
    return (
        <div className={styles.component}>
            <div className={styles.panelGraph}>
                <div className={styles.total}>
                    <div>10000</div>
                    <div>5000</div>
                    <div>2000</div>
                    <div>1000</div>
                    <div>500</div>
                    <div>0</div>
                </div>
                <div className={styles.ProgBars}>
                    <div className={styles.ProgBar}>

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(month => (
                            <div className={styles.NumberProgBar}>
                                <div className={styles.NumberProg}>
                                    {AllParams.finance.periods.map(period => (
                                        <p className={styles.baqua}>{period.graph.month[month.toString()]}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Burger/>
        </div>
    )
}
