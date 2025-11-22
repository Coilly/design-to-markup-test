import Img from '@/components/Img/Img';
import Tab from '@/components/Tab/Tab';
import Text from '@/components/Text/Text';
import { TabItem } from '@/types/index';
import style from './Section.module.scss';

const mainTabs: TabItem[] = [
  {
    id: '0',
    label: (
      <Text as='p' variant='heading2' className=''>
        title1
      </Text>
    ),
    content: <Img src='image/img_tab_1.png' alt='' />,
  },
  {
    id: '1',
    label: (
      <Text as='p' variant='heading2' className=''>
        title1
      </Text>
    ),
    content: <Img src='image/img_tab_2.png' alt='' />,
  },
  {
    id: '2',
    label: (
      <Text as='p' variant='heading2' className=''>
        title1
      </Text>
    ),
    content: <Img src='image/img_tab_3.png' alt='' />,
  },
];

const SectionTab = () => {
  return (
    <div className={style.section_inner}>
      <div className={style.section_wrap}>
        <div className={style.section_header}>
          <Text as='h2' variant='heading1'>
            테스트용 영상 단락
          </Text>
          <Text as='p' variant='paragraph' className={style.section_subtitle}>
            면접 과제용으로 제작된 샘플 영상 단락입니다.
            <br />
            사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.
          </Text>
        </div>
        <Tab tabs={mainTabs} defaultId='0' variant='underline' />
      </div>
    </div>
  );
};

export default SectionTab;
