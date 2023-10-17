import styles from "@/styles/GraphStyle.module.scss";

type Props = {
    params: Roots|undefined;
    arr:string[];
    item:string;
    graphic:boolean;
    leftgraph:boolean;
    period:string;
};

const Params = ({params, arr, item, graphic, leftgraph, period}:Props) => {
    if (params != null){
        let Num = 0;
        let ArrNum = new Array<number>();
        if(period == styles.ProgBarMonth){
            arr.map(i => {
                params.finance.periods.map((param:Period)=> (ArrNum.push(param.graph.month[i])))
            })
            params.finance.periods.map((param:Period)=> (Num = param.graph.month[item]))
        }
        if(period == styles.ProgBarYear){
            arr.map(i => {
                params.finance.periods.map((param:Period)=> (ArrNum.push(param.graph.year[i])))
            })
            params.finance.periods.map((param:Period)=> (Num = param.graph.year[item]))
        }
        if(period == styles.ProgBarHalfYear){
            arr.map(i => {
                params.finance.periods.map((param:Period)=> (ArrNum.push(param.graph.half_year[i])))
            })
            params.finance.periods.map((param:Period)=> (Num = param.graph.half_year[item]))
        }
        let MaxNum = Math.max(...ArrNum);
        if(MaxNum % 1000 > 0){
            MaxNum = Math.floor(MaxNum/1000+1)*1000
        }

        if(leftgraph){
            return (
                <div className={styles.total}>
                    <div>{MaxNum}</div>
                    <div>{Math.round(MaxNum/2)}</div>
                    <div>{Math.round(MaxNum/4)}</div>
                    <div>{Math.round(MaxNum/8)}</div>
                    <div>{Math.round(MaxNum/16)}</div>
                    <div>0</div>
                </div>
            )
        }
        else{
            if(graphic){
                let Mn;
                if(Num>Math.round(MaxNum/2)){
                    Mn = (Num-Math.round(MaxNum/2))/((Math.round(MaxNum)-Math.round(MaxNum/2))/100)*0.51 + 204
                }
                else if(Num>Math.round(MaxNum/4)){
                    Mn = (Num-Math.round(MaxNum/4))/((Math.round(MaxNum/2)-Math.round(MaxNum/4))/100)*0.51 + 153
                }
                else if(Num>Math.round(MaxNum/8)){
                    Mn = (Num-Math.round(MaxNum/8))/((Math.round(MaxNum/4)-Math.round(MaxNum/8))/100)*0.51 + 102
                }
                else if(Num>Math.round(MaxNum/16)){
                    Mn = (Num-Math.round(MaxNum/16))/((Math.round(MaxNum/8)-Math.round(MaxNum/16))/100)*0.51 + 51
                }
                else{
                    Mn = Num/(Math.round(MaxNum/16)/100)*0.51
                }
                return(<div className={styles.NumberProgBar} style={{ height: `${Mn}px` }}></div>);
            }
            else{
                return Num;
            }
        }
    }
};
export {Params}