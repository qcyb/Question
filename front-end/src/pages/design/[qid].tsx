import React, { useEffect, useState } from 'react';
import styles from './index.less'
import stylesCommon from '@/global.less';
import { StyleUtility, NetworkUtility, ConfUtility } from '@/Utility/utils';
import { IQuestionare, QuestionDefault } from '@/type/IQuestionare'
import Preview from '@/component/Preview';
import Design from '@/component/Design';
import { IStatus } from '@/type/IStatus';

export default (props: any) => {
    const [data, setData] = useState(QuestionDefault)
    const [preview,setPreview]=useState(1);
    useEffect(() => {
        let qid=parseInt(props.match.params.qid);
        NetworkUtility.getQuestion(qid)
        .then((res)=>{
            if(res.status){
                let newData=res.info.data;
                delete newData._id;
                setData(newData)
            }
            else{
                alert("问卷信息不存在");
            }
        })
    }, [])
    const updateData = (data: IQuestionare) => { setData(data) }
    const setPreviewOnOff=()=>{
        let newPreview=(preview+1)%3;
        setPreview(newPreview)
    }
    const handOnQuestion=()=>{
        //TODO:提交问卷
        let qid=parseInt(props.match.params.qid);
        console.log(data);
        NetworkUtility.updateQuestion(qid,data)
        .then(res=>{
            if(res.status){
                alert("提交成功");
            }
            else{
                alert("提交失败");
            }
        })
    }
    return (
        <div className={
            StyleUtility.styleMerge([
                styles.DesignOutSide,
                stylesCommon.ccFlexRow
            ])
        }>
            <div className={
                StyleUtility.styleMerge([
                    styles.halfDiv,
                    stylesCommon.csFlexRow,
                    stylesCommon.nostatic
                ])
            }>
                <Design 
                    data={data} 
                    update={updateData} 
                    setPreviewOnOff={setPreviewOnOff} 
                    handOn={handOnQuestion}
                />
            </div>
            {preview>0 && 
                <div className={
                    StyleUtility.styleMerge([
                        styles.halfDiv,
                        stylesCommon.ccFlexRow
                    ])
                }>
                    <Preview data={data} type={preview}/>
                    
                </div>
            }
            
        </div>
    )
}