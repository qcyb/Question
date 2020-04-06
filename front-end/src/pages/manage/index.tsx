import React, { useState } from 'react';
import styles from './index.less';
import stylesCommon from '@/global.less';
import * as Utility from '@/Utility/utils';
import { NavigationManage } from '@/component/Navigation';
import { Photo } from '@/component/Photo';
import { Link } from 'umi';
const folders = [
  {
    icon: 'http://img.fishstar.xyz/question/file2.png',
    name: '全部问卷',
  },
  {
    icon: 'http://img.fishstar.xyz/question/plane.png',
    name: '未发布',
  },
  {
    icon: 'http://img.fishstar.xyz/question/trash.png',
    name: '回收站',
  },
];

interface folder {
  icon: string;
  name: string;
}

const FunctionBar = () => {
  const [choice, setChoice] = useState(0);
  const coverFolder = (item: folder, key: number) => (
    <div
      className={Utility.styleMerge([
        styles.folder,
        stylesCommon.scFlexRow,
        key == choice ? styles.folderCur : '',
      ])}
      onClick={() => {
        setChoice(key);
      }}
    >
      <div style={{ marginLeft: 20, marginRight: 10 }}>
        <Photo style={{ width: 20, height: 20, url: item.icon }} />
      </div>
      {item.name}
    </div>
  );
  return (
    <div
      className={Utility.styleMerge([
        stylesCommon.scFlexColumn,
        styles.functionList,
      ])}
    >
      <div
        className={Utility.styleMerge([
          stylesCommon.ccFlexColumn,
          styles.addButton,
        ])}
      >
        创建问卷
      </div>
      <div
        className={Utility.styleMerge([
          stylesCommon.ccFlexColumn,
          styles.folders,
        ])}
      >
        {folders.map(coverFolder)}
      </div>
    </div>
  );
};

interface IQuestion {
  questionName: string; //问卷名字
  qid: number; //问卷id
  status: number; //问卷状态：0:未发布，1:运行中，3:停止
  answer: number; //问卷收集量
  time: string; //日期
}

const DataDefault: IQuestion[] = [
  {
    questionName: '2018年第二届浙江大学学生绿之源协会暑期自然体验营报名表',
    qid: 45306891,
    status: 0,
    answer: 0,
    time: '2020-04-06',
  },
  {
    questionName: '2018年第二届浙江大学学生绿之源协会暑期自然体验营报名表',
    qid: 45306891,
    status: 0,
    answer: 0,
    time: '2020-04-06',
  },
  {
    questionName: '2018年第二届浙江大学学生绿之源协会暑期自然体验营报名表',
    qid: 45306891,
    status: 0,
    answer: 0,
    time: '2020-04-06',
  },
  {
    questionName: '2018年第二届浙江大学学生绿之源协会暑期自然体验营报名表',
    qid: 45306891,
    status: 0,
    answer: 0,
    time: '2020-04-06',
  },
  {
    questionName: '2018年第二届浙江大学学生绿之源协会暑期自然体验营报名表',
    qid: 45306891,
    status: 0,
    answer: 0,
    time: '2020-04-06',
  },
  {
    questionName: '2018年第二届浙江大学学生绿之源协会暑期自然体验营报名表',
    qid: 45306891,
    status: 0,
    answer: 0,
    time: '2020-04-06',
  },
  {
    questionName: '2018年第二届浙江大学学生绿之源协会暑期自然体验营报名表',
    qid: 45306891,
    status: 0,
    answer: 0,
    time: '2020-04-06',
  },
];

const QuestionList = () => {
  const [data, setData] = useState(DataDefault);
  const status=["未发布","运行中","已停止"]
  const coverData=(data:IQuestion)=>(
    <div
        className={Utility.styleMerge([
          styles.QuestionListItem,
          stylesCommon.bcFlexColumn,
        ])}
      >
        <div className={Utility.styleMerge([styles.QuestionListItemDetails,stylesCommon.bcFlexRow])}>
          <Link to="" className={styles.QuestionName}>{data.questionName}</Link>
          <div className={stylesCommon.bcFlexRow} style={{width:320,fontSize:12}}>
            <span>
              ID:{data.qid}
            </span>
            <span>
              状态:{status[data.status]}
            </span>
            <span>
              答卷:{data.answer}
            </span>
            <span>
              {data.time}
            </span>
          </div>
        </div>
        <div className={Utility.styleMerge([styles.Buttons,stylesCommon.scFlexRow])}>
          <div className={styles.button}>
            设计问卷
          </div>
          <div className={styles.button}>
            发送问卷
          </div>
          <div className={styles.button}>
            答卷分析
          </div>
        </div>
      </div>
  )
  return (
    <div
      className={Utility.styleMerge([
        styles.QuestionList,
        stylesCommon.scFlexColumn,
      ])}
    >
      {data.map(coverData)}
    </div>
  );
};

export default () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div
      className={Utility.styleMerge([
        styles.managePage,
        stylesCommon.scFlexColumn,
      ])}
    >
      <NavigationManage />
      <div
        className={Utility.styleMerge([
          styles.manageContent,
          stylesCommon.bcFlexRow,
        ])}
      >
        <FunctionBar />
        <QuestionList />
      </div>
    </div>
  );
};
