import styles from "@/app/graph/styles/GraphStyle.module.scss";

type Props = {
    params: Roots|undefined;
    item:string;
    graphic:boolean;
    period:string;
};
const Params = ({params, item, graphic, period}:Props) => {
    if (params != null){
        let Num = 0;
        if(period == styles.ProgBarMonth){
            params.finance.periods.map((param:Period)=> (Num = param.graph.month[item]))
        }
        if(period == styles.ProgBarYear){
            params.finance.periods.map((param:Period)=> (Num = param.graph.year[item]))
        }
        if(period == styles.ProgBarHalfYear){
            params.finance.periods.map((param:Period)=> (Num = param.graph.half_year[item]))
        }
        if(graphic){
            let Mn = 0;
            if(Num>5000){
                Mn = 23
            }
            else if(Num>2000){
                Mn = 13
            }
            else if(Num>1000){
                Mn = 9
            }
            else{
                Mn = 7
            }
            return(<div className={styles.NumberProgBar} style={{ height: `${Num / Mn}px` }}></div>);
        }
        else{
            return Num;
        }
    }
};
export {Params}